<template>
	<div class="h-screen flex flex-col overflow-auto">
		<Navbar class="sticky top-0 flex-none" :menuItems="menuItems" />
		<router-view class="container mx-auto flex-1"></router-view>
	</div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Navbar from "@/components/Navbar.vue";

const isOpen = ref(false)

const menuItems = [
	{ id: 1, label: 'Home', link: '/', },
	{ id: 2, label: 'About', link: '/about' },
	{ id: 3, label: 'Contact', link: '/contact' },
]

const navbarRef = ref(64);





</script>



