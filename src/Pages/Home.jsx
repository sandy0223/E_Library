import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div class="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white">

                <main class="flex flex-col md:flex-row items-center justify-center mt-10 w-full max-w-4xl">
                    <div class="text-center md:text-left md:w-[65%] p-4">
                        <h2 class="text-4xl font-bold">Getting Started with <br /> E-Learning</h2>
                        <p class="mt-4 max-w-lg mx-auto md:mx-0">
                            We pride ourselves on providing the most up-to-date content for our students to learn each course. We pride ourselves on providing the most up-to-date content for our students.
                        </p>
                        {/* <div class="mt-6">
        <input type="email" placeholder="Enter Your Email" class="p-2 rounded-l-lg border-none" />
        <button class="bg-purple-700 text-white p-2 rounded-r-lg hover:bg-purple-600">Subscribe</button>
      </div> */}
                    </div>
                    <div class="md:w-[80%] p-4">
                        <video autoPlay muted loop src="./videos/Macbook Pro, Slight Right Tilt.mp4" alt="Placeholder image for e-learning" class="rounded-lg shadow-lg" />
                    </div>
                </main>



                <div class="absolute bottom-0 right-0 p-4">
                    <Link to="/login">
                        <button class="bg-white text-purple-500 px-4 py-2 rounded">Explore more!</button></Link>
                </div>
            </div>


            {/* section1 */}
            <div className="Cards bg-blue-400 gap-4 p-8 flex flex-wrap justify-around">
                <div className="card w-[30%] h-60 bg-gray-100">
                    <img src="https://example.com/image1.jpg" alt="Card 1" />
                    <div className="card-content">
                        <h2>Card 1 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-gray-100">
                    <img src="https://example.com/image2.jpg" alt="Card 2" />
                    <div className="card-content">
                        <h2>Card 2 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-gray-100">
                    <img src="https://example.com/image3.jpg" alt="Card
          " />
                    <div className="card-content">
                        <h2>Card 3 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                </div>
                <div className="card w-[30%] h-60 bg-gray-100">
                    <img src="https://example.com/image1.jpg" alt="Card 1" />
                    <div className="card-content">
                        <h2>Card 1 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-gray-100">
                    <img src="https://example.com/image2.jpg" alt="Card 2" />
                    <div className="card-content">
                        <h2>Card 2 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-gray-100">
                    <img src="https://example.com/image3.jpg" alt="Card
          " />
                    <div className="card-content">
                        <h2>Card 3 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                </div>
                <div className="card w-[30%] h-60 bg-gray-100">
                    <img src="https://example.com/image1.jpg" alt="Card 1" />
                    <div className="card-content">
                        <h2>Card 1 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-gray-100">
                    <img src="https://example.com/image2.jpg" alt="Card 2" />
                    <div className="card-content">
                        <h2>Card 2 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-gray-100">
                    <img src="https://example.com/image3.jpg" alt="Card
          " />
                    <div className="card-content">
                        <h2>Card 3 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
