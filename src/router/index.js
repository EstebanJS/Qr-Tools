import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      auth:false,
      title: 'Qr reader - Qr Tool Vue',
      metaTags: [
        {
          name: 'description',
          content: 'Qr codes reader.'
        },
        {
          property: 'og:description',
          content: 'Qr codes reader.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{
      auth:false,
      title: 'About - Qr Tool Vue',
      metaTags: [
        {
          name: 'description',
          content: 'About creator EstebanJS .'
        },
        {
          property: 'og:description',
          content: 'About creator EstebanJS .'
        }
      ]
    }
  },
  {
    path: '/generator',
    name: 'QrGenerator',
    component: () => import('../views/QrGenerator.vue'),
    meta:{
      auth:false,
      title: 'Qr generator - Qr Tool Vue',
      metaTags: [
        {
          name: 'description',
          content: 'Qr codes generator.'
        },
        {
          property: 'og:description',
          content: 'Qr codes generator.'
        }
      ]
    }
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const DEFAULT_TITLE = 'Qr Tool Vue';
router.afterEach((to) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
