import React from 'react'
function Navbar(){
    return(
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar */}
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
            </li>
        </ul>

        {/* Right navbar */}
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-bell"></i>
                    <span className="badge badge-warning navbar-badge">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                        <i className="fas fa-envelope mr-2"></i> 4 new messages
                        <span className="float-right text-muted text-sm">3 mins</span>
                    </a>
            
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                    <i className="fas fa-th-large"></i>
                </a>
            </li>
        </ul>
    </nav>
    )
}
export default Navbar