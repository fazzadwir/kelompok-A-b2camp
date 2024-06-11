<template>
  <div class="home">
    <h1><u>List Phone Mobile Product</u></h1>
    <div class="firstInput">
      <input type="text" placeholder="Search here" v-model="input" required />
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
      this.$store.dispatch("setInput", this.input);
    },
  },
};
</script>
