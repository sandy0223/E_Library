import React, { useState } from 'react';

const EJournals = () => {
  const [selectedJournal, setSelectedJournal] = useState(null);

  const journals = [
    {
      id: 1,
      title: 'Advanced Computing',
      description: 'Explore the latest trends in computing.',
      image: '/images/sample.jpg',
      price: '$10',
      rentalPrice: '$5',
      link: '/read/advanced-computing',
    },
    {
      id: 2,
      title: 'Quantum Physics',
      description: 'Dive into the mysteries of quantum mechanics.',
      image: '/images/sample.jpg',
      price: '$12',
      rentalPrice: '$6',
      link: '/read/quantum-physics',
    },
    {
      id: 3,
      title: 'Environmental Science',
      description: 'Understand the dynamics of the environment.',
      image: '/images/sample.jpg',
      price: '$8',
      rentalPrice: '$4',
      link: '/read/environmental-science',
    },
    {
      id: 4,
      title: 'Artificial Intelligence',
      description: 'Get insights into AI and its applications.',
      image: '/images/sample.jpg',
      price: '$15',
      rentalPrice: '$7',
      link: '/read/artificial-intelligence',
    },
    {
      id: 5,
      title: 'Molecular Biology',
      description: 'Explore the molecular basis of biological activity.',
      image: '/images/sample.jpg',
      price: '$11',
      rentalPrice: '$6',
      link: '/read/molecular-biology',
    },
    {
      id: 6,
      title: 'Nanotechnology',
      description: 'Learn about the science of the small.',
      image: '/images/sample.jpg',
      price: '$14',
      rentalPrice: '$7',
      link: '/read/nanotechnology',
    },
    {
      id: 7,
      title: 'Renewable Energy',
      description: 'Discover sustainable energy sources.',
      image: '/images/sample.jpg',
      price: '$9',
      rentalPrice: '$5',
      link: '/read/renewable-energy',
    },
    {
      id: 8,
      title: 'Cybersecurity',
      description: 'Stay updated on the latest in cybersecurity.',
      image: '/images/sample.jpg',
      price: '$13',
      rentalPrice: '$7',
      link: '/read/cybersecurity',
    },
    {
      id: 9,
      title: 'Biotechnology',
      description: 'Explore the intersection of biology and technology.',
      image: '/images/sample.jpg',
      price: '$16',
      rentalPrice: '$8',
      link: '/read/biotechnology',
    },
    {
      id: 10,
      title: 'Robotics',
      description: 'Understand the world of robotics.',
      image: '/images/sample.jpg',
      price: '$18',
      rentalPrice: '$9',
      link: '/read/robotics',
    },
    {
      id: 11,
      title: 'Data Science',
      description: 'Dive into data and analytics.',
      image: '/images/sample.jpg',
      price: '$20',
      rentalPrice: '$10',
      link: '/read/data-science',
    },
    {
      id: 12,
      title: 'Astrophysics',
      description: 'Explore the universe and its mysteries.',
      image: '/images/sample.jpg',
      price: '$17',
      rentalPrice: '$9',
      link: '/read/astrophysics',
    },
  ];

  const handleSelectJournal = (journal) => {
    setSelectedJournal(journal);
  };

  return (
    <div className="p-6 bg-gradient-to-br w-full h-full from-blue-500 to-indigo-600 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">E-Journals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {journals.map((journal) => (
          <div
            key={journal.id}
            className="bg-gray-200 max-h-[85%] text-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={journal.image}
              alt={journal.title}
              className=" object-contain w-full h-1/2 rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{journal.title}</h3>
            <p className="text-sm mt-2">{journal.description}</p>
            <div className="mt-4">
              <button
                onClick={() => handleSelectJournal(journal)}
                className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-4 py-2 rounded-md hover:from-teal-500 hover:to-green-600 transition-all"
              >
                View & Read
              </button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold">Buy for {journal.price}</p>
              <p className="text-lg font-bold">Rent {journal.rentalPrice}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedJournal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-2xl text-black font-bold mb-4">{selectedJournal.title}</h3>
            <img src={selectedJournal.image} alt="book image" />
            <p className='text-black'>{selectedJournal.description}</p>
            <div className="mt-4">
              <a
                href={selectedJournal.link}
                className="block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-md text-center hover:from-purple-500 hover:to-pink-600 transition-all"
              >
                Start Reading
              </a>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold">{selectedJournal.price}</p>
              <p className="text-lg font-bold">{selectedJournal.rentalPrice}</p>
            </div>
            <button
              onClick={() => setSelectedJournal(null)}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EJournals;
