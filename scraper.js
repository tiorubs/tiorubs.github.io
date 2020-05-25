function toData(fii) {
  const info = [...fii.querySelectorAll("td")];
  const data = {};

  data.codigo = info[0].innerText;
  data.setor = info[1].innerText;
  data.preco = getValue(info[2]);
  data.liquidezDiaria = parseFloat(info[3]);
  data.dividendo = getValue(info[4]);
  data.yield = getValue(info[5]);
  data.yield3m = getValue(info[6]);
  data.yield6m = getValue(info[7]);
  data.yield12m = getValue(info[8]);
  data.yield3mAvg = getValue(info[9]);
  data.yield6mAvg = getValue(info[10]);
  data.yield12mAvg = getValue(info[11]);
  data.yieldAno = getValue(info[12]);
  data.variacaoPreco = getValue(info[13]);
  data.rentabilidadePeriodo = getValue(info[14]);
  data.rentabilidadeAcumulada = getValue(info[15]);
  data.patrimonioLiquido = getValue(info[16]);
  data.vpa = getValue(info[17]);
  data.pVpa = getValue(info[18]);
  data.yieldPatrimonial = getValue(info[19]);
  data.variacaoPatrimonial = getValue(info[20]);
  data.rentabilidadePatrimonialPeriodo = getValue(info[21]);
  data.rentabilidadePatrimonialAcumulada = getValue(info[22]);
  data.vacanciaFisica = getValue(info[23]);
  data.vacanciaFinanceira = getValue(info[24]);
  data.nAtivos = getValue(info[25]);

  return data;
}

function getValue(element) {
  return parseFloat(
    element.innerText.replace(/[^\d,-]/g, "").replace(",", ".")
  );
}

const fiis = [...document.querySelector("tbody").querySelectorAll("tr")].map(
  toData
);
