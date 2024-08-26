import { Outlet } from "react-router-dom";
import Header from '@/components/header';
const Applayout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen container">
        <Outlet />
      </main>
      <div className="p-10 text-white font-inter font-extrabold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent  mt-10 flex justify-center text-2xl md:text-3xl sm:text-2xl">
        Made by Syed Zain Ali
      </div>
    </div>
  );
};

export default Applayout;
