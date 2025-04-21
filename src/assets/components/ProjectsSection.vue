<template>
  <section id="projects" class="py-20 px-4 bg-light-beige">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4">
          Projects
        </span>
        <h2 class="text-3xl font-bold text-gray-900">Recent Work</h2>
      </div>

      <!-- Desktop view - using custom class names to avoid conflicts -->
      <div class="desktop-grid">
        <div
          v-for="(project, index) in projects"
          :key="`desktop-${index}`"
          class="bg-white shadow-lg hover:shadow-xl transition-all rounded-lg border overflow-hidden"
          style="transform: translateY(0); transition: transform 0.3s, box-shadow 0.3s;"
          onmouseover="this.style.transform='translateY(-5px)'"
          onmouseout="this.style.transform='translateY(0)'"
        >
          <div 
            class="h-2" 
            :style="getGradientStyle(index)"
          ></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-medium text-gray-900">{{ project.title }}</h3>
              <span
                v-if="project.inProgress"
                class="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium"
              >
                In Progress
              </span>
            </div>
            <p class="text-gray-700 mb-4">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-2 py-1 rounded text-sm bg-light-beige text-gray-700 border border-gray-200"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex items-center gap-4 mt-auto border-t border-gray-200 pt-4">
              <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                :aria-label="`GitHub repository for ${project.title}`"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>Repository</span>
              </a>

              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                :aria-label="`Live demo for ${project.title}`"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile view - using custom class names to avoid conflicts -->
      <div class="mobile-grid">
        <div 
          v-for="(project, index) in projects"
          :key="`mobile-${index}`"
          class="project-card"
          >
          <!-- Status badge (top-right corner) -->
          <div
          v-if="project.inProgress"
          class="translate-x-1 text-center text-amber-700 text-xs bg-amber-100 px-1 py-1 rounded"
          >
            In Progress
          </div>
          
          <div class="p-3">
            <!-- Project Title -->
            <h4 class="text-l font-bold text-gray-900 mb-2 break-words truncate">{{ project.title }}</h4>
            
            <!-- "More information..." button in gray container -->
            <button 
              @click="openProjectModal(project)"
              class="bg-gray-200 text-blue-600 py-1 px-2 text-xs rounded-lg border border-gray-300 text-center mb-4 hover:bg-gray-300 transition-colors"
            >
              More information...
            </button>
            
            <!-- Tech tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in displayedTags(project.tech)"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            
            <!-- Bottom icons -->
            <div class="flex justify-start items-center mt-2">
              <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-900"
                :aria-label="`GitHub repository for ${project.title}`"
              >
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 ml-4"
                :aria-label="`Live demo for ${project.title}`"
              >
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Modal -->
      <div v-if="selectedProject" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg w-full max-w-md border-2 border-black overflow-hidden">
          <div class="p-4 bg-gradient-to-r from-gray-900 to-gray-800">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-white">{{ selectedProject.title }}</h3>
              <button @click="selectedProject = null" class="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="p-4">
            <p class="text-gray-700 mb-4">{{ selectedProject.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in selectedProject.tech"
                :key="tech"
                class="px-2 py-1 rounded text-sm bg-light-beige text-gray-700 border border-gray-200"
              >
                {{ tech }}
              </span>
            </div>
            
            <div class="flex items-center gap-4 pt-4 border-t border-gray-200">
              <a
                :href="selectedProject.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>Repository</span>
              </a>

              <a
                v-if="selectedProject.demo"
                :href="selectedProject.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Live Demo</span>
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
      selectedProject: null, // For the modal
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
          title: "Personal Portfolio Website",
          description: "A responsive personal portfolio website showcasing academic background, military service, and projects. Developed using Vue.js and Tailwind CSS as part of a university web development assignment.",
          tech: ["Vue.js", "Tailwind CSS", "JavaScript", "GitHub Pages"],
          github: "https://github.com/sahareitam/Personal-website",
          demo: "https://sahareitam.github.io/Personal-website/"
        },
        {
          title: "LeetCode Solutions",
          description: "A public repository containing algorithmic solutions to problems from LeetCode, written in Python and organized by category and difficulty.",
          tech: ["Python", "Algorithms", "Data Structures", "C++", "GO"],
          github: "https://github.com/sahareitam/LeetCode"
        }
      ],
      gradients: [
        "linear-gradient(to right, #8b5cf6, #3b82f6)", // Purple to Blue
        "linear-gradient(to right, #ef4444, #f97316)", // Red to Orange
        "linear-gradient(to right, #10b981, #3b82f6)", // Green to Blue
        "linear-gradient(to right, #f59e0b, #ef4444)", // Amber to Red
        "linear-gradient(to right, #06b6d4, #3b82f6)"  // Cyan to Blue
      ],
      maxMobileTags: 10 // Maximum number of tech tags to show on mobile
    };
  },
  methods: {
    getGradientStyle(index) {
      // Use modulo to ensure we don't go out of bounds
      const gradientIndex = index % this.gradients.length;
      return {
        background: this.gradients[gradientIndex]
      };
    },
    openProjectModal(project) {
      this.selectedProject = project;
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.selectedProject = null;
      // Re-enable body scrolling
      document.body.style.overflow = '';
    },
    // Limit the number of tech tags shown on mobile
    displayedTags(tags) {
      if (tags.length <= this.maxMobileTags) {
        return tags;
      }
      return tags.slice(0, this.maxMobileTags);
    }
  },
  watch: {
    selectedProject(newVal) {
      // If the modal is closed, re-enable scrolling
      if (!newVal) {
        document.body.style.overflow = '';
      }
    }
  }
};
</script>

<style scoped>
/* Add some animation for the modal */
.fixed {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Custom grid layout that won't conflict with styles.css */
.desktop-grid {
  display: none;
}

.mobile-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

/* Media query that should work regardless of the conflicting styles */
@media (min-width: 768px) {
  .desktop-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }
  
  .mobile-grid {
    display: none;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  width: 45%;
  min-width: 160px;
  max-width: 200px;  
  margin: 4px;
  padding: 1px;
  border: 1px solid #979797;
  border-radius: 12px;
  background-color: #fff;
  transition: background-color 0.3s;
  box-sizing: border-box;
}

@media (max-width: 360px) {
  .project-card {
    width: calc(47% - 12px);
    min-width: 0;
    margin: 0;
    padding: 2px;
    box-sizing: border-box;
  }
}

.tech-tag {
  display: inline-block;
  max-width: 100%;
  padding: 4px 6px;
  font-size: 12px;
  background-color: #e5e7eb;
  color: #1f2937;
  border-radius: 9999px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;
}
</style>