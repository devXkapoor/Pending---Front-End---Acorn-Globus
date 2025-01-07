import { Route, Routes } from "react-router"
import Layout from "./Layouts/Layout"
import MainContent from "./Components/MainContent"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Layout>
            <MainContent />
          </Layout>} />
      </Routes>
    </>
  )
}

export default AppRoutes