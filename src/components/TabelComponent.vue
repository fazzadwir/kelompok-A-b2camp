<template>
  <div class="table">
    <table>
      <thead>
        <tr style="background-color: #ffff99;">
          <th>No</th>
          <th>Nama</th>
          <th>Color</th>
          <th>Capacity</th>
          <th>Price</th>
          <th>Generation</th>
          <th>Year</th>
          <th>CPU Model</th>
          <th>Screen Size</th>
          <th>Case Size</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.data?.color || "N/A" }}</td>
          <td>{{ product.data?.capacity || "N/A" }}</td>
          
          {{ datarupiah(product.data.price)}}

          <td>{{ product.data?.generation || "N/A" }}</td>
          <td>{{ product.data?.year || "N/A" }}</td>
          <td>{{ product.data?.cpumodel || "N/A" }}</td>
          <td>{{ product.data?.screensize || "N/A" }}</td>
          <td>{{ product.data?.caseSize || "N/A" }}</td>
          <td>{{ product.data?.description || "N/A" }}</td>
          <td>
            <span class="action">
              <button @click="deleteProduk(product.id)">Delete</button>
            </span>
          </td>
        </tr>
        <tr id="total">
          <td colspan="11" style="background-color: #ffc107; ;">Total Price</td>
          <td>{{ datarupiah(this.formattedTotalPrice) }}</td>
        </tr>
        <tr id="zero" v-if="products.length === 0">
          <td colspan="12">Data not found!</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { convertToRupiah } from "convert-to-rupiah";

export default {
  props: {
    products: Array,
  },
  computed: {
    ...mapGetters (["totalPrice"]),
    formattedTotalPrice() {
      return this.totalPrice.toFixed(2);
    },
  },
  methods: {
    deleteProduk(id) {
      this.$emit("delete-produk", id);
    },
    datarupiah(val) {
      let a = val 
      if (a == null || a == "undifined"){
        a = ""
      }
      return convertToRupiah(a, { dot: '.', floatingPoint: 0 })
    }
  },
};
</script>
