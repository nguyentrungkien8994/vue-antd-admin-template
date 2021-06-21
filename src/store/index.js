import Vue from 'vue'
import Vuex from 'vuex'
import customer from './modules/customer'
import customerdetail from './modules/customerdetail'
import employee from './modules/employee'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        customer,customerdetail,employee
    }
})