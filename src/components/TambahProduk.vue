<template>
  
  <div class="mt">
    <h1><u>Tambah Produk</u></h1>
  <p>
    <label>Product Name</label>
  
    <input
      type="text"
      v-model="newProductName"
      placeholder="Enter Product Name"
    />
  </p>
    <br>
  <p>
    <label>Product Capacity</label>
    
    <input
      type="number/text"
      v-model="newProductCapacity"
      placeholder="Enter Product Capacity"
      />
  </p>
      <br>
  <p>
    <label>Product Price</label>
   
    <input
      type="number"
      v-model="newProductPrice"
      placeholder="Enter Product Price"
    />
  </p>
    <br>
  <p>
    <label>Product Color</label>
 
    <input
      type="text"
      v-model="newProductColor"
      placeholder="Enter Product Color"
    />
  </p>
    <br>

    <button @click="addProduct" class="btn">Confirm Add</button>
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
      newProductCapacity: "",
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
          capacity: this.newProductCapacity,
        },
        
      };
      this.$store.dispatch("addProduct", newProduct);
      this.newProductName = "";
      this.newProductPrice = "";
      this.newProductColor = "";
      this.newProductCapacity = "";
      //redirect ke halaman Tabel data
      this.$router.push('/');
    },
  },
};
</script>

