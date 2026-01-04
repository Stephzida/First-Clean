import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import heroImage from "../assets/heroImage.jpg";
import cleanOne from "../assets/cleanOne.jpg";
import cleanTwo from "../assets/cleanTwo.png";
import cleanThree from "../assets/cleanThree.jpg";
import cleanFour from "../assets/cleanFour.jpg";
import {
  CheckCircle,
  Home,
  Building,
  Key,
  Calendar,
  ThumbsUp,
  Facebook,
  Twitter,
  MessageCircle,
  Star,
  Menu,
  X,
} from "lucide-react";

const Landingpage = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const [activeLink, setActiveLink] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white text-gray-900 font-serif">
      {/* Header */}
<header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          FirstClean
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link to="/service" className="hover:text-blue-600">Services</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link to="/contact "className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Desktop Button */}
        <Link
          to="/service"
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Book Now
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t px-6 py-4 space-y-4 flex flex-col">
          <Link to="/service" className="hover:text-blue-600" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link to="/about" className="hover:text-blue-600" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link to="/pricing" className="hover:text-blue-600"  onClick={() => setOpen(false)}>
            Pricing
          </Link>
         <Link to="/contact" className="hover:text-blue-600" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link
            to="/service"
            onClick={() => setOpen(false)}
            className="block bg-blue-600 text-white text-center py-2 rounded-lg"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>

      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Reliable Home & Office Cleaning{" "}
              <span className="text-blue-600">You Can Trust</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Professional, insured, and thorough cleaning services tailored to
              your schedule. Experience the joy of a spotless space today
              without lifting a finger.
            </p>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setActiveButton("button1")}
                className={`text-white px-6 py-3 rounded-xl ${
                  activeButton === "button1"
                    ? "bg-blue-600 hover:bg-blue-700 "
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
              >
                Get a Quote
              </button>
              <button
                onClick={() => setActiveButton("button2")}
                className={`text-white px-6 py-3 rounded-xl ${
                  activeButton === "button2"
                    ? "bg-blue-600 hover:bg-blue-700 "
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
              >
                Learn More
              </button>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex gap-1 items-center">
                <CheckCircle color="blue" size={14} />
                <p className="text-gray-600 text-[14px]">Insured & Bonded</p>
              </div>
              <div className="flex gap-1 items-center">
                <CheckCircle color="blue" size={14} />
                <p className="text-gray-600 text-[14px]">
                  Satisfaction Guaranteed
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg h-full">
            <img src={heroImage} alt="Sitting room" className="rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center">
            Our Professional Services
          </h3>

          <p className="text-gray-600 text-lg text-center mt-4">
            We offer a comprehensive range of cleaning solutions to keep your
            <br className="max-[630px]:hidden" /> environment healthy and
            pristine
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Cleaning",
                desc: "Regular housekeeping to keep your home fresh, include dusting, vacuuming, mopping, and bathroom sanitation",
                icon: Home,
                id: "home-cleaning",
              },
              {
                title: "Commercial Cleaning",
                desc: "Keep your workspace professional and hygienic. Specialized janitorial services for offices, retail, and buildings.",
                icon: Building,
                id: "office-cleaning",
              },
              {
                title: "Move-in / Move-out",
                desc: "Deep cleaning for empty homes. Ensure you get your security deposit back or move into a spotless new home.",
                icon: Key,
                id: "move-cleaning",
              },
            ].map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  to={`/services#${service.id}`}
                  className="p-8 rounded-2xl border hover:shadow-lg hover:scale-[1.05] transition"
                >
                  {/* Icon */}
                  <Icon className="w-10 h-10 text-blue-600 mb-4" />

                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="mt-4 text-gray-600">{service.desc}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center text-lg">
            <Link
              to="/services"
              onClick={() => setActiveLink(true)}
              className={`font-medium transition-colors bg-gray-50 p-3 rounded-2xl
        ${activeLink ? "text-blue-600" : "text-gray-900 hover:text-blue-600"}
      `}
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 px-6 text-center ">
          <div className="text-start flex flex-col gap-2">
            <h1 className="font-bold text-3xl">Why Choose First-Clean</h1>
            <p className="text-gray-600 text-lg mt-4">
              We don't just clean; we care for your home. Our commitment to{" "}
              <br className="max-[630px]:hidden" /> quality and trust sets us
              apart in the industry.
            </p>
            <div className="flex flex-col mt-6 gap-4">
              <div className="flex gap-3">
                <div className="bg-blue-500 h-8 p-1 rounded-full">
                  <CheckCircle color="white" />
                </div>
                <div>
                  <h1 className="font-bold ">Vetted Professionals</h1>
                  <p className="text-gray-600">
                    Every cleaner undergoes strict background checks and
                    rigorous <br className="max-[630px]:hidden" /> training
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-blue-500 h-8 p-1 rounded-full">
                  <Calendar color="white" />
                </div>
                <div>
                  <h1 className="font-bold ">Flexible Scheduling</h1>
                  <p className="text-gray-600">
                    Book online instantly for a time that works best for you, 7
                    days a <br className="max-[630px]:hidden" /> week.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-blue-500 h-8 p-1 rounded-full">
                  <ThumbsUp color="white" />
                </div>
                <div>
                  <h1 className="font-bold ">100% Satisfaction Guarantee</h1>
                  <p className="text-gray-600">
                    If you're not happy with the service, we'll re-clean for
                    free. No <br className="max-[630px]:hidden" /> questions
                    asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full grid md:grid-cols-2 gap-2">
            <img src={cleanOne} className="rounded-2xl shadow-lg" />
            <img src={cleanTwo} className="rounded-2xl shadow-lg" />
            <img src={cleanThree} className="rounded-2xl shadow-lg" />
            <img src={cleanFour} className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonial" className=" py-24" >
            <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center">
            What Our Customers Say
          </h3>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                desc: "Regular housekeeping to keep your home fresh, include dusting, vacuuming, mopping, and bathroom sanitation",
                icon: Star,
                id: "review1",
                image: "https://randomuser.me/api/portraits/men/68.jpg",

                customerId:"David K.",
                trade:"Business Owner",
              },
              {
                
                desc: "Keep your workspace professional and hygienic. Specialized janitorial services for offices, retail, and buildings.",
                icon: Star,
                id: "review2",
               image: "https://randomuser.me/api/portraits/women/44.jpg",
                customerId:"Sarah M.",
                trade:"Homeowner",
              },
              {
                desc: "Deep cleaning for empty homes. Ensure you get your security deposit back or move into a spotless new home.",
                icon: Star,
                id: "review3",
               image: "https://randomuser.me/api/portraits/men/32.jpg",
                customerId:"Charlse B.",
                trade:"Tenant",
              },
            ].map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  className="p-8 rounded-2xl border hover:shadow-lg hover:scale-[1.05] transition"
                >
                  {/* Icon */}
                  <div className="flex items-center gap-2">
                    <Icon className="  mb-4" color="yellow" size={28} />
                    <Icon className="  mb-4" color="yellow" size={28} />
                    <Icon className=" mb-4" color="yellow" size={28}  />
                    <Icon className=" mb-4"  color="yellow" size={28} />
                    <Icon className="  mb-4"  color="yellow" size={28} />
                  </div>

                  <i className="mt-2 text-gray-600">{service.desc}</i>

                  <div className="mt-2 flex gap-4 items-center">
                    <div>
                      <img src={service.image} alt="" className="rounded-full w-10 h-10"/>
                    </div>
                    <div>
                      <p className="font-bold">{service.customerId}</p>
                      <p className="text-gray-600">{service.trade}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* {footer} */}
      <section id="footer" className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          <div>
            <h1 className="text-3xl text-white font-bold ">FirtClean</h1>
            <p className="mt-6 text-amber-100">
              Making homes and offices shine since 2025. We are dedicated to
              providing top-tier cleaning services with a focus on reliability
              and customer satisfaction
            </p>
            <div className="mt-6 flex gap-4">
              <a href="" className="bg-white p-2 rounded-full">
                <Facebook color="blue" />
              </a>
              <a href="" className="bg-white p-2 rounded-full">
                <Twitter color="blue" />
              </a>
              <a href="" className="bg-white p-2 rounded-full">
                <MessageCircle color="blue" />
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-white font-bold">Company</h1>
            <div className="mt-4 flex flex-col gap-2 text-amber-100">
              <Link to="/service" className="hover:text-gray-900">
                Services
              </Link>
              <Link to="/pricing" className="hover:text-gray-900">
                Pricing
              </Link>
              <Link to="/about" className="hover:text-gray-900">
                About us
              </Link>
              <Link to="/careers" className="hover:text-gray-900">
                Careers
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-white font-bold">Support</h1>
            <div className="mt-4 flex flex-col gap-2 text-amber-100">
              <Link to="/Help-Center" className="hover:text-gray-900">
                Help Center
              </Link>
              <Link to="/Safety-Information" className="hover:text-gray-900">
                Safety Information
              </Link>
              <Link to="/Cancellation-Options" className="hover:text-gray-900">
                Cancellation Options
              </Link>
              <Link to="/contact" className="hover:text-gray-900">
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-white font-bold">Stay Updated</h1>
            <p className="mt-4 text-amber-100">Subscribe to our newsletter for cleaning tips and exclusive offers</p>
            <form action="" className="flex flex-col gap-2 mt-4 ">
              <input type="email" placeholder="Email address" className="bg-gray-200 p-2 rounded text-gray-600"/>
              <button className="bg-white p-2 rounded-2xl text-blue-600 hover:scale-[1.05]">Subscribe</button>
            </form>
          </div>
         
        </div>
         <div className="border border-t-white mt-6 max-w-7xl mx-auto px-6"></div>
         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center mt-6">
                <div>
                  <p className="text-white">&copy; 2026 FirstClean Inc. All rights reserved.</p>
                </div>
                <div className="flex items-center text-white gap-4">
                  <Link>Privacy Policy</Link>
                  <Link>Terms of services</Link>
                </div>
         </div>
      </section>
    </div>
  );
};

export default Landingpage;
