<template>
  <div class="layer fixed left-0 top-0 w-full h-full flex justify-center items-center">
    <div class="modal p-5 rounded-md bg-white w-[400px]">
      <input type="text" placeholder="Name" :class="inputStyle" v-model="editingUser.name">
      <input type="text" placeholder="Surname" :class="inputStyle" v-model="editingUser.surname">
      <button class="text-white uppercase py-2 px-5 rounded-md bg-gray-700 mt-3 block mx-auto" @click="$emit('close')">
        Edit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editingUser: {
      type: Object,
      default: {
        name: '',
        surname: ''
      }
    }
  },
  data() {
    return {
      inputStyle: "w-[320px] p-3 rounded-md outline-none mb-5 border shadow-md focus:border-green-300 focus:shadow-green-300",
    }
  }
}
</script>

<style>
.layer {
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999999;
}
</style>