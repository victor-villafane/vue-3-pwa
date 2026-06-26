<script setup>
import { ref, KeepAlive } from 'vue'
import { RouterView } from 'vue-router'
//https://vuetifyjs.com/en/components/grids/#usage
//https://vuetifyjs.com/en/styles/text-and-typography/#usage
const mostrar = ref(false)

const navItems = [
  { text: "Home", to: "/", icon: "mdi-home" },
  { text: "Tienda", to: "/store", icon: "mdi-store" },
  { text: "Favoritos", to: "/favorito", icon: "mdi-heart" },
  { text: "Contacto", to: "/contact", icon: "mdi-email" }
]

</script>

<template>
  <v-app>
    <v-app-bar :elevation="2" rounded>
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="d-sm-flex d-md-none" @click.stop="mostrar = !mostrar"></v-app-bar-nav-icon>
        Tienda
      </template>
      <template class="d-sm-none d-md-flex">
        <v-app-bar-title></v-app-bar-title>
        <v-btn v-for="item in navItems" :to="item.to" :prepend-icon="item.icon">
          {{ item.text }}
        </v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer class="d-sm-flex d-md-none" v-model="mostrar" temporary>
      <v-divider></v-divider>
      <v-list-item v-for="item in navItems" :to="item.to" link :title="item.text"
        :prepend-icon="item.icon"></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view v-slot="{ Component }">
        <!-- <keep-alive include="HomeView,ContactView,StoreView"> -->
        <keep-alive exclude="DetalleView,FavoriteView">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <!-- <KeepAlive>
        <RouterView></RouterView>
      </KeepAlive> -->
    </v-main>
  </v-app>
</template>

<style scoped></style>
