import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import MOCK_DATA from './MOCK_DATA.json'
function tryCatch(promise) {
	return promise.then(data => [null, data]).catch(error => [error, null])
}

export const useUsersStore = defineStore('users', {
	state: () => ({
		usersList: MOCK_DATA
	}),
	actions: {
		// async fetchUsers() {
		// 	const [error, response] = await tryCatch(axios.get('https://dummyjson.com/users'))
		// 	if (error) {
		// 		console.error(error)
		// 		return
		// 	}
		// 	console.log(`output-response`, response)
		// 	this.usersList = response.data.users
		// },
		getUsersListSortedByName(sortOrder) {
			this.usersList.sort((a, b) => sortOrder === 'des' ? b.first_name.localeCompare(a.first_name) : a.first_name.localeCompare(b.first_name))
		},
		getUsersListSortedByJoiningDate(sortOrder) {

			this.usersList.sort((a, b) => sortOrder === 'des' ? new Date(b.joining_date) - new Date(a.joining_date) : new Date(a.joining_date) - new Date(b.joining_date))
		},
		getUsersListSortedByBirthDate(sortOrder) {

			this.usersList.sort((a, b) => sortOrder === 'des' ? new Date(b.date_of_birth) - new Date(a.date_of_birth) : new Date(a.date_of_birth) - new Date(b.date_of_birth))
		},
		getUsersListFilter(sortBy, sortOrder) {
			const sortFunctions = {
				name: (sortOrder) => this.getUsersListSortedByName(sortOrder),
				joining_date: (sortOrder) => this.getUsersListSortedByJoiningDate(sortOrder),
				date_of_birth: (sortOrder) => this.getUsersListSortedByBirthDate(sortOrder),
			}
			sortFunctions[sortBy](sortOrder)
		}
	},
	getters: {
		getUsersList() {
			return this.usersList
		}
	}
})


