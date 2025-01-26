//import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <div className='font-sans text-white bg-gray-900 min-h-screen'>
      <header className='flex justify-between items-center py-6 px-12 bg-gray-800 shadow-lg'>
        <div className='font-bold text-2xl'>Elí con Acento pronto...</div>
        <nav className='flex gap-6'>
          <a href='#' className='hover:text-gray-300 text-lg'>Features</a>
          <a href='#' className='hover:text-gray-300 text-lg'>Pricing</a>
          <a href='#' className='hover:text-gray-300 text-lg'>About Us</a>
          <a href='#' className='hover:text-gray-300 text-lg'>Support</a>
        </nav>
        <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg'>Start Free Trial</button>
      </header>
      <main className='flex justify-center items-center my-12 mx-auto'>
        <div className='flex-1 justify-center items-center px-12'>
          <img src='https://images.unsplash.com/photo-1600087626014-e652e18bbff2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZSUyMHdpdGglMjBhJTIwZGVsaXZlcnklMjBub3RpZmljYXRpb258ZW58MHx8MHx8fDA%3D' alt='Smartphone' className='rounded-lg shadow-2xl' />
        </div>
        <div className='flex-1 text-left px-12'>
          <h1 className='text-6xl font-bold my-4'>Simplify Your Work</h1>
          <p className='text-gray-400 text-xl my-4'>Our tool helps you streamline your workflow for better efficiency. Experience cutting-edge features with our tool. Redefine your working experience now.</p>
          <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center'>
            <FaDownload className='mr-3' />
            Download Now
          </button>
          <p className='text-gray-500 text-sm mt-4'>No credit card required</p>
        </div>
      </main>
    </div>
  );
}
