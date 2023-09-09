<template>
  <header class="header">
    <h1 class="header-title">Header</h1>
  </header>
  <div class="lorem-ipsum">
    <p>Lorem ipsum</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
header: String,
});

console.log(props.header); 
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

.header-title {
  font-size: 60px;
  text-align: center;
}

.lorem-ipsum {
  margin-top: 100px; 
}
</style>

