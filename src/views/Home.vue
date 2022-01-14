<template>
  <div class="home">
    <GraphSettings v-show="!showPanel" :type="typeSelected" />
    <h2 v-show="showPanel">Select the type of graph you want to create</h2>
    <section class="graph-types-panel" v-show="showPanel">
      <TypeSample
        v-for="(item, i) in graphs"
        :key="i"
        :graphType="item.type"
        @typeSelected="selected(item)"
        class="graph"
      />
    </section>

    <!-- <img v-bind:src="graphSrc" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import GraphSettings from "@/components/GraphSettings.vue";
import TypeSample from "@/components/TypeSample.vue";

export default {
  name: "Home",
  components: {
    GraphSettings,
    TypeSample,
  },
  data() {
    return {
      graphSrc: "",
      showPanel: true,
      typeSelected: "dd",
      graphs: [
        {
          type: "line",
        },
        {
          type: "bar",
        },
        {
          type: "pie",
        },
        {
          type: "doughnut",
        },
        {
          type: "radialGauge",
        },
        {
          type: "progressBar",
        },
      ],
    };
  },
  methods: {
    selected(item) {
      this.showPanel = false;
      this.typeSelected = item.type;
      // console.log(component.classList());
    },
  },
};
</script>

<style lang="scss" scoped>
h2{
  margin-top:70px ;
}
.graph-types-panel {
  margin: auto;
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  .graph {
    margin-top: 70px;
  }
}
</style>
