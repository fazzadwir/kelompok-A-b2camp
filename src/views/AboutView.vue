
<template>
    <input type="text" placeholder="Serch here">

  <h1>List Phone Mobile Product</h1>
<div class="tablel">
  <!--Bagian Button-->
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
      <tr v-for="(product, index) in product" :key="index">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.data.color }}</td>
        <td>{{ product.data.capacity }}</td>
        <td>{{ product.data.price }}</td>
        <td>{{ product.data.generation }}</td>
        <td>{{ product.data.year }}</td>
        <td>{{ product.data.cpumodel }}</td>
        <td>{{ product.data.screensize }}</td>
        <td>{{ product.data.caseSize }}</td>
        <td>{{ product.data.description }}</td> 
        <td>
          <span class="action">
            <a href="#">buy</a>
            <a href="#">keranjang</a>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  <!--Bagian bawah-->
  <div classs="section-1">
    <h1>Google Pixel 6 pro</h1>
    <img src="../assets/pixel 6 pro.jpg">
    <p>color : white</p>
    <p>capacity : 120 GB</p>
    <a href="#">Purchase</a> |
    <a href="#">Delete</a>
  </div>
  <div class="section-2">
    <h1>Apple Iphone 12 Mini</h1>
    <img src="../assets/mini 12.jpg">
    <p>color : white</p>
    <p>capacity : 120 GB</p>
    <a href="#">Purchase</a> |
    <a href="#">Delete</a>
  </div>
  <div class="section-3">
    <h1>Apple Iphone 12 Pro Max</h1>
    <img src="../assets/12 promax.jpg">
    <p>color : white</p>
    <p>capacity : 120 GB</p>
    <a href="#">Purchase</a> |
    <a href="#">Delete</a>
  </div>
  <div class="section-4">
    <h1>Google Pixel 6 Pro</h1>
    <img src="../assets/pixel 6 pro.jpg">
    <p>color : white</p>
    <p>capacity : 120 GB</p>
    <a href="#">Purchase</a> |
    <a href="#">Delete</a>
  </div>
  <div class="section-5">
    <h1>Google Pixel 6 Pro</h1>
    <img src="../assets/pixel 6 pro.jpg">
    <p>color : white</p>
    <p>capacity : 120 GB</p>
    <a href="#">Purchase</a> |
    <a href="#">Delete</a>
  </div>
  <div class="section-6">
    <h1>Google Pixel 6 Pro</h1>
    <img src="../assets/pixel 6 pro.jpg">
    <p>color : white</p>
    <p>capacity : 120 GB</p>
    <a href="#">Purchase</a> |
    <a href="#">Delete</a>
  </div>
  <div class="section-7">
    <h1>Google Pixel 6 Pro</h1>
    <img src="../assets/pixel 6 pro.jpg">
    <p>color : white</p>
    <p>capacity : 120 GB</p>
    <a href="#">Purchase</a> |
    <a href="#">Delete</a>
  </div>
  <div class="section-8">
    <h1>Google Pixel 6 Pro</h1>
    <img src="../assets/pixel 6 pro.jpg">
    <p>color : white</p>
    <p>capacity : 120 GB</p>
    <a href="#">Purchase</a> |
    <a href="#">Delete</a>
  </div>
  <div class="section-9">
    <h1>Google Pixel 6 Pro</h1>
    <img src="../assets/pixel 6 pro.jpg">
    <p>color : white</p>
    <p>capacity : 120 GB</p>
    <a href="#">Purchase</a> |
    <a href="#">Delete</a>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      product:[
   {
      "id": "1",
      "name": "Google Pixel 6 Pro",
      "data": {
         "color": "Cloudy White",
         "capacity": "128 GB"
      }
   },
   {
      "id": "2",
      "name": "Apple iPhone 12 Mini, 256GB, Blue",
      "data": {
        "color": "black",
        "capacity": "500 GB"
      }
   },
   {
      "id": "3",
      "name": "Apple iPhone 12 Pro Max",
      "data": {
         "color": "Cloudy White",
         "capacity GB": 512
      }
   },
   {
      "id": "4",
      "name": "Apple iPhone 11, 64GB",
      "data": {
         "price": 389.99,
         "color": "Purple"
      }
   },
   {
      "id": "5",
      "name": "Samsung Galaxy Z Fold2",
      "data": {
         "price": 689.99,
         "color": "Brown"
      }
   },
   {
      "id": "6",
      "name": "Apple AirPods",
      "data": {
         "generation": "3rd",
         "price": 120
      }
   },
   {
      "id": "7",
      "name": "Apple MacBook Pro 16",
      "data": {
         "year": 2019,
         "price": 1849.99,
         "cpumodel": "Intel Core i9",
         "Hard disk size": "1 TB"
      }
   },
   {
      "id": "8",
      "name": "Apple Watch Series 8",
      "data": {
         "Strap Colour": "Elderberry",
         "caseSize": "41mm"
      }
   },
   {
      "id": "9",
      "name": "Beats Studio3 Wireless",
      "data": {
         "Color": "Red",
         "caseSize": "49mm",
         "description": "High-performance wireless noise cancelling headphones"
      }
   },
   {
      "id": "10",
      "name": "Apple iPad Mini 5th Gen",
      "data": {
         "capacity": "64 GB",
         "caseSize": "50mm",
         "screensize": 7.9
      }
   },
   {
      "id": "11",
      "name": "Apple iPad Mini 5th Gen",
      "data": {
         "capacity": "254 GB",
         "screensize": 7.9
      }
   },
   {
      "id": "12",
      "name": "Apple iPad Air",
      "data": {
         "generation": "4th",
         "Price": "419.99",
         "capacity": "64 GB"
      }
   },
   {
      "id": "13",
      "name": "Apple iPad Air",
      "data": {
         "generation": "4th",
         "Price": "519.99",
         "capacity": "256 GB"
      }
   }
]
    }
  }
};
</script>
<style>
@import'../assets/scss/tabel.scss'
</style>


