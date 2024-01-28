import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    
    
    useEffect(() => {
        fetch('')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className='mt-5 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis voluptas nostrum <br /> adipisci laboriosam perspiciatis mollitia consequatur, quos quae iusto exercitationem <br /> nesciunt  quod expedita dolorem dolores!</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* <h2>Services: {services.length} </h2> */}
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;


