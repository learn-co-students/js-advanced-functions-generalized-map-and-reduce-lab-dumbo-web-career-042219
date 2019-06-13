const map = (arr, action) => {
  let new_arr = [];
  arr.forEach(ele => {
    new_arr.push(action(ele));
  });
  return new_arr;
};

const reduce = (arr, action, starting_value) => {
  let reduced;
  
  if (starting_value){
    reduced = starting_value;
  } else {
    reduced = arr.shift();
  }
  arr.forEach(ele => {
    reduced = action(ele, reduced);
  });

  return reduced;
}