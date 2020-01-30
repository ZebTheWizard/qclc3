<template>
    <div class="review mb-4">
        <div class="flex items-center">
            <div class="rounded-full mr-3">
                <img :src="image" class="rounded-full" alt="">
            </div>
            <div>
                <div class="text-xl font-bold">{{name}}</div>
                <i class="fas fa-star" v-for="i in 5" :key="i"></i>
            </div>
        </div>
        
        <p style="display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;" @click="visible = true">
            {{  text }}
        </p>
        <transition name="el-fade-in">
            <div v-show="visible" class="fixed top-0 left-0 flex items-center justify-center z-20">
                    <div class="px-8 text-left mt-8">
                        <div @click="visible = false">
                            <i class="fas fa-arrow-left fa-3x"></i>
                        </div>
                        <div class="flex items-center mt-8">
                            <div class="rounded-full mr-3">
                                <img :src="image" class="rounded-full" alt="">
                            </div>
                            <div>
                                <div class="text-xl font-bold">{{name}}</div>
                                <i class="fas fa-star" v-for="i in 5" :key="i"></i>
                            </div>
                        </div>
                        
                        <p class="mt-4">{{ text }}</p>
                    </div>
                    
                    <div class="carousel-overlay" style="position: fixed; z-index: -1; opacity:1"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ['text', 'image', 'name'],
        data () {
            return {
                visible: false
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
