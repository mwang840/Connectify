import React, { useState} from 'react'
import { serialized } from './About';
import { Link } from "react-router-dom";

function FormAbout(props: { user_id: string; }) {
  let hobbies = serialized[parseInt(props.user_id)].hobbies;
  const [editedHobby, setEditedHobby] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentHobby, setCurrentHobby] = useState("");

  const handleEditClick = (hobby: string) => {
    setCurrentHobby(hobby);
    setIsEditing(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, index: number) => {
    event.preventDefault();
    let newHobbies = [...hobbies];
    newHobbies[index].name = editedHobby;
    serialized[parseInt(props.user_id)].hobbies = newHobbies;
    console.log(serialized)
    setIsEditing(false);
  };

  let hobbyElements = hobbies.map((hobby: {emoji: string, name: string}, i: number) => {
    return (
      <div key={i}>
        <div>
          <p>
            {hobby.emoji} {hobby.name} <button onClick={() => handleEditClick(hobby.name as string)}>Edit</button>
          </p>
        </div>
        {isEditing && currentHobby === hobby.name && (
          <form onSubmit={(e) => handleSubmit(e, i)}>
            <label>
              Hobby name:
              <input
                type="text"
                value={editedHobby}
                onChange={(e) => setEditedHobby(e.target.value)}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        )}
      </div>
    );
  });

  return <div className="about">{hobbyElements}
  <br></br>
  <Link to={`/profile?serialized=${serialized}`}>
        <button>Done</button>
      </Link>
  <Link to={`/explore?serialized=${serialized}`}>
        <button>Explore</button>
      </Link>
  </div>;
}

export default FormAbout;
