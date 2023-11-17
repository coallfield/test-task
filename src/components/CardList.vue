<template>
    <div class="card-list-wrapper">
        <div :key="card.id" v-for="card in this.$store.state.cards" class="card-list">
        <Card :card="card"> </Card>
      </div>
    </div>
     
</template>

<script>

export default {


}
</script>

<style scoped>

.card-list-wrapper {
    width: 1350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  
  grid-gap: 20px;
  flex-wrap: wrap;
}


</style>