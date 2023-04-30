import React from "react";
import { parseProfiles } from "./ParseProfiles";
import './Profile.css';


export function UserProfile(props: { user_id: string; serialized: []}){
    // let hobbies = serialized[parseInt(props.user_id)].hobbies;
    // let hobbyElements = [];
    // for (let i=0; i<serialized[parseInt(props.user_id)].hobbies.length; i++) {
    //     hobbyElements.push(
    //   <p key={i}>
    //     {hobbies[i].emoji} {hobbies[i].name} 
    //   </p>)
    // }
    return(
    <div>
        <h1 style={{fontSize: "40px", fontFamily: "monospace"}}>
            My Hobbies
        </h1>

    </div>)
}