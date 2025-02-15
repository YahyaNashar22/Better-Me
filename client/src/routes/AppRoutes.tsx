import { lazy, Suspense } from "react";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import { Route, Routes } from "react-router-dom";

const Welcome = lazy(() => import("../pages/Welcome/Welcome.tsx"));
const Login = lazy(() => import("../pages/Login/Login.tsx"));
const Signup = lazy(() => import("../pages/Signup/Signup.tsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes>
        <Route path="/" element={<Welcome />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Not Found Route */}
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
