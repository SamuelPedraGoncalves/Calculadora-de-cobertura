function formatarValor(valor) {
  var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return valorFormatado;
}

function calcular() {
  var metroQuadrado = parseFloat(document.querySelector('.metquad').value);
  var regiao = document.querySelector('#select-regiao').value;
  var acabamento = document.querySelector('#select-acabamento').value;

  var fatorRegiao;
  switch (regiao) {
    case 'RJ':
      fatorRegiao = 1.0140;
      break;
    case 'SP':
      fatorRegiao = 1.0185;
      break;
    default:
      fatorRegiao = 1.0010;
      break;
  }

  var valorAcabamento;
  switch (acabamento) {
    case 'luxo':
      valorAcabamento = 10000;
      break;
    case 'medio':
      valorAcabamento = 5000;
      break;
    default:
      valorAcabamento = 2000;
      break;
  }

  var resultado = metroQuadrado * fatorRegiao * valorAcabamento;
  document.querySelector('#resultado').value = formatarValor(resultado);
}

