export const BRANDS = [
  { id: 1, brand: 'European' },
  { id: 2, brand: 'American' },
  { id: 3, brand: 'Asian' }
]

const GET_YEAR = new Date().getFullYear()
export const YEARS = Array.from(new Array(20), (value, i) => GET_YEAR - i)

export const PLANS = [
  { id: 1, name: 'Basic' },
  { id: 2, name: 'Full' }
]
