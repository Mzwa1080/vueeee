
<template>
  
  <main class="container-fluid">
    <Navbar />
    
    <router-view/>



    <Footer />
  </main>
  
</template>

<script>  
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  export default {
    components : {
      Navbar,
      Footer
    }
  }
</script>


<style src="@/assets/css/style.css"></style>
