function map(source, action) {
  let array = []

  for (let i = 0; i < source.length; i++) {
    let item = source[i]
    array.push(action(item))
  }

  return array;
}

function reduce(source, action, starting){
  let array = (!!starting) ? starting : source[0]
  let i = (!!starting) ? 0 : 1

  for (; i < source.length; i++) {
    array = action(source[i], array)
  }

  return array;
}
