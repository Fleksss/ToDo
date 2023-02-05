<template>
  <div class=" w-full h-[500px] bg-slate-200 border rounded-3xl shadow-md flex flex-col justify-center
        items-center backdrop-blur-md bg-opacity-25">
    <input type="text" placeholder="Name" :class="inputStyle" v-model="name">
    <input type="text" placeholder="Surname" :class="inputStyle" v-model="surname">
    <TheButton class=" w-40 h-7" @click="giveInfo">
      Add
    </TheButton>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      inputStyle: "w-[320px] p-3 backdrop-blur-md bg-opacity-25 bg-white rounded-md outline-none mb-5 border shadow-md focus:border-green-300 focus:shadow-green-300",
      name: this.name,
      surname: this.surname,
      toast: useToast(),
    }
  },
  methods: {
    giveInfo() {
      if (!this.name || !this.surname) {
        this.toast.error("Please fill in the fields");
        return
      }
      if (this.name.trim().length > 10) {
        this.toast.error("Please write name less than 10 words");
        return
      }
      if (this.surname.trim().length > 10) {
        return
      }
      if (this.name.trim().length === 0) {
        this.toast.error("Please write name more than 0 words");
        return
      }
      if (this.surname.trim().length === 0) {
        this.toast.error("Please write surname more than 0 words");
        return
      }
      this.$emit('giveInfo', this.name, this.surname)
      this.clear()
    },
    clear() {
      this.name = null
      this.surname = null
    }
  }
}
</script>

<style>

</style>