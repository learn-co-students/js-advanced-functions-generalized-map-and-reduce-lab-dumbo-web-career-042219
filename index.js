// Add your functions here
function map(src, cb) {
  let r = [];
  for (let i = 0; i < src.length; i++) {
    r.push(cb(src[i]));
  }
  return r;
}

function reduce(src, cb, sv) {
  let r;
  let i;

  if (sv) {
    r = sv;
  } else {
    r = src[0];
  }

  if (!!sv) {
    i = 0;
  } else {
    i = 1;
  }

  for (; i < src.length; i++) {
    r = cb(src[i], r);
  }
  return r;
}
