const formatHourMinutes = date =>
  date.toLocaleString("default", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit"
  });

const formatDayMonthNaming = date =>
  date.toLocaleString("default", { month: "short", day: "2-digit" });

export const formatDate = (date, format) => {
  switch (format) {
    case "hh:mm":
      return formatHourMinutes(date);
    case "MM dd":
      return formatDayMonthNaming(date);
    default:
      return "";
  }
};

export const compareDate = (firstDate, secondDate) =>
  firstDate.getDay() === secondDate.getDay() &&
  firstDate.getMonth() === secondDate.getMonth() &&
  firstDate.getFullYear() === secondDate.getFullYear();
