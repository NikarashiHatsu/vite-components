<template>
    <div class="flex flex-col bg-white shadow-sm text-sm">
        <div class="relative">
            <div class="aspect-w-3 aspect-h-2">
                <slot v-if="useImage" name="image">

                </slot>
                <div v-else :class="getFallbackImageColor" class="w-full h-full"></div>
            </div>

            <div class="absolute bottom-0 w-full h-1/2 opacity-40 bg-gradient-to-t from-gray-900 bg-opacity-10"></div>

            <router-link :to="to" class="absolute bottom-0 p-4 text-base leading-relaxed tracking-wide font-bold text-white">
                <slot name="title">

                </slot>
            </router-link>
        </div>

        <div class="h-full flex flex-col justify-between">
            <div class="p-4 leading-loose">
                <slot name="description">

                </slot>
            </div>

            <div class="flex justify-center mb-4">
                <router-link :to="to" class="flex items-center transition ease-in-out duration-300 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-sm shadow-md px-4 py-2">
                    <span class="inline-block mr-1">
                        Read
                    </span>
                    <span class="w-24 inline-block truncate mr-2">
                        <slot name="title"></slot>
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