<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore placeat at modi. Molestias rerum deleniti iusto
      minus voluptatem nam suscipit.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ut porro, eligendi commodi corporis recusandae,
      beatae iusto voluptate in dicta optio quia, vel reprehenderit!</p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
const {data} = await useFetch( '/api/currency/568?name=stun' );
</script>

<style lang="scss" scoped>
h1 {
  margin: 10 0;
}

p {
  margin-top: 20px;
}</style>