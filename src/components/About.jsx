import React from 'react'
import { parseProfiles } from './ParseProfiles';

// declare var serialized: [];
// only initialize serialized once, if it is full, don't do it again
export var serialized;

if (serialized == null) {
    serialized = parseProfiles();
}

// how do i make About component display the hobbies of the user_id that is passed to it?

// let hobbies = "";
// for(let i=0; i<data.users[0].hobbies.length; i++){
//     hobbies = hobbies.concat("\n", data.users[0].hobbies[i].name + data.users[0].hobbies[i].emoji);
// }
//let hobbies = data.users[0].hobbies[0].name;
// forms in edit_profile only touch the serialized list
// hobbies in profile are also displayed from this list

// after this i need database of emojis and their names

function About(props: { user_id: string; }) {
    let hobbies = serialized[parseInt(props.user_id)].hobbies;
    let hobbyElements = [];
    for (let i=0; i<serialized[parseInt(props.user_id)].hobbies.length; i++) {
        hobbyElements.push(
      <p key={i}>
        {hobbies[i].emoji} {hobbies[i].name} 
      </p>)
    }
    return (
      <div className="about">
        {hobbyElements}
      </div>
    );
  }

// class About extends Component {
//     render() {
//         return (
//             <section id="container-about" className="container-about">
//             <h3> Hobbies </h3>
//             <p> {hobbies} </p>
//             </section>
//         )
//     }
// }

export default About