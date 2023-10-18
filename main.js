let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let scoreboard = document.getElementById("scoreboard")

scoreboard.addEventListener("submit", (evt) => {
  evt.preventDefault()
})

homeScoreEl.defaultValue = 0
guestScoreEl.defaultValue = 0

let homePoint = 0
function add1home() {
  homePoint += 1
  homeScoreEl.value = homePoint
}
function add2home() {
  homePoint += 2
  homeScoreEl.value = homePoint
}
function add3home() {
  homePoint += 3
  homeScoreEl.value = homePoint
}

let guestPoint = 0
function add1guest() {
  guestPoint += 1
  guestScoreEl.value = guestPoint
}
function add2guest() {
  guestPoint += 2
  guestScoreEl.value = guestPoint
}
function add3guest() {
  guestPoint += 3
  guestScoreEl.value = guestPoint
}

function clean() {
  homePoint = 0
  guestPoint = 0
}