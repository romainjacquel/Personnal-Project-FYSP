var casual = require('casual')



// index.js
module.exports = () => {
    const data = { posts: [] }


function getIdSport(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getIdUser(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function getNbPlaces(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}

    for (let i = 0; i < 25; i++) {
      data.posts.push({ id :i, idUser: getIdUser(1,11), idSport :getIdSport(1,4) , places:getNbPlaces(2,20), title : casual.title, content: casual.sentences(n=6), author:casual.name, country :casual.country  })
    }
    return data
  }