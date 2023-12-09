import PageLoader from "../components/PageLoader";
import LoginContainer from "../layouts/LoginContainer";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import history from "../history";

const Containers = () => {
  const NotFoundPage = lazy(() => import("./NotFound"));
  const LoginPage = lazy(() => import("./LoginPage"));

  return (
    <Router history={history}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route exact path="/not-found" element={<NotFoundPage />} />
          <Route element={<LoginContainer />}>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Containers;
