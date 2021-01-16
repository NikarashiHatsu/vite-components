<template>
    <div class="relative">
        <div :class="`${getFigureProperty}`" class="flex items-center justify-center rounded-full overflow-hidden border tracking-loose text-white">
            <slot name="initial">
            
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AvatarPresence',
        props: {
            color: {
                type: Number,
                default: 0,
            },
            size: {
                type: String,
                default: 'base',
            },
        },
        computed: {
            getFigureProperty() {
                let classes = '';

                switch (this.color) {
                    case 1: classes += 'bg-red-500 border-red-300'; break;
                    case 2: classes += 'bg-orange-500 border-orange-300'; break;
                    case 3: classes += 'bg-amber-500 border-amber-300'; break;
                    case 4: classes += 'bg-yellow-500 border-yellow-300'; break;
                    case 5: classes += 'bg-lime-500 border-lime-300'; break;
                    case 6: classes += 'bg-green-500 border-green-300'; break;
                    case 7: classes += 'bg-emerald-500 border-emerald-300'; break;
                    case 8: classes += 'bg-teal-500 border-teal-300'; break;
                    case 9: classes += 'bg-cyan-500 border-cyan-300'; break;
                    case 10: classes += 'bg-lightBlue-500 border-lightBlue-300'; break;
                    case 11: classes += 'bg-blue-500 border-blue-300'; break;
                    case 12: classes += 'bg-indigo-500 border-indigo-300'; break;
                    case 13: classes += 'bg-violet-500 border-violet-300'; break;
                    case 14: classes += 'bg-purple-500 border-purple-300'; break;
                    case 15: classes += 'bg-fuchsia-500 border-fuchsia-300'; break;
                    case 16: classes += 'bg-pink-500 border-pink-300'; break;
                    case 17: classes += 'bg-rose-500 border-rose-300'; break;
                
                    default: classes += 'bg-gray-500 border-gray-300'; break;
                }

                switch (this.size) {
                    case 'xs': classes += ' w-4 h-4 text-xxxs'; break;
                    case 'sm': classes += ' w-8 h-8 text-xs'; break;
                    case 'lg': classes += ' w-16 h-16 text-xl'; break;
                    case 'xl': classes += ' w-20 h-20 text-3xl'; break;
                
                    default: classes += ' w-12 h-12 text-base'; break;
                }

                return classes;
            },
        }
    }
</script>