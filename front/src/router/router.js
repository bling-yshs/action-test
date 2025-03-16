import VueRouter from 'vue-router'
//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import cheweifenleiList from '../pages/cheweifenlei/list'
import cheweifenleiDetail from '../pages/cheweifenlei/detail'
import cheweifenleiAdd from '../pages/cheweifenlei/add'
import cheweixinxiList from '../pages/cheweixinxi/list'
import cheweixinxiDetail from '../pages/cheweixinxi/detail'
import cheweixinxiAdd from '../pages/cheweixinxi/add'
import ruchangxinxiList from '../pages/ruchangxinxi/list'
import ruchangxinxiDetail from '../pages/ruchangxinxi/detail'
import ruchangxinxiAdd from '../pages/ruchangxinxi/add'
import lichangxinxiList from '../pages/lichangxinxi/list'
import lichangxinxiDetail from '../pages/lichangxinxi/detail'
import lichangxinxiAdd from '../pages/lichangxinxi/add'
import feiyongxinxiList from '../pages/feiyongxinxi/list'
import feiyongxinxiDetail from '../pages/feiyongxinxi/detail'
import feiyongxinxiAdd from '../pages/feiyongxinxi/add'
import syslogList from '../pages/syslog/list'
import syslogDetail from '../pages/syslog/detail'
import syslogAdd from '../pages/syslog/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'cheweifenlei',
					component: cheweifenleiList
				},
				{
					path: 'cheweifenleiDetail',
					component: cheweifenleiDetail
				},
				{
					path: 'cheweifenleiAdd',
					component: cheweifenleiAdd
				},
				{
					path: 'cheweixinxi',
					component: cheweixinxiList
				},
				{
					path: 'cheweixinxiDetail',
					component: cheweixinxiDetail
				},
				{
					path: 'cheweixinxiAdd',
					component: cheweixinxiAdd
				},
				{
					path: 'ruchangxinxi',
					component: ruchangxinxiList
				},
				{
					path: 'ruchangxinxiDetail',
					component: ruchangxinxiDetail
				},
				{
					path: 'ruchangxinxiAdd',
					component: ruchangxinxiAdd
				},
				{
					path: 'lichangxinxi',
					component: lichangxinxiList
				},
				{
					path: 'lichangxinxiDetail',
					component: lichangxinxiDetail
				},
				{
					path: 'lichangxinxiAdd',
					component: lichangxinxiAdd
				},
				{
					path: 'feiyongxinxi',
					component: feiyongxinxiList
				},
				{
					path: 'feiyongxinxiDetail',
					component: feiyongxinxiDetail
				},
				{
					path: 'feiyongxinxiAdd',
					component: feiyongxinxiAdd
				},
				{
					path: 'syslog',
					component: syslogList
				},
				{
					path: 'syslogDetail',
					component: syslogDetail
				},
				{
					path: 'syslogAdd',
					component: syslogAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
