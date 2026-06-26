<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const producto = ref(null)
const loading = ref(true)
const favorito = ref(false)
const route = useRoute()
const router = useRouter()
//https://vuejs.org/api/composition-api-lifecycle
onMounted(async () => {
  // fetch('https://fakestoreapi.com/products/' + route.params.id)
  //   .then(res => res.json())
  //   .then(data => {
  //     producto.value = data
  //     const productos = JSON.parse(localStorage.getItem("favoritos")) || []
  //     const existe = productos.some(p => p.id == producto.value.id)
  //     if (existe) favorito.value = true
  //   })
  //   .catch((err) => console.error(err))
  //   .finally(() => loading.value = false)
  try {
    const res = await fetch('http://localhost:8000/productos/' + route.params.id)
    const data = await res.json()
    producto.value = data
    const productos = JSON.parse(localStorage.getItem("favoritos")) || []
    const existe = productos.some(p => p.id == producto.value.id)
    if (existe) favorito.value = true
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})


const addFavorito = () => {
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map
  const productos = JSON.parse(localStorage.getItem("favoritos")) || []
  const existe = productos.some(p => p.id == producto.value.id)
  if (existe) {
    localStorage.setItem("favoritos", JSON.stringify(productos.filter((p) => p.id != producto.value.id)))
    favorito.value = false
  } else {
    productos.push(producto.value)
    localStorage.setItem("favoritos", JSON.stringify(productos))
    favorito.value = true
  }
}

const borrar = () => {
  fetch("http://localhost:8000/productos/" + route.params.id, {
    method: "DELETE"
  })
    .then(res => {
      if (res.ok) {
        // window.location.href = "http://localhost:5173/store"
        router.push("/store") //esto no recarga
      }
    })
    .catch()
}

</script>
<template>
  <v-container>
    <v-row v-if="!loading && producto">
      <v-col cols="12" md="4">
        <v-img height="300px" :src="producto.image" cover>
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-col>
      <v-col cols="12" md="8">
        <h1>{{ producto.title }}</h1>
        <p>{{ producto.description }}</p>
        <v-btn @click="addFavorito" color="primary" prepend-icon="mdi-heart">{{ favorito ? "Quitar" : "Agregar" }} a
          favoritos</v-btn>
        <v-btn @click="borrar" color="danger" prepend-icon="mdi-heart">Borrar</v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-skeleton-loader height="400" type="image, article"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-btn class="mt-3" to="/store" color="primary">Volver</v-btn>
  </v-container>
</template>
