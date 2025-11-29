import { Suspense, lazy, useEffect, useState, startTransition } from "react";
import { Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Loader from "./common/Loader";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Qualification from "./pages/Qualification";
import AddExperience from "./pages/AddExperience";

const Layout = lazy(() => import("./common/Layout"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      startTransition(() => {
        setLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/qualification" element={<Qualification />} />
            <Route path="/addExperience" element={<AddExperience />} />
          </Route>
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
