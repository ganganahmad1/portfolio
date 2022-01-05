window.onscroll = () => {
  const wsc = document.body.scrollTop || document.documentElement.scrollTop;

  // const aboutMe = document.getElementById('about-title')
  // if (wsc > aboutMe.offsetTop - 400) {
  //   aboutMe.style.opacity = "1"
  //   aboutMe.style.transition = "all 1s"
  // } else {
  //   aboutMe.style.opacity = "0"
  //   aboutMe.style.transition = "all 1s"
  // }

  const photo = document.getElementById("photo");
  if (wsc > photo.offsetTop - 400) {
    photo.style.top = "-20px";
    photo.style.left = "-30px";
    photo.style.transition = "all 1s";
  } else {
    photo.style.top = "-5px";
    photo.style.left = "-14px";
    photo.style.transition = "all 1s";
  }

  const edu = document.getElementById("edu-title");
  const eduLine = document.getElementById("edu-line");

  if (wsc > edu.offsetTop - 650) {
    edu.style.opacity = "1";
    edu.style.top = "0";
    edu.style.transition = "all 0.5s";

    eduLine.style.opacity = "1";
    eduLine.style.left = "0";
    eduLine.style.transition = "all 0.5s";
  } else {
    edu.style.opacity = "0";
    edu.style.top = "100px";
    edu.style.transition = "all 0.5s";

    eduLine.style.opacity = "0";
    eduLine.style.left = "200px";
    eduLine.style.transition = "all 0.5s";
  }

  const eduList = document.getElementsByClassName("edu-list");
  for (i = 0; i < eduList.length; i++) {
    if (wsc > eduList[i].offsetTop - 600) {
      eduList[i].style.opacity = "1";
      eduList[i].style.bottom = "0";
      eduList[i].style.transition = "all 0.7s";
    } else {
      eduList[i].style.opacity = "0";
      eduList[i].style.bottom = "100px";
      eduList[i].style.transition = "all 0.7s";
    }
  }

  const portLeft = document.getElementById("port-left");
  const portRight = document.getElementById("port-right");
  const portTitle = document.getElementById("port-title");
  if (wsc > portTitle.offsetTop - 600) {
    portLeft.style.opacity = "1";
    portLeft.style.right = "0";
    portLeft.style.transition = "all 0.7s";

    portRight.style.opacity = "1";
    portRight.style.left = "0";
    portRight.style.transition = "all 0.7s";

    portTitle.style.opacity = "1";
    portTitle.style.transition = "all 1s";
  } else {
    portLeft.style.opacity = "0";
    portLeft.style.right = "300px";
    portLeft.style.transition = "all 0.7s";

    portRight.style.opacity = "0";
    portRight.style.left = "300px";
    portRight.style.transition = "all 0.7s";

    portTitle.style.opacity = "0";
    portTitle.style.transition = "all 1s";
  }

  const projectName = document.getElementsByClassName("project-name");
  const projectPlatform = document.getElementsByClassName("project-platform");
  for (i = 0; i < projectName.length; i++) {
    if (wsc > projectName[i].offsetTop - 600) {
      projectName[i].style.opacity = "1";
      projectName[i].style.bottom = "0";
      projectName[i].style.transition = "all 0.5s";

      projectPlatform[i].style.opacity = "1";
      projectPlatform[i].style.top = "0";
      projectPlatform[i].style.transition = "all 0.5s";
    } else {
      projectName[i].style.opacity = "0";
      projectName[i].style.bottom = "20px";
      projectName[i].style.transition = "all 0.5s";

      projectPlatform[i].style.opacity = "0";
      projectPlatform[i].style.top = "20px";
      projectPlatform[i].style.transition = "all 0.5s";
    }
  }
};
