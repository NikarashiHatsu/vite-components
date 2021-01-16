<template>
    <figure :class="getFigureProperty" class="flex items-end justify-center rounded-full overflow-hidden border">
        <svg :class="getIconProperty" class="text-opacity-70 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
        </svg>
    </figure>
</template>

<script>
    export default {
        name: 'PlainAvatar',
        props: {
            color: {
                type: Number,
                default: 0,
            },
            size: {
                type: String,
                default: 'base',
            }
        },
        computed: {
            getFigureProperty() {
                let classes = '';

                switch (this.color) {
                    case 1: classes += 'bg-red-100 border-red-300'; break;
                    case 2: classes += 'bg-orange-100 border-orange-300'; break;
                    case 3: classes += 'bg-amber-100 border-amber-300'; break;
                    case 4: classes += 'bg-yellow-100 border-yellow-300'; break;
                    case 5: classes += 'bg-lime-100 border-lime-300'; break;
                    case 6: classes += 'bg-green-100 border-green-300'; break;
                    case 7: classes += 'bg-emerald-100 border-emerald-300'; break;
                    case 8: classes += 'bg-teal-100 border-teal-300'; break;
                    case 9: classes += 'bg-cyan-100 border-cyan-300'; break;
                    case 10: classes += 'bg-lightBlue-100 border-lightBlue-300'; break;
                    case 11: classes += 'bg-blue-100 border-blue-300'; break;
                    case 12: classes += 'bg-indigo-100 border-indigo-300'; break;
                    case 13: classes += 'bg-violet-100 border-violet-300'; break;
                    case 14: classes += 'bg-purple-100 border-purple-300'; break;
                    case 15: classes += 'bg-fuchsia-100 border-fuchsia-300'; break;
                    case 16: classes += 'bg-pink-100 border-pink-300'; break;
                    case 17: classes += 'bg-rose-100 border-rose-300'; break;
                
                    default: classes += 'bg-gray-100 border-gray-300'; break;
                }

                switch (this.size) {
                    case 'xs': classes += ' w-4 h-4'; break;
                    case 'sm': classes += ' w-8 h-8'; break;
                    case 'lg': classes += ' w-16 h-16'; break;
                    case 'xl': classes += ' w-20 h-20'; break;
                
                    default: classes += ' w-12 h-12'; break;
                }

                return classes;
            },

            getIconProperty() {
                let classes = '';

                switch (this.color) {
                    case 1: classes += 'text-red-500'; break;
                    case 2: classes += 'text-orange-500'; break;
                    case 3: classes += 'text-amber-500'; break;
                    case 4: classes += 'text-yellow-500'; break;
                    case 5: classes += 'text-lime-500'; break;
                    case 6: classes += 'text-green-500'; break;
                    case 7: classes += 'text-emerald-500'; break;
                    case 8: classes += 'text-teal-500'; break;
                    case 9: classes += 'text-cyan-500'; break;
                    case 10: classes += 'text-lightBlue-500'; break;
                    case 11: classes += 'text-blue-500'; break;
                    case 12: classes += 'text-indigo-500'; break;
                    case 13: classes += 'text-violet-500'; break;
                    case 14: classes += 'text-purple-500'; break;
                    case 15: classes += 'text-fuchsia-500'; break;
                    case 16: classes += 'text-pink-500'; break;
                    case 17: classes += 'text-rose-500'; break;
                
                    default: classes += 'text-gray-500'; break;
                }

                switch (this.size) {
                    case 'xs': classes += ' w-2'; break;
                    case 'sm': classes += ' w-5'; break;
                    case 'lg': classes += ' w-11'; break;
                    case 'xl': classes += ' w-14'; break;
                
                    default: classes += ' w-8'; break;
                }

                return classes;
            },
        }
    }
</script>