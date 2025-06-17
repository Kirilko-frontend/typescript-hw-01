function merge<T, Z>(objA: T, objB: Z): T & Z {
  return Object.assign({}, objA, objB);
}
