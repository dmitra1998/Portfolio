import { useState } from "react";
import ReviewForm from "./Forms/reviewForm"
import ReviewComp from "./Reviews/ReviewComp";

const Review = () => {
    const [viewButton, setViewButton] = useState<boolean>(false);
  return (
    <div className="center-align fade-in">
        <h2 className="h2">Professional Endorsements</h2>
        <div>
          <ReviewComp viewButton={viewButton}/>
        </div>
        <div className="flex justify-end gap-2 my-10 items-center">
            <div>
              <span>You know this person?</span>
            </div>
            <div>
              <button 
                onClick={() => {setViewButton(!viewButton)}} 
                className="border-corners justify-end hover:cursor-pointer hover:bg-[#e0e1dd] transition-colors duration-400">
                  Share Your Opinion of Him
                </button>
            </div>
        </div>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            viewButton ? 'max-h-[1000px]' : 'max-h-0'
            }`}>
            <ReviewForm setViewButton={setViewButton}/>
        </div>
      
    </div>
  )
}

export default Review
