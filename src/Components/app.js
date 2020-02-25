import React from 'react';
import Navbar from './Layouts/navbar';
import Sidebar from './Layouts/sidebar';
import Content from './Layouts/content';
import '../Assets/css/styles.css';
import '../Assets/fontawesome/css/all.min.css';
import PropTypes from 'prop-types';


function App(){
   
    return(
        <div className="sidebar-mini">
            <div className="wrapper">
                <Navbar/>
                <Sidebar/>
                <Content/>
            </div>
        </div>
    )
}
export default App