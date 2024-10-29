<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import moment from 'moment'
import config from '../config/app.config.json'

const { t } = useI18n()
const currentTime = ref(moment())
let timeInterval: number

const updateTime = () => {
  currentTime.value = moment()
}

onMounted(() => {
  timeInterval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timeInterval)
})

const formatTime = (time: moment.Moment) => {
  return time.format(config.clock.format)
}
</script>

<template>
  <header class="app-header">
    <div class="logo">
      <img src="/vite.svg" alt="Logo" />
    </div>
    <h1 class="welcome">{{ t('header.welcome') }}</h1>
    <div class="clock">{{ formatTime(currentTime) }}</div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: var(--cui-header-bg, var(--cui-body-bg));
  border-bottom: 1px solid var(--cui-border-color);
  z-index: 1000;
}

.logo {
  height: 2.5rem;
  display: flex;
  align-items: center;
}

.logo img {
  height: 100%;
}

.welcome {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 500;
}

.clock {
  font-size: 1.2rem;
  font-family: monospace;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--cui-dark-bg-subtle);
  color: var(--cui-body-color);
}

:global(body.dark-theme) .clock {
  background-color: var(--cui-dark);
  color: var(--cui-light);
}
</style>