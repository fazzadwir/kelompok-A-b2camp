<template>
  <div>
    <h2>Tambah Produk</h2>
    <input
      type="text"
      v-model="newProductName"
      placeholder="Enter Product Name"
    />
    <button @click="addProduct">Add</button>
    <ul>
      <li v-for="(product, index) in produkTambah" :key="index">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      newProductName: "",
    };
  },
  computed: {
    ...mapState(["produkTambah"]),
  },
  methods: {
    ...mapActions(["addProduct"]),
    addProduct() {
      const newProduct = {
        id: Date.now().toString(),
        name: this.newProductName,
        data: {},
      };
      this.addProduct(newProduct);
      this.newProductName = "";
    },
  },
};
</script>

<style></style>
