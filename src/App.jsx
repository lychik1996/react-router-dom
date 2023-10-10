import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './components/mainPage/HomePage';
import AboutPage from './components/mainPage/AboutPage';
import BlogPage, { blogLoader } from './components/mainPage/BlogPage';
import NotFoundPage from './components/mainPage/NotFoundPage';
import HeadFoodPage from './components/mainPage/HeadFoodPage';
import SinglePage, { singleLoader } from './components/dynamicPage/SinglePage';
import CreatePage from './components/dynamicPage/CreatePage';
import EditPage from './components/dynamicPage/EditPage';
import LoginPage from './components/mainPage/LoginPage';
import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import ErrorPage from './components/mainPage/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeadFoodPage />}>
      <Route index element={<HomePage />} />
      <Route path="aboutpage" element={<AboutPage />} />
      <Route
        path="aboutpage-us"
        element={<Navigate to="/aboutpage" replace />}
      />
      {/* Navigate pereadrecatsiya */}
      <Route path="blogpage" element={<BlogPage />} loader={blogLoader} errorElement={<ErrorPage/>} />
      <Route path="blogpage/:id" element={<SinglePage />} loader={singleLoader} />
      <Route
        path="blogpage/new"
        element={
          <RequireAuth>
            <CreatePage />
          </RequireAuth>
        }
      />
      <Route path="blogpage/:id/edit" element={<EditPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
