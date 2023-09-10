<template>
  <div class="header">
    <h2>{{ title }}</h2>
  </div>
  <div class="lorem-ipsum">
    <p>Lorem ipsum</p>
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
.header {
  background-color: #000;
  border: 1px solid #ccc;
  color: white;
  text-align: center;
  padding: 30px 0;
  width: 99.8%; 
  max-height: 100px; 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header h2{
  font-size: 60px;
  text-align: center;
  color:#fff;
  margin-top:2px;

}

.lorem-ipsum {
  margin-top: 100px; 
}
</style>

