import React from 'react'

const About = () => {
  return (
    <div className="center-align fade-in">
                <h2 className="h2 fade-in">About Me</h2>
                <p className="pt-5 fade-in">
                  I’m a Software Engineer focused on building scalable backend, distributed, and AI-powered systems. I have 3+ years of experience working with Java, Spring Boot, Kafka, AWS, Kubernetes, React, and modern cloud-native technologies. At Cognizant, I worked on large-scale production systems, including a Spring Boot microservice supporting 90M+ users with 99.95% uptime and distributed Kafka pipelines where I improved latency and reliability through idempotency, retries, and deduplication.
                </p>
                <br />
                <br />
                <p className="pt-5 fade-in">
                  Beyond enterprise systems, I enjoy building products end to end. I created Meet AI, a real-time AI meeting agent that joins video calls, delivers sub-second conversational responses, answers questions using meeting context, and automates transcript processing and LLM-based workflows. I’ve also built and deployed machine learning applications using Python, FastAPI, TensorFlow, and Keras.
                </p>
                <br />
                <br />
                <p className="pt-5 fade-in">
                  I enjoy solving complex engineering problems, improving reliability and performance, and turning ideas into production-ready products that can scale.
                </p>
    </div>
  )
}

export default About
