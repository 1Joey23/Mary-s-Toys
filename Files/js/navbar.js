/*
To use the Nav Bar just link the script using 

<script src="../js/navbar.js"></script>

Linking CSS is not required 
*/

    // Automatic link to CSS file
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "../css/navbar.css";
    document.head.appendChild(cssLink);


//this loads the page
document.addEventListener("DOMContentLoaded", function() {
    

    //store nav bar text into variable
    var navBarHtml = `
        <nav class="navBarPageTop">
            <li><a href="../html/index.html">Return to Home</a></li>
            <li><a href="../html/aboutPage.html">About Our Company</a></li>
            <li><a href="../html/leadershipPage.html">Our Leadership Team</a></li>
            <li><a href="../html/toyPage.html">Toy Catalog</a></li>
            <li><a href="#">Shopping Cart</a></li>
            <img class="banner" src="../media/BrandContent/logo_banner.png">
        </nav>`
        

    document.body.insertAdjacentHTML("afterbegin", navBarHtml);
    
    var footerHtml = `
        <footer class="navbar">
            <nav class="navBarPageBottom">
                <li><a href="../html/index.html">Return to Home</a></li>
                <li><a href="../html/aboutPage.html">About Our Company</a></li>
                <li><a href="../html/FaqPage.html">Frequently Asked Questions (FAQ)</a></li>
                <li><a href="#">Customer Support</a></li>
                <li><a href="../html/return.html">Return Policy</a></li>
            </nav>
        </footer>`;
    
    document.body.insertAdjacentHTML("beforeend", footerHtml);
});