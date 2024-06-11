<template>
  <h1>{{text}}</h1>
  <ul class="list-container">
      <li v-if="datas < 1">{{ desc }}</li>
      <li v-else v-for="(product, index) in datas" :key="index">
        {{ product.name }}
      </li>
    </ul>

</template>

<script>
  export default {
    props: {
      text: String,
      datas: Array,
      desc: String
    },
  };
</script>