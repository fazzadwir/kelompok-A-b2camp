<template>
  <div class="home">
    <h1>List Phone Mobile Product</h1>
    <div class="firstInput">
      <input type="text" placeholder="Search here" v-model="input" />
      <button @click="search">Search</button>
    </div>
    <TabelComponent
      :products="filteredProducts"
      @delete-produk="deleteProduk"
    />
    <DeleteProduk />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import TabelComponent from "../components/TabelComponent.vue";
import TambahProduk from "../components/TambahProduk.vue";
import DeleteProduk from "../components/DeleteProduk.vue";

export default {
  components: {
    TabelComponent,
    TambahProduk,
    DeleteProduk,
  },
  computed: {
    ...mapState(["produkDelete"]),
    ...mapGetters(["filteredProducts", "totalPrice"]),
  },
  methods: {
    ...mapActions(["deleteProduk"]),
    search() {
      this.setInput(this.input);
    },
  },
};
</script>
