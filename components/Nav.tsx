"use client";

import { FiMenu, FiX } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

import { IoIosMenu } from "react-icons/io";
import SocialMediaIcons from "./SocialMediaIcons";
import { config } from "@/nttb-config";
import { usePathname } from "next/navigation";

interface NavProps {
  links: {
    href: string;
    label: string;
  }[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  const textVariants = {
    start: {
      color: ["/", "/about"].includes(pathname || "") ? "white" : "black",
    },
    end: {
      color: "white",
    },
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      setOpacity(Math.ceil(v));
    });
  }, [scrollYProgress]);

  const navVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <div className="fixed top-0 z-20 w-full">
      <div className="container">
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity - 0.1 }}
          transition={{
            duration: 0.5,
          }}
        ></motion.div>
        <nav
          className={`flex justify-between items-center py-3 lg:py-5 shadow-sm w-full`}
        >
          {/* Desktop nav */}
          <div className={`flex items-center opacity-100 z-30`}>
            <motion.a
              variants={textVariants}
              animate={opacity > 0 ? "end" : "start"}
              transition={{
                duration: 0.5,
              }}
              href="/"
              className={`text-lg font-semibold uppercase ${
                isMobileNavOpen && "hidden"
              }`}
            >
              <span className="hidden lg:block">{config.SITE.name}</span>
              <span className="lg:hidden">O.K.</span>
            </motion.a>
          </div>
          <div className={`hidden lg:flex uppercase opacity-100 z-30`}>
            {links.map((link) => (
              <motion.a
                variants={textVariants}
                animate={opacity > 0 ? "end" : "start"}
                transition={{
                  duration: 0.5,
                }}
                key={link.label}
                href={link.href}
                className={`mx-4 text-sm`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className={`lg:hidden flex items-center z-20`}>
            <motion.button
              variants={textVariants}
              animate={opacity > 0 ? "end" : "start"}
              transition={{
                duration: 0.5,
              }}
              type="button"
              className={`focus:outline-none`}
              onClick={toggleMobileNav}
              aria-label="Toggle mobile menu"
            >
              {isMobileNavOpen ? (
                <FiX size={40} color="white" />
              ) : (
                <IoIosMenu size={40} />
              )}
            </motion.button>
          </div>
          {isMobileNavOpen && (
            <motion.div
              className={`lg:hidden fixed inset-0 bg-black z-10 h-screen`}
              initial="closed"
              animate="open"
              variants={navVariants}
            >
              <div className="container mt-20">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`block text-3xl py-2 text-white hover:text-gray-200`}
                    onClick={toggleMobileNav}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-20">
                  <SocialMediaIcons />
                </div>
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
