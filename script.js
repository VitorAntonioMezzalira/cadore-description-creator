function pegaDados() {

  let miniDescricao = [];

  const imóvel = document.getElementById('tipo-imovel').value;
  const bairro = document.getElementById('bairro').value;

  // POSIÇÃO SOLAR
  const fieldsetPosicaoSolar = document.querySelector('.posicao-solar');
  const inputPosicaoSolar = fieldsetPosicaoSolar.querySelectorAll('.checkbox');
  let posicaoSolar = [];
  inputPosicaoSolar.forEach(posicao => {
    if (posicao.checked) {
      posicaoSolar.push(posicao.value);
    };
  });
  if(posicaoSolar[0]) {
    miniDescricao.push('posição solar ' + repete(posicaoSolar));
  }
  // MEDIDAS
  let medidas = [];
  areaPrivativa = document.getElementById('area-privativa').value;
  areaTotal = document.getElementById('area-total').value;
  areaComum = document.getElementById('area-comum').value;
  areaTerreno = document.getElementById('area-terreno').value;
  if (areaPrivativa) medidas.push('área privativa de ' + areaPrivativa + ' m²');
  if (areaTotal) medidas.push('área total de ' + areaTotal + ' m²');
  if (areaComum) medidas.push('área comum de ' + areaComum + ' m²');
  if (areaTerreno) medidas.push('área do terreno de ' + areaTerreno + ' m²');
  if (medidas[0]) {
    miniDescricao.push(repete(medidas))
  }
  miniDescricao = 'Imóvel' + (miniDescricao[0] ? ' com ' + repete(miniDescricao) + '. L' : ' l') + 'ocalizado no bairro ' + bairro + ' em Caxias do Sul. ';

  const comodos = [];

  // QUARTOS
  let quartos = Number(document.getElementById('quartos').value) + Number(document.getElementById('suites').value);
  let suites = Number(document.getElementById('suites').value);
  suites = suites ? "(sendo " + suites + " suíte" + (suites > 1 ? 's' : '') + ')' : '';
  quartos = quartos + ' dormitório' + (quartos > 1 ? 's' : '') + (suites ? suites : '');
  comodos.push(quartos)

  // SACADAs
  let sacadas = Number(document.getElementById('sacadas').value);
  if (sacadas) {
    if(sacadas > 1) {
      sacadas = sacadas + ' sacadas'
    } else {
      sacadas = 'sacada'
    }
    comodos.push(sacadas)
  }


  // COZINHA
  const fieldsetCozinha = document.querySelector('.tipo-cozinha');
  const inputCozinha = fieldsetCozinha.querySelectorAll('.checkbox');
  const tipoCozinha = [];
  inputCozinha.forEach(cozinha => {
    if (cozinha.checked) {
      comodos.push(cozinha.value);
    };
  });

  // SALA
  const fieldsetSala = document.querySelector('.tipo-sala');
  const inputSala = fieldsetSala.querySelectorAll('.checkbox');
  const tipoSala = [];
  inputSala.forEach(sala => {
    if (sala.checked) {
      comodos.push(sala.value);
    };
  });

  // OUTROS COMODOS
  const fieldsetOutrosComodos = document.querySelector('.outros-comodos');
  const inputOutrosComodos = fieldsetOutrosComodos.querySelectorAll('.checkbox');
  inputOutrosComodos.forEach(comodo => {
    if (comodo.checked) {
      comodos.push(comodo.value);
    };
  });

  // GARAGEM
  const vagas = Number(document.getElementById('vagas-garagem').value);
  const fieldsetGaragem = document.querySelector('.tipo-garagem');
  const inputGaragem = fieldsetGaragem.querySelectorAll('.checkbox');
  let tipoGaragem = '';
  if(vagas > 0) {
    inputGaragem.forEach(tipo => {
      if (tipo.checked === true) {
        tipoGaragem = tipo.value;
      };
    })
    tipoGaragem = tipoGaragem ? `(sendo ${tipoGaragem})` : '';
    const garagem = vagas + ' vaga' + (vagas > 1 ? 's' : '') + ' de garagem' + (tipoGaragem ? tipoGaragem : '');
    comodos.push(garagem)
  }

  let descricao = imóvel + ' com ' + (repete(comodos));

  // PISO
  const fieldsetTipoPiso = document.querySelector('.tipo-piso');
  const inputTipoPiso = fieldsetTipoPiso.querySelectorAll('.checkbox');
  let tipoPiso = [];
  inputTipoPiso.forEach(piso => {
    if (piso.checked) {
      tipoPiso.push(piso.value);
    };
  });
  if(tipoPiso[0]) {
    descricao += ', piso em ' + repete(tipoPiso);
  }

  // DIFERENCIAIS
  const fieldsetDiferenciais = document.querySelector('.diferenciais');
  const inputDiferenciais = fieldsetDiferenciais.querySelectorAll('.checkbox');
  let diferenciais = [];
  inputDiferenciais.forEach(diferecial => {
    if (diferecial.checked) {
      diferenciais.push(diferecial.value);
    };
  });
  if(diferenciais[0]) {
    descricao += ', dispõem de ' + repete(diferenciais);
  }

  // EMPREENDIMENTOS
  const fieldsetDetalhesCondominio = document.querySelector('.detalhes-condominio');
  const inputDetalhesCondominio = fieldsetDetalhesCondominio.querySelectorAll('.checkbox');
  let detalhesCondominio = [];
  inputDetalhesCondominio.forEach(detalhe => {
    if (detalhe.checked) {
      detalhesCondominio.push(detalhe.value);
    };
  });
  if(detalhesCondominio[0]) {
    descricao += '. Empreendimento com ' + repete(detalhesCondominio);
  }
  
  document.querySelector('#bio').innerText = miniDescricao + '\n\n' + descricao + '.\n\nAgende uma visita conosco e conheça esse imóvel!';

};