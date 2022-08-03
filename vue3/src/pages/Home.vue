<template>
  <div class="home-container">
    <div style="margin-bottom: 30px;">{{ message }}</div>
    <button @click="toLogin">go to login page</button>
  </div>
</template>

<script scoped>
const message = 'This is home page ~~'

// Composition API
// import { useRouter } from 'vue-router'

// const router = useRouter()

// const toLogin = () => {
//   router.push({
//     name: 'Login'
//   })
// }


// Options API
export default {
  data () {
    return {
      message
    }
  },
  mounted () {
    console.log('this: ', this.message)
  },
  methods: {
    toLogin () {
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>
