<template>
    <div @click="$store.commit('closePopup')" v-if="$store.state.isPopup" class="popup">
        <CloseButton></CloseButton>
        <Card @click.stop :card="$store.state.popupInfo"></Card>
    </div>
</template>

<script>
import CloseButton from '@/components/CloseButton.vue'
export default { 
    components: {CloseButton}
}
</script>

<style>

.popup {
    position: fixed;
    right: 0;
    bottom: 0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(165, 165, 165);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

}











</style>