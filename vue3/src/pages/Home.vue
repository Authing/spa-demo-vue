<template>
  <div class="home-container">
    <div>{{ message }}</div>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script scoped setup>
import HelloWorld from '../components/HelloWorld'

const message = 'This is home page ~~'
</script>
