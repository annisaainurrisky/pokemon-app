import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import Start from "@/pages/index";
import Home from "@/pages/list/list";
import Detail from "@/pages/detail/detail-pokemon";
import MyPokemon from "@/pages/list/my-list";
import CatchPage from "@/pages/detail/catch";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: `/detail/:id`,
      element: <Detail />,
    },
    {
      path: "/my-pokemon",
      element: <MyPokemon />,
    },
    {
      path: `/catch/:id`,
      element: <CatchPage />,
    },
    {
      path: "*",
      element: (
        <div className="min-h-screen container w-full flex flex-col justify-center items-center gap-5">
          <p className="text-7xl md:text-9xl font-bold tracking-wide">Oops!</p>
          <p className="text-md md:text-xl font-bold">404-PAGE NOT FOUND</p>
          <div className="flex flex-col items-center w-auto">
            <p>The page you are looking for might have been removed</p>
            <p>had it's name changed or is temporary unavailable.</p>
          </div>
          <button className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-300 hover:text-black hover:border hover:border-gray-300">
            <Link to="/home">GO TO HOMEPAGE</Link>
          </button>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
