<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative px-4 py-20">
    <div class="container max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="md:w-2/3 text-center md:text-left">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Sahar Eitam
          </h1>
          <h2 class="text-xl md:text-2xl text-gray-600 mb-6">
            Software & Information Systems Engineering Student
          </h2>
          
          <p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
            Dedicated 3rd year Software & Information Systems Engineering student at Ben Gurion University 
            with a strong foundation in Full Stack development, machine learning, and software architecture. 
            Passionate about creating scalable and efficient solutions to complex problems.
          </p>
          
          <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a
              href="https://github.com/sahareitam"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sahar-eitam"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>
            <button
              @click="copyEmail"
              class="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors outline-none shadow-none focus:outline-none"
            >
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Copy Email</span>
            </button>
          </div>
          
          <div 
            class="hidden md:flex items-center cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
            @click="scrollToProjects"
          >
            <span class="mr-2">Discover more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 animate-bounce">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        
        <div class="w-48 h-48 md:w-72 md:h-72">
          <div class="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              :src="profileImage"
              alt="Sahar Eitam"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileImage from '@/profile_image.jpeg';

export default {
  name: 'HomeSection',
  data() {
    return {
      profileImage
    };
  },
  methods: {
    scrollToProjects() {
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    },
    copyEmail() {
      navigator.clipboard.writeText('sahar283@gmail.com');
      alert('Email copied to clipboard!');
    }
  }
}
</script>