const date = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/Kolkata'
}).format(new Date());
console.log(date)
console.log(date.includes('Sunday'));