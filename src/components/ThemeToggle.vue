<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.body.classList.toggle('dark-theme')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.body.classList.add('dark-theme')
  }
})
</script>

<template>
  <div class="theme-toggle">
    <CButton 
      color="primary" 
      variant="ghost"
      @click="toggleTheme"
      :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    >
      <span class="theme-icon">{{ isDark ? '🌙' : '☀️' }}</span>
    </CButton>
  </div>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 1000;
}

.theme-icon {
  font-size: 1.5rem;
  line-height: 1;
}
</style>