<template>
	<div>
		<font-awesome-icon
			@click="isMenuOpen = !isMenuOpen"
			class="cursor-pointer"
			icon="fa-solid fa-ellipsis-vertical relative"
		/>
		<!-- Dropdown menu -->
		<div
			id="userDropdown"
			:class="{'hidden': !isMenuOpen || !isActive}"
			class="z-10 bg-white rounded-lg shadow w-28 dark:bg-gray-700 dark:divide-gray-600 absolute top-6 right-10 border-2 transition-all duration-200"
		>
			<div class="py-1">
				<a
					href="#"
					class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
				>Edit</a>
			</div>
			<div class="py-1">
				<a
					href="#"
					class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
				>Delete</a>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false)
const props = defineProps({
	isActive: {
		type: Boolean,
		default: false
	},
})

</script>