import React from 'react';
import Profile from './Profile';
import { parseProfiles } from './ParseProfiles';
import { FC } from 'react';

let users = parseProfiles();
/*
interface myUsers {
  name
}
*/

/*
function Explore() {
  // for displaying each user 
    const Explore: React.FC<{ data: users[] }> = ({ data }) => {
        return (
            <div>
                {data.map((obj) => (
                <div {key={obj.name}>{obj.phone}{obj.hobbies} }</div>
                ))}
            </div>
        );
    };
  }
  */
  
  //export default Explore;
  