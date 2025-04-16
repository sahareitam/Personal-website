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
              <p class="text-lg font-medium">B.Sc in Software & Information Systems Engineering</p>
              <p class="text-gray-600">Ben-Gurion University</p>
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
                  Completed Courses
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
              <h4 class="font-medium">Intelligence Corps</h4>
              <p class="text-gray-600 mb-2">Israeli Defense Forces</p>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• Served in a classified technological intelligence unit</li>
                <li>• Honorably discharged with rank of Staff Sergeant</li>
              </ul>
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
          'Advanced Algorithms',
          'Computer Security',
          'Machine Learning',
          'Software Engineering Project'
        ],
        completed: [
          'Data Structures',
          'Algorithms',
          'Operating Systems',
          'Object-Oriented Programming',
          'Computer Organization',
          'Database Systems',
          'Computer Networks',
          'Web Development',
          'Introduction to AI'
        ]
      },
      skills: {
        'Languages': ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Go', 'SQL'],
        'Web Development': ['HTML5', 'CSS3', 'React', 'Vue.js', 'Node.js', 'Express', 'RESTful APIs'],
        'Tools & Platforms': ['Git', 'Docker', 'AWS', 'GCP', 'Linux', 'VSCode'],
        'Data & ML': ['NumPy', 'Pandas', 'TensorFlow', 'PyTorch', 'Scikit-Learn']
      }
    }
  }
}
</script>