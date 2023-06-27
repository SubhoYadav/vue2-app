<template>
  <div id="app">
    <h1>Hey There</h1>
    <h1>{{ company }}</h1>
    <h3>{{ copyright }}</h3>
    <p>{{ JSON.stringify(friend) }}</p>
    <ul>
      <li v-for="(name, index) in names" :key="index">{{ name }}</li>
      <!-- ALways remember to :key="index" when iterating an element -->
    </ul>
    <button v-on:click="conflicting">check conflicting</button>
    <input type="text" v-model="input" placeholder="Name here....." />
    <button v-on:click="getInput('Subho')">Get Name</button>
    <div>{{ profession }} from Global Mixin</div>
  </div>
</template>

<script>
import { companyMixin } from "./mixins/company";
export default {
  name: "App",
  mixins: [companyMixin],
  data() {
    return {
      friend: ["Shubham Kumar Singh"],
    };
  },
  mounted: function () {
    console.log("Mounted hook of App component");
  },
  methods: {
    conflicting: function () {
      console.log("From App component!");
    },
  },
};
</script>

<style></style>
