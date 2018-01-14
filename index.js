const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  var outputArray = [...kittens, name]
  return outputArray
}
function prependKitten(name) {
  var outputArray = [name, ...kittens]
  return outputArray
}

function removeFirstKitten() {
  return kittens.slice(1)
}
