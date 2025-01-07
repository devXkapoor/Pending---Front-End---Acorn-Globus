import { Route, Routes } from "react-router"
import Layout from "./Layouts/Layout"
import HomePage from "./Pages/HomePage"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>} />
      </Routes>
    </>
  )
}

export default AppRoutes