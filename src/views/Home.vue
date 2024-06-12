<template>
<!--ini parent-->
  <div class="home mt">
    <h1>List Phone Mobile Product</h1>
    <div class="firstInput">
      <input type="text" placeholder="Search here" v-model="input" />
      <button @click="search">Search</button>
    </div>
    <TabelComponent
      :products="filteredProducts"
      @delete-produk="deleteProduk"
    />
    <ListProduk
      text="Deleted"
      :datas="produkDelete"
      desc="Masukan Delete Produk"
    />
    <ListProduk
      text="Tambahan"
      :datas="produkTambah"
      desc="Masukan Tambah Produk"
    />
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from "vuex";
  import TabelComponent from "@/components/TabelComponent.vue";
  import ListProduk from "@/components/ListProduk.vue";

  export default {
    components: {
      TabelComponent,
      ListProduk
    },
    computed: {
      ...mapState(["produkDelete"]),
      ...mapState(["produkTambah"]),
      ...mapGetters(["filteredProducts"]),
    },
    methods: {
      ...mapActions(["deleteProduk"]),
      search() {
        this.$store.dispatch("setInput", this.input)
      },
    },
  };
</script>
