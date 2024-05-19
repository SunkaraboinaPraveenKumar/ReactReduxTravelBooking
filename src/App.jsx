import React from 'react';
import Header from './components/Header';
import Booking from './components/Booking';
import Table from './components/Table';

const App = () => {
  const backgroundImageUrl = 'https://imgs.search.brave.com/NBDusEDpn-hDGAngc1UdOO4pDgfjrtTUWfToLWbZ0Z4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdHJhdmVsLWli/azdmZ3J2dHZoczdx/emcuanBn'
  
  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Header />
      <section className='h-screen'>
        <Booking/>
        <Table/>
      </section>
    </div>
  );
};

export default App;
