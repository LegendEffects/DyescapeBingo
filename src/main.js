import Vue from 'vue'
import App from './App.vue'

import Logger from './logging'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created() {
    if(process.env.NODE_ENV === 'development') {
			Logger.log('Build', 'Running in development mode', 'warn');
		} else {
			Logger.log('Build', 'Running in production mode', 'warn');
		}
  }
}).$mount('#app')
