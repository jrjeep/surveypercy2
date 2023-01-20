(function() {
    const config = {
    apiKey: "AIzaSyDrQGvVqEEoM8sAtIC6DmKcu9N4dtic28g",
    authDomain: "surveypercy-3914b.firebaseapp.com",
    databaseURL: "https://surveypercy-3914b.firebaseio.com",
    projectId: "surveypercy-3914b",
    storageBucket: "surveypercy-3914b.appspot.com",
    messagingSenderId: "748138801996"
    };
    firebase.initializeApp(config);
  
    // Load Charts and the corechart package.
        google.charts.load('current', {'packages':['corechart']});
    
    var table = document.querySelector('#table1 tbody');
    const dbEvaluationStudentsRef = firebase.database().ref('Formularios/Guarapari_2022').orderByChild('numPergunta');//.endAt('05');
    
    dbEvaluationStudentsRef.on('value', snap => {
      while(table.hasChildNodes()) {
              table.removeChild(table.firstChild);
              
        }
      var students = snap.val();
            var outputArray00 = [
                ['Pesquisador', 'Formulários'],
                ['pesquisador01', 0],
                ['pesquisador02', 0],
                ['pesquisador03', 0],
                ['pesquisador04', 0],
                ['pesquisador05', 0],
                ['Victor', 0]
            ];
            var outputArray01 = [
                ['Grade', 'Bairros'],
		['CAMPING CLUBE', 0 ],
		['LOTEAMENTO FLORAIS DA AMAZÔNIA / JARDIM SAFIRA / VILA RICA / JARDIM DO OURO / JARDIM DOS JESUÍTAS / ECO PARK RESIDENCE II / RESIDENCIAL GENTE FELIZ I, II / VILA VERDE', 0 ],
		['LIC NORTE / JARDIM IPORÃ / RESIDENCIAL BRASÍLIA / INDUSTRIAL NORTE (LESTE BR-163) / DISTRITO COMERCIAL E INDÚSTRIAL', 0 ],
		['CIDADE JARDIM I E II', 0 ],
		['JARDIM DUBAI / SÃO LOURENÇO / TERRA RICA I, II / INDUSTRIAL SUL (LESTE BR-163) / JARDIM COPACABANA', 0 ],
		['RECANTO DOS BURITIS / SÃO FRANCISCO / RESIDENCIAL RESERVA CELESTE I, II, III / RESIDENCIAL MORIÁ / BOM JARDIM / COMUNIDADE VITÓRIA', 0 ],
		['SÃO CRISTÓVÃO / MENINO JESUS I, II / IPORÃ / PÉROLA / LISBOA / LISBOA 2 / UMUARAMA I / VILLA ITÁLIA', 0 ],
		['BELA MORADA / JARDIM ATENAS / JARDIM UMUARAMA I / PARQUE TANGARÁ / RESIDENCIAL SANTA CATARINA', 0 ],
		['SEBASTIÃO DE MATOS I, II / UMUARAMA II e III/ VILA MARIANA / VILA LOBOS / VILA SANTANA / VILA JULIANA / VILA AMÉRICA / BOA VISTA / SABRINA I / SABRINA II / NOVO JARDIM / JARDIM AURORA / ROMA', 0 ],
		['ALTO DA GLÓRIA / CIDADE ALTA / JARDIM AMÉRICA / JARDIM VIENA / JARDIM ORIENTE / LIC SUL', 0 ],
		['JARDIM SANTA MÔNICA / JARDIM IPIRANGA / RESIDENCIAL MARIPÁ / ADRIANO LEITÃO / JARDIM PAULISTA I, II / JARDIM IBIRAPUERA / PEQUENA LONDRES / JARAGUÁ', 0 ],
		['RESIDENCIAL BOUGANVILLE / JARDIM MILÃO I, II / MORUMBI / MONTE CARLO / RESIDENCIAL PIENZA / RESIDENCIAL MONTREAL / TULIPAS', 0 ],
		['JARDIM ITAÚBAS / JARDIM CURITIBA I, II', 0 ],
		['JARDIM JACARANDÁS / INDUSTRIAL SUL', 0 ],
		['HABITAR BRASIL / JARDIM CELESTE', 0 ],
		['JARDIM BOTÂNICO / JARDIM PARAÍSO', 0 ],
		['JARDIM BELO HORIZONTE / RESIDENCIAL BELA SUÍÇA / QUINTA DA PAMPULHA', 0 ],
		['JARDIM DAS NAÇÕES / NOSSA SENHORA APARECIDA', 0 ],
		['JARDIM MARINGÁ I, II / SETOR RESIDENCIAL SUL / SETOR COMERCIAL PARTE SUL', 0 ],
		['RESIDENCIAL NORTE / SETOR COMERCIAL PARTE NORTE (AO NORTE DA JULIO CAMPOS) / INDUSTRIAL (OESTE BR-163)', 0 ],
		['JARDIM DAS PALMEIRAS / JARDIM IMPERIAL', 0 ],
		['JARDIM JEQUITIBÁS / JARDIM OLIVEIRAS / JARDIM VIOLETAS', 0 ],
		['JARDIM AZALÉIAS / JARDIM MARIA CAROLINA / JARDIM DOS CRAVOS', 0 ],
		['JARDIM EUROPA / RESIDENCIAL DELTA / RESIDENCIAL VITÓRIA RÉGIA / JARDIM CONQUISTA', 0 ],
		['JARDIM BOA ESPERANÇA / JARDIM SANTA RITA / JARDIM NOVO ESTADO / JARDIM DOS IPÊS', 0 ],
		['CARANDÁ BOSQUE / NOVO HORIZONTE / SÃO PAULO I, II', 0 ],
		['MARIA VINDILINA I, II, III / RECANTO DOS PÁSSAROS / JARDIM TARUMÃS / JARDIM DAS ACÁCIAS / RESIDENCIAL ARAGUAIA', 0 ],
		['DAURY RIVA / JARDIM VENEZA / JARDIM CALIFÓRNIA', 0 ],
		['JARDIM CARIBE / JARDIM DAS ROSAS / KAIABI RESIDENCIAL', 0 ],
		['JARDIM ITÁLIA I, II, III / BARCELONA I, II / RESIDENCIAL FLORENÇA I, II, III, IV, V / RESIDENCIAL DEVILLE / SANTA CECÍLIA', 0 ],
		['DE MONET / RECANTO SUIÇO / AQUARELA BRASIL RESIDENCIAL / IPANEMA', 0 ],
		['RIVIERA SUÍÇA / PORTINARI I, II', 0 ],
		['RESIDENCIAL MONDRIAN / PORTAL DA MATA / CARPE DIEM RESIDENCIAL / ALAMEDA DAS CORES', 0 ],
		['RESIDENCIAL PARIS / AQUARELA DAS ARTES', 0 ],
		['JARDIM PRIMAVERAS / PARQUE DAS ARARAS I, II / JARDIM DAS ORQUÍDEAS / RESIDENCIAL CANADÁ / INDUSTRIAL NORTE', 0 ],
		['BELVEDERE I, II e III / VILLA TOSCANA / CANARINHO', 0 ],
		['KAIABI RESIDENCIAL / RECANTO DA MATA', 0 ],
		['RESIDENCIAL GENTE FELIZ I, II / VILA VERDE', 0 ],
		['RESIDENCIAL MONTE CARLO / JARDIM PIENZA', 0 ],

            ];
  
            var outputArray03 = [
                ['Grade', 'Sexo'],
                ['Femimino', 0],
                ['Masculino', 0],
                ['Nao respondeu', 0],
                ['Outros', 0]
            ];

            var outputArray04 = [
                ['Grade', 'Idade'],
                ['16 a 24', 0],
                ['25 a 34', 0],
                ['35 a 44', 0],
                ['45 a 59', 0],
                ['60 acima', 0]
            ];
  //pesquisador 
  var R00 = [0,0,0,0,0,0,0]           
  //pesquisador ultima resposta            
  var R99 = [0,0,0,0,0,0,0];

  //idade
  var R06 = [0,0,0,0,0,0,0];

  //bairro
  var R09 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  //sexo
  var R05 = [0,0,0,0,0];

     var x = 0, teste=0;
     var pesquisador = "";
     for(var i in students) {
        var row = table.insertRow(-1);
      //x = 0;
      //total =total+1;
        for(var j in students[i]) {
                  cell = row.insertCell(-1);
                  cell.innerHTML = students[i][j];
                  //cell.innerHTML = j;

		  //pesquisador .. tem que unir com a ultima pergunta pra contar somente formularios completos
                  if ((students[i][j] == '00')){ 
                      x = 1  ;
                      teste = 0; // teste falso
                    } 
  
                  if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador01')){ 
                      x = 0;
                        var R99 = [0,1,0,0,0,0,0];
                        outputArray00[1][1]= students[i][j].slice(0, 3); 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador02')){ 
                      x = 0;
                        var R99 = [0,0,1,0,0,0,0];
                        outputArray00[2][1]= students[i][j].slice(0, 3); 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador03')){ 
                      x = 0;
                        var R99 = [0,0,0,1,0,0,0];
                        outputArray00[3][1]= students[i][j].slice(0, 3); 
                  //} else if ((x==1) && ( students[i][j].slice(students[i][j].length-2, students[i][j].length) == 'jr')){ 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador04')){ 
                      x = 0;
                        var R99 = [0,0,0,0,1,0,0];
                        outputArray00[4][1]= students[i][j].slice(0, 3); 
		  //ultima pergunta            
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador05')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,1,0];
                        outputArray00[5][1]= students[i][j].slice(0, 3); 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-6, students[i][j].length) == 'victor')){ 
                  //} else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador06')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,1];
                        outputArray00[6][1]= students[i][j].slice(0, 3); 
                  }                  
                  if (students[i][j] == 'R3599'){ 
                  	for(let i=1; i < R00.length; i++) {
                  	  R00[i] = R00[i] + R99[i];
                  	}
                  	
                  	  //sexo
			  for (let i = 1; i < R05.length; i++)  {
			  	outputArray03[i][1]=outputArray03[i][1]+R05[i];
			  }  

			  //idade
			  for (let i = 1; i < R06.length-1; i++)  {
			  	outputArray04[i][1]=outputArray04[i][1]+R06[i];
			  }   
			  
			  //Bairro
			  for (let i = 1; i < R09.length-4; i++)  {
			  	outputArray01[i][1]=outputArray01[i][1]+R09[i];
			  }
                  	
                  	//idade
		        R06 = [0,0,0,0,0,0,0];

		        //bairro
		        R09 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

		        //sexo
		        R05 = [0,0,0,0,0];
		        
                      R99 = [0,0,0,0,0,0,0];
                  }  
                  
                  if (students[i][j].slice(0,5).toLowerCase() == 'teste'){ 
                      R99 = [0,0,0,0,0,0,0];
		      teste = 1; // teste verdadeiro 
                  } 
                  
               if (teste == 0) {   
               //if (true) {

		  //bairro               
                  if (students[i][j].slice(0,3) == 'R10'){ 
                  	R09 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice03 = parseInt(students[i][j].slice(3,5))
                      R09[indice03] = R09[indice03]+1;
                  }

		  //sexo                    
                  if (students[i][j].slice(0,3) == 'R05'){ 
                  	R05 = [0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      //if indice = 99 {indice = 4}
                      R05[indice] = R05[indice]+1;
                  }
                  
                  //idade               
                  if (students[i][j].slice(0,3) == 'R06'){ 
                   	R06 = [0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      R06[indice] = R06[indice]+1;
                  }

                  
               }   
  
          }
          }
          
          function tableCreate() {
  const body = document.body,
        tbl = document.createElement('table');
  tbl.style.width = '200px';
  tbl.style.border = '2px solid black';

  for (let i = 0; i < 7; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < 2; j++) {
      //if (i === 2 && j === 1) {
      //  break;
      //} else {
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(outputArray00[i][j]));
        td.style.border = '1px  black';
        //if (i === 1 && j === 1) {
        //  td.setAttribute('rowSpan', '2');
        //}
      //}
    }
  }
  body.appendChild(tbl);
}

tableCreate();
  //pesquisador
  //outputArray00=R00;
  for (let i = 1; i < R00.length; i++)  {
  	outputArray00[i][1]=R00[i];
  }
  /* está fazendo acima, para filtrar formularios totalmente preenchidos
  //sexo
  for (let i = 1; i < R03.length; i++)  {
  	outputArray03[i][1]=R03[i];
  }  

  //idade
  for (let i = 1; i < R04.length; i++)  {
  	outputArray04[i][1]=R04[i];
  }   
  
  //Bairro
  for (let i = 1; i < R02.length; i++)  {
  	outputArray01[i][1]=R02[i];
  }
  */

     //var total = 0;
     //for(var i in students) {
        //var row = table.insertRow(-1);
  
  
      //	}
  
            drawChart01(outputArray03);
            drawChart02(outputArray00);
            drawChart03(outputArray01);
            drawChart04(outputArray04);
  
    });
  
  }());
  
  var drawChart01 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
  
          var options = {
            title: 'Sexo',
            hAxis: {title: 'Sexo',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv01'));
          chart.draw(data, options);
  
  }
  
  var drawChart02 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
  
          var options = {
            title: 'Pesquisadores',
            hAxis: {title: 'Pesquisadores',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv02'));
          chart.draw(data, options);
  
  }
  
 var drawChart03 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
  
          var options = {
            title: 'Bairro',
            hAxis: {title: 'Bairro',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0},
            colors: ['#008000', '#c6693e', '#cc8f6e', '#f3b49f', '#f6c7b6']
          };
  
          var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv03'));
          chart.draw(data, options);
  
  }
  
    var drawChart04 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
  
          var options = {
            title: 'idade',
            hAxis: {title: 'idade',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv04'));
          chart.draw(data, options);
  
  }
