<template>
  <main>
    <!-- <h1>{{ company }}</h1>
    <h3>{{ copyright }}</h3> -->
    <h1>Learning mixins in vue js</h1>
  </main>
</template>

<script>
import { CompanyMixin } from "../mixins/company";
export default {
  name: "Company-Profile",
  mixins: [CompanyMixin],
};
</script>

<style></style>
