import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Home from '@/views/home';
const  Login = r => require.ensure([], () => r(require('@/views/login')), 'login'); //登录
const  Pjgz = r => require.ensure([], () => r(require('@/views/home/pjgz')), 'pjgz'); //评价规则设置
const  Index = r => require.ensure([], () => r(require('@/views/home/index')), 'index'); //首页
const  Pjgl = r => require.ensure([], () => r(require('@/views/xsgl/pjgl')), 'pjgl'); //学生评价管理
const  Xxgl = r => require.ensure([], () => r(require('@/views/xsgl/xxgl')), 'xxgl'); //学生信息管理
const Xjgl = r => require.ensure([], () => r(require('@/views/xygl/xjgl')), 'xjgl'); //学级管理
const Kxyzygl = r => require.ensure([], () => r(require('@/views/xygl/kxyzygl')), 'kxyzygl'); //科系与专业管理
const Bjgl = r => require.ensure([], () => r(require('@/views/xygl/bjgl')), 'bjgl'); //班级管理
const Xqsz = r => require.ensure([], () => r(require('@/views/xygl/xqsz')), 'xqsz'); //学期设置
const Yhgl = r => require.ensure([], () => r(require('@/views/xtsz/yhgl')), 'yhgl'); //用户管理
const Jsgl = r => require.ensure([], () => r(require('@/views/xtsz/jsgl')), 'jsgl'); //角色管理
const Yhgladd = r => require.ensure([], () => r(require('@/views/xtsz/yhgladd')), 'yhgladd'); //角色管理添加
const XxglAdd = r => require.ensure([], () => r(require('@/views/xsgl/xxglAdd')), 'xxglAdd'); //学生信息管理添加
const XxglEdit = r => require.ensure([], () => r(require('@/views/xsgl/xxglEdit')), 'xxglEdit'); //学生信息管理编辑
const PjDetail = r => require.ensure([], () => r(require('@/views/xsgl/pjDetail')), 'pjDetail'); //学生信息详情



Vue.use(Router)

export default new Router({
  routes: [
    // { path: '*', component: page404 },
    {
      path: '/',
      component: App, 
      
      children:[
        {
          path: '',
          redirect: '/login'
        },
        {
          path: '/login',
          name: 'login',
          component: Login,
          hidden: true
        },
        {
          path: '/index',
          name: 'index',
          component: Index,
          hidden:true,
        },
        {
          path: '/home',
          name: 'home',
          component: Home,
          children:[
            
            {
              path: '/pjgz',
              name: 'pjgz',
              component: Pjgz,
              hidden:true,
            },
            {
              path: '/xxgl',
              name: 'xxgl',
              component: Xxgl,
              hidden:true,
            },
            {
              path: '/xjgl',
              name: 'xjgl',
              component: Xjgl,
              hidden:true,
            },
            {
              path: '/pjgl',
              name: 'pjgl',
              component: Pjgl,
              hidden:true,
            },
            {
              path: '/pjDetail',
              name: 'pjDetail',
              component: PjDetail,
              hidden:true,
            },
            {
              path: '/kxyzygl',
              name: 'kxyzygl',
              component: Kxyzygl,
              hidden:true,
            },
            {
              path: '/bjgl',
              name: 'bjgl',
              component: Bjgl,
              hidden:true,
            },
            {
              path: '/xqsz',
              name: 'xqsz',
              component: Xqsz,
              hidden:true,
            },
            {
              path: '/yhgl',
              name: 'yhgl',
              component: Yhgl,
              hidden:true,
            },
            {
              path: '/jsgl',
              name: 'jsgl',
              component: Jsgl,
              hidden:true,
            },
            {
              path: '/yhgladd',
              name: 'yhgladd',
              component: Yhgladd,
              hidden:true,
            },
            {
              path: '/xxglAdd',
              name: 'xxglAdd',
              component: XxglAdd,
              hidden:true,
            },
            {
              path: '/xxglEdit',
              name: 'xxglEdit',
              component: XxglEdit,
              hidden:true,
            },
          ]
         
        },  
        
      ]
    },
   
  ]
})
