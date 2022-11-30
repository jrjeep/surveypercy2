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
    const dbEvaluationStudentsRef = firebase.database().ref('Formularios/Sinop_Mercado_2022_2').orderByChild('numPergunta');//.endAt('05');
    
    dbEvaluationStudentsRef.on('value', snap => {
      while(table.hasChildNodes()) {
              table.removeChild(table.firstChild);
              
        }
      var students = snap.val();
            var outputArray00 = [
                ['Grade', 'Formulários'],
                ['pesquisador01', 0],
                ['pesquisador02', 0],
                ['pesquisador03', 0],
                ['pesquisador04', 0],
                ['pesquisador05', 0],
                ['pesquisador06', 0]
            ];
            var outputArray01 = [
                ['Grade', 'Bairros'],
		['CONDOMÍNIOS - MONDRIAN / PORTAL DA MATA / CARPE DIEM', 0 ],
		['AQUARELA BRASIL / NOSSA SENHORA APARECIDA / JARDIM ITALIA / RESIDENCIAL FLORENÇA / AQUARELA DAS ARTES', 0 ],
		['DAURY RIVA / JARDIM VENEZA / JARDIM CALIFÓRNIA', 0 ],
		['SÃO PAULO I, II / MARIA VINDILINA I, II / RECANTO DOS PÁSSAROS', 0 ],
		['JARDIM BOA ESPERANÇA / JARDIM NOVO ESTADO / JARDIM DOS IPÊS', 0 ],
		["JARDIM EUROPA / RESIDENCIAL DELTA / RESIDENCIAL VITÓRIA RÉGIA", 0 ],
		["JARDIM DAS PALMEIRAS / JARDIM IMPERIAL", 0 ],
		["JARDIM JEQUITIBAS / JARDIM OLIVEIRAS / JARDIM AZALEIAS / JARDIM VIOLETAS", 0 ],
		["LOTEAMENTO FLORAIS DA AMAZÔNIA / RESIDENCIAL GENTE FELIZ I, II / JARDIM SAFIRA", 0 ],
		["JARIDM PRIMAVERAS / PARQUE DAS ARARAS / JARDIM DAS ORQUÍDEAS / RESIDENCIAL CANADA", 0 ],
		["RESIDENCIAL NORTE / SETOR COMERCIAL PARTE NORTE (AO NORTE DA JULIO CAMPOS)", 0 ],
		["JARDIM PARAÍSO II, III / JARDIM BELO HORIZONTE / RESIDENCIAL BELA SUIÇA", 0 ],
		["JARDIM BOTÂNICO / JARDIM PARAÍSO I", 0 ],
		["JARDIM SANTA MÔNICA / JARDIM IPIRANGA / RESIDENCIAL MARIPÁ / ADRIANO LEITÃO / JARDIM PAULISTA I, II / JARDIM IBIRAPUERA / PEQUENA LONDRES", 0 ],
		["JARDIM JACARANDÁS / HABITAR BRASIL / JARDIM CELESTE / JARDIM ITAÚBAS", 0 ],
		["RECANTO DOS BURITIS RESIDENCIAL / RESERVA CELESTE I, II, III / RESIDENCIAL SÃO FRANCISCO / RESIDENCIAL MORIA", 0 ],
		["SÃO CRISTOVÃO / MENINO JESUS I, II / IPORÃ / PÉROLA / LISBOA / UMUARAMA I / VILLA ITALIA", 0 ],
		["JARDIM MARINGÁ I, II / SETOR RESIDENCIAL SUL  / SETOR COMERCIAL PARTE SUL", 0 ],
		["SEBASTIÃO DE MATOS I, II / UMUARAMA II / VILA MARIANA / VILA LOBOS / VILA SANTANA / VILA JULIANA / VILA AMÉRICA / BOA VISTA", 0 ],

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
  var R04 = [0,0,0,0,0,0,0];

  //bairro
  var R02 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  //sexo
  var R03 = [0,0,0,0,0];

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
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador02')){ 
                      x = 0;
                        var R99 = [0,0,1,0,0,0,0];
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador03')){ 
                      x = 0;
                        var R99 = [0,0,0,1,0,0,0];
                  //} else if ((x==1) && ( students[i][j].slice(students[i][j].length-2, students[i][j].length) == 'jr')){ 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador04')){ 
                      x = 0;
                        var R99 = [0,0,0,0,1,0,0];
		  //ultima pergunta            
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador05')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,1,0];
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador06')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,1];
                  }                  
                  if (students[i][j] == 'R3499'){ 
                  	for(let i=1; i < R00.length; i++) {
                  	  R00[i] = R00[i] + R99[i];
                  	}
                  	
                  	  //sexo
			  for (let i = 1; i < R03.length; i++)  {
			  	outputArray03[i][1]=outputArray03[i][1]+R03[i];
			  }  

			  //idade
			  for (let i = 1; i < R04.length-1; i++)  {
			  	outputArray04[i][1]=outputArray04[i][1]+R04[i];
			  }   
			  
			  //Bairro
			  for (let i = 1; i < R02.length-18; i++)  {
			  	outputArray01[i][1]=outputArray01[i][1]+R02[i];
			  }
                  	
                  	//idade
		        R04 = [0,0,0,0,0,0,0];

		        //bairro
		        R02 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

		        //sexo
		        R03 = [0,0,0,0,0];
		        
                      R99 = [0,0,0,0,0,0,0];
                  }  
                  
                  if (students[i][j].slice(0,5).toLowerCase() == 'teste'){ 
                      R99 = [0,0,0,0,0,0,0];
		      teste = 1; // teste verdadeiro 
                  } 
                  
               if (teste == 0) {   

		  //bairro               
                  if (students[i][j].slice(0,3) == 'R02'){ 
                  	R02 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice03 = parseInt(students[i][j].slice(3,5))
                      R02[indice03] = R02[indice03]+1;
                  }

		  //sexo                    
                  if (students[i][j].slice(0,3) == 'R03'){ 
                  	R03 = [0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      //if indice = 99 {indice = 4}
                      R03[indice] = R03[indice]+1;
                  }
                  
                  //idade               
                  if (students[i][j].slice(0,3) == 'R04'){ 
                   	R04 = [0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      R04[indice] = R04[indice]+1;
                  }

                  
               }   
  
          }
          }
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
