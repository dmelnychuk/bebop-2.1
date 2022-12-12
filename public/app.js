const feedDisplay = document.querySelector('#feed')

fetch('http://127.0.0.1:8383/results')
  .then(response => {return response.json()})
  .then(data => {   //console.log(data)})
    data.forEach(article => {
      re = /\n/gi;
      article1 = (article.res).replace(re, '<br>')
      console.log(article1)
      const res = `<p>`+ article1 +`</p>`
      //console.log(res)
      feedDisplay.insertAdjacentHTML("beforeend", res)
})})

.catch(err => {console.log(err)});




// let regex = /\n/;
// let str = 'Яблоки\n круглые\n\n и яблоки сочные.';
// let newstr = str.replace(re, '<br>');
// console.log(newstr); // Яблоки<br> круглые<br><br> и яблоки сочные.