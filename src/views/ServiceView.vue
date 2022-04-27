<template>
  <main class="services">
    <Services />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Services from "@/components/Services.vue";

@Component({
  name: "ServiceView",
  components: {
    Services,
  },
})
export default class ServiceView extends Vue {}
</script>
<style scoped>
div {
  float: bottom;
}
</style>
