const html = document.documentElement;

const allHeadings = document.querySelectorAll(".main-content h2, .main-content h4");

const tableOfContentsDiv = document.getElementById("tableOfContents");

const tocToggleBtnDiv = document.getElementById("btn__toc");
const tocToggleBtn = tocToggleBtnDiv.firstElementChild;

const tocCloseBtn = document.getElementById("btn__toc--close");

const darkOverlay = document.getElementById("darkOverlay");