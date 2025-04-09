
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Documentation Helper",
    description: "Developing an intelligent search system using LangChain and RAG architecture. Implementing vector similarity algorithms and creating contextual retrieval from large documentation sets.",
    tech: ["LangChain", "RAG", "Python", "NumPy", "Pinecone", "FAISS"],
    github: "#",
    inProgress: true
  },
  {
    title: "Chrome Keyboard Fixer",
    description: "Chrome extension with Python Flask backend on GCP. Implements RESTful API with comprehensive error handling, concurrency management, and security best practices including input validation and IP-based rate limiting.",
    tech: ["JavaScript", "Python", "Flask", "GCP", "REST API"],
    github: "#"
  },
  {
    title: "Task Management System",
    description: "Task management system using Go and Docker. Features RESTful API, Goroutines for concurrency, sync.Cond for task synchronization, and CLI client interface.",
    tech: ["Go", "Docker", "REST API", "CLI"],
    github: "#"
  },
  {
    title: "Grandmother Website Project",
    description: "A personal website dedicated to Grandma Sara, built as part of a Web Development Environments course at Ben-Gurion University.",
    tech: ["HTML5", "CSS3", "jQuery", "Facebook SDK"],
    github: "https://github.com/sahareitam/318283116",
    demo: "https://wed-2023.github.io/318283116/"
  },
  {
    title: "LeetCode Solutions",
    description: "A public repository containing algorithmic solutions to problems from LeetCode, written in Python and organized by category and difficulty.",
    tech: ["Python", "Algorithms", "Data Structures"],
    github: "https://github.com/sahareitam/LeetCode"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  {project.inProgress && (
                    <Badge className="bg-amber-100 text-amber-800">In Progress</Badge>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-[#f0ebe0] text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
