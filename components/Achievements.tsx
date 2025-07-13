import React from 'react'
import achievement from '../data/achievements.json';
import Image from 'next/image';

const Achievements = () => {
  return (
    <div className="center-align fade-in">
        <h2 className="h2">My Achievements</h2>
        <div className="grid grid-cols-2 gap-4 h-full">
            {achievement.map(achievement => (
                <div key={achievement.id} className="flex flex-col items-center p-2 mt-2 text-center scaleAchievements">
                    <Image src={achievement.image} alt="Achievement" width={400} height={250} className="w-full max-w-[400px] h-auto rounded-[20px] block mb-4"/>
                    <span className="title">{achievement.title}</span>
                    <p>{achievement.description}</p>
                </div>
            ))}
        </div>     
    </div> 
  )
}

export default Achievements
