<template>
    <div @click="showPopup(card)" :class="{'card' : !$store.state.isPopup, 'card-popup' : $store.state.isPopup}">
        <div :class="{'img-wrapper' : !$store.state.isPopup, 'img-wrapper-popup' : $store.state.isPopup}">
            <img class="img" :src="card.picture">
        </div>
        <div v-if="!$store.state.isPopup" class="small-info">
            <h4><span>name: </span>{{ card.name }}</h4>
            <h4><span>email: </span>{{ card.email }}</h4>
        </div>
        <div v-else class="full-info-popup">
              <h4><span>name: </span>{{ $store.state.popupInfo.name }}</h4>
              <h4><span>age: </span>{{ $store.state.popupInfo.age }}</h4>       
              <h4><span>email: </span>{{ $store.state.popupInfo.email }}</h4>
              <h4><span>phone: </span>{{ $store.state.popupInfo.phone }}</h4>
              <h4><span>about: </span>{{ $store.state.popupInfo.about }}</h4>
          </div>
    </div>
</template>

<script>
export default {
    methods: {
        showPopup(card) {
            this.$store.commit('getPopupInfo', card)
            this.$store.commit('showPopup')
        }
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    name: 'Card'
}
</script>

<style scoped>
.small-info {
  height: 153px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  grid-gap: 10px;
}

.img {
    width: 100%;
    height: auto;
}

.img-wrapper {
  width: 380px;
  height: 252px;
  overflow: hidden;
  border-radius: 25px;
}

.img-wrapper-popup {
  width: 100%;
  height: 480px;
  overflow: hidden;
  border-radius: 25px;
  
}

.card {
  width: 380px;
  height: 405px;
  box-shadow: 2px 2px 5px black;
  border-radius: 25px;
  margin: 20px;
  background-color: white;
}

.card-popup {
    position: relative;
  width: 980px;
  height: 836px;
  box-shadow: 2px 2px 5px black;
  border-radius: 25px;
  margin: 20px;
  background-color: white;
}


.full-info-popup {
  height: 50%;
  margin-top: -50px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  margin-left: 30px;
  grid-gap: 20px;
 

}
</style>