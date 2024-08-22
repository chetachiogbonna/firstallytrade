import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import RootLayout from "./layouts/RootLayout"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import { About, AdvancedTrading, ForexTrading, FuturesTrading, Home, Insights, LiveTrading, OilAndGasTrading, OptionsCopyTrading, Software, StockTrading } from "./pages/root"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      {/* auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="options-copy-trading" element={<OptionsCopyTrading />} />
        <Route path="advance-trading" element={<AdvancedTrading />} />
        <Route path="live-trading" element={<LiveTrading />} />

        <Route path="futures" element={<FuturesTrading />} />
        <Route path="stock" element={<StockTrading />} />
        <Route path="forex" element={<ForexTrading />} />
        <Route path="oil-and-gas" element={<OilAndGasTrading />} />

        <Route path="insights" element={<Insights />} />
        <Route path="software" element={<Software />} />
      </Route>
    </>
  ))

  return <RouterProvider router={router} />
}

export default App