import React from 'react'
function Sidebar(){
    return(
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="#" className="brand-link">
            <img src="../../dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                />
            <span className="brand-text font-weight-light">EVENTOS NIEIN</span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">
            {/* Sidebar user */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <i className="fa fa-user fa-3x"></i>
                </div>
                <div className="info">
                    <a href="#" className="d-block">Admin</a>
                </div>
            </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                            <i className="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="../../index.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Dashboard v1</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../../index2.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Dashboard v2</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../../index3.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Dashboard v3</p>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a href="../widgets.html" className="nav-link">
                        <i className="nav-icon fas fa-th"></i>
                        <p>
                            Widgets
                            <span className="right badge badge-danger">New</span>
                        </p>
                    </a>
                </li>
                <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-copy"></i>
                        <p>
                            Layout Options
                            <i className="fas fa-angle-left right"></i>
                            <span className="badge badge-info right">6</span>
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="../layout/top-nav.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Top Navigation</p>
                            </a>
                        </li>
            
                        <li className="nav-item">
                            <a href="../layout/fixed-topnav.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Fixed Navbar</p>
                            </a>
                        </li>
                    </ul>
                </li>
          
            </ul>
        </nav>
        {/* sidebar-menu */}
    </div>
    {/* sidebar */}
    </aside>
    )
}
export default Sidebar