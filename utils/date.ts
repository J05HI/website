const months: { [key: string]: string[] } = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  es: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ],
}

export const formatDate = (date: Date | string, locale: string): string => {
  const dateObject = new Date(date)

  const enFormat = (day: number, month: string, year: number) =>
    `${month} ${day}, ${year}`
  const esFormat = (day: number, month: string, year: number) =>
    `${day} de ${month} de ${year}`

  const day = dateObject.getDate()
  const month = months[locale][dateObject.getMonth()]
  const year = dateObject.getFullYear()

  return locale === 'en'
    ? enFormat(day, month, year)
    : esFormat(day, month, year)
}
