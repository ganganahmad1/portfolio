window.onscroll = () => {
  const wsc = document.body.scrollTop || document.documentElement.scrollTop

  const aboutMe = document.getElementById('about-title')
  if (wsc > aboutMe.offsetTop - 400) {
    aboutMe.style.opacity = "1"
    aboutMe.style.transition = "all 1s"
  } else {
    aboutMe.style.opacity = "0"
    aboutMe.style.transition = "all 1s"
  }
}