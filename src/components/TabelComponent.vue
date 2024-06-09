<template>
  <div class="table">
    <table>
      <thead>
        <tr>
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
          <td>
            <input
              type="number"
              v-model.number="product.data.price"
              placeholder="Enter price"
            />
          </td>
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
          <td colspan="11">Total Price</td>
          <td>${{ formattedTotalPrice }}</td>
        </tr>
        <tr id="zero" v-if="products.length === 0">
          <td colspan="12">Data not found!</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  computed: {
    totalPrice() {
      return this.products.reduce((sum, product) => {
        if (product.data && product.data.price) {
          return sum + parseFloat(product.data.price);
        }
        return sum;
      }, 0);
    },
    formattedTotalPrice() {
      return Math.round(this.totalPrice);
    },
  },
  methods: {
    deleteProduk(id) {
      this.$emit("delete-produk", id);
    },
  },
};
</script>
