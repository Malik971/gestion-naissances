import { Outlet } from "react-router";

function PrivateLayout() {
  return (
    <section className="border-2 border-blue-700">
      PrivateLayout
      <Outlet />
    </section>
  );
}

export default PrivateLayout;
