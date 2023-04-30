import React from 'react';
import { serialized } from './About';
import pic1 from './profile-pictures/0m.jpg';
import pic2 from './profile-pictures/1f.jpg';
import pic3 from './profile-pictures/1m.jpg';
import pic4 from './profile-pictures/2f.jpg';
import pic5 from './profile-pictures/2m.jpg';
import pic6 from './profile-pictures/3f.jpg';
import pic7 from './profile-pictures/3m.jpg';
import pic8 from './profile-pictures/4f.jpg';
import pic9 from './profile-pictures/4m.jpg';
import { Link } from "react-router-dom";
// import Profile from './Profile';
// import { FC } from 'react';

/*
interface myUsers {
  name
}
*/

function Explore(props: { user_id: string; serialized: [];}) {
  let users = serialized.slice(1);
  console.log("users")
  console.log(users);
  var counts_dict = {};
  console.log("users.length")
  console.log(users.length)
  for (let i = 0; i < 9; i++) {
  // for (let i in users) {
    console.log("i")
    console.log(i)
    console.log("users[i]")
    console.log(users[i])
    let user = users[i];
    let hobbies = user.hobbies;
    console.log("user.hobbies")
    console.log(hobbies)
    let count = 0;
    console.log(user.profile_picture)
    for (let j = 0; j < 6; j++) {
      let hobby = hobbies[j];
      console.log("hobbies length") 
      console.log(serialized[props.user_id].hobbies.length)
      console.log("hobby name 1")
      console.log(hobby.name)
      console.log("hobby dict")
      console.log(serialized[props.user_id].hobbies[j]) // undefined sometimes
      console.log("hobby name 2")
      // console.log(serialized[props.user_id].hobbies[j].name)
      if (hobby.name === serialized[props.user_id].hobbies[j].name) {
        // console.log("match")
        count++;
      }
    // console.log(user)
    // console.log(user.user_id)
    // console.log(count)
    counts_dict[user.user_id] = count;
    }
  }
  // console.log(counts_dict);
  let pfp = [];
      pfp.push(
          <img className="profilepic" src={pic1} alt="1"></img>
      )
      pfp.push(
          <img className="profilepic" src={pic2} alt="2"></img>
      )
      pfp.push(
          <img className="profilepic" src={pic3} alt="3"></img>
      )
      pfp.push(
          <img className="profilepic" src={pic4} alt="4"></img>
      )
      pfp.push(
          <img className="profilepic" src={pic5} alt="5"></img>
      )
      pfp.push(
          <img className="profilepic" src={pic6} alt="6"></img>
      )
      pfp.push(
          <img className="profilepic" src={pic7} alt="7"></img>
      )
      pfp.push(
          <img className="profilepic" src={pic8} alt="8"></img>
      )
      pfp.push(
          <img className="profilepic" src={pic9} alt="9"></img>)

  let userElements = users.map((user: {user_id: number, name: string, hobbies: []}, i: number) => {
    return (
      <div className="explore_sections">
      <div key={i}>
        {pfp[i]}
        <h1 className="explore_name">{user.name}</h1>
        {/* <p className="explore_hobbies">{user.hobbies}</p> */}
        <p className="explore_hobbies">Common Hobbies: {counts_dict[user.user_id]}</p>
        <Link to={`/profile/${user.user_id}?serialized=${serialized}&user_id=${user.user_id}`}>
        <button>View</button>
      </Link>
        <br></br>
        <br></br>
      </div>
    </div>
    )
  })
  // for displaying each user 

  return (
    <div>
      <h1 className="explore">Explore</h1>
      <br></br>
      {userElements}
    </div> )
}
export default Explore;