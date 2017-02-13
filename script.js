var time = document.getElementById('time')
var timeStorage = window.localStorage.getItem('storage')
function changeClass () {
  if (time.className === 'day-theme') {
    time.setAttribute('class', 'night-theme')
    timeStorage = 'night-theme'
    window.localStorage.setItem('storage', timeStorage)
  } else {
    time.setAttribute('class', 'day-theme')
    timeStorage = 'day-theme'
    window.localStorage.setItem('storage', timeStorage)
  }
}

window.onload = function () {
  document.getElementById('button').addEventListener('click', changeClass)
  time.setAttribute('class', timeStorage)
}

window.localStorage.setItem('storage', timeStorage)

var count = window.localStorage.getItem('on_load_counter')
if (count === null) {
  count = 0
}
count++
window.localStorage.setItem('on_load_counter', count)
document.getElementById('display').innerHTML = 'You have visited this site ' + count + ' times.'
