import { currencies } from './currencies'

export function localeToCurr(locale: string) {
  const code = currencies.find((item) => item.locale === locale)
  if (!code) throw new TypeError('locale is invalid')
  return code
}
