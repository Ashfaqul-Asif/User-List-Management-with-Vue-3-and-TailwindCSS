<template>
	<div class="border-2 rounded-md shadow pt-4">
		<div class="overflow-x-auto pb-4 lg:pb-8">
			<div class="py-2 align-middle inline-block min-w-full">
				<div
					class="overflow-auto border-b border-gray-200 sm:rounded-lg over max-h-[75vh] xl:max-h-[82vh]"
				>
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th
									v-for="header in tableHeaders"
									:key="header.key"
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									<div class="flex items-center space-x-2">
										<span>{{ header.label }}</span>
										<div v-if="header.sorting" class="flex flex-col">
											<font-awesome-icon
												class="cursor-pointer"
												@click="onChangeSort(header.key, 'asc')"
												:class="{'text-black ': header.asc}"
												icon="fa-solid fa-caret-up"
											></font-awesome-icon>
											<font-awesome-icon
												@click="onChangeSort(header.key, 'des')"
												class="cursor-pointer"
												:class="{'text-black': header.des}"
												icon="fa-solid fa-caret-down"
											></font-awesome-icon>
										</div>
									</div>
								</th>
							</tr>
						</thead>
						<VueDraggableNext
							class="bg-white divide-y divide-gray-200"
							v-model="usersStore.usersList"
							@change="log"
							tag="tbody"
							:animation="150"
						>
							<tr v-for="person in usersStore.usersList" :key="person.id">
								<td class="px-6 py-4 text-gray-500">
									<font-awesome-icon icon="fa-solid fa-user-tie" />
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div
										class="text-sm font-medium text-gray-900"
									>{{ person.first_name }} {{ person.last_name }}</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-500">{{ person.joining_date }}</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-500">{{ person.date_of_birth }}</div>
								</td>
								<td class="px-6 py-4 text-sm text-gray-500">
									<div class="relative">
										<TableActionMenu :isActive="selectedRow === person.id" @click="selectedRow = person.id" />
									</div>
								</td>
							</tr>
						</VueDraggableNext>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
// your code here
import { useUsersStore } from '@/stores/users.js'
import { computed, ref } from 'vue'
import TableActionMenu from '@/components/TableActionMenu.vue'
import { VueDraggableNext } from 'vue-draggable-next'
const usersStore = useUsersStore()
const selectedRow = ref(null)

const tableHeaders = ref([
	{
		label: 'Avatar',
		key: 'avatar',
		sorting: false,
		asc: false,
		des: false
	},
	{
		label: 'Name',
		key: 'name',
		sorting: true,
		asc: false,
		des: false

	},
	{
		label: 'Joining Date',
		key: 'joining_date',
		sorting: true,
		asc: false,
		des: false

	},
	{
		label: 'Birth Date',
		key: 'date_of_birth',
		sorting: true,
		asc: false,
		des: false

	},
	{
		label: 'Action',
		key: 'action',
		sorting: false,
		asc: false,
		des: false

	}
])

const onChangeSort = (key, type) => {

	tableHeaders.value.map(header => {
		if (header.key === key) {
			header[type] = !header[type]
			if (type === 'asc') {
				header.des = false
			} else if (type === 'des') {
				header.asc = false
			}
		} else {
			header.asc = false
			header.des = false
		}
	})
	console.log(`output->`, key, type)
	usersStore.getUsersListFilter(key, type)
}
</script>


