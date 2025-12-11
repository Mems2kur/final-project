import React from 'react';
import Navbar from './Navbar';
import OverView from './OverView';
import QuickLinks from './QuickLinks';

function Mid() {
  return (
    <div className='w-[90%] h-full px-6 overflow-y-auto'>
      <Navbar />
     <OverView/>
      <QuickLinks/>
    </div>
  );
}

export default Mid;
