// header
let header = document.createElement("header");
document.body.insertBefore(header, document.body.firstChild);

let loc = window.location.href.split("/").at(-1);

if (loc == "" || loc == "art" || loc == "index.html" || loc == "index.html#about") {
    // homepage
    let donate = document.createElement("a");
    donate.href = "https://www.unicefusa.org/how-help/donate";
    donate.innerText = "🕊️";
    donate.style = "text-decoration: none;"
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
footer.innerHTML = "<p>Some images: <a href='https://atorresen.tumblr.com/' class='footerLink'>Tumblr</a><br>Some code: <a href='https://github.com/atorresen' class='footerLink'>GitHub</a></p>";
document.body.appendChild(footer);