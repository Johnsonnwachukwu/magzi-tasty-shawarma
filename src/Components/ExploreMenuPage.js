import React from 'react';

const ExploreMenuPage = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-200 to-yellow-400 min-h-screen">
      {/* Header */}
      <header className="bg-black py-8 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">Explore Our Menu</h1>
        <p className="text-xl text-gray-300 mb-8">Discover our wide selection of mouthwatering dishes.</p>
        <a href="/" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">Back to Home</a>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/images/menu_item_1.jpg" alt="Menu Item 1" className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chicken Shawarma</h3>
                <p className="text-gray-800">Tender chicken wrapped in fluffy bread with fresh vegetables and creamy sauce.</p>
              </div>
            </div>
            {/* Menu Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/images/menu_item_2.jpg" alt="Menu Item 2" className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Beef Shawarma</h3>
                <p className="text-gray-800">Juicy beef seasoned to perfection, complemented with crisp vegetables and savory sauce.</p>
              </div>
            </div>
            {/* Menu Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="/images/menu_item_3.jpg" alt="Menu Item 3" className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vegetarian Shawarma</h3>
                <p className="text-gray-800">A flavorful blend of grilled vegetables, wrapped in warm pita bread with tangy sauce.</p>
              </div>
            </div>
            {/* Add more menu items as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreMenuPage;
