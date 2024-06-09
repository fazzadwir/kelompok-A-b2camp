<template>
  <h1>Data Delete</h1>
  <div class="delete-container">
    <ul>
      <li v-for="(product, index) in produkDelete" :key="index">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["produkDelete"]),
  },
};
</script>

<style>
.delete-container {
  background-color: whitesmoke;
}
</style>
