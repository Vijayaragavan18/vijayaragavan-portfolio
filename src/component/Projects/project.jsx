import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import WatchImg from '../images/projectImg/one2.png';
import JewelsImg from '../images/projectImg/jewelsImg.png';
import TheaterImg from '../images/projectImg/mockup.png';
import 'swiper/css';
import 'swiper/css/pagination';
import OneUx from '../images/uiux/oneux.png';
import TwoUx from '../images/uiux/threeUx.png';
import ThreeUx from '../images/uiux/twoUx.jpg';
import FourUx from '../images/projectImg/one2.png';
import GraOne from '../images/grp/brand.png';
import GraTwo from '../images/grp/poster.jpg';
import GraThree from '../images/grp/eer.png';
import PosterMock from '../images/grp/posterMock.jpg';
import NewArt from '../images/grp/new art.jpg';
import BookGrap from '../images/grp/book front and back 1.jpg';
import LogoGrap from '../images/grp/logo.png';
import { motion } from 'framer-motion';

import '../css/main.css';
import '../js/main.js';


const project = () => {
    return (
        <>
            <div className="projectSection" id="project">

                <div className="projectMotion">
                    <div className="projectHead">
                        <h1>My Projects</h1>
                    </div>
                    <div className="categorySec">
                        <div className="projCategory ">
                            <button className="catLink fw-semibold btnDev btnActive">DEVELOPMENT</button>
                            <button className="catLink fw-semibold btnDev">UIUX</button>
                            <button className="catLink fw-semibold btnDev">GRAPHIC DESIGN</button>
                        </div>
                    </div>
                    <div className="active devCetagory projectOne">
                        <div className="devCetagoryOne ">
                            <div className="projectLines ">
                                <div className="projectArea mt-5">
                                    <div className="projectPart">
                                        <div className="projectImg"><img src={TheaterImg} className='projectImgPart' alt="TheaterImg" /></div>
                                        <div className="projectDescription">
                                            <div className="projectLinks"><a className="liveBtn" href="https://vijayaragavan18.github.io/Capg-Movie-Ticket/index.html" target="_blank"> Live </a> <a className="liveBtn" href="https://www.behance.net/gallery/216308737/UIUX-For-Cinema-Ticket-Booking-Website" target="_blank"> Design</a> <a className="liveBtn" href="https://github.com/Vijayaragavan18/Capg-Movie-Ticket" target="_blank" > github</a></div>
                                            <div className="projectTimeSec">
                                                <div className="projectHeadText fw-bold">Capg Cinemas</div>
                                                <div className="projectTime">10/02/2025</div>
                                            </div>
                                            <p>Capg Cinemas is a modern online movie ticket booking platform designed to deliver a seamless and hassle-free cinema experience. Whether you're planning a weekend outing or catching the latest blockbuster, Capg Cinemas allows users to browse showtimes, select seats, and book tickets from the comfort of their home</p>
                                            <button class="projectBtn oneBtn" data-index="0">See More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="projectArea">
                                    <div className="projectPart projectPartDesk">
                                        <div className="projectDescription2">
                                            <div className="projectLinks"><a className="liveBtn" href="https://vijayaragavan18.github.io/ecommerce-watch-site/" target="_blank"> Live </a> <a className="liveBtn" href="https://www.behance.net/gallery/227736747/vijay-Ts-profile-UIUX-For-Classic-Watch-Store-Website" target="_blank"> Design</a> <a className="liveBtn" href="https://github.com/Vijayaragavan18/ecommerce-watch-site" target="_blank"> github</a></div>
                                            <div className="projectTimeSec">
                                                <div className="projectHeadText fw-bold">Capg Watches</div>
                                                <div className="projectTime">22/05/2025</div>
                                            </div>
                                            <p>Capgs Watches is a modern e-commerce website dedicated to showcasing and selling a premium range of watches. The platform provides users with an intuitive shopping experience, featuring stylish product listings, detailed watch descriptions.</p>
                                            <button class="projectBtn oneBtn" data-index="1">See More</button>
                                        </div>
                                        <div className="projectImg2">
                                            <img src={WatchImg} className='projectImgPart' alt="WatchImg" />
                                        </div>
                                    </div>
                                    <div className="projectPartMob">
                                        <div className="projectImg2">
                                            <img src={WatchImg} className='projectImgPart' alt="WatchImg" />
                                        </div>
                                        <div className="projectDescription2">
                                            <div className="projectLinks"><a className="liveBtn" href="https://vijayaragavan18.github.io/ecommerce-watch-site/" target="_blank"> Live </a> <a className="liveBtn" href="https://www.behance.net/gallery/227736747/vijay-Ts-profile-UIUX-For-Classic-Watch-Store-Website" target="_blank"> Design</a> <a className="liveBtn" href="https://github.com/Vijayaragavan18/ecommerce-watch-site" target="_blank"> github</a></div>
                                            <div className="projectTimeSec">
                                                <div className="projectHeadText fw-bold">Capg Watches</div>
                                                <div className="projectTime">22/05/2025</div>
                                            </div>
                                            <p>Capgs Watches is a modern e-commerce website dedicated to showcasing and selling a premium range of watches. The platform provides users with an intuitive shopping experience, featuring stylish product listings, detailed watch descriptions.</p>
                                            <button class="projectBtn oneBtn" data-index="2">See More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="projectArea">
                                    <div className="projectPart">
                                        <div className="projectImg">
                                            <img src={JewelsImg} className='projectImgPart' alt="JewelsImg" />
                                        </div>
                                        <div className="projectDescription">
                                            <div className="projectLinks"><a className="liveBtn" href=""> Live </a> <a className="liveBtn" href="https://www.behance.net/gallery/216313659/UIUX-Case-Study-For-Merchant-Jewellery-Store-Website" target="_blank"> Design</a> <a className="liveBtn" href="https://github.com/Vijayaragavan18/merchant-jewelry-shop.git" target="_blank"> github</a></div>
                                            <div className="projectTimeSec">
                                                <div className="projectHeadText fw-bold">Alua Jewels</div>
                                                <div className="projectTime">12/07/2025</div>
                                            </div>
                                            <p>Alua is a jewellery web Application online store that allows people to buy their jewellery with special design. And also Authorized person can sell their products easily. Alua jewellery website allows users to explore a vast collection for themselves and their loved one.</p>
                                            <button class="projectBtn oneBtn" data-index="3">See More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="projectPop" data-index="0">
                                <div className="launchModalProj">
                                    <div className="modalHeader">
                                        <h1>CAPG CINEMAS</h1>
                                    </div>
                                    <div className="modalBody">
                                        <section>
                                            <h3 className=" fw-semibold"> Project Overview</h3>
                                            <p>
                                                Capg Cinemas is a responsive and modern movie booking website designed
                                                to provide users with a seamless experience for exploring movie
                                                collections, viewing details, and booking tickets. With an engaging UI
                                                and intuitive navigation, the site offers features like movie listings,
                                                theater information, and user-friendly booking for cinema lovers.
                                            </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">Target Users</h3>
                                            <p> Above 8 age Group peoples</p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Design Specifications</h3>
                                            <h4>Colours</h4>
                                            <ul>
                                                <li>
                                                    <span className="colorBox" style={{ background: "#ECEE2A" }}></span>
                                                    #ECEE2A — Vibrant yellow-green (freshness, excitement)
                                                </li>
                                                <li>
                                                    <span className="colorBox" style={{ background: "#D9D9D9" }}></span>
                                                    #D9D9D9 — Soft neutral grey (clean, modern)
                                                </li>
                                                <li>
                                                    <span className="colorBox" style={{ background: "#2E2B2B" }}></span>
                                                    #2E2B2B — Muted dark tone (serious, grounded)
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h4>Typography</h4>
                                            <p>
                                                Inter (sans-serif): Perfect for digital screens — versatile and readable.
                                            </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Development Tech Stacks</h3>
                                            <p>Built with HTML & CSS</p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> User Features</h3>
                                            <ol>
                                                <li>Login and Register</li>
                                            </ol>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">Application Flow</h3>
                                            <ul>
                                                <li>
                                                    Users land on the home page where they see featured movies, banners,
                                                    and navigation options.
                                                </li>
                                                <li>Users can log in or sign up to access booking features.</li>
                                                <li>
                                                    After logging in, users can view the list of currently available
                                                    movies and showtimes.
                                                </li>
                                                <li>
                                                    Users choose the desired showtime, select seats, and book tickets.
                                                </li>
                                            </ul>
                                        </section>
                                    </div>
                                    <h2 className="close">close</h2>
                                </div>
                            </div>
                            <div className="projectPop" data-index="1">
                                <div className="launchModalProj">
                                    <div className="modalHeader">
                                        <h1>CAPG WATCHES
                                        </h1>
                                    </div>
                                    <div className="modalBody">
                                        <section>
                                            <h3 className=" fw-semibold"> Project Overview</h3>
                                            <p>
                                                Capgs Watches is a modern e-commerce website dedicated to showcasing and selling a premium range of watches.
                                                The platform provides users with an intuitive shopping experience, featuring stylish product listings, detailed watch
                                                descriptions.
                                            </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">Target Users</h3>
                                            <p> • Age: 18 to 60 </p>
                                            <p>• Men </p>
                                            <p>• Women </p>
                                            <p>• Kids </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Design Specifications</h3>
                                            <h4>Colours</h4>
                                            <ul>
                                                <li>
                                                    <span className="colorBox" style={{ background: "#1C1913" }}></span>
                                                    #1C1913 (Very Dark Brown/Black-Brown): A deep, earthy tone that sits between black and brown, offering a rich and
                                                    grounded look.
                                                </li>
                                                <li>
                                                    <span className="colorBox" style={{ background: "#D9D9D9" }}></span>
                                                    #D9D9D9 (A soft, neutral light grey): It offers a clean and modern look, helping other colours (especially bold ones)
                                                    stand out.
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h4>Typography</h4>
                                            <p>
                                                Centra No2 Trail:  its suits for digital screens that’s versatile and readable.
                                            </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Development Tech Stacks</h3>
                                            <p>This web application was developed with HTML, CSS, React js, Javascript , Jquery. </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Application Components:
                                            </h3>
                                            <ol>
                                                <li> Forms</li>
                                                <li>  Carousel </li>
                                            </ol>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> User Features:</h3>
                                            <ol>
                                                <li>Login and Register</li>
                                                <li>Add to Cart</li>
                                                <li>Checkout</li>
                                                <li>Product Filter </li>
                                            </ol>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">User Flow:</h3>
                                            <h4>Guest User:</h4>
                                            <ul>
                                                <li>
                                                    Guest user can browse products, view product details and can access the about section.
                                                </li>
                                                <li>If a guest attempts to user features like Add to Cart or Read blogs, they are redirected to the login page to
                                                    create an account or sign in. </li>
                                                <li>
                                                    Login user can browse products, view product details and order products. .
                                                </li>
                                            </ul>
                                            <h4>Login User: </h4>
                                            <ul>
                                                <li>
                                                    Login user can browse products, view product details and order products. .
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">Application Flow</h3>
                                            <h4>Landing Page: </h4>
                                            <ul>
                                                <li>
                                                    Users arrive on the homepage, where they can view featured watches, promotional banners, and product
                                                    categories.
                                                </li>
                                            </ul>
                                            <h4>Filter Products:  </h4>
                                            <ul>
                                                <li> Users explore the collection by browsing different watch categories (men, women, premium, sports). </li>
                                            </ul>
                                            <h4>View Product Details:
                                            </h4>
                                            <ul>
                                                <li> Clicking on a product opens a detailed view with high-quality images, descriptions, price, and specifications.  </li>
                                            </ul>
                                            <h4>User Login/Signup:
                                            </h4>
                                            <ul>
                                                <li> Users can create an account or log in to manage orders.   </li>
                                            </ul>
                                            <h4>Add to Cart:
                                            </h4>
                                            <ul>
                                                <li> Users select the desired watch and add it to their shopping cart.    </li>
                                            </ul>
                                            <h4>Order Confirmation:
                                            </h4>
                                            <ul>
                                                <li> A confirmation page displays after purchase watches.    </li>
                                            </ul>
                                        </section>
                                    </div>
                                    <h2 className="close">close</h2>
                                </div>
                            </div>
                            <div className="projectPop" data-index="2">
                                <div className="launchModalProj">
                                    <div className="modalHeader">
                                        <h1>CAPG WATCHES
                                        </h1>
                                    </div>
                                    <div className="modalBody">
                                        <section>
                                            <h3 className=" fw-semibold"> Project Overview</h3>
                                            <p>
                                                Capgs Watches is a modern e-commerce website dedicated to showcasing and selling a premium range of watches.
                                                The platform provides users with an intuitive shopping experience, featuring stylish product listings, detailed watch
                                                descriptions.
                                            </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">Target Users</h3>
                                            <p> • Age: 18 to 60 </p>
                                            <p>• Men </p>
                                            <p>• Women </p>
                                            <p>• Kids </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Design Specifications</h3>
                                            <h4>Colours</h4>
                                            <ul>
                                                <li>
                                                    <span className="colorBox" style={{ background: "#1C1913" }}></span>
                                                    #1C1913 (Very Dark Brown/Black-Brown): A deep, earthy tone that sits between black and brown, offering a rich and
                                                    grounded look.
                                                </li>
                                                <li>
                                                    <span className="colorBox" style={{ background: "#D9D9D9" }}></span>
                                                    #D9D9D9 (A soft, neutral light grey): It offers a clean and modern look, helping other colours (especially bold ones)
                                                    stand out.
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h4>Typography</h4>
                                            <p>
                                                Centra No2 Trail:  its suits for digital screens that’s versatile and readable.
                                            </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Development Tech Stacks</h3>
                                            <p>This web application was developed with HTML, CSS, React js, Javascript , Jquery. </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Application Components:
                                            </h3>
                                            <ol>
                                                <li> Forms</li>
                                                <li>  Carousel </li>
                                            </ol>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> User Features:</h3>
                                            <ol>
                                                <li>Login and Register</li>
                                                <li>Add to Cart</li>
                                                <li>Checkout</li>
                                                <li>Product Filter </li>
                                            </ol>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">User Flow:</h3>
                                            <h4>Guest User:</h4>
                                            <ul>
                                                <li>
                                                    Guest user can browse products, view product details and can access the about section.
                                                </li>
                                                <li>If a guest attempts to user features like Add to Cart or Read blogs, they are redirected to the login page to
                                                    create an account or sign in. </li>
                                                <li>
                                                    Login user can browse products, view product details and order products. .
                                                </li>
                                            </ul>
                                            <h4>Login User: </h4>
                                            <ul>
                                                <li>
                                                    Login user can browse products, view product details and order products. .
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">Application Flow</h3>
                                            <h4>Landing Page: </h4>
                                            <ul>
                                                <li>
                                                    Users arrive on the homepage, where they can view featured watches, promotional banners, and product
                                                    categories.
                                                </li>
                                            </ul>
                                            <h4>Filter Products:  </h4>
                                            <ul>
                                                <li> Users explore the collection by browsing different watch categories (men, women, premium, sports). </li>
                                            </ul>
                                            <h4>View Product Details:
                                            </h4>
                                            <ul>
                                                <li> Clicking on a product opens a detailed view with high-quality images, descriptions, price, and specifications.  </li>
                                            </ul>
                                            <h4>User Login/Signup:
                                            </h4>
                                            <ul>
                                                <li> Users can create an account or log in to manage orders.   </li>
                                            </ul>
                                            <h4>Add to Cart:
                                            </h4>
                                            <ul>
                                                <li> Users select the desired watch and add it to their shopping cart.    </li>
                                            </ul>
                                            <h4>Order Confirmation:
                                            </h4>
                                            <ul>
                                                <li> A confirmation page displays after purchase watches.    </li>
                                            </ul>
                                        </section>
                                    </div>
                                    <h2 className="close">close</h2>
                                </div>
                            </div>
                            <div className="projectPop" data-index="3">
                                <div className="launchModalProj">
                                    <div className="modalHeader">
                                        <h1>ALUA JEWELS (Full-Stack Project)
                                        </h1>
                                    </div>
                                    <div className="modalBody">
                                        <section>
                                            <h3 className=" fw-semibold"> Project Overview</h3>
                                            <p>
                                                Alua is a jewellery web Application online store that allows people to buy their jewellery with special design. And
                                                also Authorized person can sell their products easily. Alua jewellery website allows users to explore a vast collection
                                                for themselves and their loved one.
                                            </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">Target Users</h3>
                                            <p> • Age: 18 to 60 People who wants to buy and sell. </p>
                                            <p>• Men </p>
                                            <p>• Women </p>
                                            <p>• Kids </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Design Specifications</h3>
                                            <h4>Colours</h4>
                                            <ul>
                                                <li>
                                                    <span className="colorBox" style={{ background: "#1C1913" }}></span>
                                                    #E19133 (A rich, warm orange with a slightly earthy tone): It draws attention while maintaining an elegant, luxurious
                                                    vibe that aligns well with watch branding.
                                                </li>
                                                <li>
                                                    <span className="colorBox" style={{ background: "#D9D9D9" }}></span>
                                                    #FFCEA3 (A gentle, pastel peach that feels soft): It adds a welcoming and stylish feel without overpowering the visual
                                                    hierarchy.
                                                </li>
                                                <li>
                                                    <span className="colorBox" style={{ background: "#D9D9D9" }}></span>
                                                    #ECEE2A (A bright, zesty yellow-green that pops instantly): Its lively tone adds energy and urgency, great for
                                                    capturing user attention in product grids or banners.
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h4>Typography</h4>
                                            <p>
                                                Centra No2 Trail:  its suits for digital screens that’s versatile and readable.
                                            </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Development Tech Stacks:</h3>
                                            <p>This web application was developed with HTML, CSS, Bootstrap, Javascript, Jquery, Ajax, PHP, Laravel and Mysql. </p>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> Application Components:
                                            </h3>
                                            <ol>
                                                <li> Forms</li>
                                                <li>  Carousel </li>
                                                <li>  Timer </li>
                                                <li>  Accordian </li>
                                            </ol>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold"> User Features:</h3>
                                            <h4>Guest Mode</h4>
                                            <ol>
                                                <li>Browse Home Page </li>
                                                <li>Product search </li>
                                                <li>Product filter </li>
                                                <li>Sending Queries to admin  </li>
                                            </ol>
                                            <h4>User Mode: </h4>
                                            <ol>
                                                <li>Login(with forget password flow) and Register  </li>
                                                <li>Product search </li>
                                                <li>Product filter </li>
                                                <li>Checkout </li>
                                                <li>Add to Cart </li>
                                                <li>Sending Queries to admin </li>
                                                <li>Application Form for start Selling </li>
                                                <li>Subscribe for selling products</li>
                                                <li>User dashboard</li>
                                                <li>Getting Mail When They Order Products</li>
                                            </ol>
                                            <h4>Merchant User :  </h4>
                                            <ol>
                                                <li>CRUD Operation For Products. </li>
                                                <li> CRUD Operation For Blogs. </li>
                                                <li>Can See How Many Products Sold.</li>
                                                <li>Can also see their customer details. </li>
                                                <li>Edit Profile. </li>
                                            </ol>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">   Login Credentials :</h3>
                                            <h4> ADMIN:</h4>
                                            <h5> Path:</h5>
                                            <ol>
                                                <li> http://127.0.0.1:8000/UserAccount </li>
                                                <li>  admin can access admin panel use to above URL</li>
                                            </ol>
                                            <h5>Credentials</h5>
                                            <ol>
                                                <li> User Email: vr21680@gmail.com</li>
                                                <li>    User Password: 12341234</li>
                                            </ol>
                                            <h4> Login User: </h4>
                                            <h5> Path:</h5>
                                            <ol>
                                                <li> http://127.0.0.1:8000/UserAccount </li>
                                                <li>  User can access admin panel use to above URL</li>
                                            </ol>
                                            <h5>Credentials</h5>
                                            <ol>
                                                <li>User Email: ragavan12@gmail.com </li>
                                                <li>User Password: 12341234 </li>
                                            </ol>
                                        </section>
                                        <section>
                                            <h3 className=" fw-semibold">Application Flow:</h3>
                                            <h4>Guest User:  </h4>
                                            <ul>
                                                <li>
                                                    Guest user can browse products, view product details and can access the about section.
                                                </li>
                                                <li>
                                                    If a guest attempts to use features like Add to Cart or Read blogs, they are redirected to the login page to
                                                    create an account or sign in.
                                                </li>
                                            </ul>
                                            <h4>Login User:   </h4>
                                            <ul>
                                                <li>Login user can browse products, view product details, check offers, see best-selling items, and read blogs.  </li>
                                                <li>They can also send queries or messages to the admin through a contact form.   </li>
                                                <li>This mode ensures easy product discovery while encouraging users to register for full functionality.  </li>
                                                <li>Can download invoice pdf.  </li>
                                                <li>Can see their order details through their dashboard.   </li>
                                            </ul>
                                            <h4>Merchant User:   </h4>
                                            <h5>After purchase subscription, users can unlock access </h5>
                                            <ul>
                                                <li>Start Selling (Merchant Application)   </li>
                                                <li>Add, manage, and sell their own jewellery products   </li>
                                                <li> Write and publish blogs   </li>
                                                <li>Order History .  </li>
                                                <li>Manage Customer Details    </li>
                                            </ul>
                                        </section>
                                    </div>
                                    <h2 className="close">close</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="devCetagory">
                        <div className="projectLines ">
                            <div className="projectArea mt-5">
                                <div className="projectPart">
                                    <div className="projectImg"><img src={OneUx} className='projectImgPart' alt="TheaterImg" /></div>
                                    <div className="projectDescription">
                                        <div className="projectTimeSec">
                                            <div className="projectHeadText fw-bold">Alua Jewelles</div>
                                            <div className="projectTime">10/06/2025</div>
                                        </div>
                                        <p>Alua is a jewellery web Application online store that allows people to buy their jewellery with special design. And also Authorized person can sell their products easily. Alua jewellery website allows users to explore a vast collection for themselves and their loved one</p>
                                        <a class="projectBtn" href="https://www.behance.net/gallery/216313659/UIUX-Case-Study-For-Merchant-Jewellery-Store-Website" target="_blank">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="projectArea">
                                <div className="projectPart projectPartDesk">
                                    <div className="projectDescription2 ">
                                        <div className="projectTimeSec">
                                            <div className="projectHeadText fw-bold">Capg Cinemas</div>
                                            <div className="projectTime">22/04/2025</div>
                                        </div>
                                        <p>Capg Cinemas is a modern online movie ticket booking platform designed to deliver a seamless and hassle-free cinema experience. Whether you're planning a weekend outing or catching the latest blockbuster, Capg Cinemas allows users to browse showtimes, select seats, and book tickets from the comfort of their home</p>
                                        <a class="projectBtn" href="https://www.behance.net/gallery/216308737/UIUX-For-Cinema-Ticket-Booking-Website" target="_blank">See More</a>
                                    </div>
                                    <div className="projectImg2">
                                        <img src={TwoUx} className='projectImgPart' alt="WatchImg" />
                                    </div>
                                </div>
                                <div className="projectPartMobTwo">
                                    <div className="projectImg2">
                                        <img src={TwoUx} className='projectImgPart' alt="WatchImg" />
                                    </div>
                                    <div className="projectDescription2 ">
                                        <div className="projectTimeSec">
                                            <div className="projectHeadText fw-bold">Capg Cinemas</div>
                                            <div className="projectTime">22/04/2025</div>
                                        </div>
                                        <p>Capg Cinemas is a modern online movie ticket booking platform designed to deliver a seamless and hassle-free cinema experience. Whether you're planning a weekend outing or catching the latest blockbuster, Capg Cinemas allows users to browse showtimes, select seats, and book tickets from the comfort of their home</p>

                                        <a class="projectBtn" href="https://www.behance.net/gallery/216308737/UIUX-For-Cinema-Ticket-Booking-Website" target="_blank">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="projectArea">
                                <div className="projectPart">
                                    <div className="projectImg">
                                        <img src={ThreeUx} className='projectImgPart' alt="JewelsImg" />
                                    </div>
                                    <div className="projectDescription">
                                        <div className="projectTimeSec">
                                            <div className="projectHeadText fw-bold">Fashion</div>
                                            <div className="projectTime">20/09/2024</div>
                                        </div>
                                        <p>A modern fashion e-commerce platform designed to provide users with a seamless online shopping experience. The website showcases a wide range of clothing and accessories with intuitive navigation, personalized recommendations, and visually engaging product displays. It focuses on enhancing the user journey through easy product discovery, smooth checkout flows, and a mobile-first responsive design to meet the needs of today’s digital shoppers</p>
                                        <a class="projectBtn" target="_blank" href="https://www.behance.net/gallery/157445829/Landing-Page">See More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="projectArea">
                                <div className="projectPart projectPartDesk">
                                    <div className="projectDescription2">
                                        <div className="projectTimeSec">
                                            <div className="projectHeadText fw-bold">Capg watches</div>
                                            <div className="projectTime">12/04/2024</div>
                                        </div>
                                        <p>Capgs Watches is a modern e-commerce website dedicated to showcasing and selling a premium range of watches. The platform provides users with an intuitive shopping experience, featuring stylish product listings, detailed watch descriptions.</p>
                                        <a href="https://www.behance.net/gallery/227736747/vijay-Ts-profile-UIUX-For-Classic-Watch-Store-Website" target="_blank" class="projectBtn">See More</a>
                                    </div>
                                    <div className="projectImg2">
                                        <img src={FourUx} className='projectImgPart' alt="WatchImg" />
                                    </div>
                                </div>
                                <div className="projectPartMobTwo">
                                    <div className="projectImg2">
                                        <img src={FourUx} className='projectImgPart' alt="WatchImg" />
                                    </div>
                                    <div className="projectDescription2">
                                        <div className="projectTimeSec">
                                            <div className="projectHeadText fw-bold">Capg Watches</div>
                                            <div className="projectTime">12/04/2024</div>
                                        </div>
                                        <p>Capgs Watches is a modern e-commerce website dedicated to showcasing and selling a premium range of watches. The platform provides users with an intuitive shopping experience, featuring stylish product listings, detailed watch descriptions.</p>
                                        <a href="https://www.behance.net/gallery/227736747/vijay-Ts-profile-UIUX-For-Classic-Watch-Store-Website" target="_blank" class="projectBtn">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="devCetagory">
                        <div className="projectLines ">
                            <div className="projectArea mt-5">
                                <div className="projectPart">
                                    <div className="projectImg"><img src={GraOne} className='projectImgPart' alt="TheaterImg" /></div>
                                    <div className="projectDescription">
                                        {/* <div className="projectLinks"> </div> */}
                                        <div className="projectTimeSec">
                                            <div className="projectHeadText fw-bold">Branding(Queen hills) </div>
                                            <div className="projectTime">09/08/2024</div>
                                        </div>
                                        <p>A complete branding and marketing identity design for Queen Hills Coffee Shop. The project included creating the logo, posters, standees, billboards, ID cards, and other promotional materials. The goal was to craft a warm, modern, and inviting brand identity that reflects the premium coffee experience, while ensuring consistency across both digital and offline marketing touchpoints</p>
                                        <a className="liveBtn" href="https://www.behance.net/gallery/161044085/brand-Identity" target="_blank" > Design</a>
                                    </div>
                                </div>
                            </div>
                            <div className="projectArea">
                                <div className="grapPosterSec">
                                    <div className="onePoster">
                                        <div className="projectImg3">
                                            <img src={GraTwo} className="projectImgPartPoster" alt="WatchImg" />
                                        </div>
                                        <h1>Poster</h1>
                                    </div>
                                    <div className="onePoster">
                                        <div className="projectImg3">
                                            <img src={GraThree} className="projectImgPartPoster" alt="WatchImg" />
                                        </div>
                                        <h1>Invite Poster</h1>
                                    </div>
                                    <div className="onePoster">
                                        <div className="projectImg3">
                                            <img src={PosterMock} className="projectImgPartPoster" alt="WatchImg" />
                                        </div>
                                        <h1>Poster</h1>
                                    </div>
                                    <div className="onePoster">
                                        <div className="projectImg3">
                                            <img src={NewArt} className="projectImgPartPoster" alt="WatchImg" />
                                        </div>
                                        <h1>Digital Art</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="projectArea">
                                <div className="projectPart projectPartDesk">
                                    <div className="projectDescription">
                                        {/* <div className="projectLinks"><a className="liveBtn" href=""> Design</a></div> */}
                                        <div className="projectTimeSec">
                                            <div className="projectHeadText fw-bold">Book Cover</div>
                                        </div>
                                        <p>A creative book cover design project focused on capturing the theme and essence of the story through impactful visuals and typography. The design highlights a balance between aesthetics and readability, making it visually appealing while resonating with the target readers</p>
                                        <a className="liveBtn" href="https://www.behance.net/gallery/233114991/Book-Cover" target="_blank"> Design</a>
                                    </div>
                                    <div className="projectImg">
                                        <img src={BookGrap} className='projectImgPart' alt="JewelsImg" />
                                    </div>
                                </div>
                                <div className="projectPartMobTwo ">
                                    <div className="projectImg">
                                        <img src={BookGrap} className='projectImgPart' alt="JewelsImg" />
                                    </div>
                                    <div className="projectDescription">
                                        {/* <div className="projectLinks"><a className="liveBtn" href=""> Design</a></div> */}
                                        <div className="projectTimeSec">
                                            <div className="projectHeadText fw-bold">Book Cover</div>
                                        </div>
                                        <p>Capg Cinemas is a modern online movie ticket booking platform designed to deliver a seamless and hassle-free cinema experience. Whether you're planning a weekend outing or catching the latest blockbuster, Capg Cinemas allows users to browse showtimes, select seats, and book tickets from the comfort of their home</p>
                                        <a className="liveBtn" href="https://www.behance.net/gallery/233114991/Book-Cover" target="_blank"> Design</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>











            </div>

        </>
    )
}

export default project