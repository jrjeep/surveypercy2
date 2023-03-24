(function() {
    const config = {
    apiKey: "AIzaSyDrQGvVqEEoM8sAtIC6DmKcu9N4dtic28g",
    authDomain: "surveypercy-3914b.firebaseapp.com",
    databaseURL: "https://surveypercy-3914b.firebaseio.com",
    projectId: "surveypercy-3914b",
    storageBucket: "surveypercy-3914b.appspot.com",

    };
    firebase.initializeApp(config);
    
  
     // Load Charts and the corechart package.
        google.charts.load('current', {'packages':['corechart']});
    
    var table = document.querySelector('#table1 tbody');
    const dbEvaluationStudentsRef = firebase.database().ref('Formularios/Juara_Marco_2023').orderByChild('numPergunta');//.endAt('05');
    
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
		['PQ ALVORADA I, II / VILA OPERÁRIA / JD. SANTA MARIA / JD PAULISTA', 0 ],
		['JD CRUZEIRO DO SUL', 0 ],
		['CENTRO NORTE', 0 ],
		['CENTRO SUL', 0 ],
		['JD PRIMAVERA I, II / JD CONTINENTAL', 0 ],
		['JD CALIFORNIA I, II / FLAMBOYANT / JOÃO DE BARRO / JD FLORESTA / TOCAIA GRANDE / ELDORADO', 0 ],
		['JD AMÉRICA / SÃO GABRIEL / BANDEIRANTES', 0 ],
		['RESIDENCIAL PORTO SEGURO I, II / PORTAL DAS FLORES / VILA BOTELHO', 0 ],
		['SÃO JOÃO / ITALIA / STA ANTONIETA / VILA AURORA / LOT GOUVEIA', 0 ],
		['ITAPUÃ / BOA VISTA / PANORAMA / UBIRAJARA / COLINAS / SANTA ROSA', 0 ],
		['SANTA CRUZ / VITÓRIA / BELA VISTA / AZOIA / SANTA CLARA', 0 ],
		['JD PARANAGUÁ / KENNEDY / STA HELENA / COOHAB', 0 ],
		['PARANORTE', 0 ]
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
            
            var outputArray09 = [
                ['Grade', 'Renda'],
                ['MENOS DE R$ 1.302,00', 0],
                ['R$ 1.303,00 A R$ 3.906,00 (1 A 3 S.M.)', 0],
                ['R$ 3.907,00 A R$ 6.510,00 (3 A 5 S.M.)', 0],
                ['R$ 6.511,00 A R$ 13.020,00 (5 A 10 S.M.)', 0],
                ['R$ 13.021,00 ACIMA (MAIS DE 10 S.M.)', 0]
            ];
            
            var outputArray07 = [
                ['Grade', 'Profissão'],
                ['APOSENTADO(A) OU PENSIONISTA', 0],
                ['AUTÔNOMO(A) (POR CONTA PRÓPRIA)', 0],
                ['DO LAR (DONO(A) DE CASA)', 0],
                ['DESEMPREGADO(A)', 0],
                ['EMPREGADO(A) COM CARTEIRA ASSINADA', 0],
                ['EMPREGADO(A) SEM CARTEIRA ASSINADA', 0],
                ['EMPRESÁRIO(A) (EMPREENDEDOR(A))', 0],
                ['ESTUDANTE', 0],
                ['FUNCIONÁRIO(A) PÚBLICO(A)', 0],
                ['PRODUTOR(A) RURAL (AGRICULTOR(A), PECUARISTA)', 0],
                ['Outro', 0]                
            ];
            
            //instrução
            var outputArray06 = [
                ['Grade', 'Instrução'],
                ['ANALFABETO OU LÊ E ESCREVE', 0],
                ['1º AO 4º ANO (FUND. I)', 0],
                ['5º AO 9º ANO (FUND. II)', 0],
                ['MÉDIO (1º AO 3º ANO DO SEGUNDO GRAU)', 0],
                ['SUPERIOR (1º SEM. ACIMA)', 0]
            ];
            
            //Religião
            var outputArray08 = [
                ['Grade', 'Religião'],
                ['ATEU', 0],
                ['CATÓLICO', 0],
                ['CRÊ EM DEUS, SEM RELIGIÃO', 0],
                ['EVANGÉLICO', 0],
                ['ESPÍRITA', 0],
                ['UMBANDISTA', 0],
                ['NS/NR', 0]
            ]; 
                       
            //Mídia
            var outputArray10 = [
                ['Grade', 'Mídia'],
                ['Rádio', 0],
                ['TV', 0],
                ['Facebook', 0],
                ['Instagram', 0],
                ['Whatsapp', 0],
                ['TikTok', 0],
                ['Site de Notícias', 0],
                ['Revista', 0],
                ['Parentes ou amigos', 0],
                ['Outro', 0]
            ];
            
            
  //pesquisador 
  var R00 = [0,0,0,0,0,0,0];           
  //pesquisador ultima resposta            
  var R99 = [0,0,0,0,0,0,0];

  //idade
  var R05 = [0,0,0,0,0,0,0];

  //bairro
  var R03 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  //sexo
  var R04 = [0,0,0,0,0];

  //renda
  var R09 = [0,0,0,0,0,0];

  //Profissão
  var R07 = [0,0,0,0,0,0,0,0,0,0,0];

  //Instrução
  var R06 = [0,0,0,0,0];

  //Religião
  var R08 = [0,0,0,0,0,0,0];

  //Mídia
  var R10 = [0,0,0,0,0,0,0,0,0,0,0];

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
                  if (students[i][j] == 'R3399'){ 
                  	for(let i=1; i < R00.length; i++) {
                  	  R00[i] = R00[i] + R99[i];
                  	}
                  	
                  	  //sexo
			  for (let i = 1; i < R04.length; i++)  {
			  	outputArray03[i][1]=outputArray03[i][1]+R04[i];
			  }  

			  //idade
			  for (let i = 1; i < R05.length-1; i++)  {
			  	outputArray04[i][1]=outputArray04[i][1]+R05[i];
			  }   
			  
			  //Bairro
			  for (let i = 1; i < R03.length; i++)  {
			  	outputArray01[i][1]=outputArray01[i][1]+R03[i];
			  }

			  //Renda
			  for (let i = 1; i < R09.length; i++)  {
			  	outputArray09[i][1]=outputArray09[i][1]+R09[i];
			  }

			  //Profissão
			  for (let i = 1; i < R07.length; i++)  {
			  	outputArray07[i][1]=outputArray07[i][1]+R07[i];
			  }

			  //Instrução
			  for (let i = 1; i < R06.length; i++)  {
			  	outputArray06[i][1]=outputArray06[i][1]+R06[i];
			  }
                  	
			  //Religião
			  for (let i = 1; i < R08.length; i++)  {
			  	outputArray08[i][1]=outputArray08[i][1]+R08[i];
			  }

			  //Mídia
			  for (let i = 1; i < R10.length; i++)  {
			  	outputArray10[i][1]=outputArray10[i][1]+R10[i];
			  }
                  	
                  	//idade
		        R05 = [0,0,0,0,0,0,0];

		        //bairro
		        R03 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

		        //sexo
		        R04 = [0,0,0,0,0];

		        //Renda
		        R09 = [0,0,0,0,0,0];
			  
			//Profissão
			R07 = [0,0,0,0,0,0,0,0,0,0,0];

		        //Instrução
		        R06 = [0,0,0,0,0];

		        //Religião
		        R08 = [0,0,0,0,0,0,0];

			//Mídia
			R10 = [0,0,0,0,0,0,0,0,0,0,0];	
			        
                      R99 = [0,0,0,0,0,0,0];
                  }  
                  
                  if (students[i][j].slice(0,5).toLowerCase() == 'teste'){ 
                      R99 = [0,0,0,0,0,0,0];
		      teste = 1; // teste verdadeiro 
                  } 
                  
               if (teste == 0) {   
               //if (true) {

		  //bairro               
                  if (students[i][j].slice(0,3) == 'R03'){ 
                  	R03 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice03 = parseInt(students[i][j].slice(3,5))
                      R03[indice03] = R03[indice03]+1;
                  }

		  //sexo                    
                  if (students[i][j].slice(0,3) == 'R04'){ 
                  	R04 = [0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      //if indice = 99 {indice = 4}
                      R04[indice] = R04[indice]+1;
                  }
                  
                  //idade               
                  if (students[i][j].slice(0,3) == 'R05'){ 
                   	R05 = [0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      R05[indice] = R05[indice]+1;
                  }

                  //Renda               
                  if (students[i][j].slice(0,3) == 'R09'){ 
                   	R09 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      R09[indice] = R09[indice]+1;
                  }

                  //Profissão               
                  if (students[i][j].slice(0,3) == 'R07'){ 
                   	R07 = [0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 11};
                      R07[indice] = R07[indice]+1;
                  }

                  //Instrução               
                  if (students[i][j].slice(0,3) == 'R06'){ 
                   	R06 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 11};
                      R06[indice] = R06[indice]+1;
                  }

                  //Religião               
                  if (students[i][j].slice(0,3) == 'R08'){ 
                   	R08 = [0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 7};
                      R08[indice] = R08[indice]+1;
                  }

                  //Mídia               
                  if (students[i][j].slice(0,3) == 'R10'){ 
                   	R10 = [0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 10};
                      R10[indice] = R10[indice]+1;
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
            drawChart06(outputArray06);
            drawChart07(outputArray07);
            drawChart08(outputArray08);
            drawChart09(outputArray09);
            drawChart10(outputArray10);
  
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
  
    var drawChart09 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
  
          var options = {
            title: 'Renda',
            hAxis: {title: 'Renda',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv09'));
          chart.draw(data, options);
  
  }   
  
    var drawChart07 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
  
          var options = {
            title: 'Profissão',
            hAxis: {title: 'Profissão',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv07'));
          chart.draw(data, options);
  
  }   
  
    var drawChart06 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData); 
  
          var options = {
            title: 'Instrução',
            hAxis: {title: 'Instrução',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv06'));
          chart.draw(data, options);
  
  }     
  
    var drawChart08 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: 'Religião',
            hAxis: {title: 'Religião',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv08'));
          chart.draw(data, options);
  
  } 
        
    var drawChart10 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: 'Mídia',
            hAxis: {title: 'Mídia',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv10'));
          chart.draw(data, options);
  
  }         
