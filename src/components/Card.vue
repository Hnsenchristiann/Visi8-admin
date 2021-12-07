<template>
    <div class="p-3">
      <div class="w-80 sm:bg-white shadow-lg rounded-lg">
        <div class="py-3">
          <p class="text-gray-800 font-semibold">{{title}}</p>
          <p class="mt-2 text-gray-600">{{subtitle}}</p>
        </div>
      </div>
      </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
      title: String,
      subtitle: String
    }
}
</script>

<style>

</style>