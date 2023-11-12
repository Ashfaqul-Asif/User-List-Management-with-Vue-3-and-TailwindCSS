import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'layout',
			component: BaseLayout,
			children: [
				{
					path: '',
					name: 'home',
					component: HomeView,
				},
				{
					path: '/about',
					name: 'about',
					component: () => import('../views/AboutView.vue')
				},
				{
					path: '/contact',
					name: 'contact',
					component: () => import('../views/ContactView.vue')
				}
			]
		},

	]
})

export default router
