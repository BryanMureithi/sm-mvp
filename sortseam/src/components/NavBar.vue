<template>
  <header>
    <nav
      class="flex justify-between px-24 py-3 bg-transparent items-center shadow-sm sticky top-0 z-10"
    >
      <img src="src\assets\images\logo.png" alt="" />
      <div class="flex space-x-6 text-white">
        <RouterLink
          to="/"
          class="hover:text-[#D90429] text-base font-inter text-md cursor-pointer hover:text-[#5454D4]"
          >Home</RouterLink
        >
        <RouterLink
          to="/"
          class="hover:text-[#D90429] text-base font-inter text-md cursor-pointer"
          >About Us</RouterLink
        >
        <RouterLink
          to="/"
          class="hover:text-[#D90429] text-base font-inter text-md cursor-pointer"
          >What We Do</RouterLink
        >
        <RouterLink
          to="/"
          class="hover:text-[#D90429] text-base font-inter text-md cursor-pointer"
          >Our Work</RouterLink
        >
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<script>
export default {
  name: "NavBar",
};
</script>
