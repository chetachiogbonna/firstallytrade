import React from 'react'
import Header from "../components/Header"
import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <main className="bg-black min-h-screen">
      <Header />

      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default RootLayout