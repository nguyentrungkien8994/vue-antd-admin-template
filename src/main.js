// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import 'ant-design-vue/dist/antd.css'

const requireComponent = require.context(
  // Đường dẫn tương đối của thư mục component
  './components/controls',
  // có tìm component trong các thư mục con hay không
  false,
  // regular expression để tìm các file component cơ sở
  /Base[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  
  // Lấy cấu hình của component
  const componentConfig = requireComponent(fileName)

  // Lấy tên của component dùng PascalCase
  const componentName = upperFirst(
    camelCase(
      // Bỏ phần đầu `'./` và đuôi file
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1').replace('Base','TimeBit')
    )
  )
  // Khai báo component cấp toàn cục
  Vue.component(
    componentName,
    // Tìm kiếm các tùy chọn của component trong thuộc tính `.default`
    // Thuộc tính này sẽ khả dụng nếu component sử dụng `export default`
    // nếu không thì dùng chính `componentConfig`
    componentConfig.default || componentConfig
  )
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
