<template>
    <div class="max-w-6xl mx-auto px-6">

        <!-- Navigation -->
        <div class="flex flex-col my-6">
            <div class="flex justify-between">
                <router-link :to="'../'">Back</router-link>
                <span>Stisla Components</span>
            </div>
        </div>

        <!-- # Articles -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-6">
            <Article-1 :useImage="false">
                <template #title>
                    Excepteur sint occaecat cupidatat non proident
                </template>
                <template #description>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </template>
            </Article-1>
            
            <Article-1 :useImage="false" :fallbackImage="1">
                <template #title>
                    Excepteur sint occaecat cupidatat non proident
                </template>
                <template #description>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </template>
            </Article-1>
            
            <Article-1 :useImage="false" :fallbackImage="3">
                <template #title>
                    Excepteur sint occaecat cupidatat non proident
                </template>
                <template #description>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </template>
            </Article-1>
            
            <Article-1 :useImage="true">
                <template #image>
                    <img class="object-cover" src="./../../assets/chris-rosiak-gpp9Wyw15ck-unsplash.jpg" alt="Beautiful image by Chris Rosiak from Unsplash" />
                </template>
                <template #title>
                    Excepteur sint occaecat cupidatat non proident
                </template>
                <template #description>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </template>
            </Article-1>
        </div>
        
    </div>
</template>

<script>
    import Article1 from './components/Articles/Article1.vue';

    export default {
        components: {
            Article1,
        }
    }
</script>