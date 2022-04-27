<template>
  <main class="about">
    <h1>Simply Nails</h1>
    <iframe id="map" :src="location"></iframe>
    <blockquote
      id="contactInfo"
      v-for="(info, name) in contactInfo"
      :key="name"
    >
      <span id="name"> {{ name }} : </span>
      <span v-if="name !== 'Hours'"> {{ info }}</span>
      <p v-else v-for="(hours, pos) in info" :key="pos">{{ hours }}</p>
    </blockquote>
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
export default class About extends Vue {
  location =
    "https://maps.google.com/maps?q=Manitou%20Hall,%2010880%20N%20Campus%20Dr,%20Allendale,%20MI%2049401&t=&z=13&ie=UTF8&output=embed";
  contactInfo = {
    Address: "10880 N Campus Dr, Allendale, MI 49401",
    Phone: "(371) - 427 - 2022",
    Hours: [
      "Monday-Friday: 10am - 8pm",
      "Saturday:10am - 10pm",
      "Sunday:12pm - 8pm",
    ],
  };
}
</script>

<style scoped>
#map {
  position: relative;
  text-align: center;
  width: 400px;
  height: 250px;
}
h1,
blockquote {
  font-family: "Dancing Script", cursive;
}
#name {
  font-weight: bold;
  font-size: 1em;
}
.about {
  background-position: 50%, 50%;
  background-image: linear-gradient(180deg, #ffc0cbb3, #f4e4f3b3),
    url(../../public/cherryBlossom.jpg);
  background-size: cover;
  min-height: 100%;
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
  align-content: center;
}
</style>
