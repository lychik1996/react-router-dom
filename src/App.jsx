import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { lazy } from 'react';//for lazy load
const HomePage = lazy(()=>import('./components/mainPage/HomePage'));//import lazy load element
const AboutPage= lazy(()=>import('./components/mainPage/AboutPage'));

const BlogPage= lazy(()=>import('./components/mainPage/BlogPage'));
import { blogLoader } from './components/mainPage/BlogPage';
import NotFoundPage from './components/mainPage/NotFoundPage';
import HeadFoodPage from './components/mainPage/HeadFoodPage';
const SinglePage = lazy(()=>import('./components/dynamicPage/SinglePage'));
import  { singleLoader } from './components/dynamicPage/SinglePage';
const CreatePage= lazy(()=>import('./components/dynamicPage/CreatePage'));
const EditPage= lazy(()=>import('./components/dynamicPage/EditPage'));
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
