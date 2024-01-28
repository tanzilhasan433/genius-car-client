import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
         <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                 <div className='relative  w-1/2'>
                        <img src={person} alt=" " className="w-4/5 h-full rounded-lg shadow-2xl" />
                        <img src={parts} alt=" " className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                 <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About Us</p>
                      <h1 className="my-5  text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                      <p className="py-6">There are many variations Of Passages Of Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo quidem harum, commodi error deserunt soluta porro libero eveniet! Magni numquam praesentium ea deserunt dignissimos, vero nesciunt dolor ad beatae. <br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aliquam, sunt quod assumenda accusamus necessitatibus tenetur dolores adipisci eum similique ipsa dolore nemo voluptates nisi! </p>
                      <button className="btn btn-primary">Get More Info</button>
                 </div>
            </div>
       </div>
    );
};

export default About;