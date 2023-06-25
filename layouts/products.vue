<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container p-4 mx-auto">
        <NuxtLink to='/' class="font-bold">Nuxt Shopper</NuxtLink>
      </nav>
    </header>
    <!-- Output -->
    <div class="container mx-auto p-4">
      <slot></slot>
    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>
<style scoped>
.router-link-exact-active {
  color: aquamarine;
}
</style>