// import './styles.css';
// import Logo from '../../public/logo.jpg'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 border-gray-200">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
          <a className="no-underline text-grey-darkest hover:text-black" href="#">
  <img width='50px' src={'/logo.jpg'}/>
          </a>
        </h1>

        <a className="text-black hover:text-orange md:hidden" href="#">
          <i className="fa fa-2x fa-bars"></i>
        </a>
      </div>

      <nav className="md:mr-8">
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4">
            <Link href={'/'}>
            <a
              className="block no-underline hover:underline py-2 text-grey-darkest hover:text-purple md:border-none md:p-0"
            >
              Home
            </a>
            </Link>
          </li>
          <li className="md:ml-4">
          <Link href={'/codigo_de_conducta'}>
            <a
              className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-purple md:border-none md:p-0"
            >
              Codigo de conducta
            </a>
            </Link>
          </li>
          <li className="md:ml-4">
          <Link href={'/comunidad'}>
            <a
              className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-purple md:border-none md:p-0"
              href="#"
            >
              Comunidad
            </a>
            </Link>
          </li>
          <li className="md:ml-4">
            <a
              className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-purple md:border-none md:p-0"
              href="#"
            >
              Contacto
            </a>
          </li>
          <li>
            <button className="md:ml-4 bg-transparent hover:bg-blue-500 text-blue-700 text-purple hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded-full">
              Ingresar
            </button>
          </li>
          <li>


            <button className="md:ml-4 bg-gradient-to-r from-purple to-lilac hover:bg-indigo-700 text-white py-2 px-4 rounded-full">
              Registrarse
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
