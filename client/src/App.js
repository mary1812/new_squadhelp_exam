import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Events from './pages/Events/Events';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import Payment from './pages/Payment/Payment';
import StartContestPage from './pages/StartContestPage/StartContestPage';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home/Home';
import ContestPage from './pages/ContestPage/ContestPage';
import UserProfile from './pages/UserProfile/UserProfile';
import 'react-toastify/dist/ReactToastify.css';
import ContestCreationPage from './pages/ContestCreation/ContestCreationPage';
import CONSTANTS from './constants';
import browserHistory from './browserHistory';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer/ChatContainer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { authActionRefresh } from './actions/actionCreator';
import ModeratorPage from "./pages/ModeratorPage/ModeratorPage";

function App(props) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const refreshToken = window.localStorage.getItem(CONSTANTS.REFRESH_TOKEN);

    if (refreshToken) {
      dispatch(authActionRefresh(refreshToken));
    }
  }, []);

  return (
    <Router history={browserHistory}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Switch>
      <Route exact path = "/events" component={Events}/>
        <Route exact path="/howitworks" component={HowItWorks}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/registration" component={RegistrationPage} />
        <PrivateRoute
          roles={["creator", "customer"]}
          exact
          path="/payment"
          component={Payment}
        />

        <PrivateRoute
          roles={["customer"]}
          exact
          path="/startContest"
          component={StartContestPage}
        />

        <PrivateRoute exact path="/startContest/nameContest">
          <ContestCreationPage
            title="Company Name"
            contestType={CONSTANTS.NAME_CONTEST}
          />
        </PrivateRoute>

        <PrivateRoute exact path="/startContest/taglineContest">
          <ContestCreationPage
            title="TAGLINE"
            contestType={CONSTANTS.TAGLINE_CONTEST}
          />
        </PrivateRoute>

        <PrivateRoute
          roles={["customer"]}
          exact
          path="/startContest/logoContest"
        >
          <ContestCreationPage
            title="LOGO"
            contestType={CONSTANTS.LOGO_CONTEST}
          />
        </PrivateRoute>

        <PrivateRoute
          roles={["customer", "creator"]}
          exact
          path="/dashboard"
          component={Dashboard}
        />

        <PrivateRoute
          roles={["customer", "creator"]}
          exact
          path="/contest/:id"
          component={ContestPage}
        />

        <PrivateRoute
          roles={["customer", "creator"]}
          exact
          path="/account"
          component={UserProfile}
        />
        <PrivateRoute
          roles={["moderator"]}
          exact
          path="/moderation"
          component={ModeratorPage}
        />
        <Route component={NotFound} />
      </Switch>
      <Route render={({location}) => location.pathname !== "/moderation" && <ChatContainer/>}/>
    </Router>
  );
}

export default App;
