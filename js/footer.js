const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="https://i.pinimg.com/564x/70/bd/63/70bd630505578fffc4c873001f89a9e1--design-logo-design-branding.jpg"
                class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Best Sellers</li>
                    <li><a href="#" class="footer-link">Fiction</a></li>
                    <li><a href="#" class="footer-link">History</a></li>
                    <li><a href="#" class="footer-link">Law</a></li>
                    <li><a href="#" class="footer-link">Music</a></li>
                    <li><a href="#" class="footer-link">Fantasy</a></li>
                    <li><a href="#" class="footer-link">Children</a></li>
                    <li><a href="#" class="footer-link">Business</a></li>
                    <li><a href="#" class="footer-link">Economics</a></li>
                    <li><a href="#" class="footer-link">Comedy</a></li>
                    <li><a href="#" class="footer-link">Romance</a></li>

                </ul>
                <ul class="category">
                    <li class="category-title">New Arrivals</li>
                    <li><a href="#" class="footer-link">Fiction</a></li>
                    <li><a href="#" class="footer-link">History</a></li>
                    <li><a href="#" class="footer-link">Law</a></li>
                    <li><a href="#" class="footer-link">Music</a></li>
                    <li><a href="#" class="footer-link">Fantasy</a></li>
                    <li><a href="#" class="footer-link">Children</a></li>
                    <li><a href="#" class="footer-link">Business</a></li>
                    <li><a href="#" class="footer-link">Economics</a></li>
                    <li><a href="#" class="footer-link">Comedy</a></li>
                    <li><a href="#" class="footer-link">Romance</a></li>
                </ul>
            </div>


        </div>
        <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos
            eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima
            reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur
            corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis
            adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa
            reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis
            facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt
            incidunt quasi placeat omnis, itaque harum?</p>
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