<template>
  <div
    class="w-full h-10 bg-white flex items-center justify-between rounded-md p-2 flex-nowrap overflow-hidden flex-shrink-0">
    <div class="wrapp flex gap-2" :key="delay">
      <p :class="textstyle">{{ this.user.name }}</p>
      <p :class="textstyle">{{ this.user.surname }}</p>
    </div>
    <div class="delete flex flex-nowrap gap-2">
      <TheButton class="w-7 h-7" @click="$emit('delete')">
        <i class="fa-solid fa-trash"></i>
      </TheButton>
      <TheButton class="edit w-7 h-7" :color="'bg-yellow-400'" @click="$emit('edit')">
        <i class="fa-solid fa-pen-to-square"></i>
      </TheButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  data() {
    return {
      textstyle: "text-gray-400 text-lg",
    }
  }
}
</script>

<style>

</style>