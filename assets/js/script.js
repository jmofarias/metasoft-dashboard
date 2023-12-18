// Data e Hora

function atualizarDataHora() {
  var dataHoraAtual = new Date();

  var dataHoraFormatada = dataHoraAtual.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' });

  document.getElementById('data-hora').innerText = dataHoraFormatada;
}

atualizarDataHora();

setInterval(atualizarDataHora, 1000);

// Gráficos

var dataInadimplencia = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  datasets: [{
    label: 'Evolução',
    fill: true,
    tension: 0.4,
    borderCapStyle: 'round',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 1)',
    pointBackgroundColor: 'rgba(255, 255, 255, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: 'rgba(255, 115, 160, 1)',
    pointHoverBorderColor: 'rgba(255, 115, 160, 1)',
    pointRadius: 1.5,
    borderWidth: 2.5,
    borderJoinStyle: 'round',
    data: [10, 15, 13, 18, 20, 17, 32, 23, 37, 43, 56, 42],
  }]
};

var dataReceita = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  datasets: [{
    label: 'Evolução',
    fill: true,
    tension: 0.4,
    borderCapStyle: 'round',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 1)',
    pointBackgroundColor: 'rgba(255, 255, 255, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: 'rgba(255, 115, 160, 1)',
    pointHoverBorderColor: 'rgba(255, 115, 160, 1)',
    pointRadius: 1.5,
    borderWidth: 2.5,
    borderJoinStyle: 'round',
    data: [10, 20, 30, 25, 35, 45, 40, 48, 55, 78, 70, 82],
  }]
};

var options = {
  // responsive: true,
  animation: {
    duration: 2000, 
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(243, 49, 111, 1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 1)',
        font: {
          size: 10,
          family: 'Poppins, sans-serif',
        },
      },
    },
    y: {
      beginAtZero: true,
      max: 100,
      grid: {
        color: 'rgba(243, 49, 111, 1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 1)',
        font: {
          size: 10,
          family: 'Poppins, sans-serif',
        },
      },
    },
  }
};

var configInadimplecia = {
  type: 'line',
  data: dataInadimplencia,
  options: options,
  plugins: {
    tooltip: {
      yAlign: 'bottom',
      displayColors: 'false'
    }
  }
};

var configReceita = {
  type: 'line',
  data: dataReceita,
  options: options
};


var ctxInadimplencia = document.getElementById('inadimplenciaChart').getContext('2d');

var myChartInadimplencia = new Chart(ctxInadimplencia, configInadimplecia);


var ctxReceita = document.getElementById('receitaChart').getContext('2d');

var myChartReceita = new Chart(ctxReceita, configReceita);

// Tabela

const dataTable = [
  { nomeDoPagador: 'João Marcos', numeroDaConta: '001', dataEmissao: '01/01/2023', dataCobranca: '01/06/2023', dataPagamento: '18/09/2023', notaFiscal: '1', boleto: '1', status: 'Emitida' },
  { nomeDoPagador: 'Thalyta Silva', numeroDaConta: '002', dataEmissao: '01/03/2023', dataCobranca: '15/05/2023', dataPagamento: '18/07/2023', notaFiscal: '1', boleto: '1', status: 'Cobrança realizada' },
  { nomeDoPagador: 'Jacilda Oliveira', numeroDaConta: '003', dataEmissao: '11/02/2023', dataCobranca: '15/04/2023', dataPagamento: '18/08/2023', notaFiscal: '1', boleto: '1', status: 'Pagamento em atraso' },
  { nomeDoPagador: 'Manoel João', numeroDaConta: '004', dataEmissao: '11/10/2023', dataCobranca: '15/11/2023', dataPagamento: '18/12/2023', notaFiscal: '1', boleto: '1', status: 'Pagamento realizado' },
  { nomeDoPagador: 'Tiago Araújo', numeroDaConta: '005', dataEmissao: '11/06/2023', dataCobranca: '15/09/2023', dataPagamento: '18/12/2023', notaFiscal: '1', boleto: '1', status: 'Pagamento realizado' },
  { nomeDoPagador: 'Tadeu Henrique', numeroDaConta: '006', dataEmissao: '11/11/2023', dataCobranca: '15/12/2023', dataPagamento: '18/12/2023', notaFiscal: '1', boleto: '1', status: 'Emitida' },
  { nomeDoPagador: 'Melanie Pétala', numeroDaConta: '007', dataEmissao: '29/09/2023', dataCobranca: '20/11/2023', dataPagamento: '29/11/2023', notaFiscal: '1', boleto: '1', status: 'Emitida' },
  { nomeDoPagador: 'Alirio Júnior', numeroDaConta: '008', dataEmissao: '21/07/2023', dataCobranca: '11/09/2023', dataPagamento: '28/09/2023', notaFiscal: '1', boleto: '1', status: 'Emitida' },

];

