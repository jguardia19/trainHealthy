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
   
  ]
  
})

// router.beforeEach((to, from, next) => {

//   let autenticado = sessionStorage.getItem('autenticado')

//   let autorizacion = to.matched.some(record => record.meta.auth)

//     if (autorizacion && !autenticado) {
//         next('login');
//     }
//     else {
//         next();
//     }


// });

export default router;
