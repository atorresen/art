// header
let header = document.createElement("header");
document.body.insertBefore(header, document.body.firstChild);

let loc = window.location.href.split("/").at(-1);

if (loc == "" || loc == "art" || loc == "index.html" || loc == "index.html#about") {
    // homepage
    let donate = document.createElement("a");
    donate.href = "https://www.unicefusa.org/how-help/donate";
    donate.innerText = "Donate to UNICEF 🕊️";
    donate.style.color = "yellowgreen";
    header.appendChild(donate);
} else {
    // other pages
    let back = document.createElement("a");
    back.href = "../index.html";
    back.innerText = "< back";
    header.appendChild(back);
}


// footer
let footer = document.createElement("footer");
let footerLinks = document.createElement("p");
let footerLinkStyle = "margin: 8px; text-decoration: underline; color: hotpink";

footerLinks.innerText = "Some images:";
let tumblrLink = document.createElement("a");
tumblrLink.href = "https://atorresen.tumblr.com/";
tumblrLink.innerText = "Tumblr";
tumblrLink.style = footerLinkStyle;
footerLinks.appendChild(tumblrLink);

let githubText = document.createTextNode("    Some code:");
footerLinks.appendChild(githubText);
let githubLink = document.createElement("a");
githubLink.href = "https://github.com/atorresen";
githubLink.innerText = "GitHub";
githubLink.style = footerLinkStyle;
footerLinks.appendChild(githubLink);

footer.appendChild(footerLinks);
document.body.appendChild(footer);

//TODO: add carbon badge
//<div id="wcb" class="carbonbadge"></div>
//<script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>