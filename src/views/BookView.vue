<template>
  <main class="booking">
    <Scheduling/>
    
  </main>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import  Scheduling  from '@/components/Scheduling.vue';
@Component({
  name: "BookView",
  components: {
    Scheduling,
  },
})
export default class BookingView extends Vue {


  
}



</script>

