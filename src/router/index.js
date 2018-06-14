import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Player from '@/components/Player'
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'
import SettingHeader  from '@/components/setting/Header'
import SettingDetail  from '@/components/setting/Detail'
import SettingSidebar  from '@/components/setting/Sidebar'
import View from '@/components/View.vue'
import User from '@/components/User.vue'
import Father from '@/components/Father.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/user/:uid/:nationality', name: 'user', component: User,props:true},
    {path: '/father', name: 'father', component: Father},
    {path: '/view', name: 'view',component:View,children:[
        {path: '/view', name: 'view',components:{
            myHeader: SettingHeader,
            mySidebar: SettingSidebar,
            myDetail: SettingDetail
        }
        }
      ]},
    {path: '/player/:uid',name: 'player',component: Player,children:[
        {path:'profile',name:'profile',component:PlayerProfile},
        {path:'stats',name:'stats',component:PlayerStats}
      ]}
  ]
})
