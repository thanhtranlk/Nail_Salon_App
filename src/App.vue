<template>
  <main id="app">
    <nav>
      <!-- <router-link to="/login" >Login</router-link> | -->
      <!-- <router-link to="/about"> About</router-link> |
      <router-link to="/booking"> Book an Appointment</router-link> |
      <router-link to="/services"> Services</router-link> -->
      <transition name="shrink-explode">
        <router-view />
      </transition>
    </nav>
    <!-- <router-view/> -->
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
