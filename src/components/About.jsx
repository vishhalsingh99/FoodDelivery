import React from 'react'

function About() {
const features = [
  "Handpicked Restaurants",
  "Superfast Delivery",
  "Seamless UI/UX",
  "Daily Offers & Discounts",
  "Wide Variety of Cuisines",
  "Real-time Order Tracking",
  "User Reviews & Ratings",
  "24/7 Customer Support"
];

 

  return (
<div className="bg-[#383737] py-16 px-4 sm:px-6 lg:px-24 text-gray-200 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Image Section */}
    <div className="transition-transform duration-300 ease-in-out hover:scale-105">
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
        alt="About Foodiez"
        className="w-full h-80 object-cover rounded-2xl shadow-lg"
      />
    </div>

    {/* Text Section */}
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold text-white leading-snug">
        About <span className="text-yellow-400">Foodiez</span>
      </h2>
      <h4 className="text-xl text-gray-300 font-semibold">
        Delivering Deliciousness to Your Doorstep
      </h4>
      <p className="text-base text-gray-400 leading-relaxed">
        At <strong className="text-white">Foodiez</strong>, we believe that great food brings people together. 
        Whether you're craving hot cheesy pizza, spicy street food, or a hearty home-style meal, 
        we've got you covered.
      </p>
      <p className="text-base text-gray-400 leading-relaxed">
        We're not just about food — we're about fast, reliable delivery, curated menus, 
        and a seamless online ordering experience. 
        Join thousands of happy customers who trust <strong className="text-white">Foodiez</strong> 
        for their daily cravings.
      </p>

      {/* Features List */}
      <div>
        <h3 className="text-lg font-bold mb-2 text-gray-100">Key Features</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-sm text-gray-300">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>




  )
}

export default About;