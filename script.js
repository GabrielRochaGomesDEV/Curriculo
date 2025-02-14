let progressoHTML = 100; 
let progressoCSS = 75;  
let progressoJavaScript = 50; 
let progressoTSQL = 60;  

const porcentagemGitHub = document.getElementById('porcentagemGitHub');
const linhaProgressoHTML = document.getElementById('linhaProgressoHTML');
const porcentagemHTML = document.getElementById('porcentagemHTML');
const linhaProgressoCSS = document.getElementById('linhaProgressoCSS');
const porcentagemCSS = document.getElementById('porcentagemCSS');
const linhaProgressoJavaScript = document.getElementById('linhaProgressoJavaScript');
const porcentagemJavaScript = document.getElementById('porcentagemJavaScript');
const linhaProgressoTSQL = document.getElementById('linhaProgressoTSQL');
const porcentagemTSQL = document.getElementById('porcentagemTSQL');


const usuarioGitHub = 'GabrielRochaGomesDEV';

function atualizarProgressoGitHub(githubData) {
  const repositorios = githubData.public_repos;  
  const totalRepositorios = 50; 

  
  progressoGitHub = Math.min((repositorios / totalRepositorios) * 100, 100);


  linhaProgressoGitHub.style.width = progressoGitHub + '%';
  porcentagemGitHub.textContent = Math.round(progressoGitHub) + '%';
}

function obterDadosGitHub() {
  fetch(`https://api.github.com/users/${usuarioGitHub}`)
    .then(response => response.json())
    .then(data => {
      atualizarProgressoGitHub(data);  
    })
    .catch(error => {
      console.error('Erro ao buscar dados do GitHub:', error);
      
      progressoGitHub = 50; 
      linhaProgressoGitHub.style.width = progressoGitHub + '%';
      percentagemGitHub.textContent = Math.round(progressoGitHub) + '%';
    });
}


function atualizarProgressoModulos() {
  
  linhaProgressoHTML.style.width = progressoHTML + '%';
  porcentagemHTML.textContent = progressoHTML + '%';

  linhaProgressoCSS.style.width = progressoCSS + '%';
  porcentagemCSS.textContent = progressoCSS + '%';

  linhaProgressoJavaScript.style.width = progressoJavaScript + '%';
  porcentagemJavaScript.textContent = progressoJavaScript + '%';

  linhaProgressoTSQL.style.width = progressoTSQL + '%';
  porcentagemTSQL.textContent = progressoTSQL + '%';
}


window.onload = function () {
  obterDadosGitHub();
  atualizarProgressoModulos(); 
};
