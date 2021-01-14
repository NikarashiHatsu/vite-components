<template>
    <div class="flex flex-col bg-white shadow-sm text-sm">
        <div class="aspect-w-3 aspect-h-2">
            <slot v-if="useImage" name="image">

            </slot>
            <div v-else :class="getFallbackImageColor" class="w-full h-full"></div>
        </div>

        <div class="flex flex-col px-4 mt-4 mb-2">
            <p class="flex items-center uppercase font-bold text-gray-800 text-xs tracking-widest my-3">
                <span>News</span>
                <svg class="w-1 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/>
                </svg>
                <span>5 Days</span>
            </p>
            
            <router-link :to="to" class="line-clamp-2 inline-block text-base leading-relaxed tracking-wide font-semibold text-purple-500">
                <slot name="title">

                </slot>
            </router-link>
        </div>

        <div class="h-full flex flex-col justify-between">
            <div class="px-4 leading-loose mb-4">
                <slot name="description">

                </slot>
            </div>

            <div class="flex px-4 my-4 items-center">
                <div :class="getFallbackImageColor" class="flex justify-center items-end mr-3 w-12 h-12 bg-opacity-50 rounded-full overflow-hidden">
                    <svg :class="getTextColor" class="w-3/4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                    </svg>
                </div>
                
                <div class="flex flex-col">
                    <router-link :to="writerProfile" class="block hover:underline text-blue-500 font-bold mb-1">
                        <slot name="user">

                        </slot>
                    </router-link>
                    <p class="text-xs font-semibold uppercase tracking-widest">
                        <slot name="job">

                        </slot>
                    </p>
                </div>
            </div>
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
                default: false,
            },
            fallbackImage: {
                type: Number,
                default: 5,
            },
            writerProfile: {
                type: String,
                default: ''
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
            },
            getTextColor() {
                switch (this.fallbackImage) {
                    case 1: return 'text-red-400'; break;
                    case 2: return 'text-orange-400'; break;
                    case 3: return 'text-yellow-400'; break;
                    case 4: return 'text-green-400'; break;
                    case 5: return 'text-blue-400'; break;
                    case 6: return 'text-indigo-400'; break;
                    case 7: return 'text-purple-400'; break;
                
                    default: return 'text-red-400'; break;
                }
            },
        }
    }
</script>