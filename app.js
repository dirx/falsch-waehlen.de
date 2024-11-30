document.addEventListener('DOMContentLoaded', function () {
  const kontakt = document.getElementById('kontakt')
  kontakt.addEventListener('click', function () {
    mailto(kontakt.dataset.mail)
  })
})

function mailto (r) {
  document.location.href = 'mailto:' + blob(r, -1)
}

function blob (r, d) {
  let o = ''
  for (let c of decodeURI(r)) {
    o += String.fromCharCode(c.charCodeAt(0) + d)
  }
  return o
}