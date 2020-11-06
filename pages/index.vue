<template>
  <div class="w-screen h-screen bg-gray-200 font-ua-body">
      <AppNav></AppNav>
  </div>
</template>

<script>

export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
body {
  font-size: 15px;
}
p {
  @apply text-body-color;
  @apply leading-normal;
}
h1, h2, h3, h4, h5, h6 {
  @apply font-ua-heading;
  line-height: 1.1rem;
}
</style>
