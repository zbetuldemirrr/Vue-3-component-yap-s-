<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p v-if="content">{{ content }}</p>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: String,
  content: String,
});

console.log( props.title);
console.log( props.content);
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 100px; 
  margin: 10px;
  background-color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   top:5; 
   margin: 500px; 
   
}

.card-list {
  display: flex;
  justify-content: space-around;

}

</style>
