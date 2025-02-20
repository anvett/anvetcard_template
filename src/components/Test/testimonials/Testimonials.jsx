import React from 'react';
import {motion} from 'framer-motion';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

const Testimonials = ({ testimonials }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-spacing-3 bg-light">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          className="section-title text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Testimonios
        </motion.h2>
        <div className="carousel w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              id={`slide${index}`} 
              className="carousel-item relative w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card card-side bg-gradient-primary shadow-md rounded-lg mx-auto max-w-4xl md:h-spacing-12 sm:h-spacing-18 flex flex-col md:flex-row">
                <figure className="w-full md:w-1/3 flex justify-center items-center p-4 md:pl-6">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-spacing-8 h-spacing-8 mt-spacing-4 rounded-custom-20 md:mt-1 sm:mt-spacing-3 sm:w-spacing-10 sm:h-spacing-10" />
                </figure>
                <div className="card-body md:text-left sm:text-center w-full md:w-2/3 flex flex-col justify-center p-spacing-1 md:p-spacing-3">
                  <h3 className="font-secondary font-semibold text-size-5 md:text-size-4  text-light mb-2 md:mb-2">{testimonial.name}</h3>
                  <p className="font-secondary text-size-3 md:text-size-2  text-light">{testimonial.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <a key={index} href={`#slide${index}`} className="btn btn-xs mx-1 bg-primary">{index + 1}</a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
