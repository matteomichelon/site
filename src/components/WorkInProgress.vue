<template>
  <div class="progress">
    <h1>Work in progress</h1>
  </div>
</template>

<script>
export default {
  name: "WorkInProgress",
  props: {
    msg: String,
  },
};
</script>

<style sco lang="scss">
.progress {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
