<template>
  <section id="projects" class="py-20 px-4">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-10 text-center">Projects</h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div 
          v-for="(project, index) in projects" 
          :key="index" 
          class="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg border overflow-hidden"
        >
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-medium">{{ project.title }}</h3>
              <span 
                v-if="project.inProgress" 
                class="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs"
              >
                In Progress
              </span>
            </div>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.tech" 
                :key="tech" 
                class="px-2 py-1 rounded text-sm bg-light-beige text-gray-700 border border-gray-200"
              >
                {{ tech }}
              </span>
            </div>
            
            <div class="flex items-center gap-4 mt-auto">
              <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-700 hover:text-gray-900 transition-colors"
                :aria-label="`GitHub repository for ${project.title}`"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                :aria-label="`Live demo for ${project.title}`"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span class="text-sm">Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
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
          github: "https://github.com/sahareitam/chrome-keyboard-fixer",
        },
        {
          title: "Task Management System",
          description: "Task management system using Go and Docker. Features RESTful API, Goroutines for concurrency, sync.Cond for task synchronization, and CLI client interface.",
          tech: ["Go", "Docker", "REST API", "CLI"],
          github: "https://github.com/sahareitam/task-manager",
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
      ]
    }
  }
}
</script>