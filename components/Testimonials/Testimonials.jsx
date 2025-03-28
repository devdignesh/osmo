'use client'
import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import Image from "next/image";
import testimonials from "@/utils/data";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="section mb-80" >
      <div className="container c-pad-top">
        <div className="text-container text-center">
          <div className="flex-col gap--xxlarge a--center">
            <div className="container-small">
              <h3 className="h-medium">
                <p>We built Osmo to help </p>
                <p>creative developers work </p>
                <p>smarter, faster, and better.</p>
              </h3>
            </div>
            <div className="divider testimonials"></div>
            <div className="flex-col gap--med">
              <p className="p-reg u--color-neutral-500">Trusted by:</p>
              <div className="trusted-nav__collection w-dyn-list">
                <div className="trusted-nav__list w-dyn-items">
                  {/* testimonial navbar item */}
                  {testimonials.map((item, index) => (
                    <div
                      key={index}
                      className={`trusted-nav-item ${activeIndex === index ? 'active' : ''}`}
                      onClick={() => handleNavClick(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      <Image
                        src={`${item.image}`}
                        height={30}
                        width={30}
                        alt="user"
                        className="image round"
                      />
                      <p className="trusted-nav-item__tag">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-row w-dyn-list">
        <div className="testimonial-row__list w-dyn-items custom-testimonial-row__list">
          {/* perticular testimonial item */}
          <div className="testimonials__slider">
            <div className="testimonials__slider-inner" style={{
              transform: `translateX(-${activeIndex * 10}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}>
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`testimonial-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleSlideClick(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <p className="p-reg">
                    {item.message}
                  </p>
                  <div
                    className="testimonial-item-details"
                    style={{ touchAction: "pan-y" }}
                  >
                    <div className="avatar">
                      <Image
                        src={`${item.image}`}
                        fill
                        alt="user"
                        className="avatar__img"
                      />
                    </div>
                    <div className="avatar-bio" style={{ touchAction: "pan-y" }}>
                      <h4 className="avatar-bio__h4" style={{ touchAction: "pan-y" }}>
                        {item.name}
                      </h4>
                      <p
                        className="eyebrow opacity--50"
                        style={{ touchAction: "pan-y" }}
                      >
                        {item.occupation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
