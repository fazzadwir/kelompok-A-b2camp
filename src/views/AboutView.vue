<template>
  <div class="home">
    <h1>List Phone Mobile Product</h1>
    <input class="firstInput" type="text" placeholder="Search here" />

    
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
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
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.id }}</td>
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
                <a href="#">buy</a>
                <a href="#">keranjang</a>
              </span>
            </td>
          </tr>
          <tr>
            <td colspan="11">Total Harga</td>
            <td>${{ formattedTotalPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: "1",
          name: "Google Pixel 6 Pro",
          data: {
            color: "Cloudy White",
            capacity: "128 GB",
          },
        },
        {
          id: "2",
          name: "Apple iPhone 12 Mini, 256GB, Blue",
          data: {
            color: "Black",
            capacity: "500 GB",
          },
        },
        {
          id: "3",
          name: "Apple iPhone 12 Pro Max",
          data: {
            color: "Cloudy White",
            "capacity GB": 512,
          },
        },
        {
          id: "4",
          name: "Apple iPhone 11, 64GB",
          data: {
            price: 389.99,
            color: "Purple",
          },
        },
        {
          id: "5",
          name: "Samsung Galaxy Z Fold2",
          data: {
            price: 689.99,
            color: "Brown",
          },
        },
        {
          id: "6",
          name: "Apple AirPods",
          data: {
            generation: "3rd",
            price: 120,
          },
        },
        {
          id: "7",
          name: "Apple MacBook Pro 16",
          data: {
            year: 2019,
            price: 1849.99,
            cpumodel: "Intel Core i9",
            "Hard disk size": "1 TB",
          },
        },
        {
          id: "8",
          name: "Apple Watch Series 8",
          data: {
            "Strap Colour": "Elderberry",
            caseSize: "41mm",
          },
        },
        {
          id: "9",
          name: "Beats Studio3 Wireless",
          data: {
            color: "Red",
            caseSize: "49mm",
            description:
              "High-performance wireless noise cancelling headphones",
          },
        },
        {
          id: "10",
          name: "Apple iPad Mini 5th Gen",
          data: {
            capacity: "64 GB",
            caseSize: "50mm",
            screensize: 7.9,
          },
        },
        {
          id: "11",
          name: "Apple iPad Mini 5th Gen",
          data: {
            capacity: "254 GB",
            screensize: 7.9,
          },
        },
        {
          id: "12",
          name: "Apple iPad Air",
          data: {
            generation: "4th",
            price: "419.99",
            capacity: "64 GB",
          },
        },
        {
          id: "13",
          name: "Apple iPad Air",
          data: {
            generation: "4th",
            price: "519.99",
            capacity: "256 GB",
          },
        },
      ],
    };
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
  beforeMount() {
    this.products.forEach((product) => {
      if (!product.data) {
        product.data = {};
      }
      if (product.data.price === undefined) {
        product.data.price = 0;
      }
    });
  },
};
</script>

<style>
@import "@/assets/scss/style.scss";
</style>
