import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link class="nav-link" to="dashbord">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Interface</div>

      <li class="nav-item">
        <Link
          class="nav-link collapsed"
          to="/portal/user-list"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Students</span>
        </Link>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <a class="collapse-item" href="buttons.html">
              Buttons
            </a>
            <a class="collapse-item" href="cards.html">
              Cards
            </a>
          </div>
        </div>
      </li>

      <li class="nav-item">
        <div
          id="collapseUtilities"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <a class="collapse-item" href="utilities-color.html">
              Colors
            </a>
            <a class="collapse-item" href="utilities-border.html">
              Borders
            </a>
            <a class="collapse-item" href="utilities-animation.html">
              Animations
            </a>
            <a class="collapse-item" href="utilities-other.html">
              Other
            </a>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Sidebar
