import home from '@/views/index/home.vue'
import login from '@/views/index/login.vue'
import register from '@/views/index/register.vue'
import article from '@/views/index/article.vue'
import message from '@/views/index/message.vue'

// import adminSetting from '@/views/admin/page/setting'


const index = [
  {
    path: '/',
    component: home,
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    component: home,
    name: 'home'
  },
  {
    path: '/login',
    component: login,
    name: 'login'
  },
  {
    path: '/register',
    component: register,
    name: 'register'
  },
  {
    path: '/article',
    component: article,
    name: 'article'
  },
  {
    path: '/message',
    component: message,
    name: 'message'
  }
]
export default index