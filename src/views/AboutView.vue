<template>
  <div class="about">
    <About />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import About from "@/components/About.vue"; // @ is an alias to /src

@Component({
  components: {
    About,
  },
})
export default class AboutView extends Vue {}
</script>
<style scoped></style>
