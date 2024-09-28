import { Currencies } from "./currencies";

export function DateToUTCDate(date: Date) {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getMilliseconds()
    )
  );
}

export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export function GetFormatterForCurrency(currency: string) {
  const locale = Currencies.find((c) => c.value === currency)?.locale;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });
}
