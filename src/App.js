import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import AdminPanel from "./project/AdminPanel";
import CreateNews from "./project/createNews";
import ProjectDetails from "./project/ProjectDetails";
import GadgetsPage from "./components/gadgets";
import ContactPage from "./components/contact";
import NewsComponent from './components/news';
import Footer from "./components/layout/Footer";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from "./project/createPost";
import NewsDetails from "./components/newsDetails";
import SocialMediaSidebar from "./components/socialMediaISidebar";

const history = createBrowserHistory();



function App(props) {
  const { isLoading } = props;
  if (isLoading) return null;
  return (
    <BrowserRouter history={history}>
      <div className="App">
        <Navbar />        
        <SocialMediaSidebar />        
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/war-create">
            <CreatePost />
          </PrivateRoute>
          <PrivateRoute exact path="/war-create-news">
            <CreateNews />
          </PrivateRoute>
          <PrivateRoute exact path="/war-admin">
            <AdminPanel />
          </PrivateRoute>
          <PrivateRoute exact path="/project/:id">
            <ProjectDetails />
          </PrivateRoute>
          <PrivateRoute exact path="/news/:id">
            <NewsDetails />
          </PrivateRoute>
          <PrivateRoute  redirectTo="/" exact path="/war-signin">
            <SignIn />
          </PrivateRoute>
          <PrivateRoute  redirectTo="/" exact path="/war-signup">
            <SignUp />
          </PrivateRoute>
          <PrivateRoute exact path="/gadgets">
            <GadgetsPage />
          </PrivateRoute>
          <PrivateRoute exact path="/contact">
            <ContactPage />
          </PrivateRoute>
          <PrivateRoute exact path="/news">
            <NewsComponent />
          </PrivateRoute>
        </Switch>
        <ToastContainer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: !!state.firebase.auth.uid,
    isLoading: !state.firebase.auth.isLoaded,
  };
};

export default connect(mapStateToProps, null)(App);

function PrivateRoute({ children, redirectTo = "/signin", ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
         (
          React.Children.map(children, (Child) =>
            React.cloneElement(Child, routeProps)
          )
        ) 
      }
    />
  );
}
