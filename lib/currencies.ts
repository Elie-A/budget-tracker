export const Currencies = [
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
  { value: "GBP", label: "£ Pound Sterling", locale: "en-GB" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
  { value: "AUD", label: "$ Australian Dollar", locale: "en-AU" },
  { value: "CAD", label: "$ Canadian Dollar", locale: "en-CA" },
  { value: "CHF", label: "₣ Swiss Franc", locale: "de-CH" },
  { value: "CNY", label: "¥ Chinese Yuan", locale: "zh-CN" },
  { value: "NOK", label: "kr Norwegian Krone", locale: "nb-NO" },
  { value: "DKK", label: "kr Danish Krone", locale: "da-DK" },
  { value: "SEK", label: "kr Swedish Krona", locale: "sv-SE" },
  { value: "ISK", label: "kr Icelandic Krona", locale: "is-IS" },
];

export type Currency = (typeof Currencies)[0];
