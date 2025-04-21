<template>
  <section id="about" class="py-20 px-4 relative">
    <div class="absolute inset-0 bg-white opacity-90 z-0"></div>
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4">
          About Me
        </span>
        <h2 class="text-4xl font-bold text-gray-900">Background & Skills</h2>
      </div>
      
      <div class="space-y-12">
        <!-- Education -->
        <div class="overflow-hidden border-0 shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300">
          <div class="bg-gradient-to-r from-gray-900 to-gray-800 py-4 px-6 border-b">
            <div class="flex justify-center items-center gap-3">
              <h3 class="text-xl font-semibold text-black">Education</h3>
            </div>
          </div>
          <div class="p-6 space-y-6 ">
            <div class="bg-gray-50 rounded-lg p-4 border-l-4 border border border-gray-300">
              <h4 class="text-2xl font-bold text-gray-900 mb-2">
                B.Sc in Software & Information Systems Engineering
              </h4>
              <p class="text-lg text-blue-600 font-medium mb-2">Ben-Gurion University</p>
              <p class="text-gray-700">Currently in third year with 3 semesters remaining</p>
              <div class="flex flex-wrap items-center gap-3 mt-3">
                <div class="px-3 py-1 bg-blue-100 text-blue-800 font-medium rounded-full">
                  GPA: 86.33
                </div>
                <div class="px-3 py-1 bg-green-100 text-green-800 font-medium rounded-full">
                  Last semester: 90.6
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h5 class="flex items-center gap-2 text-lg font-semibold mb-4 text-amber-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  Courses In Progress
                </h5>
                <div class="space-y-3">
                  <div v-for="(course, index) in educationCourses.inProgress" :key="index" 
                       class="bg-amber-50 p-4 rounded-lg border border-amber-100 hover:shadow-md transition-shadow">
                    <div @click="toggleCourse(course)" :class="{'cursor-pointer': isMobile}">
                      <div class="flex justify-between">
                        <span class="font-medium text-amber-900">{{ course.name }}</span>
                        <svg v-if="isMobile" xmlns="http://www.w3.org/2000/svg" 
                             class="w-4 h-4 ml-2 transition-transform text-amber-700"
                             :class="{'transform rotate-180': course.isOpen}">
                          <polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2"></polyline>
                        </svg>
                      </div>
                      <p v-if="course.description" 
                         v-show="!isMobile || course.isOpen" 
                         class="text-sm text-amber-700 mt-1">{{ course.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 class="flex items-center gap-2 text-lg font-semibold mb-4 text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Relevant Completed Courses
                </h5>
                <div class="space-y-3">
                  <div v-for="(course, index) in educationCourses.completed" :key="index" 
                       class="bg-green-50 p-4 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                    <div @click="toggleCourse(course)" :class="{'cursor-pointer': isMobile}">
                      <div class="flex justify-between">
                        <span class="font-medium text-green-900">{{ course.name }}</span>
                        <div class="flex items-center">
                          <span v-if="course.grade" class="text-green-700 font-medium">{{ course.grade }}</span>
                          <svg v-if="isMobile" xmlns="http://www.w3.org/2000/svg" 
                               class="w-4 h-4 ml-2 transition-transform"
                               :class="{'transform rotate-180': course.isOpen}">
                            <polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2"></polyline>
                          </svg>
                        </div>
                      </div>
                      <p v-if="course.description" 
                         v-show="!isMobile || course.isOpen" 
                         class="text-sm text-green-700 mt-1">{{ course.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <h4 class="font-medium mb-3 text-blue-700">Additional Training</h4>
              <p class="text-blue-800">
                LangChain & LLM Development (In Progress) - RAG implementation, Vector stores and embeddings (Pinecone, FAISS)
              </p>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="overflow-hidden border-0 shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300">
          <div class="bg-gradient-to-r from-gray-900 to-gray-800 py-4 px-6 border-b">
            <div class="flex justify-center items-center gap-3">
              <h3 class="text-xl font-semibold text-black">Technical Skills</h3>
            </div>
          </div>
          <div class="p-6">
            <div class="grid md:grid-cols-3 gap-6">
              <div v-for="category in skillsCategories" :key="category.name" 
                  class="bg-gray-50 p-4 rounded-lg border border-gray-300 hover:shadow-md transition-shadow skills">
                
                <!-- title in mobile-->
                <h4 @click="toggleSkillCategory(category)" 
                    class="font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2 mb-4 flex justify-between items-center"
                    :class="{'cursor-pointer': isMobile}">
                  {{ category.name }}
                  <svg v-if="isMobile" xmlns="http://www.w3.org/2000/svg" 
                      class="w-4 h-4 ml-2 transition-transform text-gray-700"
                      :class="{'transform rotate-180': category.isOpen}">
                    <polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2"></polyline>
                  </svg>
                </h4>
                
                <!-- tags of skill-->
                <div class="flex flex-wrap gap-2" v-show="!isMobile || category.isOpen">
                  <span
                    v-for="skill in category.skills"
                    :key="skill"
                    class="bg-green-400 text-gray-800 text-xs font-bold py-1 px-4 rounded-full border border-green-100 hover:shadow-md transition-shadow">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Work Experience -->
        <div class="overflow-hidden border-0 shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300">
          <div class="bg-gradient-to-r from-gray-900 to-gray-800 py-4 px-6 border-b">
            <div class="flex justify-center items-center gap-3">
              <h3 class="text-xl font-semibold text-black">Work Experience</h3>
            </div>
          </div>
          <div class="p-6 space-y-6">
            <!-- Experience Items -->
            <div v-for="(job, index) in workExperience" :key="index" 
                class="bg-gray-50 p-4 rounded-lg border border-gray-300">
              <div class="flex flex-wrap justify-between items-start mb-3">
                <!-- title for mobile-->
                <h4 @click="toggleWorkExperience(job)" 
                    class="text-xl font-semibold text-gray-900 flex justify-between items-center w-full"
                    :class="{'cursor-pointer': isMobile}">
                  {{ job.title }}
                  <svg v-if="isMobile" xmlns="http://www.w3.org/2000/svg" 
                      class="w-4 h-4 ml-2 transition-transform text-gray-700"
                      :class="{'transform rotate-180': job.isOpen}">
                    <polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2"></polyline>
                  </svg>
                </h4>
                <span v-show="!isMobile || job.isOpen" class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {{ job.type }}
                </span>
              </div>
              
              <!--hide content in mobile-->
              <div v-show="!isMobile || job.isOpen">
                <p class="text-blue-600 mb-4">{{ job.company }}{{ job.location ? ' | ' + job.location : '' }}</p>
                <ul class="space-y-2 text-gray-700">
                  <li v-for="(item, i) in job.responsibilities" :key="i" class="flex items-start gap-2">
                    <span class="text-blue-500 mt-1">•</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
                <div class="mt-5 pt-4 border-t border-gray-200">
                  <h5 class="font-bold text-gray-900 mb-2">Key Skills:</h5>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(skill, i) in job.skills" :key="i"
                        class="bg-gray-200 text-gray-800 text-xs font-bold py-2 px-4 rounded-full border border-gray-300 hover:shadow-md transition-shadow">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Military Service -->
        <div class="overflow-hidden border-0 shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300">
          <div class="bg-gradient-to-r from-gray-900 to-gray-800 py-4 px-6 border-b">
            <div class="flex justify-center items-center gap-3">
              <h3 class="text-xl font-semibold text-black">Military Service</h3>
            </div>
          </div>
          <div class="p-6">
            <div v-for="(service, index) in militaryService" :key="index"
                class="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-300">
              <h4 @click="toggleMilitaryService(service)"
                  class="text-xl font-semibold text-gray-900 mb-3 flex justify-between items-center"
                  :class="{'cursor-pointer': isMobile}">
                {{ service.title }}
                <svg v-if="isMobile" xmlns="http://www.w3.org/2000/svg" 
                    class="w-4 h-4 ml-2 transition-transform text-gray-700"
                    :class="{'transform rotate-180': service.isOpen}">
                  <polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2"></polyline>
                </svg>
              </h4>
              
              <div v-show="!isMobile || service.isOpen">
                <p class="text-blue-600 mb-4">{{ service.unit }}</p>
                <ul class="space-y-2 text-gray-700">
                  <li v-for="(duty, i) in service.duties" :key="i" class="flex items-start gap-2">
                    <span class="text-blue-500 mt-1">•</span>
                    <span>{{ duty }}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-300">
              <h5 @click="toggleMilitarySkills"
                  class="font-bold text-gray-900 mb-4 flex justify-between items-center"
                  :class="{'cursor-pointer': isMobile}">
                Transferable Skills:
                <svg v-if="isMobile" xmlns="http://www.w3.org/2000/svg" 
                    class="w-4 h-4 ml-2 transition-transform text-gray-700"
                    :class="{'transform rotate-180': militarySkillsOpen}">
                  <polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2"></polyline>
                </svg>
              </h5>
              
              <div v-show="!isMobile || militarySkillsOpen" class="flex flex-wrap gap-2">
                <span v-for="(skill, i) in militarySkills" :key="i"
                    class="bg-gray-200 text-gray-800 text-xs font-bold py-2 px-4 rounded-full border border-gray-300 hover:shadow-md transition-shadow">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Additional Skills & Volunteering -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="overflow-hidden border-0 shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 h-full">
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 py-4 px-6 flex items-center gap-3 border-b">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-white">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <h3 class="text-xl font-semibold text">Professional Attributes</h3>
            </div>
            <div class="p-6">
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-300">
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="(skill, index) in additionalSkills" :key="index" class="flex items-center gap-2 p-3 rounded-md hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-green-600 flex-shrink-0">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span class="text-gray-800">{{ skill }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="overflow-hidden border-0 shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 h-full">
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 py-4 px-6 flex items-center gap-3 border-b">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-white">
                <path d="M17 20h5v-2a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2h3zM10 18H5v-2a3 3 0 0 1 3-3h2m6-1v-2m0-4h.01M17 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
              </svg>
              <h3 class="text-xl font-semibold text">Volunteering</h3>
            </div>
            <div class="p-6">
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-300">
                <div class="space-y-6">
                  <div v-for="(volunteer, index) in volunteering" :key="index">
                    <h4 @click="toggleVolunteering(volunteer)"
                        class="text-lg font-bold text-gray-900 mb-1 flex justify-between items-center"
                        :class="{'cursor-pointer': isMobile}">
                      {{ volunteer.title }}
                      <svg v-if="isMobile" xmlns="http://www.w3.org/2000/svg" 
                          class="w-4 h-4 ml-2 transition-transform text-gray-700"
                          :class="{'transform rotate-180': volunteer.isOpen}">
                        <polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2"></polyline>
                      </svg>
                    </h4>
                    
                    <div v-show="!isMobile || volunteer.isOpen">
                      <p class="text-gray-700 mb-3">{{ volunteer.organization }}</p>
                      <p class="text-gray-600 bg-blue-100 p-3 rounded-lg border-l-6 border-blue-500">
                        {{ volunteer.description }}
                      </p>
                    </div>
                    
                    <div v-if="index < volunteering.length - 1" class="pt-4 border-t border-gray-200 mt-4"></div>
                  </div>
                </div>
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
      isMobile: false,
      educationCourses: {
        inProgress: [
          {
            name: "Software Quality Engineering",
            description: "Unit Testing, Integration Testing, Selenium, Cucumber, Quality Metrics, TDD",
            isOpen: false
          },
          {
            name: "Computer and Network Security",
            description: "Cryptography, Authentication, Security Protocols, Malicious Code Detection, Firewalls",
            isOpen: false
          },
          {
            name: "Data communication",
            description: "Understanding of network protocols (TCP/IP, UDP, HTTP), packet/circuit switching",
            isOpen: false
          },
          {
            name: "Software Project Management",
            description: "Agile methodologies, Project lifecycle, Team collaboration",
            isOpen: false
          },
          {
            name: "Web development environment",
            description: "RESTful APIs, Node.js, Vue.js, Docker, Cloud services (Azure)",
            isOpen: false
          },
          {
            name: "Software Engineering Project",
            description: "Full-cycle software development, team collaboration, Agile practices",
            isOpen: false
          },       
          {
            name: "Analysis and decision making",
            description: "Data-driven decisions, statistical analysis, optimization techniques",
            isOpen: false
          },
          {
            name: "Data Science Ethics",
            description: "Responsible AI, Privacy, Bias mitigation, Ethical considerations in data collection",
            isOpen: false
          }
        ],
        completed: [
          {
            name: "Artificial Intelligence",
            grade: 95,
            description: "Reinforcement Learning, Deep RL, Bayesian Networks",
            isOpen: false
          },
          {
            name: "Machine Learning",
            grade: 89,
            description: "Neural Networks, Ensemble Methods, SVM",
            isOpen: false
          },
          {
            name: "Operating Systems",
            grade: 95,
            description: "Process Management, Virtual Memory, Multi-threading",
            isOpen: false
          },
          {
            name: "Object Oriented Programming",
            grade: 94,
            description: "Design Patterns, SOLID Principles",
            isOpen: false
          },
          {
            name: "Analysis and Design of Software Systems",
            grade: 88,
            description: "Architecture, UML, OCL",
            isOpen: false
          },
          {
            name: "Elements of Computing Systems",
            grade: 90,
            description: "CPU components, MIPS assembly, computer architecture",
            isOpen: false
          },
          {
            name: "Human-Computer Interface",
            grade: 86,
            description: "Usability, Prototyping, Eye Tracking, Accessibility",
            isOpen: false
          },
          {
            name: "Data Structures",
            description: "Arrays, Linked Lists, Trees, Graphs, Hash Tables",
            isOpen: false
          },
          {
            name: "Algorithms",
            description: "Sorting, Searching, Dynamic Programming, Greedy Algorithms",
            isOpen: false
          },
          {
            name: "Databases",
            description: "SQL, Normalization, Query Optimization, Transactions",
            isOpen: false
          },
          {
            name: "Introduction to Computer Science",
            description: "Programming fundamentals, Computational thinking",
            isOpen: false
          }
        ]
      },

      skillsCategories: [
        {
          name: "Languages",
          skills: ["Python (Primary)", "Java", "C/C++", "Go", "C#", "JavaScript"],
          isOpen: false
        },
        {
          name: "Frontend Development",
          skills: ["JavaScript", "HTML", "CSS", "Vue.js", "Chrome Extensions API"],
          isOpen: false
        },
        {
          name: "Backend Development",
          skills: ["REST APIs", "Flask", "Node.js", "Express", "Error handling", "Logging"],
          isOpen: false
        },
        {
          name: "Cloud & DevOps",
          skills: ["GCP", "App Engine", "Git", "GitHub", "Docker"],
          isOpen: false
        },
        {
          name: "Security",
          skills: ["Cryptography", "Authentication", "Malware Detection", "Network Security", "Web Security"],
          isOpen: false
        },
        {
          name: "Data & Databases",
          skills: ["PostgreSQL", "Pandas", "SQL", "Data Processing"],
          isOpen: false
        },
        {
          name: "AI & ML",
          skills: ["Neural Networks", "Reinforcement Learning", "LangChain", "RAG"],
          isOpen: false
        },
        {
          name: "Scientific Programming",
          skills: ["NumPy", "Pandas"],
          isOpen: false
        },
        {
          name: "Testing",
          skills: ["Unit Testing", "Integration Testing", "PyTest", "Selenium", "TDD", "QA Automation"],
          isOpen: false
        }
      ],
      workExperience: [
      {
        title: "Operations & Property Manager",
        company: "OurPlace",
        location: "Tel Aviv, Israel",
        type: "Full-time",
        responsibilities: [
          "Managed operational aspects of multiple residential buildings, including maintenance, contractor coordination, and budget management",
          "Served as primary point of contact for American tenants in Israel for internship programs, helping with local procedures and resolving issues",
          "Led renovation projects and ensured compliance with municipal regulations and safety standards",
          "Handled a wide range of logistical and operational challenges, often under tight deadlines"
        ],
        skills: ["Operational Management", "Client Relations", "Problem Solving", "Project Coordination"],
        isOpen: false
      },
      {
        title: "Site Supervisor & Quantity Surveyor",
        company: "Eitam Liad Construction Company",
        location: "",
        type: "Part-time",
        responsibilities: [
          "Oversaw construction projects (budgeting, quality, timelines)",
          "Supervised on-site teams and coordinated with contractors",
          "Transitioned to part-time role focusing on quantity surveying",
          "Available to work 3+ days per week"
        ],
        skills: ["Project Planning", "Team Leadership", "Budget Management", "Client Communication"],
        isOpen: false
      }
    ],
    militaryService: [
      {
        title: "Combat Soldier and Commander",
        unit: "Sayeret Givati Unit",
        duties: [
          "Led complex operations and managed team training",
          "Emphasized leadership and collaboration",
          "Demonstrated high level of personal responsibility"
        ],
        isOpen: false
      }
    ],
    militarySkills: ["Leadership", "Team Coordination", "Crisis Management", "Strategic Planning"],
    militarySkillsOpen: false,

    volunteering: [
      {
        title: "Mathematics Tutor",
        organization: "\"Perach Mathematics\" Project",
        description: "Tutored high school students in 5-unit mathematics, helping them prepare for the Bagrut exams and develop strong problem-solving skills.",
        isOpen: false
      },
      {
        title: "Community Support Volunteer",
        organization: "Community Anchor Youth Village",
        description: "Supported at-risk youth in enrichment programs, providing guidance and mentorship to help them develop academic and life skills.",
        isOpen: false
      }
    ],
    additionalSkills: [
      "Problem analysis and solution design",
      "Collaborative project implementation",
      "Systematic requirements gathering",
      "User-focused thinking",
      "Rapid self-learning capabilities",
      "Strong analytical skills",
      "Leadership and operational management",
      "Project planning and optimization",
      "Full-stack development"
    ]
    }
  },
  mounted() {
    // Check if on mobile
    this.checkIfMobile();
    // Listen for screen size changes
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeUnmount() {
    // Remove listener when component is destroyed
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
  checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
  },
  toggleCourse(course) {
    if (this.isMobile) {
      course.isOpen = !course.isOpen;
    }
  },
  toggleSkillCategory(category) {
    if (this.isMobile) {
      category.isOpen = !category.isOpen;
    }
  },
  toggleMilitaryService(service) {
    if (this.isMobile) {
      service.isOpen = !service.isOpen;
    }
  },
  toggleMilitarySkills() {
    if (this.isMobile) {
      this.militarySkillsOpen = !this.militarySkillsOpen;
    }
  },
  toggleVolunteering(volunteer) {
    if (this.isMobile) {
      volunteer.isOpen = !volunteer.isOpen;
    }
  },
  toggleWorkExperience(job) {
    if (this.isMobile) {
      job.isOpen = !job.isOpen;
    }
  }
}
}
</script>


