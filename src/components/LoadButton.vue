<template>
    <div v-if="$store.state.cards.length !== $store.state.storage.length"  class="load-more-wrapper">
      <button class="load-cards-button" @click="$store.commit('loadMoreCard')">Load more...</button>
    </div> 
</template>

<script>

</script>

<style scoped>

.load-cards-button {
  background-color: #3D7298;
  width: 520px;
  height: 80px;
  color: white;
  border: none;
  font-size: 1.5rem;

 
}

.load-more-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>