<template>
  <div class="hello-world-container">
    {{ message }}
  </div>
</template>

<script scoped setup>
import { inject } from 'vue'
const message = 'This is HelloWorld component ~'

const $authing = inject('$authing')
console.log('$authing: ', $authing)
</script>
