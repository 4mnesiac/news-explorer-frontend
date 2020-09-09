export function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = `0${dd}`;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;

  const yy = date.getFullYear();

  return `${yy}-${mm}-${dd}`;
}

export function formatPublishDate(date) {
  const base = new Date(date);
  const months = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
  const publishedAt = `${base.getDate()} ${months[base.getMonth()]}, ${base.getFullYear()}`;
  return publishedAt;
}
