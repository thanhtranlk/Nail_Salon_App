<template>
  <main>
    <table class="hands" id="rounded">
      <tr>
        <th>Nails</th>
        <th></th>
      </tr>
      <tr v-for="(service, pos) in nails" :key="pos">
        <td>{{ service.name }}</td>
        <td>${{ service.price }}</td>
      </tr>
    </table>
    <table class="feet" id="rounded">
      <tr>
        <th>Pedicures</th>
        <th></th>
      </tr>
      <tr v-for="(service, pos) in pedicures" :key="pos">
        <td>{{ service.name }}</td>
        <td>${{ service.price }}</td>
      </tr>
    </table>
    <table class="misc" id="rounded">
      <tr>
        <th>Misc</th>
        <th></th>
      </tr>
      <tr v-for="(service, pos) in misc" :key="pos">
        <td>{{ service.name }}</td>
        <td>${{ service.price }}</td>
      </tr>
    </table>
    <div class="bottom">
      <router-link to="/about"> About</router-link> |
      <router-link to="/booking"> Book an Appointment</router-link> |
      <router-link to="/services"> Services</router-link> |
      <router-link to="/makeup"> Makeup</router-link>
    </div>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Services extends Vue {
  nails = [
    //add descriptions later possibly
    //add Est time for appointment booking
    { name: "Acrylic Full Set", price: 30 },
    { name: "Acrylic Fill in", price: 20 },
    { name: "Gel Full Set", price: 35 },
    { name: "Gel Fill in", price: 25 },
    { name: "Manicure", price: 14 },
    { name: "Shellac Manicure", price: 20 },
    { name: "Acrylic Nail Fix", price: 3 },
    { name: "Polish Change", price: 8 },
    { name: "Rhinestones", price: 5 },
    { name: "Designs", price: 3 },
  ];

  pedicures = [
    { name: "Pedicure", price: 28 },
    { name: "Shellac pedicure", price: 34 },
    { name: "Polish Change", price: 12 },
  ];

  misc = [
    { name: "Eyebrow wax", price: 10 },
    { name: "Soak Off", price: 10 },
    { name: "nail length: L/XL", price: 5 },
  ];
}
</script>

<style scoped>
tr:nth-child(even) {
  background-color: lightsteelblue;
}

tr:nth-child(odd) {
  background-color: white;
}
tr {
  font-size: 1.5em;
}
td:first-child {
  padding-left: 0.25em;
  text-align: left;
}
td:last-child {
  padding-right: 0.25em;
  text-align: right;
}

table {
  font-family: "Dancing Script", cursive;
}

table {
  border-spacing: 0;
  border-radius: 1em;
}
th {
  font-size: 2em;
}
th:first-child {
  border-radius: 0.5em 0 0 0;
}

th:last-child {
  border-radius: 0 0.5em 0 0;
}
tr:last-child td:first-child {
  border-radius: 0 0 0 0.5em;
}
tr:last-child td:last-child {
  border-radius: 0 0 0.5em 0;
}
#rounded {
  float: left;
  width: 40%;
  padding: 2em;
}
.bottom {
  display: block;
  width: 80%;
  overflow: auto;
  color: black;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  top: 0px;
}
</style>
