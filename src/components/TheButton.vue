<template>
  <div>
    <button class="w-full h-full rounded-md text-white" :class="color">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'bg-gray-500'
    }
  }
}
</script>

<style>

</style>