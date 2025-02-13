
import './App.css';
import {useState} from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center h-[100%]">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Menu trên desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-gray-300">Trang chủ</a></li>
          <li><a href="/" className="hover:text-gray-300">Dịch vụ</a></li>
          <li><a href="/" className="hover:text-gray-300">Liên hệ</a></li>
        </ul>

        {/* Nút mở menu trên mobile */}
        <button
          className="md:hidden p-2 rounded bg-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu thả xuống trên mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 bg-blue-600 p-4 mt-2 w-[50%] absolute top-20 right-4 rounded-2xl">
          <li><a href="/" className="block py-2 hover:bg-blue-700">Trang chủ</a></li>
          <li><a href="/" className="block py-2 hover:bg-blue-700">Dịch vụ</a></li>
          <li><a href="/" className="block py-2 hover:bg-blue-700">Liên hệ</a></li>
        </ul>
      )}
    </nav>
  );
}


export default App;
