// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Karo',
//   age: 37,
//   hobbies: ['Sports', 'Coocking'],
//   role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'Karo',
  age: 37,
  hobbies: ['Sports', 'Coocking'],
  role: Role.ADMIN,
};

//----- any ---------
// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 5];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === 0) {
  console.log('is admin');
}
