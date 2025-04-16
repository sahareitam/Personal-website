<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-900">SE</div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <button
            v-for="item in navItems"
            :key="item.id"
            :class="[
              'px-3 py-2 rounded font-medium capitalize',
              activeSection === item.id ? 'text-gray-900' : 'text-gray-600'
            ]"
            @click="scrollTo(item.id)"
          >
            {{ item.label }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button 
            class="p-2 rounded text-gray-600"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span v-if="mobileMenuOpen">✕</span>
            <span v-else>☰</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white p-4">
      <div class="flex flex-col space-y-2">
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="[
            'px-3 py-2 rounded text-left font-medium capitalize',
            activeSection === item.id ? 'text-gray-900' : 'text-gray-600'
          ]"
          @click="scrollTo(item.id)"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent', // שינינו ל-multi-word
  props: {
    activeSection: {
      type: String,
      required: true
    },
    isScrolled: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      mobileMenuOpen: false,
      navItems: [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" }
      ]
    }
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      this.mobileMenuOpen = false;
    }
  }
}
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
}

button:hover {
  color: #000;
}
</style>