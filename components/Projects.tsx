import React from 'react'
import projects from '../data/projects.json';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="center-align fade-in">
        <h2 className="h2 fade-in">My Projects</h2>
        <div className="grid grid-cols-2 gap-4 h-full fade-in">
            {projects.map(projects => (
                <div key={projects.id} className="flex flex-col items-center p-2 mt-2 text-center scaleProject">
                    <iframe className="w-full h-[315px] rounded-[10px] aspect-video" src={projects.videoUrl} title={projects.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <span className="title">{projects.title}</span>
                    <div className='min-h-[300px]'>
                      <p className="text-center">{projects.description}</p>
                    </div>
                    {/* <div className='w-full p-2 mt-auto flex flex-row gap-6 text-center items-center'> */}
                    <div className='w-full p-2 mt-auto grid grid-cols-2 gap-6 text-center items-center'>
                      {projects.GitHub?<span className='mt-2 w-2'><a href={projects.GitHub} target="_blank" rel="noopener noreferrer"> <FaGithub size={60} /></a></span>:''}
                      {projects.Link?<button className="mt-2 text-2xl border-corners hover:cursor-pointer hover:bg-[#e0e1dd] transition-colors duration-400"><a href={projects.Link} target="_blank" rel="noopener noreferrer">Click to try</a></button>:''}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
