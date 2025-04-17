<template>
  <section id="home" class="section">
    <div class="container">
      <div class="profile-image">
        <img 
          :src="profileImage" 
          alt="Sahar Eitam" 
        />
      </div>
      <h1>Sahar Eitam</h1>
      <h2>Software Engineering Student</h2>
      <p class="intro">
        Dedicated 3rd year Software & Information Systems Engineering student at Ben Gurion University 
        with a strong foundation in Full Stack development, machine learning, and software architecture. 
        Experienced with Frontend/Backend development, RESTful APIs, SQL databases, and cloud technologies. 
        Enthusiastic about algorithm development and scientific computing.
      </p>
      <div class="social-links">
        <a 
          href="https://github.com/sahareitam" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a 
          href="https://linkedin.com/in/sahar-eitam-73b732228" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-btn"
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
import profileImage from '@/profile_image.jpeg';

export default {
  name: 'HomeSection',
  data() {
    return {
      profileImage
    };
  }
}
</script>

<style scoped>
.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.profile-image {
  width: 180px;
  height: 180px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 0.75rem;
}

h2 {
  font-size: 1.25rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.intro {
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.7;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-btn {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  transition: all 0.3s ease;
}

.social-btn:hover {
  color: #1a202c;
  border-color: #1a202c;
}
</style>