fetch('https://adrienr.promo-68.codeur.online/projet-gwendoline-api/scrapper/node')
      .then((res) => {
            /* console.log('ok') */
            res.json().then(j => displayJson(j))
})
.catch((res) => {
            console.log('erreur de requête')
            console.log(res)
})

function displayJson(json) {
      console.log(json)
      /* console.log(json[2][0]['titre']) */
      boucleJson(json)
}
    

const divApi = document.getElementById('api');

function boucleJson(json) {
      /* divApi.innerHTML = json[0][0]['titre']; */
      /* console.log(json.length); */
      for (let i = 0; i < json.length; i++) {
            for (let ii = 0; ii < json[i].length; ii++) {
                  let inApiDiv = divApi.innerHTML;
                  divApi.innerHTML = inApiDiv + '<a class="apiArt" href="' + json[i][ii]['lien'] + '"><section class="apiArt"><div class="child"><img src="' + json[i][ii]['thumbnail'] + '"></div><div class="child"><h4>' + json[i][ii]['titre'] + '</h4>' + json[i][ii]['date'] + '<hr><p>' + json[i][ii]['description'] + '</p></div></section></a>';
            }
      }
}