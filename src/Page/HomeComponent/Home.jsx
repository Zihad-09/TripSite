import React from 'react';
import TourTyps from './TourTyps';
import Collections from './Collections';
import Newandfeaturetour from './Newandfeaturetour';

const Home = () => {
    return (
        <div>
           <div>
            <TourTyps/>
            <Collections/>
            <Newandfeaturetour title={"NEW & FEATURED TOURS"} limit={6}/>
           </div>
        </div>
    );
};

export default Home;