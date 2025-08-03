export function formatLastSeen(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();

  const dateDay = date.getDate();
  const nowDay = now.getDate();
  const dateMonth = date.getMonth();
  const nowMonth = now.getMonth();
  const dateYear = date.getFullYear();
  const nowYear = now.getFullYear();

  const pad = (n: number) => n.toString().padStart(2, "0");
  const time = `${pad(date.getHours())}:${pad(date.getMinutes())}`;

  const dateOnly = new Date(dateYear, dateMonth, dateDay);
  const nowOnly = new Date(nowYear, nowMonth, nowDay);
  const diffMs = nowOnly.getTime() - dateOnly.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (
    dateYear === nowYear &&
    dateMonth === nowMonth &&
    dateDay === nowDay
  ) {
    return `Сегодня ${time}`;
  }
  if (
    dateYear === nowYear &&
    dateMonth === nowMonth &&
    dateDay === nowDay - 1
  ) {
    return `Вчера ${time}`;
  }
  if (diffDays > 1 && diffDays <= 7) {
    return `${diffDays} дня назад`;
  }
  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
}
