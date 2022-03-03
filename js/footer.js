const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="https://i.pinimg.com/564x/70/bd/63/70bd630505578fffc4c873001f89a9e1--design-logo-design-branding.jpg"
                class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Best Sellers</li>
                    <li><a href="fiction.html" class="footer-link">Fiction</a></li>
                    <li><a href="#" class="footer-link">History</a></li>
                    <li><a href="#" class="footer-link">Law</a></li>
                    <li><a href="#" class="footer-link">Music</a></li>
                    <li><a href="fiction.html" class="footer-link">Fantasy</a></li>
                    <li><a href="children.html" class="footer-link">Children</a></li>
                    <li><a href="business.html" class="footer-link">Business</a></li>
                    <li><a href="business.html" class="footer-link">Economics</a></li>
                    <li><a href="comedy.html" class="footer-link">Comedy</a></li>
                    <li><a href="#" class="footer-link">Romance</a></li>

                </ul>
                <ul class="category">
                    <li class="category-title">New Arrivals</li>
                    <li><a href="fiction.html" class="footer-link">Fiction</a></li>
                    <li><a href="#" class="footer-link">History</a></li>
                    <li><a href="#" class="footer-link">Law</a></li>
                    <li><a href="#" class="footer-link">Music</a></li>
                    <li><a href="fiction.html" class="footer-link">Fantasy</a></li>
                    <li><a href="children.html" class="footer-link">Children</a></li>
                    <li><a href="business.html" class="footer-link">Business</a></li>
                    <li><a href="business.html" class="footer-link">Economics</a></li>
                    <li><a href="comedy.html" class="footer-link">Comedy</a></li>
                    <li><a href="#" class="footer-link">Romance</a></li>
                </ul>
            </div>


        </div>
        <p class="footer-title">about company</p>
        <p class="info">We at Exciting Adventure house a wide range of adventures ranging from children's books to the up's and downs in business.
        <br>
        <br>
        Exciting Adventure aims to be a point of cultural and social interaction where authors and poets hold court, where children are regaled, where people gravitate to be informed, to be entertained, even enlightened. The name embodies the vision of  Exciting Adventure as a place and space for people who seek adventure , information, knowledge or just the pleasure of reading. 
        <br>
        <br>
        With its large children’s section and its focus on making the store a friendly, safe, fun-filled place, Exciting Adventure attracts many families who normally don’t think of visiting bookstores. The unobtrusive helpful user friendly interface assists customers in finding the right books for the right occasion. 
        </p>
        <p class="info">support emails - help@excitingadventure.com, customersupport@excitingadventure.com</p>
        <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Exciting Adventure : Enter into the world of books with us and our best collections</p>
        `;
}

createFooter();