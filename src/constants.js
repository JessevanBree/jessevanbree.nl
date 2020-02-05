export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function formatDate(date) {
	return date.getFullYear() + ", " + monthNames[date.getMonth()]
}