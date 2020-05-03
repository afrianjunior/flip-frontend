export default function (wait) {
  let timer = null

  function exec (callback) {
    let context = this
    let args = arguments

    function later () {
      timer = null

      callback.apply(context, args)
    }

    clearTimeout(timer)

    timer = setTimeout(later, wait)
  }

  return {
    exec
  }
}