function populateTable() {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  dataTable.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.nomeDoPagador}</td>
      <td>${item.numeroDaConta}</td>
      <td>${item.dataEmissao}</td>
      <td>${item.dataCobranca}</td>
      <td>${item.dataPagamento}</td>
      <td>
        ${item.notaFiscal ? getIconForNotaFiscal() : ''}
      </td>
      <td>
        ${item.boleto ? getIconForBoleto() : ''}
      </td>
      <td class="${getStatusClass(item.status)}">
        ${item.status}
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function getIconForNotaFiscal() {
  return '<i class="bi bi-receipt-cutoff"></i>';
}

function getIconForBoleto() {
  return '<i class="bi bi-filetype-pdf"></i>';
}

function getStatusClass(status) {
  switch (status.toLowerCase()) {
    case 'emitida':
      return 'statusIssued';
    case 'cobrança realizada':
      return 'statusCharge';
    case 'pagamento em atraso':
      return 'statusDelay';
    case 'pagamento realizado':
      return 'statusAccomplished';
    default:
      return '';
  }
}

populateTable(dataTable);

// Filtro

function filtrarPorMes(mes) {
  var tabela = document.getElementById("dataTable");
  var linhas = tabela.getElementsByTagName("tr");

  for (var i = 1; i < linhas.length; i++) {
      var celulaDataEmissao = linhas[i].getElementsByTagName("td")[2];

      if (celulaDataEmissao) {
          var dataEmissao = celulaDataEmissao.textContent.trim();
          var mesDaDataEmissao = dataEmissao.split('/')[1];

          if (mes === "0" || mesDaDataEmissao === mes) {
              linhas[i].style.display = "table-row";
          } else {
              linhas[i].style.display = "none";
          }
      }
  }
}

function filtrarPorMesCobranca(mes) {
  var tabela = document.getElementById("dataTable");
  var linhas = tabela.getElementsByTagName("tr");

  for (var i = 1; i < linhas.length; i++) {
      var celulaDataEmissao = linhas[i].getElementsByTagName("td")[3];

      if (celulaDataEmissao) {
          var dataEmissao = celulaDataEmissao.textContent.trim();
          var mesDaDataEmissao = dataEmissao.split('/')[1];

          if (mes === "0" || mesDaDataEmissao === mes) {
              linhas[i].style.display = "table-row";
          } else {
              linhas[i].style.display = "none";
          }
      }
  }
}

function filtrarPorMesPagamento(mes) {
  var tabela = document.getElementById("dataTable");
  var linhas = tabela.getElementsByTagName("tr");

  for (var i = 1; i < linhas.length; i++) {
      var celulaDataEmissao = linhas[i].getElementsByTagName("td")[4];

      if (celulaDataEmissao) {
          var dataEmissao = celulaDataEmissao.textContent.trim();
          var mesDaDataEmissao = dataEmissao.split('/')[1];

          if (mes === "0" || mesDaDataEmissao === mes) {
              linhas[i].style.display = "table-row";
          } else {
              linhas[i].style.display = "none";
          }
      }
  }
}

function filtrarPorMesEStatus() {
  var tabela = document.getElementById("dataTable");
  var linhas = tabela.getElementsByTagName("tr");
  var mesSelecionado = document.getElementById("selecaoMes").value;
  var statusSelecionado = document.getElementById("selecaoStatus").value;

  for (var i = 1; i < linhas.length; i++) {
      var celulaDataEmissao = linhas[i].getElementsByTagName("td")[2];
      var celulaStatus = linhas[i].getElementsByTagName("td")[7];

      if (celulaDataEmissao && celulaStatus) {
          var dataEmissao = celulaDataEmissao.textContent.trim();
          var mesDaDataEmissao = dataEmissao.split('/')[1];
          var status = celulaStatus.textContent.trim();

          var atendeFiltroMes = mesSelecionado === "0" || mesDaDataEmissao === mesSelecionado;
          var atendeFiltroStatus = statusSelecionado === "Todos" || status === statusSelecionado;

          if (atendeFiltroMes && atendeFiltroStatus) {
              linhas[i].style.display = "table-row";
          } else {
              linhas[i].style.display = "none";
          }
      }
  }
}