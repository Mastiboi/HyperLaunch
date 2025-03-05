import React from 'react';
import { Link } from 'react-router';
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" }); // Smooth scrolling to top
  };

    const footerLinks = {
        product: {
          title: 'Ouick Links',
          links: [
            { name: 'Home', href: '/' },
            { name: 'Create Token', href: '/createToken' },
            { name: 'Liquidity Pool', href: 'https://raydium.io/liquidity/create-pool/?tab=standard' },
            { name: 'Manage Liquidity', href: 'https://raydium.io/portfolio/?position_tab=standardiquidity' },
          ]
        },
        company: {
          title: 'Socials',
          links: [
            { name: 'Discord', href: 'https://discord.gg/4ZfrhXuTxP' },
            { name: 'Twitter', href: 'https://x.com/HyprLaunch' },
            { name: 'Instagram', href: 'https://www.instagram.com/hyprlaunch/' },
            { name: 'Youtube', href: 'https://www.youtube.com/@HyprLaunch' }
          ]
        },
      };


  const socialLinks = [
    { icon: <FaDiscord />, href: 'https://discord.gg/4ZfrhXuTxP' },
    { icon: <FaTwitter />, href: 'https://x.com/HyprLaunch' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/hyprlaunch/' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/@HyprLaunch' }
  ];

  return (
    <footer className="bg-black text-white pt-10 pb-10 border-t border-gray-800">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:gap-24 gap-16 mb-16">
          
          {/* Left side with logo and description */}
          <div className="md:w-1/3 space-y-3">

            <Link to="/" className="flex items-center text-xl font-bold">
                <img className='w-10 h-10' src="./hyprlaunch.svg" alt="HyprLaunch" />
                <span className="ml-3">HyprLaunch</span>
            </Link>

            <p className="px-1 text-gray-400 md:w-2/3">
              The first-ever website experience platform that lets you create, 
              manage and optimize your token creation and manage everything about it. 
              <br /><br />
              BEST RESPONSE OUT OF ALL TOKEN CREATION TOOLS.
            </p>
          </div>

          {/* Right side with links grid */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 gap-8 items-stretch">
              {Object.values(footerLinks).map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          onClick={scrollToTop}
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section with social links and copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} HyprLaunch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;