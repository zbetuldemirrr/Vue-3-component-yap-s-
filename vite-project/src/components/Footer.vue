<template>
  <footer class="footer">

      <h1 class="footer-title"> Footer</h1>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  footer: String,
});

console.log(props.footer); 
</script>

<style scoped>
.footer {
   background-color: #ccc;
  border: 1px solid #000; 
  color: white;
  text-align: center;
  padding: 30px 0;
 
 width: 99.8%; 
 max-height:500px;
  position: fixed; 

bottom:0px;
  left: 0;
    text-align: center;
    height: 810px;
 
 

}

 .footer-title{
  font-size:170px; 
  text-align: center; 

 
 }
</style>
