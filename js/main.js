//DISABLE UNTIL ANIMATION DONE
function disableLink() {
  document.querySelectorAll("a").forEach((a) => {
    a.style.pointerEvents = "none";
  });
}
function enableLink() {
  document.querySelectorAll("a").forEach((a) => {
    a.style.pointerEvents = "auto";
  });
}

// DARKMODE ANIMATION
var rootStyle = document.querySelector(":root").style;
var lowWhite = "rgba(255,255,255,0.87)";
var darkGrey = "#121212";
var darkRed = "#A8140C";
var medRed = "#DB1910";
var lightRed = "#E15A53";
var white = "#fafafa";
var black = "#0E1111";

if (localStorage.dark == null || localStorage.dark == 0) {
  toLightMode();
  localStorage.setItem("dark", 0);
  document.querySelectorAll("img").forEach((a) => {
    a.style.filter = "brightness(100%)";
  });
} else if (localStorage.dark == 1) {
  toDarkMode();
  document.querySelectorAll("img").forEach((a) => {
    a.style.filter = "brightness(90%)";
  });
}
function darkMode() {
  if (darkModeToggle == true && !runningAnime) {
    runningAnime = true;
    darkModeToggle = false;
    localStorage.dark = 0;
    document.querySelector(".darkmode").style.zIndex = 2;
    anime({
      targets: ".darkmode-bg",
      easing: "easeOutExpo",
      opacity: [0, 1],
      duration: 1000,
      complete: () => {
        toLightMode();
        anime({
          targets: ".darkmode-bg",
          scale: 1,
          easing: "easeInOutExpo",
          duration: 1500,
          complete: () => {
            lightBulbSVG.setAttribute("d", lightsOn);
            darkModeButton.classList.toggle("on");
            runningAnime = false;
          },
        });
      },
    });
  } else if (darkModeToggle == false && !runningAnime) {
    runningAnime = true;
    darkModeToggle = true;
    localStorage.dark = 1;
    anime({
      targets: ".darkmode-bg",
      scale: 400,
      easing: "easeInOutExpo",
      duration: 2000,
      complete: () => {
        toDarkMode();
        anime({
          targets: ".darkmode-bg",
          easing: "easeInExpo",
          opacity: [1, 0],
          duration: 400,
          complete: () => {
            lightBulbSVG.setAttribute("d", lightsOff);
            darkModeButton.classList.toggle("on");
            runningAnime = false;
            document.querySelector(".darkmode").style.zIndex = 0;
          },
        });
      },
    });
  }
}

function toDarkMode() {
  rootStyle.setProperty("--bg", darkGrey);
  rootStyle.setProperty("--black", lowWhite);
  rootStyle.setProperty("--medium", darkRed);
  rootStyle.setProperty("--dark", lightRed);
}

function toLightMode() {
  rootStyle.setProperty("--bg", white);
  rootStyle.setProperty("--black", black);
  rootStyle.setProperty("--medium", medRed);
  rootStyle.setProperty("--dark", darkRed);
}

// MAIN PAGE ANIMATION
function homeAnimation() {
  if (localStorage.visited == 0 || localStorage.visited == null) {
    localStorage.setItem("visited", 1);
    localStorage.setItem("visitCount", 1);
    anime
      .timeline({
        easing: "easeOutExpo",
        duration: 800,
        complete: () => {
          runningAnime = false;
          enableLink();
        },
      })
      .add({
        targets: ".hi",
        translateX: hiToCenter,
        duration: 100,
      })
      .add({
        targets: ".hi",
        translateY: [20, 0],
        opacity: [0, 1],
      })
      .add({
        targets: ".hi",
        translateX: 0,
        easing: "easeOutElastic(.5, .6)",
      })
      .add(
        {
          targets: ".home .hi-next",
          opacity: [0, 1],
        },
        "+=100"
      )
      .add({
        targets: ".home .sub-title",
        translateY: [20, 0],
        opacity: [0, 1],
      })
      .add({
        targets: ".nav div",
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
      })
      .add(
        {
          targets: ".darkmode",
          opacity: [0, 1],
        },
        "-=400"
      )
      .add(
        {
          targets: ".darkmode-bg",
          opacity: [0, 1],
        },
        "-=800"
      );
  } else {
    localStorage.visitCount++;
    if (localStorage.visitCount > 2) {
      localStorage.setItem("visited", 0);
    }
    anime
      .timeline({
        easing: "easeOutExpo",
        duration: 800,
        complete: () => {
          runningAnime = false;
          enableLink();
        },
      })
      .add({
        targets: ".home",
        translateY: [20, 0],
        opacity: [0, 1],
      })
      .add(
        {
          targets: ".home .sub-title",
          translateY: [20, 0],
          opacity: [0, 1],
        },
        "-=400"
      )
      .add(
        {
          targets: ".nav div",
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(100),
        },
        "-=400"
      )
      .add(
        {
          targets: ".darkmode",
          opacity: [0, 1],
        },
        "-=400"
      )
      .add(
        {
          targets: ".darkmode-bg",
          opacity: [0, 1],
        },
        "-=800"
      );
  }
}

