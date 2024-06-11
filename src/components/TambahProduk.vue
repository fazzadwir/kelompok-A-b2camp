<template>
  <div class="mt">
    <h1>Tambah Produk</h1>
    <input
      type="text"
      v-model="newProductName"
      placeholder="Enter Product Name"
    />
    <input
      type="number"
      v-model="newProductPrice"
      placeholder="Enter Product Price"
    />
    <input
      type="text"
      v-model="newProductColor"
      placeholder="Enter Product Color"
    />
    <button @click="addProduct">Add</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      newProductName: "",
      newProductPrice: "",
      newProductColor: "",
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["addProduct"]),
    addProduct() {
      const newProduct = {
        id:
          this.products.length > 0
            ? parseInt(this.products[this.products.length - 1].id) + 1
            : 1,
        name: this.newProductName,
        data: {
          price: this.newProductPrice,
          color: this.newProductColor,
        },
      };
      this.$store.dispatch("addProduct", newProduct);
      this.newProductName = "";
      this.newProductPrice = "";
      this.newProductColor = "";
    },
  },
};
</script>
