import React from 'react';

function Footer() {

    const footerData = {
  sections: [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Blog", path: "/blog" },
        { name: "Press", path: "/press" }
      ]
    },
    {
      title: "Help",
      links: [
        { name: "Contact Support", path: "/support" },
        { name: "FAQs", path: "/faqs" },
        { name: "Order Tracking", path: "/order-tracking" },
        { name: "Refund Policy", path: "/refund-policy" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Cookie Policy", path: "/cookies" }
      ]
    },
    {
      title: "Follow Us",
      links: [
        { name: "Instagram", path: "https://instagram.com/yourpage" },
        { name: "Facebook", path: "https://facebook.com/yourpage" },
        { name: "Twitter", path: "https://twitter.com/yourpage" },
        { name: "LinkedIn", path: "https://linkedin.com/company/yourpage" }
      ]
    }
  ],
  copyright:
    "© 2025 Foodiez. All rights reserved."
};

const {sections, copyright} = footerData;


  return (
    <div className="bg-black text-white px-6 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {sections.map((section, idx) => (
      <div key={idx}>
        <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
        <ul className="space-y-2">
          {section.links.map((link, i) => (
            <li key={i}>
              <a
                href={link.path}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  <div className="mt-10 text-center text-sm text-gray-400">
    © 2025 Foodiez. All rights reserved.
  </div>
</div>


  )
}

export default Footer;