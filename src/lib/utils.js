export function isArray (value) {
  return value instanceof Array || Object.prototype.toString.call(value) === '[object Array]'
}

export function isObject (value) {
  return value && value.toString() === '[object Object]'
}

export function isObjectEmpty (value) {
  return !Object.keys(value).length
}

export function isUndefined (value) {
  return value === void 0
}

export function isNumber (value) {
  return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]'
}

export function toRupiah (num) {
  if (isNaN(num)) return 'Not a Number'
  let rupiah = ''
  const reverseNumber = num
    .toString()
    .split('')
    .reverse()
    .join('')
  const arrReverseNumber = [...Array(reverseNumber.length).keys()]
  arrReverseNumber.map(index => {
    if (index % 3 === 0) rupiah += `${reverseNumber.substr(index, 3)}.`
  })

  return `Rp${
    rupiah.split('', rupiah.length - 1)
      .reverse()
      .join('')
  }`
}

export function dateFormat (date) {
  const browserFormat = new Date(date)
  let humanizeFormat = null

  if (browserFormat.toLocaleDateString) {
    humanizeFormat = browserFormat.toLocaleDateString(
      'id-ID',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    )
  } else {
    const _MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'Oktober', 'November', 'Desember']
    const day = browserFormat.getDate()
    const month = _MONTHS[browserFormat.getMonth()]
    const year = browserFormat.getFullYear()

    humanizeFormat = `${day} ${month} ${year}`
  }
  return humanizeFormat
}
