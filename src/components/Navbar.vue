<template>
	<div class="container mx-auto">
		<nav class="border-gray-200 bg-gray-50 border-b">
			<div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-3">
				<button
					type="button"
					class="inline-flex md:hidden items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
					@click="isOpen = !isOpen"
				>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div class="md:hidden w-full" :class="{'block': isOpen, 'hidden': !isOpen}">
					<ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50">
						<router-link :to="item.link" v-for="item in menuItems" :key="item.id">
							<span
								class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-400 md:hover:text-white"
								:class="{'bg-gray-900 text-white': item.link === route.path}"
							>{{ item.label }}</span>
						</router-link>
					</ul>
				</div>
				<div class="hidden md:flex md:items-center md:w-auto w-full">
					<ul class="md:flex md:flex-row md:items-center space-x-1">
						<router-link :to="item.link" v-for="item in menuItems" :key="item.id">
							<span
								class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-400"
								:class="{'bg-gray-900 text-white': item.link === route.path}"
							>{{ item.label }}</span>
						</router-link>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router'
const isOpen = ref(false)
const route = useRoute();
const props = defineProps({
	menuItems: {
		type: Array,
		required: true
	},
})
</script>


