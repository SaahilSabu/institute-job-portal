import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 text-neutral-content bg-[#020493] flex justify-between items-center">
      <div className=" p-5 text-sm  text-gray-300 select-none sm:text-lg font-sans">
        © 2022 IIITM Gwalior
      </div>
      <div className=" p-5 text-gray-300">
        <span class="footer-title">Links</span>
        <a
          class="link link-hover"
          href="https://www.iiitm.ac.in/index.php/en/visitors-guide-footer"
        >
          Visitors guide
        </a>
        <a class="link link-hover" href="/">
          Careers
        </a>
        <a
          class="link link-hover"
          href="https://www.iiitm.ac.in/index.php/en/contact-us-footer"
        >
          Contact us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
