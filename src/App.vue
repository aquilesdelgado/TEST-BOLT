<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSelector from './components/LanguageSelector.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import AppHeader from './components/AppHeader.vue'

const { t } = useI18n()
const touchCount = ref(0)

const handleTouch = () => {
  touchCount.value++
}
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <main class="main-content">
      <div 
        class="touch-area"
        @touchstart="handleTouch"
        @click="handleTouch"
      >
        <h1>{{ t('touch.start') }}</h1>
        <p v-if="touchCount > 0">Touches: {{ touchCount }}</p>
      </div>
    </main>
    <LanguageSelector />
    <ThemeToggle />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  width: 100vw;
  position: relative;
}

.main-content {
  padding-top: 4rem;
  min-height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
}

.touch-area {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>