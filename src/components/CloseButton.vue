<template>
    <div class="close-button">
        <button @click="$store.commit('closePopup')" class="close"><img src="@\img\close.png"></button>
    </div>
</template>

<script>
</script>

<style scoped>
.close-button {
    position:static;
    width:60px;
    height: 240px;
    z-index: 999;
    margin-bottom: 620px;
    
}



.close {
    margin-left:1030px;
    
    outline: none;
    background-color: none;
    border: none;
    background: none;
}

</style>