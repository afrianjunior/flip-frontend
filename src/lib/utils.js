export function sortAlphabeticallyByKey (data, direction, key) {
  const _DIRECTION_TYPES = [1, -1]
  if (!_DIRECTION_TYPES.includes(direction)) throw Error(`lib sortAlphabeticallyByKey: direction ${direction} not allowed`)

  let result = data.map(item => ({ ...item }))

  for (let item = result.length - 1; item >= 0; item--) {
    for (let anotherItem = 1; anotherItem <= item; anotherItem++) {
      let swapper = null
      let firstValue = result[anotherItem - 1][key]
      let secondValue = result[anotherItem][key]

      if (direction === _DIRECTION_TYPES[0]) {
        if (firstValue > secondValue) {
          swapper = result[anotherItem - 1]
          result[anotherItem - 1] = result[anotherItem]
          result[anotherItem] = swapper
        }
      }

      if (direction === _DIRECTION_TYPES[1]) {
        if (firstValue < secondValue) {
          swapper = result[anotherItem]
          result[anotherItem] = result[anotherItem - 1]
          result[anotherItem - 1] = swapper
        }
      }
    }
  }

  return result
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
