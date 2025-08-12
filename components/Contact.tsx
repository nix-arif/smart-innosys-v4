"use client";

import { PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <FaFacebookF className="w-6 h-6 text-[#045494]" />,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: <FaTiktok className="w-6 h-6 text-[#045494]" />,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: <FaYoutube className="w-6 h-6 text-[#045494]" />,
  },
];

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-[#045494] to-[#2d74a4] min-h-screen px-6 py-20">
      {/* Overlay to improve contrast */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-4">
              <MapPinIcon className="w-8 h-8 text-[#045494] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#045494] mb-1">
                  Address
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  5-1 (1st floor), Jalan Ungu B U9/B{"\n"}
                  Sunway Kayangan{"\n"}
                  40150 Shah Alam
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-4">
              <PhoneIcon className="w-8 h-8 text-[#045494] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#045494] mb-1">
                  Phone
                </h3>
                <p className="text-gray-700">012-232 0240</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-4">
              <EnvelopeIcon className="w-8 h-8 text-[#045494] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#045494] mb-1">
                  Email
                </h3>
                <p className="text-gray-700">smartinnosys@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-4">
              <ClockIcon className="w-8 h-8 text-[#045494] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#045494] mb-1">
                  Office Hours
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  Monday to Friday{"\n"}
                  8:30 am to 5:30 pm{"\n"}
                  Closed on Saturday & Sunday
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-white mb-6">
              Follow Us Online
            </h3>
            <p className="text-gray-300 mb-6">
              Stay connected with us for the latest health updates and tips on
              Facebook, TikTok, and YouTube.
            </p>

            <div className="flex space-x-6">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="bg-white p-3 rounded-full hover:bg-[#2d74a4] hover:text-white transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
