<template>
  <div >

    <div class="container">
      <div class="row">
        <h1>Home</h1>
      </div>

      <div class="row">
        {{   }}
      </div>
    </div>


    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {},
  computed : {
    jobTitle(){
      return this.$store.state.jobTitle
    },
    
  }
}
</script>
