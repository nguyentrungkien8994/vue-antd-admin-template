import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Customer from '@/components/views/customer/Customer.vue'
import CustomerDetail from '@/components/views/customer/CustomerDetail.vue'
import Employee from '@/components/views/employee/Employee.vue'


Vue.use(Router)

export default new Router(

  {
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Dashboard',
        component: MainLayout,
        redirect:'/customer',
        children:[
          {
            path: '/customer',
            name: 'Customer',
            component: Customer
          },
          {
            path: '/customer/:id',
            name: 'CustomerDetail',
            component: CustomerDetail
          },
          {
            path: '/employee',
            name: 'Employee',
            component: Employee
          }
        ]
      }
    ]
  })
