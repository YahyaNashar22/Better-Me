import { lazy, Suspense } from "react";
import SplashScreen from "../pages/SplashScreen/SplashScreen.tsx";
import { Route, Routes } from "react-router-dom";

const Welcome = lazy(() => import("../pages/Welcome/Welcome.tsx"));
const Login = lazy(() => import("../pages/Login/Login.tsx"));
const Signup = lazy(() => import("../pages/Signup/Signup.tsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Not Found Route */}
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
