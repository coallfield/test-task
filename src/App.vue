<template>
  <div class="app">
    <div class="main-wrapper">
      <CardList></CardList>
    </div>
    <PopupWindow></PopupWindow>
    <LoadButton></LoadButton>
  </div>
</template>


<script>
import PopupWindow from '@/components/PopupWindow.vue'
import CardList from '@/components/CardList.vue'
import LoadButton from '@/components/LoadButton.vue'
export default {
  components: {CardList, PopupWindow, LoadButton},
  mounted() {
    this.$store.dispatch('fetchCards')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'roboto';
}

.main-wrapper {
  width: 100%;
}

span {
  color: grey;
  opacity: 50%;
}


@media(max-width: 1880px) {
 


  .card-popup {
    width:800px !important;
    height: 600px !important;
    overflow: scroll;
    

  }

  .img-wrapper-popup {
    height: 350px !important;
  }
  .full-info-popup {
    height:400px !important;
    margin-top: -25px !important;
  }

  .close {
    margin-left: 840px !important;
  }

  .close-button {
    margin-bottom: 220px !important;
    height: 440px !important;
  }
}

@media(max-width: 1350px) {
  .card-list-wrapper {
    width: 1000px !important;
    justify-content: center;
  }
  .load-more-wrapper {
    width: 100% !important;
  }

  .card-popup {
    width:500px !important;
    height: 700px !important;
    overflow: scroll;
    

  }

  .close {
    margin-left: 550px !important;
  }

  .close-button {
    margin-bottom: 320px !important;
    height: 440px !important;
  }

  

}


@media (max-width: 1000px) {
  .card-list-wrapper {
    width: 600px !important;
  }
}


@media(max-width: 600px) {
  .card-list-wrapper {
    width: 300px !important;
  }
  .load-cards-button {
    width: 300px  !important;
  }

}

@media(max-width: 500px) {
  .card-list-wrapper {
    width: 150px !important;
  }
  .load-cards-button {
    width: 100px  !important;
  }
}


</style>