// CONTACT PAGE ANIMATION
function contactAnimation() {
  anime
    .timeline({
      easing: "easeOutExpo",
      duration: 800,
      complete: () => {
        enableLink();
      },
    })
    .add({
      targets: ".title",
      opacity: [0, 1],
      translateX: [50, 0],
    })
    .add(
      {
        targets: ".title .line",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=600"
    )
    .add(
      {
        targets: ".list",
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(100),
      },
      "-=200"
    )
    .add(
      {
        targets: ".list p",
        opacity: [0, 1],
        translateX: [50, 0],
        delay: anime.stagger(100),
      },
      "-=700"
    )
    .add(
      {
        targets: ".list a",
        opacity: [0, 1],
        translateX: [50, 0],
        delay: anime.stagger(100),
      },
      "-=700"
    )
    .add(
      {
        targets: ".image",
        opacity: [0, 1],
      },
      "-=500"
    )
    .add(
      {
        targets: ".back",
        opacity: [0, 1],
        translateX: [20, 0],
      },
      "-=600"
    );
}

// PROJECT LIST PAGE

//ANIMATION
function projectAnimation() {
  anime
    .timeline({
      easing: "easeOutExpo",
      duration: 800,
      complete: () => {
        running = false;
        enableLink();
      },
    })
    .add({
      targets: ".text",
      opacity: [0, 1],
      translateX: [50, 0],
    })
    .add(
      {
        targets: ".text .line",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=600"
    )
    .add(
      {
        targets: ".proj-title",
        opacity: [0, 1],
        translateY: [50, 0],
      },
      "-=400"
    )
    .add(
      {
        targets: ".image",
        opacity: [0, 1],
        translateY: [50, 0],
      },
      "-=600"
    )
    .add(
      {
        targets: ".cta div",
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(100),
      },
      "-=400"
    )
    .add(
      {
        targets: ".scroll",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=300"
    )
    .add(
      {
        targets: ".back",
        opacity: [0, 1],
        translateX: [20, 0],
      },
      "-=400"
    );
}

// SCROLL ANIMATION

//var pageNumber is on the internal script on projects.html

function scrollEvent(dir) {
  if (dir == 0) pageNumber--;
  else if (dir == 1) pageNumber++;

  if (pageNumber < 1) pageNumber = projectsCount;
  else if (pageNumber > projectsCount) pageNumber = 1;

  localStorage.setItem("projectPage", pageNumber);

  outroAnime(dir, pageNumber);
}

function outroAnime(dir, page) {
  let value = () => {
    if (dir == 0) return -20;
    else if (dir == 1) return 20;
  };

  anime
    .timeline({
      easing: "easeInExpo",
      duration: 400,
      complete: () => {
        changeContent(page);
        introAnime(dir);
      },
    })
    .add({
      targets: ".proj-title",
      opacity: 0,
      translateY: value,
    })
    .add({
      targets: ".image",
      opacity: 0,
    });
}

function introAnime(dir) {
  let value = () => {
    if (dir == 0) return 20;
    else if (dir == 1) return -20;
  };
  anime
    .timeline({
      easing: "easeOutExpo",
      duration: 800,
      complete: () => {
        running = false;
      },
    })
    .add({
      targets: ".proj-title",
      opacity: 1,
      translateY: [value, 0],
    })
    .add(
      {
        targets: ".image",
        opacity: 1,
      },
      "-=400"
    );
}

function changeContent(page) {
  document.querySelector(".proj-title").innerHTML =
    projectsLists[page - 1].title;
  document.querySelector(".image").querySelector("img").src =
    projectsLists[page - 1].image;
  document.querySelector(".site").href = projectsLists[page - 1].site;
  document.querySelector(".active").classList.remove("active");
  document
    .querySelector(`.scroll div:nth-child(${page})`)
    .classList.add("active");
}

//PROJECT DETAIL PAGE
function projectDetailAnimation() {
  anime
    .timeline({
      easing: "easeOutExpo",
      duration: 800,
      complete: () => {
        enableLink();
      },
    })
    .add({
      targets: ".text",
      opacity: [0, 1],
      translateX: [50, 0],
    })
    .add(
      {
        targets: ".text .line",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=600"
    )
    .add(
      {
        targets: ".main-image",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=400"
    )
    .add(
      {
        targets: ".project-desc .title",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=400"
    )
    .add(
      {
        targets: ".project-desc .detail",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=600"
    )
    .add({
      targets: ".back",
      opacity: [0, 1],
      translateX: [20, 0],
    });
}

function projectContentLoad() {
  var projectNumber = localStorage.projectPage
    ? localStorage.projectPage - 1
    : 0;
  var subImg = projectsLists[projectNumber].subImage;
  var subImgCount = subImg.length;

  for (var i = 0; i < subImgCount; i++) {
    var newImg = document.createElement("img");
    var subImgNode = document.querySelector(".sub-image");
    newImg.setAttribute("src", subImg[i]);
    subImgNode.appendChild(newImg);
  }

  document.querySelector(
    "title"
  ).innerHTML = `Projects - ${projectsLists[projectNumber].heading}`;
  document.querySelector(".text").querySelector("h1").innerHTML =
    projectsLists[projectNumber].heading;
  document.querySelector(".main-image").querySelector("img").src =
    projectsLists[projectNumber].image;
  document.querySelector(".project-desc").querySelector(".title").innerHTML =
    projectsLists[projectNumber].title;
  document.querySelector(".project-desc").querySelector(".detail").innerHTML =
    projectsLists[projectNumber].detail
      .replaceAll("*{", "<span class='bold light'>")
      .replaceAll("}*", "</span>")
      .replaceAll(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        "<a href=$2 target='_blank' rel='noreferrer' class='bold dark'>$1</a>"
      );
  document.querySelector(".visit").href = projectsLists[projectNumber].site;
}
