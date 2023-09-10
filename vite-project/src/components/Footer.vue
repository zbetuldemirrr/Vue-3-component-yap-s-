<template>
  <div class="footer">
   <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    title: String,
  });
  console.log( props.title);
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


 .footer h2 {
  font-size: 150px;
  text-align:center;
  color: #000;
 
 }
</style>
