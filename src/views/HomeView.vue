<script setup>

fetch("http://localhost:8000")
  .then( res => res.json() )
  .then( data => console.log(data) )
  .catch(err => console.log(err))

</script>
<template>
  <h1>Home</h1>
</template>
