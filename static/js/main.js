
function toggleSidebar() {
  let sideBar = document.getElementById('sidebar')
  let toggleBtn = document.getElementById('toggle-btn')

  if (sideBar.className == 'sidebar-wrap hide') {
    sideBar.classList.remove('hide')
    toggleBtn.classList.add('moveBtn')
  } else {
    sideBar.classList.add('hide')
    toggleBtn.classList.remove('moveBtn')
  }
}

window.addEventListener(
  'load',
  function () {
    $('.select2').select2({
      width: 'resolve', // need to override the changed default
    })
  },
  false
)
