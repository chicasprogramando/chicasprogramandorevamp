import React, { Component } from 'react';
import Header from '../Header';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <Header />
        {children}
        <footer className="h-48 mt-8 flex flex-col items-center justify-center">
          <div className="flex flex-row justify-center mb-5" >
          <img
              src="/logo.jpg"
              className="w-10 h-10 m-2"

              // alt="Sunset in the mountains"
            />
              <img
              src="/logo.jpg"
              className="w-10 h-10 m-2 "

              // alt="Sunset in the mountains"
            />
              <img
              className="w-10 h-10 m-2 "
              src="/logo.jpg"
              // alt="Sunset in the mountains"
            />
            <img
              className="w-10 h-10 m-2"
              src="/logo.jpg"
              // alt="Sunset in the mountains"
            />
            </div>
            <p >c 2020 <span className="text-darkPurple">Chicas Programando.</span> Todos los derechos reservados</p>
        </footer>
      </div>
    );
  }
}

export default Layout