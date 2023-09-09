import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import Footer from './components/Footer.vue'

const app= createApp(App)
app.component('Header',Header)
app.component('Card',Card)
app.component('Footer',Footer)
app.mount('#app')