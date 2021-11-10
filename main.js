/*function show(texto) {
  alert(texto)
}
show("teste")*/

const linksSocialMedia = {
  github: 'MiguelcrReis',
  youtube: 'channel/UCc7e-7kdlt_ELPtzGl5Japw',
  facebook: 'miguel.Reisss',
  instagram: 'miguel.reiss',
  twitter: 'neymarjr'
}

function changeSocialMediaLinks() {
  //Exemplos para alterar o nome pelo id userName
  /*document.getElementById('userName').textContent = "Miguel"

      userName.textContent = "Miguel"*/

  //children - Esse FOR esta passando que o controlador agora é o li, e que ela é referente a cada filho (children) que existe dentro deste elemento html (socialLinks)
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json()) 
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url  
    userImg.src = data.avatar_url
    userLogin.textContent = data.login
  })
}
getGitHubInfos()