const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const getMonth = (date: Date) => monthNames[date.getMonth()]

export const getDayMonth = (date: Date) => `${date.getDate()} ${getMonth(date)}`
