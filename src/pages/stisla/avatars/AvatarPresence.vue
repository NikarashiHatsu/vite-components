<template>
    <div class="relative">
        <figure :class="`${getFigureProperty} ${getIconProperty}`" class="flex items-end justify-center rounded-full overflow-hidden border text-opacity-70 fill-current">
            <slot name="icon">
            
            </slot>
        </figure>

        <div :class="getPresenceProperty" class="absolute w-1/4 h-1/4 rounded-full right-0 bottom-0">
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
            presence: {
                type: String,
                default: 'online',
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
                switch (this.color) {
                    case 1: return 'text-red-500'; break;
                    case 2: return 'text-orange-500'; break;
                    case 3: return 'text-amber-500'; break;
                    case 4: return 'text-yellow-500'; break;
                    case 5: return 'text-lime-500'; break;
                    case 6: return 'text-green-500'; break;
                    case 7: return 'text-emerald-500'; break;
                    case 8: return 'text-teal-500'; break;
                    case 9: return 'text-cyan-500'; break;
                    case 10: return 'text-lightBlue-500'; break;
                    case 11: return 'text-blue-500'; break;
                    case 12: return 'text-indigo-500'; break;
                    case 13: return 'text-violet-500'; break;
                    case 14: return 'text-purple-500'; break;
                    case 15: return 'text-fuchsia-500'; break;
                    case 16: return 'text-pink-500'; break;
                    case 17: return 'text-rose-500'; break;
                
                    default: return 'text-gray-500'; break;
                }
            },

            getPresenceProperty() {
                switch (this.presence) {
                    case 'do-not-disturb': return 'bg-red-500 border-2 border-white'; break;
                    case 'idle': return 'bg-yellow-500 border-2 border-white'; break;
                    case 'offline': return 'bg-gray-300 border-2 border-white'; break;
                    default: return 'bg-green-500 border-2 border-white'; break;
                }
            }
        }
    }
</script>