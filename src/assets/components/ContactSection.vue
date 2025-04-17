<template>
  <section id="contact" class="py-20 px-4 bg-white">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold mb-10 text-center">Contact Me</h2>

      <div class="shadow-sm border rounded-lg overflow-hidden">
        <div class="p-6">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-4">Get In Touch</h3>
                <p class="text-gray-600">
                  Feel free to reach out through any of the following contact methods. I'll get back to you as soon as possible.
                </p>
              </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-center gap-3">
                <!-- Mail Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:sahar283@gmail.com" class="text-gray-600 hover:text-gray-900">
                  sahar283@gmail.com
                </a>
              </div>

              <!-- Phone -->
              <div class="flex items-center gap-3">
                <!-- Phone Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.1.94.34 1.86.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.95.36 1.87.6 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+972527245733" class="text-gray-600 hover:text-gray-900">
                  +972-52-7245733
                </a>
              </div>

              <!-- Location -->
              <div class="flex items-center gap-3">
                <!-- Map Pin Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span class="text-gray-600">Israel</span>
              </div>

              <!-- LinkedIn -->
              <div class="flex items-center gap-3">
                <!-- LinkedIn Icon -->
                <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.94v5.666H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.598 0 4.262 2.367 4.262 5.451v6.292zM5.337 7.433a2.07 2.07 0 01-2.07-2.07 2.07 2.07 0 012.07-2.07 2.07 2.07 0 012.07 2.07 2.07 2.07 0 01-2.07 2.07zM6.768 20.452H3.904V9h2.864v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                <a href="https://linkedin.com/in/sahar-eitam" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                  linkedin.com/in/sahar-eitam
                </a>
              </div>

              <!-- GitHub -->
              <div class="flex items-center gap-3">
                <!-- GitHub Icon -->
                <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.19c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.997.107-.776.418-1.305.762-1.605-2.665-.303-5.467-1.331-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.006-.404c1.02.004 2.047.137 3.005.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.922.43.373.814 1.102.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.8 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <a href="https://github.com/sahareitam" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                  github.com/sahareitam
                </a>
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
  name: 'ContactSection',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>