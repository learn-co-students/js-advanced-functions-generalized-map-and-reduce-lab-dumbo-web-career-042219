let map = function(arr, fn) {
  return arr.map(num => {
    return fn(num)
  })
}

function reduce(arr, fn, sp){
  let r = (!!sp) ? sp : arr[0]
  let i = (!!sp) ? 0 : 1

  for (; i < arr.length; i++) {
    r = fn(arr[i], r)
  }

  return r;
}
