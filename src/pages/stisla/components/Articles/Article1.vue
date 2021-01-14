<template>
    <div class="flex flex-col bg-white shadow-sm text-sm">
        <div class="relative">
            <div class="aspect-w-3 aspect-h-2">
                <slot v-if="useImage" name="image">

                </slot>
                <div v-else :class="getFallbackImageColor" class="w-full h-full"></div>
            </div>

            <div class="absolute bottom-0 w-full h-1/2 opacity-40 bg-gradient-to-t from-gray-900 bg-opacity-10"></div>

            <router-link :to="to" class="absolute bottom-0 p-4 tracking-wide font-bold text-white">
                <slot name="title">

                </slot>
            </router-link>
        </div>

        <div class="p-4 leading-relaxed">
            <slot name="description">

            </slot>
        </div>

        <div class="flex justify-center mb-4">
            <router-link :to="to" class="transition ease-in-out duration-300 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-sm shadow-md px-4 py-2">
                Read More
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            to: {
                type: String,
                default: ''
            },
            useImage: {
                type: Boolean,
                default: true,
            },
            fallbackImage: {
                type: Number,
                default: 5,
            }
        },

        computed: {
            getFallbackImageColor() {
                switch (this.fallbackImage) {
                    case 1: return 'bg-red-400'; break;
                    case 2: return 'bg-orange-400'; break;
                    case 3: return 'bg-yellow-400'; break;
                    case 4: return 'bg-green-400'; break;
                    case 5: return 'bg-blue-400'; break;
                    case 6: return 'bg-indigo-400'; break;
                    case 7: return 'bg-purple-400'; break;
                
                    default: return 'bg-red-400'; break;
                }
            }
        }
    }
</script>