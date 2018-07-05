window.fbAsyncInit = function() {
  FB.init({
    appId      : '186656375362015',
    cookie     : true,
    xfbml      : true,
    version    : 'v3.0'
  });
  FB.AppEvents.logPageView();

  FB.getLoginStatus(function(response) {
      verificarStatus(response);
  });
};

function verificarStatus(loginResponse){
  if(loginResponse.status != 'connected') return;
    const id = loginResponse.authResponse.userID;
    logado(id);

}

function logar(){
    FB.login(function (response){
      if(response.status != 'connected') return;
      const id = response.authResponse.userID;

      FB.api('/'+id, function(res){
        novoUsuario(res.name, res.id);
        navbarLogado(res.name);
        FB.api('/'+id+'/picture', {redirect: false}, function(res){
          const foto = res.data.url;
          adicionarFoto(id, foto);
          navbarFoto(foto);
        });
      });
    });
}

function logado(userID){
  var params = {
    id: userID
  };

  console.log(params);
  $.get('/login', params, function(resultado){
    if(resultado.code) return;
    if(resultado.length == 0){
      FB.logout();
      return;
    }
    navbarLogado(resultado[0].nome);
    navbarFoto(resultado[0].foto);
  });
}
function navbarDeslogado(){


}

function navbarLogado(nome){
  var itens = document.querySelector("#user-itens");
  var liLogin = itens.querySelector("#login-item");
  itens.removeChild(liLogin);

  var liImg = document.createElement("li");
  var liUser = document.createElement("li");
  var a = document.createElement("a");
  var img = document.createElement("img");

  liImg.classList.add("nav-item");
  liUser.classList.add("nav-item");

  img.classList.add("nav-img");

  a.classList.add("nav-link");
  a.href="#";
  a.textContent = nome;

  liImg.appendChild(img);
  liUser.appendChild(a);

  itens.appendChild(liImg);
  itens.appendChild(liUser);
}

function navbarFoto(foto){
  var img = document.querySelector(".nav-img");
  img.src = foto;
}

function novoUsuario(nome, id){
  console.log(nome);
  console.log(id);

        var parameters = {
          nome: nome,
          id: id,
        };
          $.get('/login/add', parameters, function(resultado) {
            if(resultado.code && resultado.code != "ER_DUP_ENTRY")
            console.log(resultado);
          });

}

function adicionarFoto(id, foto){
  console.log(id);
  console.log(foto);
        var parameters = {
          foto: foto,
          id: id,
        };
          $.get('/login/addPic', parameters, function(resultado) {

            console.log(resultado);
          });
}

(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
