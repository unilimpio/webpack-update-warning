import React from 'react';
import TestimonialsData from "../data/testimonials-data";
import TestimonialCard from "../components/TestimonialCard"



const Testimonials =({className})=>(

    <section id="testimoniales" className={`w-full mx-auto ${ className }`}>
        <div>
            <h3 className="text-center sm:text-3xl  text-primary underline text-4xl font-semibold title-font mt-3 mb-10 pr-8 pl-8">Lo que dicen nuestros clientes</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mx-20">

            {TestimonialsData.map((testimonial,index) => (

            <TestimonialCard key={index} testimonial={testimonial} />

            ))}

        </div>
</section>

);

export default Testimonials;
