import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import messages from './langs'

function loadLocaleMessages () {
    const locales = require.context('./langs', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)
      if (matched && matched.length > 1) {
        const locale = matched[1]
        messages[locale] = locales(key)
      }
    })
    return messages
}
  
// 初始化
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: localStorage.lang || 'zh',
    messages: loadLocaleMessages()
})

export default i18n;