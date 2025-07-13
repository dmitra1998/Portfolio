import React from 'react'
import projects from '../data/projects.json';

const Projects = () => {
  return (
    <div className="center-align fade-in">
        <h2 className="h2 fade-in">My Projects</h2>
        <div className="grid grid-cols-2 gap-4 h-full fade-in">
            {projects.map(projects => (
                <div key={projects.id} className="flex flex-col items-center p-2 mt-2 text-center scaleProject">
                    <iframe className="w-full h-[315px] rounded-[10px] aspect-video" src={projects.videoUrl} title={projects.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <span className="title">{projects.title}</span>
                    <div><p className="text-center">{projects.description}</p></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
