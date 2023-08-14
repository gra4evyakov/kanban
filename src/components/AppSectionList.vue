<template>
  <ul class="section-list">
    <slot />
  </ul>
</template>

<style scoped>
.section-list {
  overflow-y: scroll;
  overflow-x: hidden;

  padding: var(--section-padding);

  transition: overflow 0.3s linear;

  scrollbar-gutter: stable;
  /* -ms-overflow-style: none;
  scrollbar-width: none; */
}

.section-list::-webkit-scrollbar-track {
  margin: 5px;
  padding: 2px 2px;
}
.section-list::-webkit-scrollbar {
  width: 10px;
  /* display: none; */
}
.section-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: gainsboro;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
