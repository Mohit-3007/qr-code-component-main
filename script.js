function adjustParentDivWidth() {
  const parentDiv = document.querySelector(".parent_div");
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  console.log("window.innerWidth ", window.innerWidth);
  console.log(
    "document.documentElement.clientWidth ",
    document.documentElement.clientWidth
  );

  if (scrollbarWidth > 0) {
    // Scrollbar is present
    parentDiv.style.width = `calc(100% - ${scrollbarWidth}px)`;
  } else {
    // No scrollbar
    parentDiv.style.width = "100%";
  }
}

// Adjust on initial load
adjustParentDivWidth();

// Adjust on window resize
window.addEventListener("resize", adjustParentDivWidth);

// Adjust on fullscreen change
document.addEventListener("fullscreenchange", adjustParentDivWidth);
document.addEventListener("webkitfullscreenchange", adjustParentDivWidth);
document.addEventListener("mozfullscreenchange", adjustParentDivWidth);
document.addEventListener("MSFullscreenChange", adjustParentDivWidth);
