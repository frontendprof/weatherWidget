export const getCurrentDateTime = () => {
  const days_of_week = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  const date = new Date();

  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  const year = date.getFullYear();

  const dayOfWeek = days_of_week[date.getDay()];

  const hours = date.getHours();
  const mins = date.getMinutes();

  if (hours < 10) {
    `0$hours`;
  }

  return { mins, hours, month, year, dayOfWeek, dayOfMonth };
};
