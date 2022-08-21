import Link from "next/link";
import { BsLink45Deg, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br to-green from-blue py-8 text-white mt-20">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="footer-col">
            <h1 className="footer-col-title">Find us:</h1>
            <p className="footer-col-text">
              PACE Tower, 2nd floor, 90 feet Road, Kankarbagh, Patna-800020
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.5325305355173!2d85.1572766!3d25.5872149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed597c52a8b2eb%3A0x96ce0fd79407fa8e!2sCommerce%20classes%20for%2011%20%26%2012!5e0!3m2!1sen!2sin!4v1661064633201!5m2!1sen!2sin"
              className="border-0 aspect-video w-full max-w-xs"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PACE Tower"
            ></iframe>
          </div>
          <div className="footer-col">
            <h1 className="footer-col-title">Quick Links</h1>
            <ul>
              <li>
                <Link href="/">
                  <a className="inline-flex items-center">
                    <BsLink45Deg /> Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="inline-flex items-center">
                    <BsLink45Deg /> About us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="inline-flex items-center">
                    <BsLink45Deg /> Contact us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://paceinstitute.co.in">
                  <a className="inline-flex items-center">
                    <BsLink45Deg /> PACE English
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h1 className="footer-col-title">Follow us on:</h1>
            <div>
              <div>
                <Link href="https://www.facebook.com/pace.madhu/">
                  <a className="flex items-center">
                    <BsFacebook className="mr-2" /> <span>Facebook</span>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="https://instagram.com/madhu_madulika?igshid=YmMyMTA2M2Y=">
                  <a className="flex items-center">
                    <AiFillInstagram className="mr-2" /> <span>Instagram</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="font-playfairDisplay mt-8 text-center">
          &copy; Copyright 2022-23 PACE Commerce
        </div>
      </div>
    </div>
  );
};

export default Footer;
