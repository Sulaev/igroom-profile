function declOfNum(n: number, forms: [string, string, string]) {
  return (
    forms[
      n % 10 === 1 && n % 100 !== 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2
    ]
  );
}

export function DurationStyled({ isoDate }: { isoDate: string }) {
  const created = new Date(isoDate);
  const now = new Date();

  const diffMs = now.getTime() - created.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths =
    now.getMonth() -
    created.getMonth() +
    12 * (now.getFullYear() - created.getFullYear());
  const diffYears = now.getFullYear() - created.getFullYear();

  let main = "";
  if (diffDays === 0) main = "Сегодня";
  else if (diffDays === 1) main = "Вчера";
  else if (diffYears > 0)
    main = `${diffYears} ${declOfNum(diffYears, ["год", "года", "лет"])}`;
  else if (diffMonths > 0)
    main = `${diffMonths} ${declOfNum(diffMonths, ["месяц", "месяца", "месяцев"])}`;
  else if (diffDays > 0)
    main = `${diffDays} ${declOfNum(diffDays, ["день", "дня", "дней"])}`;
  else main = "Сегодня";

    return (
      <div className="flex flex-col items-center text-[24px]">
        <span className="font-bold leading-tight">{main}</span>
        <span className="text-base text-[#434343] font-normal mt-[-2px]">в игруме</span>
      </div>
    );
}
