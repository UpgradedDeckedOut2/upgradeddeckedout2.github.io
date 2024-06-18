const generateTOC = () => {
    allHeadings.forEach((heading) => {
        const div = document.createElement("div");
        const a = document.createElement("a");
        a.href = `#${heading.parentElement.id}`;
        div.innerHTML = heading.innerHTML;

        if (heading.nodeName == "H4") {
            div.classList.add("ul-2");
            a.classList.add("toc--heading");
        } else {
            div.classList.add("ul-1");
            a.classList.add("toc--heading");
        }
        a.appendChild(div);
        tableOfContents.appendChild(a);
    });
};

if (allHeadings.length > 0 && tableOfContents) {
    generateTOC();
}
  
