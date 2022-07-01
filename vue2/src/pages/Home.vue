<template>
  <div class="home-container">
    <div>{{ message }}</div>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script scoped>
import HelloWorld from '../components/HelloWorld'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      message: 'This is home page ~'
    }
  }
}
</script>
