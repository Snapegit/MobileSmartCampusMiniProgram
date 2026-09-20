	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import yixuankecheng from '@/views/yixuankecheng/list'
	import xuesheng from '@/views/xuesheng/list'
	import kechengfenlei from '@/views/kechengfenlei/list'
	import chengjixinxi from '@/views/chengjixinxi/list'
	import tuixuankecheng from '@/views/tuixuankecheng/list'
	import jiaoshi from '@/views/jiaoshi/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'
	import kechengxinxi from '@/views/kechengxinxi/list'
	import users from '@/views/users/list'
	import xueshengqingjiashenqing from '@/views/xueshengqingjiashenqing/list'
	import jiaoshiRegister from '@/views/jiaoshi/register'
	import jiaoshiCenter from '@/views/jiaoshi/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/jiaoshiCenter',
			name: '教师个人中心',
			component: jiaoshiCenter
		}
		,{
			path: '/news',
			name: '公告资讯',
			component: news
		}
		,{
			path: '/yixuankecheng',
			name: '已选课程',
			component: yixuankecheng
		}
		,{
			path: '/xuesheng',
			name: '学生',
			component: xuesheng
		}
		,{
			path: '/kechengfenlei',
			name: '课程分类',
			component: kechengfenlei
		}
		,{
			path: '/chengjixinxi',
			name: '成绩信息',
			component: chengjixinxi
		}
		,{
			path: '/tuixuankecheng',
			name: '退选课程',
			component: tuixuankecheng
		}
		,{
			path: '/jiaoshi',
			name: '教师',
			component: jiaoshi
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/kechengxinxi',
			name: '课程信息',
			component: kechengxinxi
		}
		,{
			path: '/users',
			name: '管理员',
			component: users
		}
		,{
			path: '/xueshengqingjiashenqing',
			name: '学生请假申请',
			component: xueshengqingjiashenqing
		}
		]
	},
	{
		path: '/jiaoshiRegister',
		name: '教师注册',
		component: jiaoshiRegister
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
