<template>

    <Header title="Header"/>
    <div class="card-list">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :title="`Card ${index + 1}`"
       
      />
  
  <Footer title="Footer"  />
  </div>
</template>

<script>
import { ref } from "vue";
import Header from "./components/Header.vue"; 
import Card from "./components/Card.vue"; 
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header, 
    Card,   
    Footer,
  },
  setup() {
    const cards = ref([ {}, {}, {} ]);

    return {
      cards, 
    };
  },
};
</script>

<style>
.card-list {
  display: flex;
  justify-content: space-around;
}
</style>
