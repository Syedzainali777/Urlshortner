import { Outlet } from "react-router-dom";
import Header from '@/components/header';
const Applayout = () => {
  return (
    <div>
      <Header/>
      <main className="min-h-screen container">
        <Outlet />
      </main>
      <div className="p-10 text-white bg-gray-800 mt-10">
        <h1>Made with love with zain</h1>
      </div>
    </div>
  );
};

export default Applayout;
