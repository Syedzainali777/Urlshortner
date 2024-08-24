import { Outlet } from "react-router-dom";
import Header from '@/components/header';
const Applayout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen container">
        <Outlet />
      </main>
      <div className="p-10 text-white bg-gray-800 mt-10 flex justify-center text-2xl md:text-3xl sm:text-2xl">
        Made with love with Zain
      </div>
    </div>
  );
};

export default Applayout;
