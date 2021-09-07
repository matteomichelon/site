// Default
import Vue from 'vue';
import App from './App.vue';

// Import Material
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

// Use Material
Vue.use( VueMaterial );
Vue.config.productionTip = false;

// Default
Vue.config.productionTip = false

// Default
new Vue( {
  render: h => h( App )
} ).$mount( '#app' )
