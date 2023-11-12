<template>
	<div>
		<thead>
			<tr>
				<th v-for="header in headers" :key="header.label">{{ header.label }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(row,id) in tableRows" :key="id">
				<template>
					<div></div>
				</template>
				<td v-for="(header,id) in headers" :key="id">{{ row[header.key] }}</td>
			</tr>
		</tbody>
	</div>
</template>

<script setup>
const props = defineProps({
	headers: {
		type: Array,
		required: false
	},
	tableRows: {
		type: Array,
		required: false
	}
})
</script>	
	

