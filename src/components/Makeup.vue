<template>
  <div id="app">
    <header>
      <h1>My<strong>Makeup</strong></h1>
      

    <div>
      <input
        type="text"
        class="search-field"
        placeholder=" Brand"
        required
        v-model="searchTerm"
      />
    </div>
     <div>
      <input 
        type="text"
        class="search-field"
        placeholder="Product Type"
        required
        v-model="searchType"
      />
     </div>
      <button v-on:click="makeupSearch">Search</button>
      <div class="bottom">
      <router-link to="/about"> About</router-link> |
      <router-link to="/booking"> Book an Appointment</router-link> |
      <router-link to="/services"> Services</router-link> |
      <router-link to="/makeup"> Makeup</router-link>
    </div>
    </header>

    <table v-if="myList.length > 0">
      <tr>
        <th>Brand</th>
        <th>Type</th>
        <th>Price</th>
      </tr>
      <tr v-for="item in myList" :key="item.id">
        <td>{{ item.brand }}</td>
        <td>{{ item.product_type }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AxiosResponse } from "axios";
import axios from "axios";
import { MakeupList, MakeupIO } from "@/datatypes";

@Component
export default class Makeup extends Vue {
  myList: Array<MakeupList> = [];
  searchTerm = "";
  searchType = "";
  quotableAPI = "https://makeup-api.herokuapp.com/api/v1";

  mounted(): void {
   // this.makeupSearch();
   //console.log(this.searchTerm);
  }
  makeupSearch(): void {
    console.log(this.searchTerm);
    axios
      .request({
        method: "GET",
    
        url: `${this.quotableAPI}/products.json?brand=${this.searchTerm}&product_type=${this.searchType}`,
        // params: {
        //   brand: this.searchTerm,
        //   product_type: this.searchType
        // },
      })
      .then((i: AxiosResponse) => {
        console.log(this.searchTerm);
        return i.data;
      })
      .then((i: Array<MakeupList>) => {
        this.myList.splice(0);
        this.myList.push(...i);
      });
  }
  
}
</script>

<style scoped>
a {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

a {
  text-decoration: blueviolet;
}

header {
  padding-top: 50px;
  padding-bottom: 50px;
}

h1 {
  color: tomato;
  font-size: 50px;
  font-weight: 400;
  text-align: center;
  text-transform: capitalize, uppercase;
}

strong {
  color: #435678;
}

.searchbox {
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 40px;
  padding-right: 40px;
}

table {
  width: 400px;
}
th {
  text-align: center;
}
table,
th,
td {
  border: 1px solid;
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