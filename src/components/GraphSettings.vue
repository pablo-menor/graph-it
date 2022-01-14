<template>
  <section class="settings-panel">
    <p>{{ type }}</p>
    <ProgressBarSettings/>
  </section>
</template>

<script>
import ProgressBarSettings from "@/components/ProgressBarSettings.vue";

export default {
  name: "GraphSettings",
  components: {
    ProgressBarSettings,
  },
  props: {
    type: String,
  },
};
</script>

<style scoped lang="scss" >
.settings-panel {
  width: 100vw;
  height: 100vh;
  background-color: red;
}
</style>