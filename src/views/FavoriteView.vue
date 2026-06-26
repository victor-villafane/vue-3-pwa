<script setup>
import Card from '@/componets/Card.vue';
import { ref } from 'vue';

const productos = ref(null)
productos.value = JSON.parse(localStorage.getItem("favoritos")) || []

</script>
<template>
  <v-container fluid>
    <h1>Favoritos</h1>
    <v-row>
      <template v-if="productos.length > 0" v-for="producto in productos">
        <v-col cols="12" md="6" lg="4">
          <Card :id="producto.id" :title="producto.title" :image="producto.image" :description="producto.description">
          </Card>
        </v-col>
      </template>
      <template v-else>
        <v-col cols="12" md="12" lg="12">
          <h2>No se encontraron productos</h2>
        </v-col>
        <v-col v-for="value in 6" cols="12" md="6" lg="4">
          <v-skeleton-loader height="400" type="image, article"></v-skeleton-loader>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
