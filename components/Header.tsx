import React from 'react'
import Image from 'next/image'
import bios from '../data/bio.json'

const Header = () => {
  return (
    <header>
      <div className="bg-[#0d1b2a] text-white py-4 px-8 text-center"></div>
        <div className="py-[80px] px-[40px] text-[1.6em] flex justify-center items-center bg-[#e0e1dd] fade-in">
        <div className="flex flex-wrap max-w-[1060px] items-center">
          <div className="flex-shrink-0 w-auto text-center fade-in">
            <Image
              src="/img/Profile_Picture.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="w-[200px] rounded-full border-[4px] border-[#1b263b]"
            />
          </div>
          <div className="flex-[2] p-4 text-[1.3rem] fade-in">
            <h2 className="h2">Hello, I&apos;m Dhritabrata!</h2>
            <div className="flex">
              {bios.map(bio => (
                  <div key={bio.id} className="scaleButtons">
                      <a href={bio.url} target="_blank" className="btn scaleButtons">{bio.label}</a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
