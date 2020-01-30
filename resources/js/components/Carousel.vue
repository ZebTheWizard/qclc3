<template>
    <el-carousel :autoplay="false" direction="vertical" style="height: 100vh" ref="carousel">
        <el-carousel-item style="height: 100vh">
            <div class="carousel-content text-center mt-12">
                <div class="p-8">
                    <img class="mx-auto" src="/images/logo-big-white.png" alt="big logo white">
                    <a href="#/contact" class="mx-auto block text-2xl font-bold mt-8 bg-blue-400 rounded-lg shadow text-white px-3 py-1" style="max-width: 400px">Contact</a>
                    <a href="#/photos" class="mx-auto block text-2xl font-bold mt-4 bg-gray-600 rounded-lg shadow text-white px-3 py-1" style="max-width: 400px">Photos</a>
                    <div class="flex items-center justify-between w-full font-bold text-white mx-auto mt-12" style="max-width: 400px">
                        <a href="https://www.instagram.com/qualitycuts_lawncare/"><i class="fab fa-instagram fa-2x"></i></a>
                        <a href="https://www.facebook.com/Quality-Cuts-Lawn-Care-1982196262029201/"><i class="fab fa-facebook fa-2x"></i></a>
                        <a href="https://www.yelp.com/biz/quality-cuts-lawn-care-waverly?osq=quality+cuts+lawn+care"><i class="fab fa-yelp fa-2x"></i></a>
                        <a href="https://www.google.com/search?q=quality+cuts+lawn+care+waverly+ny"><i class="fab fa-google fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div class="carousel-overlay"><i class="fal fa-angle-double-down fa-3x text-white mb-12"></i></div>
            <div
                class="carousel-image"
                style="background-image: url(/images/qclctruck-imageslider.png);">
            </div>
        </el-carousel-item>
        <el-carousel-item style="height: 100vh">
            <div class="carousel-content text-center mt-1 text-white">
                <div class="px-8 text-left">
                    <h1 class="text-5xl text-fancy">About</h1>
                    <h1 class="absolute text-water text-fancy">About</h1>
                    <!-- <hr> -->
                    <p class="text-2xl text-fancy mt-4">Recognitions</p>
                    <ul class="text-xl ml-5">
                        <li class="my-0">Independently Owned</li>
                        <li class="my-0">Registered</li>
                        <li class="my-0">Insured</li>
                        <li class="my-0">Quality</li>
                    </ul>
                    <p class="text-2xl text-fancy mt-4">Experience</p>
                    <ul class="text-xl ml-5">
                        <li class="my-0">2017 - {{new Date().getFullYear()}}</li>
                    </ul>
                    <p class="text-2xl text-fancy mt-4">Skills</p>
                    <ul class="text-xl ml-5">
                        <li class="my-0">Lawn Care</li>
                        <li class="my-0">Cleanup</li>
                        <li class="my-0">Mulch & Stone</li>
                        <li class="my-0">Snow Removal</li>
                    </ul>
                </div>
            </div>
            <div class="carousel-overlay"></div>
            <div
                class="carousel-image"
                style="background-image: url(/images/truckmower.jpeg); width: 100%;height: 100%;background-repeat: no-repeat; background-size: cover;">
            </div>
        </el-carousel-item>
        <el-carousel-item style="height: 100vh">
            <div class="carousel-content text-center mt-1 text-white">
                <div class="px-8 text-left">
                    <h1 class="text-5xl text-fancy">Lawn</h1>
                    <h1 class="absolute text-water text-fancy">Care</h1>
                    <p class="mt-4 text-right pl-16">Come home to a perfectly manicured lawn and get your weekends back.</p>
                    <p class="text-2xl mt-4 text-fancy">Grass Services</p>
                    <ul class="text-xl ml-5">
                        <li class="my-0">Mowing</li>
                        <li class="my-0">Bagging</li>
                        <li class="my-0">Fertilizer</li>
                        <li class="my-0">Trimming</li>
                        <li class="my-0">Edging</li>
                    </ul>
                </div>
            </div>
            <div class="carousel-overlay"></div>
            <div
                class="carousel-image"
                style="background-image: url(/images/qclclawnmower.png); width: 100%;height: 100%;background-repeat: no-repeat; background-size: cover;">
            </div>
        </el-carousel-item>
        <el-carousel-item style="height: 100vh">
            <div class="carousel-content text-center mt-1 text-white">
                <div class="px-8 text-left">
                    <h1 class="text-5xl text-fancy">Mulch</h1>
                    <h1 class="absolute text-water text-fancy">Stone</h1>
                    <!-- <h1 class="absolute text-water text-fancy mt-16 ml-12">Stone</h1> -->
                    <p class="mt-4 text-right pl-16">Let us do the dirty work. We'll start shoveling in mulch & stone to bring back that curb appeal.</p>
                    <p class="text-2xl mt-4 text-fancy">We Deliver/Freshen</p>
                    <ul class="text-xl ml-5">
                        <li class="my-0">Mulch</li>
                        <li class="my-0">Decorative Rocks</li>
                        <li class="my-0">Stone</li>
                    </ul>
                </div>
            </div>
            <div class="carousel-overlay"></div>
            <div
                class="carousel-image"
                style="background-image: url(/images/housemulch.jpeg); width: 100%;height: 100%;background-repeat: no-repeat; background-size: cover;">
            </div>
        </el-carousel-item>

        <el-carousel-item style="height: 100vh">
            <div class="carousel-content text-center mt-1 text-white">
                <div class="px-8 text-left">
                    <h1 class="text-5xl text-fancy">Clean</h1>
                    <h1 class="absolute text-water text-fancy">Up</h1>
                    <!-- <h1 class="absolute text-water text-fancy mt-16 ml-12">Stone</h1> -->
                    <p class="mt-4 text-right pl-16">We'll tidy up your yard. Whatever cleaning up your lawn needs, we can make it look its best.</p>
                    <p class="text-2xl mt-4 text-fancy">Do you have?</p>
                    <ul class="text-xl ml-5">
                        <li class="my-0">Leaves</li>
                        <li class="my-0">Sticks</li>
                        <li class="my-0">Debris</li>
                    </ul>
                    <p class="text-2xl mt-4 text-fancy">Seasons</p>
                    <ul class="text-xl ml-5">
                        <li class="my-0">Fall</li>
                        <li class="my-0">Spring</li>
                    </ul>
                </div>
            </div>
            <div class="carousel-overlay"></div>
            <div
                class="carousel-image"
                style="background-image: url(/images/before&AfterLeaves.jpg); width: 100%;height: 100%;background-repeat: no-repeat; background-size: cover;">
            </div>
        </el-carousel-item>

        <el-carousel-item style="height: 100vh">
            <div class="carousel-content text-center mt-1 text-white">
                <div class="px-8 text-left">
                    <h1 class="text-5xl text-fancy">Snow</h1>
                    <h1 class="absolute text-water text-fancy">Removal</h1>
                    <!-- <h1 class="absolute text-water text-fancy mt-16 ml-12">Stone</h1> -->
                    <p class="mt-4 text-right pl-16">Sick of the snow? Give us a call and we will remove the snow ASAP.</p>
                    <p class="text-2xl mt-4 text-fancy">Snow Services</p>
                    <ul class="text-xl ml-5">
                        <li class="my-0">Salting</li>
                        <li class="my-0">Shoveling</li>
                        <li class="my-0">Plowing</li>
                    </ul>
                </div>
            </div>
            <div class="carousel-overlay"></div>
            <div
                class="carousel-image"
                style="background-image: url(/images/snowplow2.jpg); width: 100%;height: 100%;background-repeat: no-repeat; background-size: cover;">
            </div>
        </el-carousel-item>

        <el-carousel-item style="height: 100vh">
            <div class="carousel-content text-center mt-1 text-white">
                <div class="px-8 text-left">
                    <h1 class="text-5xl text-fancy">Reviews</h1>
                    <h1 class="absolute text-water text-fancy">Reviews</h1>
                    <!-- <h1 class="absolute text-water text-fancy mt-16 ml-12">Stone</h1> -->
                    <div class="mt-8">
                        <review 
                            name="Gary"
                            text="This is the second year Hunter has been taking care of my lawn in Waverly, NY. He is very dependable, he does my lawn just as if I was doing it myself and I would recommend him to anyone who is in need of lawn care. He also did the snow removal for me in the Winter."
                            image="https://lh5.googleusercontent.com/-nQsmPU0PeZQ/AAAAAAAAAAI/AAAAAAAAAAA/oMCtqPkj9MM/s40-c-rp-mo-br100/photo.jpg"
                        ></review>
                        <review
                            name="Teri"
                            text="Hunter is impressive! He is honest, hardworking and dependable. He did a fantastic job on mulch and trimming shrubs at our home. He shows up on time, and takes pride in his work! When he finishes, everything is perfect!"
                            image="https://lh5.googleusercontent.com/-LJnuaIpgd0o/AAAAAAAAAAI/AAAAAAAAAAA/xBx6JynX4uY/s40-c-rp-mo-br100/photo.jpg"
                        ></review>
                        <review
                            name="Shawn"
                            text="Hunter does a great job. He is very hard working and is willing to go the extra mile to please us."
                            image="https://lh5.googleusercontent.com/-BmMQ9u6xMXo/AAAAAAAAAAI/AAAAAAAAAAA/i_ulE0woLcA/s40-c-rp-mo-br100/photo.jpg"
                        ></review>
                        <review
                            name="Sandra"
                            text="I highly recommend Quality Cuts Lawn Care!  Hunter has done an excellent job and is always reliable and punctual. This is a reasonably priced lawn care service with professional results."
                            image="https://lh4.googleusercontent.com/-Z4nZWeVOJb4/AAAAAAAAAAI/AAAAAAAAAAA/sFFWqKCI6bA/s40-c-rp-mo-br100/photo.jpg"
                        ></review>
                        <review
                            name="Burdett"
                            text="Hunter works hard and pays attention to detail. Our lawn and borders look immaculate. Strongly recommend for lawn care and landscaping."
                            image="https://lh3.googleusercontent.com/-YwwW_vtCvRI/AAAAAAAAAAI/AAAAAAAAAAA/kJvI8J4ZYuI/s40-c-rp-mo-br100/photo.jpg"
                        ></review>
                    </div>
                    
                </div>
            </div>
            <div class="carousel-overlay"></div>
            <div
                class="carousel-image"
                style="background-image: url(/images/house.jpeg); width: 100%;height: 100%;background-repeat: no-repeat; background-size: cover;">
            </div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        data () {
            return {
                available: true
            }
        },
        mounted() {
            console.log('Component mounted.')
            
			// mc.on("swipedown", function () { 
			// 	console.log('swipedown');
			// });
        },
        beforeMount() {
            window.addEventListener('wheel', this.handleScroll, false);
            var mc = new Hammer(window);
            mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
            mc.on("swipe", this.handleScroll); 
			
            
            console.log('scrolling Injected');
            document.body.style.overflow = "hidden";
        },
        beforeDestroy() {
            window.removeEventListener('wheel', this.handleScroll);
            // window.removeEventListener('touchmove', this.handleScroll);
            console.log('scrolling Destroyed');
            document.body.style.overflow = "auto";
        },
        methods: {
            handleScroll: function(e){
                console.log(e);
                if (this.available) {
                    this.available = false;
                    var delta = e.type == "swipe" ? e.deltaY * -1 : e.deltaY;
                    
                    window.scrollTo(0,0);
                    if(delta > 0) {
                        this.$refs.carousel.next();
                    } else if (delta < 0) {
                        this.$refs.carousel.prev();
                    }
                    
                }

                setTimeout(() => {
                    if (!this.available) {
                        this.available = true;
                        // document.body.style.overflow = "auto";
                    }
                }, 500)

            }
        } 
    }
</script>
