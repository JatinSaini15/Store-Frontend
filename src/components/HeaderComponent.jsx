import React from 'react'

const HeaderComponent = () => {
  function testclick(){
    console.log("clicked");
  }
  return (
    <div>
        <header>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5 pe-3">
          <a className="navbar-brand" href="/"><img src="logo.png" alt="Logo" style={{width: '40px'}}/> Restaurant Inventory Management System</a>
          <button className="navbar-toggler" onClick = {testclick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add-product">Add Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">Inventory</a>
              </li>
            </ul>
          </div>
        </nav>
        </header>
    </div>
  )
}

export default HeaderComponent