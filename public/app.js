const feedDisplay = document.querySelector('#feed')
const rightDisplay = document.querySelector('#layout__right-sidebar')

fetch('http://127.0.0.1:5500/results')
  .then(response => {return response.json()})
  .then(data => {   //console.log(data)})
    data.forEach(article => {
      re = /\n/gi;
      article1 = (article.res).replace(re, '<br>')
      console.log(article1)
      const res = `<div id="feed" class="feed"> <p>`+ article1 +`</p> </div>`
      //console.log(res)
      feedDisplay.insertAdjacentHTML("beforeend", res)




})})

.catch(err => {console.log(err)});



fetch('http://127.0.0.1:5500/results')
  .then(response => {return response.json()})
  .then(data => {   //console.log(data)})
    data.forEach(keywords => {
      data = data.toString()
      data = data.replace(/[^\w\s]|_/g, "")
      data = data.replace(/\s+/g, " ")
      data = data.toLowerCase();
      const arr = data.split(' ');
      const map = {};
      arr.forEach(word => {
      map[word] = (map[word] || 0) + 1;
      });
      const res = Array.from(Object.keys(map), key => [key, map[key]]);
      let words = res.sort((a, b) => b[1] - a[1]);
      
      const rightSideBar = `<div id="feed" class="feed"> <p>`+ "Test Right" +`</p> </div>`
      console.log(words)
    
      rightDisplay.insertAdjacentHTML('beforeEnd', rightSideBar)
      // frequentWords = findTopThree(data)
      // console.log(frequentWords)
      return [res[0][0], res[1][0], res[2][0]];




})})

.catch(err => {console.log(err)});

function findTopThree (str) {
  str.replace(/[^\w\s]|_/g, "")
  str.replace(/\s+/g, " ")
  str.toLowerCase();
  const arr = str.split(' ');
  const map = {};
  arr.forEach(word => {
     map[word] = (map[word] || 0) + 1;
  });
  const res = Array.from(Object.keys(map), key => [key, map[key]]);
  res.sort((a, b) => b[1] - a[1]);
  return [res[0][0], res[1][0], res[2][0]];
};
//console.log(findTopThree(str));