<template>
    <div class="flex flex-col bg-white shadow-sm text-sm">
        <div class="relative">
            <div class="aspect-w-3 aspect-h-2">
                <slot v-if="useImage" name="image">

                </slot>
                <div v-else :class="getFallbackImageColor" class="w-full h-full"></div>
            </div>

            <div v-if="trending" class="absolute flex items-center bottom-0 m-4 bg-red-500 text-xs px-4 py-2 rounded-3xl text-white">
                <svg class="w-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                    <path d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"/>
                </svg>
                <span class="ml-2">
                    Trending
                </span>
            </div>
        </div>

        <div class="flex px-4 mt-4 mb-2">
            <router-link :to="to" class="line-clamp-2 inline-block text-xl tracking-wide font-bold text-purple-500">
                <slot name="title">

                </slot>
            </router-link>
        </div>

        <div class="h-full flex flex-col justify-between">
            <div class="px-4 leading-relaxed mb-4">
                <slot name="description">

                </slot>
            </div>

            <div class="flex justify-end mb-2">
                <router-link :to="to" class="flex items-center text-blue-500 hover:underline text-sm px-4 py-2">
                    <span class="mr-2">
                        Read More
                    </span>
                    <svg class="w-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
                    </svg>
                </router-link>
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
            trending: {
                type: Boolean,
                default: false,
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