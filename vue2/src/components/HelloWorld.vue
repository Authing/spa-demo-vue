<template>
  <div class="hello-world-container">
    {{ message }}
  </div>
</template>

<script scoped>
export default {
  name: 'HelloWorld',
  inject: ['$authing'],
  data () {
    return {
      message: 'This is HelloWorld component ~'
    }
  },
  mounted () {
    console.log('$authing: ', this.$authing)
  }
}
</script>
