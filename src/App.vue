<template>
  <div class="app">
    <NavbarComponent :active-section="activeSection" :is-scrolled="isScrolled" />
    <HomeSection id="home" />
    <AboutSection id="about" />
    <ProjectsSection id="projects" />
    <ContactSection id="contact" />
    <footer class="py-6 text-center text-gray-600">
      <p>© {{ new Date().getFullYear() }} Sahar Eitam. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import NavbarComponent from './assets/components/Navbar.vue';
import HomeSection from './assets/components/HomeSection.vue';
import AboutSection from './assets/components/AboutSection.vue';
import ProjectsSection from './assets/components/ProjectsSection.vue';
import ContactSection from './assets/components/ContactSection.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    HomeSection,
    AboutSection,
    ProjectsSection,
    ContactSection
  },
  data() {
    return {
      activeSection: 'home',
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;

      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current && current !== this.activeSection) {
        this.activeSection = current;
        
        // Track page view using global gtag function
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: `Sahar Eitam | ${current.charAt(0).toUpperCase() + current.slice(1)}`,
            page_path: `/${current}`,
            page_location: window.location.href
          });
        }
      }
    }
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f1e6;
  min-height: 100vh;
}
</style>