
const hotel = {
    name: 'SuSeSi',
    stars: 6,
    capacity: 500,
    premium: true,
  };


console.log(hotel);

hotel.stars = 5;
hotel.premium = false;
hotel.mood = 'happy';

console.log(hotel);
 
console.log('===================================================')


const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    updateHobby(newHobby) {
        this.hobby = newHobby;
    },
    updatePremium(newStatus) {
        this.premium = newStatus;
    },
  };

  console.log(user);

  user.updateHobby('skydiving');
  user.updatePremium(false);
  console.log(user);

console.log('========= Перевів ключі в масив ========')

let keysUser = Object.keys(user);
let keysHotel = Object.keys(hotel);

console.log(keysHotel);
console.log(keysUser);

console.log('===================================================')

for (let key of keysUser) {
    console.log(`${key} : ${user[key]}`);
}    

console.log('===================================================')

for (let key of keysHotel) {
    console.log(`${key} : ${hotel[key]}`);
} 