<script setup>
import Card from '@/componets/Card.vue';
import { ref } from 'vue';
import { onActivated, onDeactivated } from "vue"

const productos = ref(null)
const loading = ref(true)
// https://vuejs.org/api/composition-api-lifecycle
onActivated(() => {
  console.log("Activated")
  fetch("http://localhost:8000/productos")
    .then(res => res.json())
    .then(products => productos.value = products)
    .catch(err => console.log(err))
    .finally(() => loading.value = false)
})

onDeactivated( () => {
  console.log("Cambie de pagina")
} )

</script>
<template>
  <v-container fluid>
    <h1>Store</h1>
    <v-row>
      <template v-if="!loading" v-for="producto in productos">
        <v-col cols="12" md="6" lg="4">
          <Card :id="producto.id" :title="producto.title" :image="producto.image" :description="producto.description">
          </Card>
        </v-col>
      </template>
      <v-col v-else v-for="value in 6" cols="12" md="6" lg="4">
        <v-skeleton-loader height="400" type="image, article"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
