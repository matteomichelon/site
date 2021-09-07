<template>
  <div id="app">
    <WorkInProgress />
    <particles-bg
      type="lines"
      :canvas="{ backgroundColor: '#888' }"
      :bg="true"
    />
  </div>
</template>

<script>
// Import
import WorkInProgress from "./components/WorkInProgress.vue";
import { ParticlesBg } from "particles-bg-vue";

// Export Default
export default {
  name: "App",
  components: {
    WorkInProgress,
    ParticlesBg,
  },
};
</script>

<style lang="scss">
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
