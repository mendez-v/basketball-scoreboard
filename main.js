let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let sum = 0

function add1home() {
  sum += 1
  homeScoreEl.textContent = sum
}
function add2home() {
  sum += 2
  homeScoreEl.textContent = sum
}
function add3home() {
  sum += 3
  homeScoreEl.textContent = sum
}

function add1guest() {
  sum += 1
  guestScoreEl.textContent = sum
}
function add2guest() {
  sum += 2
  guestScoreEl.textContent = sum
}
function add3guest() {
  sum += 3
  guestScoreEl.textContent = sum
}