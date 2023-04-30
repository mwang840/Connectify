import data from './users.json';

interface User {
    name: String;
    phone: String;
    hobbies: String;
};

const Users: User[] = [];

export function parseProfiles() {

for (let i=0; i<data.users.length; i++){
    let newName = data.users[i].name;
    let newPhone = data.users[i].phone_number;
    let newHobbies = "";
    for(let i=0; i<data.users[0].hobbies.length; i++){
     newHobbies = newHobbies.concat("\n", data.users[0].hobbies[i].name + data.users[0].hobbies[i].emoji);
    }
    let newUser: User = {
        name: newName,
        phone: newPhone,
        hobbies: newHobbies
    }
    Users.push(newUser);
}

for (let i=0; i<Users.length; i++){
    console.log(Users[i].name);
}
return Users;

}