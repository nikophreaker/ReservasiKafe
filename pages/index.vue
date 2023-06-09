<script setup lang="ts">
    const {data} = await useFetch('/api/Characters')
</script>
<template>
    <div class="container mx-auto grid grid-cols-4 gap-8">
        <div class="bg-white" v-for="{name, photo, alias, born, occupation} in data?.characters" >
            <div class="aspect-square overflow-hidden">
                <img :src="photo" :alt="name"/>
            </div>
        </div>
    </div>
</template>