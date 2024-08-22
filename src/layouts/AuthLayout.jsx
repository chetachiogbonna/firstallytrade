import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <main className="bg-[#1C1F2D] min-h-screen">

      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default AuthLayout