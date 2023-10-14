// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import { Grid, GridItem } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import * as echarts from 'echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.use(Grid);
Vue.use(GridItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

// 创建全局的事件总线实例
const eventBus = new Vue();

// 将事件总线实例挂载到Vue实例的原型上，使其可以在所有组件中访问
Vue.prototype.$eventBus = eventBus;
