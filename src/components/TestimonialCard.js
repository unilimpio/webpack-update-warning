import React from 'react';
import PictureWebp from "../components/PictureWebp";



const TestimonialCard = ({id, testimonial}) =>(

    <li id={id} className="col-span-1 flex flex-col text-center bg-gradient-to-br from-blue-100 via-white to-gray-200 rounded-lg shadow divide-y divide-gray-200">
        <div className="flex-1 flex flex-col p-8">
            <PictureWebp className="mx-auto w-20 sm:w-40" filename={testimonial.image} description="logo de la empresa"/>
            
            <dl className="mt-1 flex-grow flex flex-col justify-between">
                
                <p className="text-justify mt-2 flex-grow flex flex-col justify-between italic ">
                    <q>{testimonial.content}</q>
                </p> 
            </dl>
        </div>
                
    </li>


);

export default TestimonialCard;