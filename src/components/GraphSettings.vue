<template>
  <section class="settings-panel">
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
}
</style>