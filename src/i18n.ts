import { createI18n } from 'vue-i18n'
import config from './config/app.config.json'
import en from './locales/en.json'
import es from './locales/es.json'
import pl from './locales/pl.json'

const messages = { en, es, pl }
const availableLanguages = new Set(config.languages.available)

// Filter messages based on available languages
const filteredMessages: Record<string, any> = {}
for (const lang of availableLanguages) {
  if (messages[lang as keyof typeof messages]) {
    filteredMessages[lang] = messages[lang as keyof typeof messages]
  }
}

// Determine initial locale
const getInitialLocale = () => {
  if (availableLanguages.size === 1) {
    return Array.from(availableLanguages)[0]
  }
  
  const browserLang = navigator.language.split('-')[0]
  if (availableLanguages.has(browserLang)) {
    return browserLang
  }
  
  return config.languages.default
}

export default createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: config.languages.default,
  messages: filteredMessages
})