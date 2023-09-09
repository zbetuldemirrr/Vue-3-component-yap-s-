<template>
  <footer class="footer">

      <h1 class="footer-title"> Footer</h1>
  </footer>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
   
    const name = ref('Footer');

  
    const otherProperty = ref('Other Property Value');

    const componentData = {
      name,
      otherProperty,
    };

    return componentData;
  },
};
</script>

<style scoped>
.footer {
   background-color: #ccc;
  border: 1px solid #000; 
  color: white;
  text-align: center;
  padding: 30px 0;
 
 width: 99.8%; /* Genişlik */
 max-height:500px;/* Maksimum yükseklik */
  position: fixed; /* Sabit konum */

bottom:0px;
  left: 0;
    text-align: center;
    height: 810px;
 
 

}

 .footer-title{
  font-size:170px; /* Yazı boyutu */
  text-align: center; /* Yazı hizalama */

 
 }
</style>