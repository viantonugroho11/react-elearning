import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    	<div>
  <div className="header">
    <div className="header-left">
      <div className="menu-icon dw dw-menu" />
      <div className="search-toggle-icon dw dw-search2" data-toggle="header_search" />
      <div className="header-search">
        <form>
          <div className="form-group mb-0">
            <i className="dw dw-search2 search-icon" />
            <input type="text" className="form-control search-input" placeholder="Search Here" />
            <div className="dropdown">
              <a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
                <i className="ion-arrow-down-c" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">From</label>
                  <div className="col-sm-12 col-md-10">
                    <input className="form-control form-control-sm form-control-line" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">To</label>
                  <div className="col-sm-12 col-md-10">
                    <input className="form-control form-control-sm form-control-line" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-12 col-md-2 col-form-label">Subject</label>
                  <div className="col-sm-12 col-md-10">
                    <input className="form-control form-control-sm form-control-line" type="text" />
                  </div>
                </div>
                <div className="text-right">
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="header-right">
      <div className="dashboard-setting user-notification">
        <div className="dropdown">
          <a className="dropdown-toggle no-arrow" href="javascript:;" data-toggle="right-sidebar">
            <i className="dw dw-settings2" />
          </a>
        </div>
      </div>
      <div className="user-notification">
        <div className="dropdown">
          <a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
            <i className="icon-copy dw dw-notification" />
            <span className="badge notification-active" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="notification-list mx-h-350 customscroll">
              <ul>
                <li>
                  <a href="#">
                    <img src="vendors/images/img.jpg" alt />
                    <h3>John Doe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="vendors/images/photo1.jpg" alt />
                    <h3>Lea R. Frith</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="vendors/images/photo2.jpg" alt />
                    <h3>Erik L. Richards</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="vendors/images/photo3.jpg" alt />
                    <h3>John Doe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="vendors/images/photo4.jpg" alt />
                    <h3>Renee I. Hansen</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="vendors/images/img.jpg" alt />
                    <h3>Vicki M. Coleman</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="user-info-dropdown">
        <div className="dropdown">
          <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
            <span className="user-icon">
              <img src="vendors/images/photo1.jpg" alt />
            </span>
            <span className="user-name">Ross C. Lopez</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
            <a className="dropdown-item" href="profile.html"><i className="dw dw-user1" /> Profile</a>
            <a className="dropdown-item" href="profile.html"><i className="dw dw-settings2" /> Setting</a>
            <a className="dropdown-item" href="faq.html"><i className="dw dw-help" /> Help</a>
            <a className="dropdown-item" href="login.html"><i className="dw dw-logout" /> Log Out</a>
          </div>
        </div>
      </div>
      <div className="github-link">
        <a href="https://github.com/dropways/deskapp" target="_blank"><img src="vendors/images/github.svg" alt /></a>
      </div>
    </div>
  </div>
  <div className="right-sidebar">
    <div className="sidebar-title">
      <h3 className="weight-600 font-16 text-blue">
        Layout Settings
        <span className="btn-block font-weight-400 font-12">User Interface Settings</span>
      </h3>
      <div className="close-sidebar" data-toggle="right-sidebar-close">
        <i className="icon-copy ion-close-round" />
      </div>
    </div>
    <div className="right-sidebar-body customscroll">
      <div className="right-sidebar-body-content">
        <h4 className="weight-600 font-18 pb-10">Header Background</h4>
        <div className="sidebar-btn-group pb-30 mb-10">
          <a href="javascript:void(0);" className="btn btn-outline-primary header-white active">White</a>
          <a href="javascript:void(0);" className="btn btn-outline-primary header-dark">Dark</a>
        </div>
        <h4 className="weight-600 font-18 pb-10">Sidebar Background</h4>
        <div className="sidebar-btn-group pb-30 mb-10">
          <a href="javascript:void(0);" className="btn btn-outline-primary sidebar-light ">White</a>
          <a href="javascript:void(0);" className="btn btn-outline-primary sidebar-dark active">Dark</a>
        </div>
        <h4 className="weight-600 font-18 pb-10">Menu Dropdown Icon</h4>
        <div className="sidebar-radio-group pb-10 mb-10">
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sidebaricon-1" name="menu-dropdown-icon" className="custom-control-input" defaultValue="icon-style-1" defaultChecked />
            <label className="custom-control-label" htmlFor="sidebaricon-1"><i className="fa fa-angle-down" /></label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sidebaricon-2" name="menu-dropdown-icon" className="custom-control-input" defaultValue="icon-style-2" />
            <label className="custom-control-label" htmlFor="sidebaricon-2"><i className="ion-plus-round" /></label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sidebaricon-3" name="menu-dropdown-icon" className="custom-control-input" defaultValue="icon-style-3" />
            <label className="custom-control-label" htmlFor="sidebaricon-3"><i className="fa fa-angle-double-right" /></label>
          </div>
        </div>
        <h4 className="weight-600 font-18 pb-10">Menu List Icon</h4>
        <div className="sidebar-radio-group pb-30 mb-10">
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sidebariconlist-1" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-1" defaultChecked />
            <label className="custom-control-label" htmlFor="sidebariconlist-1"><i className="ion-minus-round" /></label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sidebariconlist-2" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-2" />
            <label className="custom-control-label" htmlFor="sidebariconlist-2"><i className="fa fa-circle-o" aria-hidden="true" /></label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sidebariconlist-3" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-3" />
            <label className="custom-control-label" htmlFor="sidebariconlist-3"><i className="dw dw-check" /></label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sidebariconlist-4" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-4" defaultChecked />
            <label className="custom-control-label" htmlFor="sidebariconlist-4"><i className="icon-copy dw dw-next-2" /></label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sidebariconlist-5" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-5" />
            <label className="custom-control-label" htmlFor="sidebariconlist-5"><i className="dw dw-fast-forward-1" /></label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sidebariconlist-6" name="menu-list-icon" className="custom-control-input" defaultValue="icon-list-style-6" />
            <label className="custom-control-label" htmlFor="sidebariconlist-6"><i className="dw dw-next" /></label>
          </div>
        </div>
        <div className="reset-options pt-30 text-center">
          <button className="btn btn-danger" id="reset-settings">Reset Settings</button>
        </div>
      </div>
    </div>
  </div>
  <div className="left-side-bar">
    <div className="brand-logo">
      <a href="index.html">
        <img src="vendors/images/deskapp-logo.svg" alt className="dark-logo" />
        <img src="vendors/images/deskapp-logo-white.svg" alt className="light-logo" />
      </a>
      <div className="close-sidebar" data-toggle="left-sidebar-close">
        <i className="ion-close-round" />
      </div>
    </div>
    <div className="menu-block customscroll">
      <div className="sidebar-menu">
        <ul id="accordion-menu">
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-house-1" /><span className="mtext">Home</span>
            </a>
            <ul className="submenu">
              <li><a href="index.html">Dashboard style 1</a></li>
              <li><a href="index2.html">Dashboard style 2</a></li>
              <li><a href="index3.html">Dashboard style 3</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-edit2" /><span className="mtext">Forms</span>
            </a>
            <ul className="submenu">
              <li><a href="form-basic.html">Form Basic</a></li>
              <li><a href="advanced-components.html">Advanced Components</a></li>
              <li><a href="form-wizard.html">Form Wizard</a></li>
              <li><a href="html5-editor.html">HTML5 Editor</a></li>
              <li><a href="form-pickers.html">Form Pickers</a></li>
              <li><a href="image-cropper.html">Image Cropper</a></li>
              <li><a href="image-dropzone.html">Image Dropzone</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-library" /><span className="mtext">Tables</span>
            </a>
            <ul className="submenu">
              <li><a href="basic-table.html">Basic Tables</a></li>
              <li><a href="datatable.html">DataTables</a></li>
            </ul>
          </li>
          <li>
            <a href="calendar.html" className="dropdown-toggle no-arrow">
              <span className="micon dw dw-calendar1" /><span className="mtext">Calendar</span>
            </a>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-apartment" /><span className="mtext"> UI Elements </span>
            </a>
            <ul className="submenu">
              <li><a href="ui-buttons.html">Buttons</a></li>
              <li><a href="ui-cards.html">Cards</a></li>
              <li><a href="ui-cards-hover.html">Cards Hover</a></li>
              <li><a href="ui-modals.html">Modals</a></li>
              <li><a href="ui-tabs.html">Tabs</a></li>
              <li><a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a></li>
              <li><a href="ui-sweet-alert.html">Sweet Alert</a></li>
              <li><a href="ui-notification.html">Notification</a></li>
              <li><a href="ui-timeline.html">Timeline</a></li>
              <li><a href="ui-progressbar.html">Progressbar</a></li>
              <li><a href="ui-typography.html">Typography</a></li>
              <li><a href="ui-list-group.html">List group</a></li>
              <li><a href="ui-range-slider.html">Range slider</a></li>
              <li><a href="ui-carousel.html">Carousel</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-paint-brush" /><span className="mtext">Icons</span>
            </a>
            <ul className="submenu">
              <li><a href="font-awesome.html">FontAwesome Icons</a></li>
              <li><a href="foundation.html">Foundation Icons</a></li>
              <li><a href="ionicons.html">Ionicons Icons</a></li>
              <li><a href="themify.html">Themify Icons</a></li>
              <li><a href="custom-icon.html">Custom Icons</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-analytics-21" /><span className="mtext">Charts</span>
            </a>
            <ul className="submenu">
              <li><a href="highchart.html">Highchart</a></li>
              <li><a href="knob-chart.html">jQuery Knob</a></li>
              <li><a href="jvectormap.html">jvectormap</a></li>
              <li><a href="apexcharts.html">Apexcharts</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-right-arrow1" /><span className="mtext">Additional Pages</span>
            </a>
            <ul className="submenu">
              <li><a href="video-player.html">Video Player</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="forgot-password.html">Forgot Password</a></li>
              <li><a href="reset-password.html">Reset Password</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-browser2" /><span className="mtext">Error Pages</span>
            </a>
            <ul className="submenu">
              <li><a href="400.html">400</a></li>
              <li><a href="403.html">403</a></li>
              <li><a href="404.html">404</a></li>
              <li><a href="500.html">500</a></li>
              <li><a href="503.html">503</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-copy" /><span className="mtext">Extra Pages</span>
            </a>
            <ul className="submenu">
              <li><a href="blank.html">Blank</a></li>
              <li><a href="contact-directory.html">Contact Directory</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog-detail.html">Blog Detail</a></li>
              <li><a href="product.html">Product</a></li>
              <li><a href="product-detail.html">Product Detail</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="profile.html">Profile</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="pricing-table.html">Pricing Tables</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-list3" /><span className="mtext">Multi Level Menu</span>
            </a>
            <ul className="submenu">
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon fa fa-plug" /><span className="mtext">Level 2</span>
                </a>
                <ul className="submenu child">
                  <li><a href="javascript:;">Level 2</a></li>
                  <li><a href="javascript:;">Level 2</a></li>
                </ul>
              </li>
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
            </ul>
          </li>
          <li>
            <a href="sitemap.html" className="dropdown-toggle no-arrow">
              <span className="micon dw dw-diagram" /><span className="mtext">Sitemap</span>
            </a>
          </li>
          <li>
            <a href="chat.html" className="dropdown-toggle no-arrow">
              <span className="micon dw dw-chat3" /><span className="mtext">Chat</span>
            </a>
          </li>
          <li>
            <a href="invoice.html" className="dropdown-toggle no-arrow">
              <span className="micon dw dw-invoice" /><span className="mtext">Invoice</span>
            </a>
          </li>
          <li>
            <div className="dropdown-divider" />
          </li>
          <li>
            <div className="sidebar-small-cap">Extra</div>
          </li>
          <li>
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-edit-2" /><span className="mtext">Documentation</span>
            </a>
            <ul className="submenu">
              <li><a href="introduction.html">Introduction</a></li>
              <li><a href="getting-started.html">Getting Started</a></li>
              <li><a href="color-settings.html">Color Settings</a></li>
              <li><a href="third-party-plugins.html">Third Party Plugins</a></li>
            </ul>
          </li>
          <li>
            <a href="https://dropways.github.io/deskapp-free-single-page-website-template/" target="_blank" className="dropdown-toggle no-arrow">
              <span className="micon dw dw-paper-plane1" />
              <span className="mtext">Landing Page <img src="vendors/images/coming-soon.png" alt width={25} /></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="mobile-menu-overlay" />
  <div className="main-container">
    <div className="pd-ltr-20">
      <div className="card-box pd-20 height-100-p mb-30">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src="vendors/images/banner-img.png" alt />
          </div>
          <div className="col-md-8">
            <h4 className="font-20 weight-500 mb-10 text-capitalize">
              Welcome back <div className="weight-600 font-30 text-blue">Johnny Brown!</div>
            </h4>
            <p className="font-18 max-width-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic non repellendus debitis iure, doloremque assumenda. Autem modi, corrupti, nobis ea iure fugiat, veniam non quaerat mollitia animi error corporis.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 mb-30">
          <div className="card-box height-100-p widget-style1">
            <div className="d-flex flex-wrap align-items-center">
              <div className="progress-data">
                <div id="chart" />
              </div>
              <div className="widget-data">
                <div className="h4 mb-0">2020</div>
                <div className="weight-600 font-14">Contact</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 mb-30">
          <div className="card-box height-100-p widget-style1">
            <div className="d-flex flex-wrap align-items-center">
              <div className="progress-data">
                <div id="chart2" />
              </div>
              <div className="widget-data">
                <div className="h4 mb-0">400</div>
                <div className="weight-600 font-14">Deals</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 mb-30">
          <div className="card-box height-100-p widget-style1">
            <div className="d-flex flex-wrap align-items-center">
              <div className="progress-data">
                <div id="chart3" />
              </div>
              <div className="widget-data">
                <div className="h4 mb-0">350</div>
                <div className="weight-600 font-14">Campaign</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 mb-30">
          <div className="card-box height-100-p widget-style1">
            <div className="d-flex flex-wrap align-items-center">
              <div className="progress-data">
                <div id="chart4" />
              </div>
              <div className="widget-data">
                <div className="h4 mb-0">$6060</div>
                <div className="weight-600 font-14">Worth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 mb-30">
          <div className="card-box height-100-p pd-20">
            <h2 className="h4 mb-20">Activity</h2>
            <div id="chart5" />
          </div>
        </div>
        <div className="col-xl-4 mb-30">
          <div className="card-box height-100-p pd-20">
            <h2 className="h4 mb-20">Lead Target</h2>
            <div id="chart6" />
          </div>
        </div>
      </div>
      <div className="card-box mb-30">
        <h2 className="h4 pd-20">Best Selling Products</h2>
        <table className="data-table table nowrap">
          <thead>
            <tr>
              <th className="table-plus datatable-nosort">Product</th>
              <th>Name</th>
              <th>Color</th>
              <th>Size</th>
              <th>Price</th>
              <th>Oty</th>
              <th className="datatable-nosort">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-plus">
                <img src="vendors/images/product-1.jpg" width={70} height={70} alt />
              </td>
              <td>
                <h5 className="font-16">Shirt</h5>
                by John Doe
              </td>
              <td>Black</td>
              <td>M</td>
              <td>$1000</td>
              <td>1</td>
              <td>
                <div className="dropdown">
                  <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                    <i className="dw dw-more" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                    <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="table-plus">
                <img src="vendors/images/product-2.jpg" width={70} height={70} alt />
              </td>
              <td>
                <h5 className="font-16">Boots</h5>
                by Lea R. Frith
              </td>
              <td>brown</td>
              <td>9UK</td>
              <td>$900</td>
              <td>1</td>
              <td>
                <div className="dropdown">
                  <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                    <i className="dw dw-more" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                    <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="table-plus">
                <img src="vendors/images/product-3.jpg" width={70} height={70} alt />
              </td>
              <td>
                <h5 className="font-16">Hat</h5>
                by Erik L. Richards
              </td>
              <td>Orange</td>
              <td>M</td>
              <td>$100</td>
              <td>4</td>
              <td>
                <div className="dropdown">
                  <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                    <i className="dw dw-more" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                    <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="table-plus">
                <img src="vendors/images/product-4.jpg" width={70} height={70} alt />
              </td>
              <td>
                <h5 className="font-16">Long Dress</h5>
                by Renee I. Hansen
              </td>
              <td>Gray</td>
              <td>L</td>
              <td>$1000</td>
              <td>1</td>
              <td>
                <div className="dropdown">
                  <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                    <i className="dw dw-more" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                    <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="table-plus">
                <img src="vendors/images/product-5.jpg" width={70} height={70} alt />
              </td>
              <td>
                <h5 className="font-16">Blazer</h5>
                by Vicki M. Coleman
              </td>
              <td>Blue</td>
              <td>M</td>
              <td>$1000</td>
              <td>1</td>
              <td>
                <div className="dropdown">
                  <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                    <i className="dw dw-more" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                    <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                    <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer-wrap pd-20 mb-20 card-box">
        DeskApp - Bootstrap 4 Admin Template By <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
