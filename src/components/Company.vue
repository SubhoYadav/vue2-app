<template>
  <main>
    <h1>Learning mixins in vue js</h1>
  </main>
</template>

<script>
import { CompanyMixin } from "../mixins/company";
export default {
  name: "CompanyProfile",
  mixins: [CompanyMixin],
};
</script>

<style></style>
