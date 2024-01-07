import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthForm from './Modules/Auth/AuthForm';
import Home from './Modules/Main/home';

const PrivateRoute = ({ children }) => {
  const isUserLoggedIn = window.localStorage.getItem("instaToken") !== null;
  const isFormPages = window.location.pathname.includes('account');

  if ((isUserLoggedIn && !isFormPages) || (!isUserLoggedIn && isFormPages)) {
    return children;
  } else {
    const redirectUrl = isUserLoggedIn ? '/' : '/account/signin';
    return <Navigate to={redirectUrl} replace />;
  }
};


const App = () => {
  const routes = [
    {
      id: 1,
      name: 'home',
      path: '/',
      Component: <Home/>
    },
    {
      id: 2,
      name: 'sign in',
      path: '/account/signin',
      Component: <AuthForm isSignInPage={true}/>
    },
    {
      id: 3,
      name: 'Sign Up',
      path: '/account/signup',
      Component: <AuthForm isSignInPage={false}/>
    }
  ]
  return (
    <div className="App">
      <Routes>
        {routes.map(({ id, name, path, Component }) => (
          <Route key={id} path={path} element={<PrivateRoute>{Component}</PrivateRoute>} />
        ))}
      </Routes>
    </div>
  );  
}

export default App;
