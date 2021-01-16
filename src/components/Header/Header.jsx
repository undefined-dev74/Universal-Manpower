import React from 'react';
const Header = () => {
  return (
    <div className="header">
      <div className="main-hader">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="./">
              Universal Manpower Online
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item d-flex ">
                  <a class="nav-link active" aria-current="page" href="./">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./">
                    Link
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="./"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-success" type="submit">
                  Post A Job
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
