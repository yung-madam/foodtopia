<template>
  <div id="header-app">
    <h1>Foodtopia</h1>
    <h2>Welcome</h2>
    <ul id="seznam">
      <li
        v-for="restaurace in seznamRestauraci"
        :key="restaurace.jmeno"
      >{{ restaurace.jmeno }} {{ restaurace.lokace }}</li>
    </ul>
    <v-btn></v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seznamRestauraci: [
        { jmeno: "u jelinku", lokace: "revnice" },
        { jmeno: "vujcas pub", lokace: "cernosice" },
        { jmeno: "adam hosapoda", lokace: "praha" }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
@import "./src/styles/global.sass"
h1
  color: $primary-color
  margin: 0
ul
  list-style: none
  padding: 0
</style>
