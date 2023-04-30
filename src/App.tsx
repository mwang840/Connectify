import React from 'react';
import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import HelloWorld from './components/hello_world'
// import Welcome from './components/value-prop';
import ValueProp from './components/value-prop';
import { ReactComponent as Users_svg } from './assets/Users.svg';
import { ReactComponent as UserSwitch_svg } from './assets/UserSwitch.svg';
import { ReactComponent as HandWaving_svg } from './assets/HandWaving.svg';
import { ViewNavbar } from './components/ViewNavbar';
import Profile from './components/Profile'


function App() {
  return (
    <div className="Value-propositions">
      <ViewNavbar></ViewNavbar>
      {/* <HelloWorld /> */}
      <ul>
        <HandWaving_svg />
        <ValueProp title="Your place to share your passions." 
          text="One profile. Your passions." />
        <Users_svg />
        <ValueProp title="Better connect with acquaintances, classmates & co-workers. " 
          text="Learn about their interests. Find something to talk about." />
        <UserSwitch_svg />
        <ValueProp title="Just met? Exchange profiles. Learn each other's interests." 
          text="Meet new people with shared interests." />
      </ul>
      <Profile/>
    </div>
    // <div>
    // </div>
  );
}

export default App;
