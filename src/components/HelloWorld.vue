<template>
  <div class="hello">
    <h1>{{ $t('message') }}</h1>
    <div>
      <select v-model="optionData.selected" @change="switchLang">
    　　<option v-for="(item, keys) in optionData.list" :key="keys">{{ item.name }}</option>
  　　</select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      optionData: {
        selected: '',
        list: [
          {lang: 'en', name: 'English'},
          {lang: 'zh', name: '简体中文'}
        ]
      }
    }
  },
  props: {
    msg: String
  },
  created: function () {
    console.log(this)
    // `this` 指向 vm 实例
    // console.log(this,this.$i18n.locale)
    this.initLang();
      
  },
  methods : {
    initLang() {
      const lang = this.$i18n.locale;
      const list = [...this.optionData.list];
      this.optionData.selected = list.filter(item => item.lang === lang)[0].name;
    },
    switchLang (event) {
      const val = event.target.value;
      const list = [...this.optionData.list];
      this.optionData.selected = val;
      this.$i18n.locale = list.filter(item => item.name === val)[0].lang;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
