const date = new Date();
const year = date.getFullYear();
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
const yearDays = isLeapYear ? 366 : 365;
const documentStyle = document.documentElement.style;

documentStyle.setProperty("--days-in-year", `${yearDays}`);
documentStyle.setProperty(
	"--milliseconds",
	`${date.getTime() - new Date(`01/01/${date.getFullYear()}`).getTime()}ms`
);
