import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'; // Import Instagram icon
import { footerData, socialLinksData } from "../data";

const Footer = () => {
  const getSocialIcon = (label) => {
    switch (label) {
      case 'GitHub': return <Github size={24} />;
      case 'LinkedIn': return <Linkedin size={24} />;
      case 'Email': return <Mail size={24} />;
      case 'Instagram': return <Instagram size={24} />;
      default: return null;
    }
  };

  return (
    <footer className="py-20 px-[4%] bg-gradient-to-b from-netflix-black to-black border-t border-[#333]">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
            <p className="text-[#999] text-sm leading-relaxed mb-6">{footerData.description}</p>
            <div className="flex flex-wrap gap-3">
              {footerData.quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.id}`}
                  className="text-sm text-netflix-light-gray hover:text-white transition-colors duration-300 after:content-['•'] after:ml-3 after:text-[#666] last:after:content-none"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              {footerData.contact.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#999] group">
                  {item.type === 'email' && (
                    <>
                      <Mail className="mt-1 w-5 h-5 text-netflix-red group-hover:text-white transition-colors duration-300" />
                      <a href={`mailto:${item.value}`} className="hover:text-white transition-colors duration-300">{item.value}</a>
                    </>
                  )}
                  {item.type === 'location' && (
                    <>
                      <svg className="mt-1 w-5 h-5 text-netflix-red group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{item.value}</span>
                    </>
                  )}
                  {item.type === 'phone' && (
                    <>
                      <svg className="mt-1 w-5 h-5 text-netflix-red group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${item.value}`} className="hover:text-white transition-colors duration-300">{item.value}</a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinksData.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#333] hover:bg-netflix-red flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
                >
                  {getSocialIcon(link.label)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-[#737373] mb-4 md:mb-0">
            © {new Date().getFullYear()} {footerData.name}. Made with passion and inspired by Netflix.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;