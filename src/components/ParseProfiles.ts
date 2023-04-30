import data from './users.json';

interface User {
    name: String;
    phone: String;
    hobbies: Hobby[];
    user_id: number;
    profile_picture: String;
    phone_number: String;
    email: String;
};

interface Hobby {
    name: String;
    emoji: String;
};

const Users: User[] = [];

export function parseProfiles() {

for (let i=0; i<data.users.length; i++){
    let newName = data.users[i].name;
    let newPhone = data.users[i].phone_number;
    let newHobbies = [];
    let newUserID = data.users[i].user_id;
    let newPFP = data.users[i].profile_picture;
    let newPhoneNum = data.users[i].phone_number;
    let newEmail = data.users[i].email;
    console.log("parsing:")
    for(let j=0; j<data.users[i].hobbies.length; j++){
        console.log(data.users[i].hobbies.length)
        let newHobby: Hobby = {
            name: data.users[i].hobbies[j].name,
            emoji: data.users[i].hobbies[j].emoji
        }
        newHobbies.push(newHobby)
    }
    let newUser: User = {
        name: newName,
        phone: newPhone,
        hobbies: newHobbies,
        user_id: newUserID,
        profile_picture: newPFP,
        phone_number: newPhoneNum,
        email: newEmail
    }
    Users.push(newUser);
}

console.log(Users)
// console.log(Users[0].hobbies)

// for (let i=0; i<Users.length; i++){
//     console.log(Users[i].name);
// }
return Users;

}