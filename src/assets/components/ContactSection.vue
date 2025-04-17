<template>
  <section id="contact" class="py-20 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
      <!-- Header with green badge -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 mb-4">
          Get In Touch
        </span>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
        <p class="text-base text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
        </p>
      </div>
      
      <!-- Contact Card with rounded corners -->
      <div class="overflow-hidden rounded-xl shadow-lg mx-auto" style="max-width: 980px;">
        <!-- Blue gradient header -->
        <div style="background: linear-gradient(to right, #2f80ed, #1c49d9); padding: 2.5rem 1.5rem; text-align: center; color: white;">
          <h3 style="font-size: 1.875rem; font-weight: 600; margin-bottom: 0.5rem;">Sahar Eitam</h3>
          <p style="font-size: 1rem; color: #cbd5e1;">Software Engineering Student at Ben-Gurion University</p>
        </div>

        
        
        <!-- Contact details in 2x2 grid -->
        <div class="contact-grid">
          <!-- Email - First quarter -->
          <div @click="copyEmail" class="contact-item p-6 md:border-b md:border-r border-gray-200 flex items-center cursor-pointer relative">
            <div class=icon-wrapper>
              <svg xmlns="http://www.w3.org/2000/svg" class=custom-icon fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="contact-text">
              <p class="label">Email</p>
              <p class="value">sahar283@gmail.com</p>
            </div>

            <!-- Copy notification -->
            <div v-if="emailCopied" class="copy-notification">Email copied</div>
          </div>
          
          <!-- Phone - Second quarter -->
          <div @click="copyPhone" class="border-left-only contact-item p-6 md:border-b border-gray-200 flex items-center cursor-pointer relative">
            <div class=icon-wrapper>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="contact-text">
              <p class="label">Phone</p>
              <p class="value">+972-52-7245733</p>
            </div>
            <!-- Copy notification -->
            <div v-if="phoneCopied" class="copy-notification">Phone Number copied</div>
          </div>
          
          <!-- LinkedIn - Third quarter -->
          <a href="https://linkedin.com/in/sahar-eitam-73b732228" target="_blank" rel="noopener noreferrer" class="contact-item border-top-only p-6 md:border-r border-gray-200 flex items-center">
            <div class=icon-wrapper>
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div class="contact-text">
              <p class="label">LinkedIn</p>
              <p class="value">Sahar Eitam</p>
            </div>
          </a>
          
          <!-- GitHub - Fourth quarter -->
          <a href="https://github.com/sahareitam" target="_blank" rel="noopener noreferrer" class="contact-item top-left p-6 flex items-center">
            <div class=icon-wrapper>
              <svg class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.19c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.997.107-.776.418-1.305.762-1.605-2.665-.303-5.467-1.331-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.006-.404c1.02.004 2.047.137 3.005.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.922.43.373.814 1.102.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.8 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div class="contact-text">
              <p class="label">GitHub</p>
              <p class="value">sahareitam</p>
            </div>
          </a>
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
      emailCopied: false,
      phoneCopied: false,
      copyTimeout: null
    }
  },
  methods: {
    copyEmail() {
      const email = 'sahar283@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        this.showEmailCopied();
      });
    },
    copyPhone() {
      const phone = '+972-52-7245733';
      navigator.clipboard.writeText(phone).then(() => {
        this.showPhoneCopied();
      });
    },
    showEmailCopied() {
      this.emailCopied = true;
      // Clear any existing timeout
      if (this.copyTimeout) {
        clearTimeout(this.copyTimeout);
      }
      // Set timeout to hide the notification after 2 seconds
      this.copyTimeout = setTimeout(() => {
        this.emailCopied = false;
      }, 2000);
    },
    showPhoneCopied() {
      this.phoneCopied = true;
      // Clear any existing timeout
      if (this.copyTimeout) {
        clearTimeout(this.copyTimeout);
      }
      // Set timeout to hide the notification after 2 seconds
      this.copyTimeout = setTimeout(() => {
        this.phoneCopied = false;
      }, 2000);
    }
  }
}
</script>

<style scoped>
/* Custom styles to match exact appearance */
.bg-blue-600 {
  background-color: #2563eb;
}

.bg-blue-50 {
  background-color: #eff6ff;
}

.bg-green-50 {
  background-color: #f0fdf4;
}

.rounded-xl {
  border-radius: 0.75rem;
}

/* Copy notification styles */
.copy-notification {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 10;
  animation: fadeInOut 2s ease;
}

@keyframes fadeInOut {
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
}

@media (max-width: 768px) {
  /* Handling borders on mobile */
  div:not(:last-child), a:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
}
</style>