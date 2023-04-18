import validate from './schema'
import { CheckFunction } from '../type'

const check: CheckFunction = (litteraStr) => {
  let litteraData

  if (typeof litteraStr === 'string') {
    try {
      litteraData = JSON.parse(litteraStr)
    } catch (e) {
      return false
    }
  }

  if (typeof litteraData !== 'object') return false

  const isLittera = validate(litteraData)

  if (!isLittera) {
    if (process.env.NODE_ENV === 'development')
      console.log(isLittera, validate.errors)
  }

  return isLittera
}

export default check
