const btn = $('#btn')
const pop = $('#pop')
const overlay = $('#overlay')

function showPop () {
  pop.addClass('active')
  overlay.addClass('active')
}

function hidePop () {
  pop.removeClass('active')
  overlay.removeClass('active')
}

btn.click(() => showPop())
overlay.click(() => hidePop())