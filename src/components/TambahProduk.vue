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
      newProductPrice:"",
      newProductColor:"",
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["addProduct"]),
    addProduct() {
      const newProduct = {
        id: (parseInt(this.products[this.products.length-1].id))+ 1,
        name: this.newProductName,
        data: {
          price: this.newProductPrice,
          color: this.newProductColor,
        },
      };
<<<<<<< HEAD
      this.$store.dispatch("addProduct",newProduct);
=======
      // this.addProduct(newProduct);
      this.$store.dispatch("tambahProduk",newProduct);
>>>>>>> 171d3ffb7a3420cd069848ed474b74dbbc5b69bc
      this.newProductName = "";
      this.newProductPrice = "";
      this.newProductColor = "";
    },
  },
};


</script>
