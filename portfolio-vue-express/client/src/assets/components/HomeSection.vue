<template>
  <section id="home" class="min-h-screen flex items-center justify-center px-4 py-20">
    <div class="text-center max-w-2xl mx-auto">
      <div class="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-md">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/97b479_image.png"
          alt="Sahar Eitam"
          class="w-full h-full object-cover"
        />
      </div>

      <h1 class="text-4xl font-bold text-gray-900 mb-3">
        Sahar Eitam
      </h1>
      <h2 class="text-xl text-gray-700 mb-6">
        Software Engineering Student
      </h2>
      
      <p class="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
        Dedicated 3rd year Software & Information Systems Engineering student at Ben Gurion University 
        with a strong foundation in Full Stack development, machine learning, and software architecture. 
        Experienced with Frontend/Backend development, RESTful APIs, SQL databases, and cloud technologies. 
        Enthusiastic about algorithm development and scientific computing.
      </p>
      
      <div class="flex justify-center gap-4">
        <a
          href="https://github.com/sahareitam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/sahar-eitam-73b732228"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection'
}
</script>

<style scoped>
/* Any component-specific styles can go here */
</style>