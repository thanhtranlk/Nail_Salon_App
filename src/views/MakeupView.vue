<template>
  <div>
    <Makeup />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Makeup from "@/components/Makeup.vue"; // @ is an alias to /src

@Component({
  components: {
    Makeup,
  },
})
export default class MakeupView extends Vue {}
</script>
<style scoped></style>