<template>
  <div>
    <h2>Deleted product:</h2>
    <div class="deleted-container">
      <ul>
        <li v-for="(product, index) in produkDelete" :key="index">
          {{ product.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["produkDelete"]),
  },
};
</script>

<style>
.deleted-container {
  background-color: whitesmoke;
  margin-top: 10px;
}
</style>
