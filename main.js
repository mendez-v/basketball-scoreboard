let hScore = document.getElementById("h-score")
let gScore = document.getElementById("g-score")

let hCount = 0
let gCount = 0

function addPointsHome(points) {
  hCount += points
  hScore.textContent = hCount
  greater(hCount, gCount)
}
function addPointsGuest(points) {
  gCount += points
  gScore.textContent = gCount
  greater(hCount, gCount)
}

function add1Home() {
  addPointsHome(1)
}
function add2Home() {
  addPointsHome(2)
}
function add3Home() {
  addPointsHome(3)
}

function add1Guest() {
  addPointsGuest(1)
}
function add2Guest() {
  addPointsGuest(2)
}
function add3Guest() {
  addPointsGuest(3)
}

function greater(home, guest) {
  hScore.classList.toggle('neon', home > guest)
  gScore.classList.toggle('neon', guest > home)
}

function newGame() {
  hCount = 0
  gCount = 0
  hScore.textContent = 0
  gScore.textContent = 0
  hScore.classList.remove('neon')
  gScore.classList.remove('neon')
}
