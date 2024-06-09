<template>
  <div>
    <h2>Tambah Produk</h2>
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
      newProductPrice:"",
      newProductColor:"",
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
        data: {
          price: this.newProductPrice,
          color: this.newProductColor,
        },
      };
      // this.addProduct(newProduct);
      this.$store.dispatch("tambahProduk",newProduct);
      this.newProductName = "";
      this.newProductPrice = "";
      this.newProductColor = "";
    },
  },
};


</script>

<style></style>
