export const activeMenu = (hamburgerId, menuId) => {
  const hamburger = document.getElementById(hamburgerId),
        menu      = document.getElementById(menuId)

  if(hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('show')
    })
  }
}

export const activeMenuLink = () => {
  const menu = document.getElementById('menu')
  if(menu) {
    const links = Array.from(menu.querySelectorAll('a'))
    links.map(link => {
      if (link.href === location.href || link.href === location.href.slice(0,-1)) link.classList.add('menu__link--active')
    })
  }
}
