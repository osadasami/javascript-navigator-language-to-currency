import { currencies, currency } from './currencies'

export function localeToCurr(locale: string): currency {
  const code = currencies.find((item) => item.locale === locale)
  if (!code) throw new TypeError('locale is invalid')
  return code
}
