/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import {Button, Dialog, Drawer, Carousel, CarouselItem, Menu, Col, Row, MenuItem} from 'element-ui';


require('./bootstrap');

// require('sniddl-spa')
window.SPA = require('./spa').default;
window.Vue = require('vue');

Vue.use(Button)
    .use(Dialog)
    .use(Drawer)
    .use(Carousel)
    .use(CarouselItem)
    .use(Menu)
    .use(MenuItem)
    .use(Row)
    .use(Col)


window.spa = new SPA({
  el: "#app",
  preloadPages: ['photos'],
  beforeMount (name, content, $data) {
    var res = Vue.compile(content)
    $data.vm = new Vue({
      data: this.data(),
      render: res.render,
      staticRenderFns: res.staticRenderFns
    })
    return false;
  },
  mounted(page) {
    var mount = '#' + page.id;
    SPA.$make({
      parent: mount,
      attr: { id: page.id + '-vue' }
    });
    page.$data.vm.$mount(mount + "-vue")
  },
  data () {
    return {
      showSidebar: false
    }
  }
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });

Vue.component('carousel', require('./components/Carousel.vue').default);
Vue.component('review', require('./components/Review.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data: function() {
        return { navVisible: false }
      }
});
