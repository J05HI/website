export const formatDate = async (
  date: Date | string,
  locale: string
): Promise<string> => {
  const dateObject = new Date(date)

  try {
    return dateObject.toLocaleDateString(`${locale}-US`, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch (error) {
    const { format } = await import(
      /* webpackChunkName: 'date-fns' */ 'date-fns'
    )
    const { default: esLocale } = await import(
      /* webpackChunkName: 'date-fns/locale/es' */ 'date-fns/locale/es'
    )

    const enDate = format(dateObject, 'MMMM dd, yyyy')
    const esDate = format(dateObject, "dd' de 'LLLL' de 'yyyy", {
      locale: esLocale,
    })

    return locale === 'en' ? enDate : esDate
  }
}
