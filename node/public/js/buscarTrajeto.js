function criarLinhaTabela(linha){
  /*<tr>
      <td class= "text-center"><%=rows[i].numero%></td>
      <td class= "text-center"><%=rows[i].nome%></td>
      <td class= "text-center"><a href="linhas/<%=rows[i].numero%>" class="btn btn-danger">Info</a></td>
      <td class= "text-center">favoritar</td>
  </tr>*/
  var table = document.querySelector("#tabela-body");
  var tr = document.createElement("tr");
  var tdNum = document.createElement("td");
  var tdNome = document.createElement("td");
  var tdInfo = document.createElement("td");
  var tdFav = document.createElement("td");
  var aBtn = document.createElement("a");

  tdNum.textContent = linha.numero;
  tdNome.textContent = linha.nome;
  aBtn.textContent = "Info";
  tdFav.textContent = "favoritar";

  aBtn.setAttribute("href", "linhas/" + linha.numero);

  aBtn.classList.add("btn")
  aBtn.classList.add("btn-danger");
  tdNum.classList.add("text-center");
  tdNome.classList.add("text-center");
  tdInfo.classList.add("text-center");
  tdFav.classList.add("text-center");

  tdInfo.appendChild(aBtn);
  tr.appendChild(tdNum);
  tr.appendChild(tdNome);
  tr.appendChild(tdInfo);
  tr.appendChild(tdFav);
  table.appendChild(tr);
}

function limparTabela(tbody){
  var trs = tbody.querySelectorAll("tr");
  trs.forEach(function (tr) {
    tbody.removeChild(tr);
  });
}

$(document).ready(function(){
  $('#buscaOrigem').on('keyup', function(e){
      var parameters = {
         orig: $(this).val().toUpperCase(),
         dest: $('#buscaDestino').val().toUpperCase()
       };
        $.get( '/buscaCaminho',parameters, function(linhas) {
          var tbody = document.querySelector("#tabela-body");
          limparTabela(tbody);
          linhas.forEach(criarLinhaTabela);
      });
  });

  $('#buscaDestino').on('keyup', function(e){
      var parameters = {
         orig: $('#buscaOrigem').val().toUpperCase(),
         dest: $(this).val().toUpperCase()
       };
        $.get( '/buscaCaminho',parameters, function(linhas) {
         var tbody = document.querySelector("#tabela-body");
         limparTabela(tbody);
         linhas.forEach(criarLinhaTabela);
      });
  });
});
