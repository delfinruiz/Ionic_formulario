import { createRouter, createWebHistory } from '@ionic/vue-router';
import FormComponents from '../views/FormComponents.vue'

const routes = [
  {
    path: '/',
    redirect: '/formulario'
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: FormComponents
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
