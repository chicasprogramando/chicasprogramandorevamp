<template>
  <div>
    <a :href="link" target="_blank" noopener noreferrer>
      <img :src="icon" class="icon__image" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: ["icon", "link"]
};
</script>

<style scoped>
.icon__image {
  width: 30px;
  margin: 10px;
}
</style>
