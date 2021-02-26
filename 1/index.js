function formatDuration(duration) {
  display = "";
  const sInMinute = 60;
  const sInHour = sInMinute * 60;
  const sInDay = sInHour * 24;
  const sInMonth = sInDay * 30;
  const sInYear = sInMonth * 12;

  let seconds = duration % 60;
  let minutes = Math.floor((duration % sInHour) / sInMinute);
  let hours = Math.floor((duration % sInDay) / sInHour);
  let days = Math.floor((duration % sInMonth) / sInDay);
  let months = Math.floor((duration % sInYear) / sInMonth);
  let years = Math.floor(duration / sInYear);

  const arr = [];
  [years, months, days, hours, minutes, seconds].forEach((t, index) => {
    if (index == 0 && t > 0) arr.push(t == 1 ? `${t} year` : `${t} years`);
    if (index == 1 && t > 0) arr.push(t == 1 ? `${t} month` : `${t} months`);
    if (index == 2 && t > 0) arr.push(t == 1 ? `${t} day` : `${t} days`);
    if (index == 3 && t > 0) arr.push(t == 1 ? `${t} hour` : `${t} hours`);
    if (index == 4 && t > 0) arr.push(t == 1 ? `${t} minute` : `${t} minutes`);
    if (index == 5 && t > 0) arr.push(t == 1 ? `${t} second` : `${t} seconds`);
  });

  display = arr[0];
  arr.forEach((t, index) => {
    if (index == 0) return;
    else if (arr.length - 1 == index) display = [display, t].join(` and `);
    else display = [display, t].join(`, `);
  });

  return display;
}

console.log(formatDuration(62)); // 1 minute and 2 seconds
console.log(formatDuration(3662)); // 1 hour, 1 minute and 2 seconds
console.log(formatDuration(136621)); // 1 day, 13 hours, 57 minutes and 1 second
console.log(formatDuration(86440 * 150 * 11 * 2 + 2)); // 9 years, 2 months, 1 day, 12 hours, 40 minutes and 2 seconds
