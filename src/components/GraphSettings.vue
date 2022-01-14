<template>
    <section class="settings-panel">
      <p>{{type}}</p>
    </section>
</template>

<script>
export default {
  name: "GraphSettings",
  props: {
    type : String
  }
};
</script>

<style scoped lang="scss" >
.settings-panel{
    width: 35vw;
    height: 100vh;
    background-color: red;
}
</style>