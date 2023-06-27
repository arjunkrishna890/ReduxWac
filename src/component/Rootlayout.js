import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarPanel from './NavbarPanel';
import store from './store/store';

function Rootlayout() {
  return (
    <div>
  
            <NavbarPanel/>
            <main>
                <Outlet/>
            </main>
      
    </div>
  )
}

export default Rootlayout