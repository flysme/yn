<template>
  <div>案例详情</div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";

onMounted(() => {
  const route = useRoute();
  console.log(route.params.id);
});
</script>


<style lang="scss" scoped>
</style>