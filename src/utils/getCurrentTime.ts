const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const currentDate = new Date();
const currentDateTime = currentDate.toLocaleString();
const month = months[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();
const formattedDate = `${month} ${day}, ${year}`;

const getFormattedResult = () => formattedDate;
export { getFormattedResult };