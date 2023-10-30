import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AdminLayout from "./layout";
import YtdSales from "./Pages/YtdSales";
import { useAuth } from "./Context/AuthContext";

const App = () => {

  const { isAuthenticated } = useAuth();

  return (
    <>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route path="/"
          element={
            <>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </>
          }
        />

        <Route path="/ytd-sales" element={<>
          <AdminLayout>
            <YtdSales />
          </AdminLayout>
        </>} />

      </Routes>
    </>
  );
}

export default App;