import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

 const router = new Router({
  mode:'history',
  routes: [
    // {
    //   path: '*',
    //   redirect: '/',
    //   name:'login',
    //   component: () => import('../view/Login.vue')
    //  },
    {
      path:'/',
      name:'login',
      meta:{
        layout : 'login-layout'
      },
      component: () => import('../view/Login.vue')
    },
    {
      path:'/Home',
      name:'Home',
      meta:{
        layout : 'dasboard-layout',
        auth: true
      },
      component: () => import('../view/Home.vue')
    },
   
  ]
  
})

router.beforeEach((to, from, next) => {

  let autenticado = sessionStorage.getItem('autenticado')

  let autorizacion = to.matched.some(record => record.meta.auth)

    if (autorizacion && !autenticado) {
        next('/');
    }
    else {
        next();
    }


});

export default router;
