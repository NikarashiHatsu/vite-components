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
        <section class="mb-6">
            <h4 class="text-2xl mb-4">Article Style 1</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-6">
                <Article-1>
                    <template #title>
                        An example title
                    </template>
                    <template #description>
                        This article has a very short description with default no image or link.
                    </template>
                </Article-1>
                
                <Article-1 :fallbackImage="1">
                    <template #title>
                        Or a headline if you prefer to call it
                    </template>
                    <template #description>
                        This article has an alternative image color.
                    </template>
                </Article-1>
                
                <Article-1 :fallbackImage="3" :to="'../'">
                    <template #title>
                        An article with link to another page
                    </template>
                    <template #description>
                        This article has another image color (it's ranging from 1-7), also this article is the longest one. Notice how the button stays on the bottom of the card.
                    </template>
                </Article-1>
                
                <Article-1 :useImage="true" :to="'../'">
                    <template #image>
                        <img class="object-cover" src="./../../assets/chris-rosiak-gpp9Wyw15ck-unsplash.jpg" alt="Beautiful image by Chris Rosiak from Unsplash" />
                    </template>
                    <template #title>
                        An article with an image
                    </template>
                    <template #description>
                        Other than that, it is also linked to another page.
                    </template>
                </Article-1>
            </div>
        </section>

        <section class="mb-6">
            <h4 class="text-2xl mb-4">Article Style 2</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-6">
                <Article-2 :trending="true">
                    <template #title>
                        This title is so long so it's truncated aaaaaaaaaaaaaaaaaa
                    </template>
                    <template #description>
                        This article has a very short description with default no image or link. By the way, it is featured!
                    </template>
                </Article-2>
                
                <Article-2 :fallbackImage="1">
                    <template #title>
                        Or a headline if you prefer to call it
                    </template>
                    <template #description>
                        This article has an alternative image color.
                    </template>
                </Article-2>
                
                <Article-2 :fallbackImage="3" :to="'../'">
                    <template #title>
                        An article with link to another page
                    </template>
                    <template #description>
                        This article has another image color (it's ranging from 1-7), also this article is the longest one. Notice how the button stays on the bottom of the card.
                    </template>
                </Article-2>
                
                <Article-2 :useImage="true" :to="'../'">
                    <template #image>
                        <img class="object-cover" src="./../../assets/chris-rosiak-gpp9Wyw15ck-unsplash.jpg" alt="Beautiful image by Chris Rosiak from Unsplash" />
                    </template>
                    <template #title>
                        An article with an image
                    </template>
                    <template #description>
                        Other than that, it is also linked to another page.
                    </template>
                </Article-2>
            </div>
        </section>
        
    </div>
</template>

<script>
    import Article1 from './components/Articles/Article1.vue';
    import Article2 from './components/Articles/Article2.vue';

    export default {
        components: {
            Article1,
            Article2,
        }
    }
</script>