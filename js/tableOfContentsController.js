tocToggleBtn.onclick = function() {
    toggleTOC(true);
};

tocCloseBtn.onclick = function() {
    toggleTOC(false);
};

window.addEventListener("mouseup", function(event) {
    if(event.target.className == "toc--heading" || event.target.parentNode.className == "toc--heading"){
        toggleTOC(false);
        return
    }
    else {
        let parentElement = event.target;
        do {
            if(parentElement == tableOfContentsDiv){
                return;
            } else {
                parentElement = parentElement.parentNode;
            }
        } while (parentElement != null);
        toggleTOC(false);
    }
});

function toggleTOC(state) {
    if (state) {
        // Show TOC
        tableOfContentsDiv.classList.remove("d-none");
        tableOfContentsDiv.classList.add("d-block");

        // Hide BTN
        toggleTOCBtn(false);

        toggleDarkOverlay(true);
        toggleHTMLScroll(false);
    } else {
        // Hide TOC
        tableOfContentsDiv.classList.remove("d-block");
        tableOfContentsDiv.classList.add("d-none");
        toggleTOCBtn(true);
        toggleDarkOverlay(false);
        toggleHTMLScroll(true);
    }
};

function toggleTOCBtn(state) {
    if (state) {        
        tocToggleBtnDiv.classList.remove("d-none");
        tocToggleBtnDiv.classList.add("d-block");
    } else {
        tocToggleBtnDiv.classList.remove("d-block");
        tocToggleBtnDiv.classList.add("d-none");
    }
};

function toggleDarkOverlay(state) {
    if (state) {        
        darkOverlay.classList.remove("d-none");
        darkOverlay.classList.add("d-block");
    } else {
        darkOverlay.classList.remove("d-block");
        darkOverlay.classList.add("d-none");
    }
};

function toggleHTMLScroll(state) {
    if (state) {        
        html.classList.remove("overflow-hidden");
    } else {
        html.classList.add("overflow-hidden");
    }
};