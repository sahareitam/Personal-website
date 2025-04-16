<template>
  <section id="about" class="py-20 px-4 bg-white">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-10 text-center">About Me</h2>
      
      <div class="space-y-10">
        <!-- Education Card -->
        <div class="shadow-sm overflow-hidden rounded-lg border">
          <div class="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            <h3 class="text-xl font-semibold">Education</h3>
          </div>
          <div class="p-6">
            <div class="mb-6">
              <p class="text-xl font-semibold text-blue-800">B.Sc in Software & Information Systems Engineering</p>
              <p class="text-gray-700 font-medium">Ben-Gurion University</p>
              <p class="text-gray-600">Currently in third year with 3 semesters remaining</p>
              <p class="text-gray-600">GPA: 86.33 | Last semester: 90.6</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-medium mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  Courses In Progress
                </h4>
                <ul class="space-y-2">
                  <li v-for="(course, index) in educationCourses.inProgress" :key="index" class="text-gray-600 text-sm">
                    {{ course }}
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-medium mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Relevant Completed Courses
                </h4>
                <ul class="space-y-2">
                  <li v-for="(course, index) in educationCourses.completed" :key="index" class="text-gray-600 text-sm">
                    {{ course }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Card -->
        <div class="shadow-sm overflow-hidden rounded-lg border">
          <div class="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <h3 class="text-xl font-semibold">Technical Skills</h3>
          </div>
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div v-for="(skillList, category) in skills" :key="category">
                <h4 class="font-medium mb-3 text-gray-800">{{ category }}</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in skillList"
                    :key="skill"
                    class="px-2 py-1 rounded text-sm bg-light-beige text-gray-700 border border-gray-200"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Work & Military -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Work Experience -->
          <div class="shadow-sm overflow-hidden rounded-lg border">
            <div class="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <h3 class="text-xl font-semibold">Work Experience</h3>
            </div>
            <div class="p-6">
              <h4 class="font-medium">Site Supervisor & Quantity Surveyor</h4>
              <p class="text-gray-600 mb-2">Eitam Liad Construction Company</p>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• Oversaw construction projects (budgeting, quality, timelines)</li>
                <li>• Supervised on-site teams and coordinated with contractors</li>
                <li>• Transitioned to part-time role focusing on quantity surveying</li>
                <li>• Available to work 3+ days per week</li>
              </ul>
            </div>
          </div>

          <!-- Military Service -->
          <div class="shadow-sm overflow-hidden rounded-lg border">
            <div class="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3 class="text-xl font-semibold">Military Service</h3>
            </div>
            <div class="p-6">
              <h4 class="font-medium">Combat Soldier and Commander</h4>
              <p class="text-gray-600 mb-2">Sayeret Givati Unit</p>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• Led complex operations and managed team training</li>
                <li>• Emphasized leadership and collaboration</li>
                <li>• Demonstrated high level of personal responsibility</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Additional Skills & Volunteering -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Professional Attributes -->
          <div class="shadow-sm overflow-hidden rounded-lg border">
            <div class="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
              <!-- אייקון מסוג Award (אפשר להחליף לאייקון SVG מתאים) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M12 1l3 5 5 .5-3.5 3 1 5-4.5-2.5L9 15l1-5-3.5-3 5-.5 3-5z" />
              </svg>
              <h3 class="text-xl font-semibold">Professional Attributes</h3>
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2">
                <span class="bg-[#f0ebe0] text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-sm">Problem analysis and solution design</span>
                <span class="bg-[#f0ebe0] text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-sm">Collaborative project implementation</span>
                <span class="bg-[#f0ebe0] text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-sm">Systematic requirements gathering</span>
                <span class="bg-[#f0ebe0] text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-sm">User-focused thinking</span>
                <span class="bg-[#f0ebe0] text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-sm">Rapid self-learning capabilities</span>
                <span class="bg-[#f0ebe0] text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-sm">Strong analytical skills</span>
                <span class="bg-[#f0ebe0] text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-sm">Leadership and operational management</span>
                <span class="bg-[#f0ebe0] text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-sm">Project planning and optimization</span>
              </div>
            </div>
          </div>

          <!-- Volunteering -->
          <div class="shadow-sm overflow-hidden rounded-lg border">
            <div class="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
              
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m6-5a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm6 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
              </svg>
              <h3 class="text-xl font-semibold">Volunteering</h3>
            </div>
            <div class="p-6 space-y-4">
              <div>
                <h4 class="font-medium">Mathematics Tutor</h4>
                <p class="text-gray-600">"Perach Mathematics" Project - Tutoring high school students in 5-unit math</p>
              </div>
              <div>
                <h4 class="font-medium">Community Support Volunteer</h4>
                <p class="text-gray-600">Community Anchor Youth Village - Supporting at-risk youth in enrichment programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      educationCourses: {
        inProgress: [
          'Software Quality Engineering - Unit Testing, Integration Testing, Selenium, Cucumber, Quality Metrics, TDD',
          'Computer and Network Security - Cryptography, Authentication, Security Protocols, Malicious Code Detection, Firewalls',
          'Data communication - Understanding of network protocols (TCP/IP, UDP, HTTP), packet/circuit switching',
          'Software Project Management - Agile methodologies, Project lifecycle, Team collaboration',
          'Web development environment - RESTful APIs, Node.js, Vue.js, Docker, Cloud services (Azure)',
          'Software Engineering Project',
          'Analysis and decision making',
          'Data Science Ethics'
        ],
        completed: [
        'Artificial Intelligence (95) - Reinforcement Learning, Deep RL, Bayesian Networks',
        'Machine Learning (89) - Neural Networks, Ensemble Methods, SVM',
        'Operating Systems (95) - Process Management, Virtual Memory, Multi-threading',
        'Object Oriented Programming (94) - Design Patterns, SOLID Principles',
        'Analysis and Design of Software Systems (88) - Architecture, UML, OCL',
        'Elements of Computing Systems (90) - CPU components, MIPS assembly, computer architecture, and hardware interfaces',
        'Human-Computer Interface (86) - Usability, Prototyping, Eye Tracking, Accessibility',
        'Data Structures',
        'Algorithms',
        'Databases',
        'Introduction to Computer Science'
        ]
      },
      skills: {
        "Languages": ["Python (Primary)", "Java", "C/C++", "Go", "C#"],
        "Frontend Development": ["JavaScript", "HTML", "CSS", "Chrome Extensions API"],
        "Backend Development": ["REST APIs", "Flask", "Error handling", "Logging"],
        "Cloud & DevOps": ["GCP", "App Engine", "Git", "GitHub", "Docker"],
        "Security": ["Cryptography", "Authentication", "Malware Detection", "Network Security"],
        "Data & Databases": ["PostgreSQL", "Pandas", "SQL", "Data Processing"],
        "AI & ML": ["Neural Networks", "Reinforcement Learning", "LangChain", "RAG"],
        "Scientific Programming": ["NumPy", "Pandas", "Algorithm Development"],
        "Testing": ["Unit Testing", "Integration Testing", "PyTest", "Selenium", "TDD"]
      }
    }
  }
}
</script>