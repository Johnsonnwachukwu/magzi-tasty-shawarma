import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-200 to-yellow-400 min-h-screen">
      {/* Header */}
      <header className="bg-black py-8 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">Nellys Shawarma & Pastries</h1>
        <p className="text-xl text-gray-300 mb-8">Indulge in the flavors of our delicious shawarma and freshly baked goods, crafted with passion and care.</p>
        <a href="#menu" className="bg-gray-900 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">Explore Our Menu</a>
      </header>

        {/* Menu */}
        <section id="menu" className="py-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shawarma */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/images/shawarma.jpg" alt="Shawarma" className="w-full" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Delicious Shawarma</h3>
                <p className="text-gray-800">Our shawarma is made from the finest ingredients, seasoned to perfection, and wrapped in fluffy bread. A taste you won't forget.</p>
              </div>
            </div>
            {/* Baked Goods */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/images/baked.jpg" alt="Baked Goods" className="w-full" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Freshly Baked Goods</h3>
                <p className="text-gray-800">Indulge in our selection of freshly baked pastries, cakes, and cookies. Perfect companions to your shawarma feast.</p>
              </div>
            </div>
            {/* Specialties */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/images/dougnuts.jpg" alt="Specialties" className="w-full" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Signature Specialties</h3>
                <p className="text-gray-800">Experience our signature specialties, curated with unique flavors and innovative recipes to tantalize your taste buds.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* About Us */}
        <section className="py-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="text-lg text-gray-800"> Nellys Shawarma & Pastries is committed to delivering the finest quality shawarma and baked goods to our customers. With our dedication to excellence and customer satisfaction, we strive to provide a delightful culinary experience with every bite.</p>
        </section>

        {/* Contact */}
        <section className="py-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <p className="text-lg text-gray-800">Have questions or feedback? We'd love to hear from you. Contact us today and let us assist you.</p>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full mt-8 inline-block">Contact Us</a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-lg">© 2024 Nellys Shawarma & Pastries. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;



