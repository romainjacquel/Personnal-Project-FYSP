var casual = require('casual')



// index.js
module.exports = () => {
    const data = { posts: [] }

//     const idSports = [{id:1} ,{id:2} ,{id:3}]

//    const idSport = idSports.map((sport)=>{
//     return sport.id
// })


function getIdSport(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getIdUser(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}

    // Create 1000 users
    for (let i = 0; i < 25; i++) {
      data.posts.push({ id :i, idUser: getIdUser(1,11), idSport :getIdSport(1,4) , title : casual.title, content: casual.sentences(n=6), author:casual.name, country :casual.country  })
    }
    return data
  }