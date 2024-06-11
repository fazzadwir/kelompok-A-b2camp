import { createStore } from "vuex";

export default createStore({
  state: {
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
          description: "High-performance wireless noise cancelling headphones",
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
    input: " ",
    produkTambah: [],
    produkDelete: [],
  },
  getters: {
    filteredProducts: (state) => {
      if (state.input) {
        if (state.input.length) {
          state.input = state.input.toLowerCase().replaceAll(" ", "");
          return state.products.filter((product) =>
            product.name.toLowerCase().replaceAll(" ", "").includes(state.input)
          );
        }
      }
      return state.products;
    },
    totalPrice: (state, getters) => {
      let temp = [];
      if (state.input && state.input.length > 0) {
        temp = getters.filteredProducts;
      } else {
        temp = state.products;
      }
      return temp.reduce((sum, product) => {
        if (product.data && product.data.price) {
          return sum + parseFloat(product.data.price);
        }
        return sum;
      }, 0);
    },
  },
  mutations: {
    DELETE_PRODUK(state, id) {
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        const deletedProduct = state.products.splice(index, 1)[0];
        state.produkDelete = [...state.produkDelete, deletedProduct];
      }
    },
    SET_INPUT(state, input) {
      state.input = input;
    },
    ADD_PRODUK(state, product) {
      state.products = [...state.products, product];
      state.produkTambah = [...state.produkTambah, product];
    },
  },
  actions: {
    deleteProduk({ commit }, id) {
      if (confirm("Apakah anda yakin ingin menghapus produk ini ?")) {
        commit("DELETE_PRODUK", id);
      }
    },
    setInput({ commit }, input) {
      commit("SET_INPUT", input);
    },
    addProduct({ commit }, product) {
      commit("ADD_PRODUK", product);
      alert("Data berhasil ditambahkan!");
    },
  },
});
