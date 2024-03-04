function botaoEncrypt() {
  if (collectData() == "") {
    alert("O campo de texto está vazio, insira alguma informação");
    return;
  } else {
    hideDisplay();
    collectData();
    lowerCaseNormalize();
    encryptedData();
    alignData();
    showData();
    botaoCopy();
  }
}

function botaoDecrypt() {
  if (collectData() == "") {
    alert("O campo de texto está vazio, insira alguma informação");
    return;
  } else {
    hideDisplay();
    collectData();
    lowerCaseNormalize();
    decryptedData();
    alignData();
    showDataDecrypted();
    botaoCopy();
  }
}

function hideDisplay() {
  conjuntoRetangulo = document.getElementById(
    "conjuntoDentroRetangulo"
  ).style.display = "hidden";
}


function collectData() {
  let dataInput = document.getElementById("dataInput").value;
  return dataInput;
}

function lowerCaseNormalize() {
  let normalData = collectData()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return normalData.toLowerCase();
}

function encryptedData() {
  let trocarVogais = lowerCaseNormalize()
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  return trocarVogais;
}

function decryptedData() {
  let trocarPalavrasPorVogais = lowerCaseNormalize()
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  return trocarPalavrasPorVogais;
}


function alignData() {
  let RetanguloAlign = document.getElementById("conteudo-lateral");
  RetanguloAlign.classList.remove("conteudo_lateral");
  RetanguloAlign.classList.add("conteudo_lateral_jsalt");
}


function showData() {
  let conjuntoRetangulo = document.getElementById("conjuntoDentroRetangulo");
  conjuntoRetangulo.innerText = encryptedData();
  conjuntoRetangulo.classList.remove("conteudo_lateral_original");
  conjuntoRetangulo.classList.add("estiloResultado");
  return conjuntoRetangulo;
}

function showDataDecrypted() {
  let conjuntoRetangulo = document.getElementById("conjuntoDentroRetangulo");
  conjuntoRetangulo.innerText = decryptedData();
  conjuntoRetangulo.classList.remove("conteudo_lateral_original");
  conjuntoRetangulo.classList.add("estiloResultado");
}

function botaoCopy() {
  let botaoDeCopiar = document.createElement("botton");
  let botaoTextoCopiar = document.createTextNode("Copiar");
  botaoDeCopiar.setAttribute("id", "botaoCopy");
  botaoDeCopiar.appendChild(botaoTextoCopiar);
  botaoDeCopiar.classList.add("botao_estilo_copiar");
  conjuntoRetangulo = document.getElementById("conjuntoDentroRetangulo");
  conjuntoRetangulo.appendChild(botaoDeCopiar);
  botaoDeCopiar.addEventListener("click", function () {
    botaoDeCopiar.style.display = "none";
    let textoCopiado = document.getElementById(
      "conjuntoDentroRetangulo"
    ).innerText;
    navigator.clipboard.writeText(textoCopiado);
    botaoDeCopiar.style.display = "flex";
    botaoDeCopiar.textContent = "Copiado!";
  });
}
