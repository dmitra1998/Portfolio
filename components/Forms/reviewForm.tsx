'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Replace with your values
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type ReviewFormProps = {
  setViewButton: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReviewForm = ({setViewButton}: ReviewFormProps) => {
  const [file, setFile] = useState<File | null>(null);
  // const [imgURL, setImgURL] = useState<string | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const [name, setName] = useState<string>('');
  const [review, setReview] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return;

    setUploading(true);
    const fileName = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(`public/${fileName}`, file);
    console.log("data = ", data);

    if (error) {
      alert('Upload error: ' + error.message);
    } else {
      const { data: urlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(data.path);

      //alert('Image uploaded successfully!');
      console.log('Image URL:', urlData.publicUrl);
      //setImgURL(urlData.publicUrl);
      //console.log('imgURL = ', imgURL);
      SubmitForm(urlData.publicUrl);
    }
    setUploading(false);
  };

  const SubmitForm = async (imgURL: string) => {

    if (!name || !review) {
      alert('Please fill in all fields.');
      return;
    }
    
    const { data, error } = await supabase
      .from('Reviews')
      .insert([{ name, imgURL, review }])
    
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
    }
    setName('');
    setReview('');  
    setFile(null);
    setPreviewURL(null);
    setViewButton(false);
  }

  return (
      <form className="center-align grid grid-cols-[1fr_2fr] gap-2 mb-7 border-corners h-120" onSubmit={handleSubmit}>
        <div className='gap-2 flex flex-col'>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0] || null;
              setFile(selectedFile);
              setPreviewURL(selectedFile ? URL.createObjectURL(selectedFile) : null);
            }}
            className='hidden'
          />
          <div className='h-full w-full border-corners flex items-center justify-center text-2xl'>{previewURL ? <img src={previewURL} alt="Uploaded" height={200} width={200}/>:<span className='text-gray-400'>Image Preview</span>}</div>
          <div className='flex flex-row gap-2 justify-center text-2xl'>
            <label htmlFor="file-upload" className='border-corners hover:cursor-pointer text-center hover:bg-[#e0e1dd] transition-colors duration-400'>
              {previewURL ? 'Click to choose another image' : 'Choose an image to upload'}
            </label>
            {/* <button disabled={uploading} className='border-corners text-center hover:cursor-pointer hover:bg-[#e0e1dd] transition-colors duration-400 p-2 w-[50%]'>
              {uploading ? 'Uploading...' : 'Upload your image'}
            </button> */}
          </div>
        </div>
        <div className='flex flex-col gap-2 text-2xl'>
          <input
            type="text"
            placeholder="Enter your name"
            className="border-corners"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Enter your review"
            className="border-corners h-75"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button type="submit" className="border-corners hover:cursor-pointer hover:bg-[#e0e1dd] transition-colors duration-400">
            Submit Your Opinion
          </button>
        </div>
      </form>
  );
}

export default ReviewForm;