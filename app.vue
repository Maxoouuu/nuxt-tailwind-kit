<template>
  <!-- div with display true -->

  <div class="container" style="padding: 50px 0 100px 0;" >
    <Account v-if="user" />
    <Auth v-else />
  </div>


</template>

<script setup>
const user = useSupabaseUser();

/* display none container when the height of the page is lower than 500 */
const style = computed(() => {
  if (window.innerHeight < 500) {
    return "display: none";
  }
});

/* Each second console log the actual height of the entire page */
setInterval(() => {
  console.log(document.body.scrollHeight);
}, 1000);

/* set display none when scrollheight < 500 in vue composition */
const display = ref(true);
const handleScroll = () => {
  if (document.body.scrollHeight < 500) {
    display.value = false;
  } else {
    display.value = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
