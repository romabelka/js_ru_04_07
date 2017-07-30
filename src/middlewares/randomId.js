export default store => next => action => {
  console.log('--- random id', randWD(10))
  console.log('--- ', action);
  next(action)
}

function randWD(n){  // [ 2 ] random words and digits
  return Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(n, 10)) );
}