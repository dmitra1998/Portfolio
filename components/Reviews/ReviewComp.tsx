import { createClient } from '@supabase/supabase-js';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type ReviewItem = {
  id: number;
  name: string;
  imgURL: string;
  review: string;
};

type ReviewCompProps = {
  viewButton: boolean;
};

const ReviewComp = ({viewButton}: ReviewCompProps) => {
  const [list, setList] = useState<ReviewItem[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase.from('Reviews').select('*');
      if (error) console.error(error.message);
      else setList(data);
    };
    if (!viewButton) fetchReviews();
  }, [viewButton]);

  // ✅ Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, []);

  // ✅ Auto-scroll every 5s if visible and not hovered
  useEffect(() => {
    if (!containerRef.current || list.length === 0) return;

    let index = 0;

    const scrollToCard = () => {
      const card = cardRefs.current[index];
      if (card && containerRef.current) {
        card.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
      }
      index = (index + 1) % list.length;
    };

    const intervalId: NodeJS.Timeout = setInterval(() => {
      if (!isHovered && isVisible) scrollToCard();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [list, isHovered, isVisible]);

  return (
    <div
      className="flex h-60 w-full overflow-hidden relative mt-5"
      ref={el => {
        containerRef.current = el;
        observerRef.current = el; // assign to both refs
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {list.map((data, i) => (
        <div
          key={data.id}
          ref={el => {cardRefs.current[i] = el}}
          className="flex flex-row gap-4 h-full w-full flex-shrink-0 justify-center px-6"
        >
          <div className="w-[15%] mt-3">
            <Image
              src={data.imgURL}
              alt="profileImage"
              className="profile-picture-style"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-2 p-3 w-[85%]">
            <span className="w-full p-1 font-semibold">{data.name}</span>
            <div className="h-32 w-full p-1 overflow-y-auto break-words whitespace-normal">
              <span className="text-gray-400">{data.review}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewComp;
