import React from 'react'
import skills from '../data/skills.json';


const Skills = () => {
  return (
    <div className="center-align fade-in">
      <h2 className="h2 fade-in">My Skills</h2>
      <div className="flex flex-wrap gap-[1.5rem] pt-5 fade-in">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in">
            {skills.map(skill => (
                <div key={skill.id} className="flex flex-col items-center p-4 justify-center scaleSkills">
                <i className={skill.icon + " text-4xl py-2"}></i>
                <span className="font-semibold text-center">{skill.title}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
