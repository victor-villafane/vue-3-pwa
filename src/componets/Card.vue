<script setup>
import { ref } from 'vue';

const show = ref(false)
defineProps({
  "id": Number,
  "title": String,
  "image": String,
  "description": String
})
const loading = ref(false)
const selection = ref(1)
function reserve() {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
</script>
<template>
  <v-card :disabled="loading" :loading="loading" >
    <v-img height="300px" :src="image" cover></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-actions>
      <v-btn color="primary" :to="'/detalle/' + id">Detalle</v-btn>
      <v-spacer></v-spacer>
      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
