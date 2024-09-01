import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="image">
                <div className="text absolute font-monospace font-extrabold top-[30%] left-[10%] w-[42%]"> 
                    <h1 className='text-5xl mb-4'>E-library</h1>
                    <p>Explore our vast categories, including fiction, non-fiction, academic textbooks, research papers, and specialized journals. With thousands of titles available, you're sure to find something that piques your interest.</p>
                    <button className='p-2 border-4 border-blue-800 mt-4 bg-yellow-300 rounded-full hover:bg-green-400 hover:scale-105 hover:border-white hover:text-white'>Explore more</button>
                    </div>
                <img src="https://libapps.s3.amazonaws.com/accounts/176832/images/homepage-hero.jpg" alt="" />
            </div>
            {/* section1 */}
            <div className="Cards bg-blue-400 gap-4 p-8 flex flex-wrap justify-around">
                <div className="card w-[30%] h-60 bg-red-400">
                    <img src="https://example.com/image1.jpg" alt="Card 1" />
                    <div className="card-content">
                        <h2>Card 1 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-red-400">
                    <img src="https://example.com/image2.jpg" alt="Card 2" />
                    <div className="card-content">
                        <h2>Card 2 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-red-400">
                    <img src="https://example.com/image3.jpg" alt="Card
          " />
                    <div className="card-content">
                        <h2>Card 3 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                </div>
                <div className="card w-[30%] h-60 bg-red-400">
                    <img src="https://example.com/image1.jpg" alt="Card 1" />
                    <div className="card-content">
                        <h2>Card 1 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-red-400">
                    <img src="https://example.com/image2.jpg" alt="Card 2" />
                    <div className="card-content">
                        <h2>Card 2 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-red-400">
                    <img src="https://example.com/image3.jpg" alt="Card
          " />
                    <div className="card-content">
                        <h2>Card 3 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                </div>
                <div className="card w-[30%] h-60 bg-red-400">
                    <img src="https://example.com/image1.jpg" alt="Card 1" />
                    <div className="card-content">
                        <h2>Card 1 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-red-400">
                    <img src="https://example.com/image2.jpg" alt="Card 2" />
                    <div className="card-content">
                        <h2>Card 2 Title</h2>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card w-[30%] h-60 bg-red-400">
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
