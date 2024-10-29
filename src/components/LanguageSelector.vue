<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import config from '../config/app.config.json'

const { locale } = useI18n()

const languages = computed(() => {
  return config.languages.available.map(code => ({
    code,
    flag: config.flags[code as keyof typeof config.flags],
    label: config.labels[code as keyof typeof config.labels]
  }))
})

const showSelector = computed(() => {
  return config.languages.available.length > 1
})

const selectLanguage = (code: string) => {
  locale.value = code
}
</script>

<template>
  <div v-if="showSelector" class="language-selector">
    <CButtonGroup>
      <CButton 
        v-for="lang in languages" 
        :key="lang.code"
        :color="locale === lang.code ? 'primary' : 'secondary'"
        @click="selectLanguage(lang.code)"
        class="flag-button"
        :title="lang.label"
      >
        <span class="flag">{{ lang.flag }}</span>
      </CButton>
    </CButtonGroup>
  </div>
</template>

<style scoped>
.language-selector {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.flag-button {
  min-width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flag {
  font-size: 1.5rem;
  line-height: 1;
}
</style>