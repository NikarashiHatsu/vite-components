<template>
    <div class="max-w-6xl mx-auto px-6">

        <!-- Navigation -->
        <div class="flex flex-col my-6">
            <div class="flex justify-between">
                <router-link to="/stisla">Back</router-link>
                <span>Stisla Components</span>
            </div>
        </div>

        <!-- # Avatars -->
        <section class="mb-8">
            <h4 class="text-2xl mb-4">Plain Avatars</h4>
            <div class="flex items-center">
                <PlainAvatar :size="'xl'" :color="1" />
                <PlainAvatar class="ml-2" :size="'lg'" :color="2" />
                <PlainAvatar class="ml-2" :size="'base'" :color="3" />
                <PlainAvatar class="ml-2" :size="'sm'" :color="4" />
                <PlainAvatar class="ml-2" :size="'xs'" :color="5" />
            </div>
        </section>
    </div>
</template>

<script>
    import PlainAvatar from './PlainAvatar.vue';

    export default {
        components: {
            PlainAvatar,
        }    
    }
</script>