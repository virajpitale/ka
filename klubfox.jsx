import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

const links = [
  {
    name: "WhatsApp Chat",
    icon: <FaWhatsapp className="text-green-500 text-xl" />,
    href: "https://wa.me/1234567890",
  },
  {
    name: "Join WhatsApp Group",
    icon: <MdGroup className="text-green-600 text-xl" />,
    href: "https://chat.whatsapp.com/yourgroupinvite",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500 text-xl" />,
    href: "https://instagram.com/klubfox",
  },
  {
    name: "Call Us",
    icon: <FaPhoneAlt className="text-blue-500 text-xl" />,
    href: "tel:+1234567890",
  },
  {
    name: "Get Directions",
    icon: <FaMapMarkerAlt className="text-red-500 text-xl" />,
    href: "https://maps.google.com/?q=klubfox+location",
  },
];

export default function KlubFoxLinktree() {
  return (
    <div className="min-h-screen bg-[#fff3ec] flex flex-col items-center p-6 gap-6 text-center">
      <motion.img
        src="/logo.png"
        alt="Klub Fox Logo"
        className="w-32 h-32"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-3xl font-bold text-[#D62828]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Welcome to Klub Fox
      </motion.h1>
      <div className="w-full max-w-md flex flex-col gap-4">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
              <span className="text-lg font-medium text-gray-800">{link.name}</span>
              {link.icon}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
