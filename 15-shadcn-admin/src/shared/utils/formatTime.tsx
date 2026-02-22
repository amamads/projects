function formatTime(isoString:string) {
  const date = new Date(isoString),
    hours = date.getHours() % 12,
    minutes = date.getMinutes(),
    minutesStr = minutes < 10 ? "0" + minutes : minutes,
    ampm = hours >= 12 ? "PM" : "AM";

  return `${hours}:${minutesStr} ${ampm}`;
}
export default formatTime