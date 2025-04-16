<template>
  <section id="contact" class="py-20 px-4 bg-white">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold mb-10 text-center">Contact Me</h2>
      
      <div class="grid md:grid-cols-5 gap-8">
        <div class="md:col-span-3">
          <div class="shadow-sm rounded-lg border overflow-hidden">
            <div class="p-6">
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    id="name"
                    v-model="formData.name"
                    type="text"
                    placeholder="Your Name"
                    class="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    id="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="Your Email"
                    class="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message"
                    v-model="formData.message"
                    placeholder="Your Message"
                    class="w-full p-2 border border-gray-300 rounded min-h-120"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  class="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>

                <div v-if="submitStatus" :class="[
                  'p-3 rounded text-center',
                  submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                ]">
                  {{ submitStatus.message }}
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div class="md:col-span-2">
          <div class="space-y-8">
            <div>
              <h3 class="text-lg font-medium mb-4">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:sahar283@gmail.com" class="text-gray-600 hover:text-gray-900">
                    sahar283@gmail.com
                  </a>
                </div>
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+972527245733" class="text-gray-600 hover:text-gray-900">
                    +972-52-7245733
                  </a>
                </div>
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span class="text-gray-600">Israel</span>
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
// הסרנו את ייבוא axios שלא בשימוש

export default {
  name: 'ContactSection',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      submitStatus: null
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.submitStatus = null;
      
      try {
        // In a real implementation, this would call your backend API
        // For this example, we'll just simulate a successful submission

        // Uncomment this to use with a real backend:
        /*
        const response = await axios.post('/api/contact', this.formData);
        if (response.data.success) {
          this.submitStatus = {
            type: 'success',
            message: 'Message sent successfully!'
          };
          this.formData = { name: '', email: '', message: '' };
        }
        */
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate success
        this.submitStatus = {
          type: 'success',
          message: 'Message sent successfully!'
        };
        
        // Reset form
        this.formData = { name: '', email: '', message: '' };
        
      } catch (error) {
        console.error('Error submitting form:', error);
        this.submitStatus = {
          type: 'error',
          message: 'Failed to send message. Please try again.'
        };
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>