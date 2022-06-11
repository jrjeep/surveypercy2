(function() {
    const config = {
    apiKey: "AIzaSyDrQGvVqEEoM8sAtIC6DmKcu9N4dtic28g",
    authDomain: "surveypercy-3914b.firebaseapp.com",
    databaseURL: "https://surveypercy-3914b.firebaseio.com",
    projectId: "surveypercy-3914b",
    storageBucket: "surveypercy-3914b.appspot.com",
    messagingSenderId: "748138801996"
    };
  
        // Draw the pie chart for Sarah's pizza when Charts is loaded.
        //google.charts.setOnLoadCallback(drawSarahChart);
  
    firebase.initializeApp(config);
  
    // Load Charts and the corechart package.
        google.charts.load('current', {'packages':['corechart']});
  
  //  const bigTextEvaluationStudents = document.getElementById('Questionarios');
  //  const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('Questionarios').orderByChild('numPergunta').startAt('01');
  //  dbBigTextEvaluationStudentsRef.on('value', snap => bigTextEvaluationStudents.innerText = snap.val());
  
    var table = document.querySelector('#table1 tbody');
    const dbEvaluationStudentsRef = firebase.database().ref('Formularios/Quest_Juara').orderByChild('numPergunta').endAt('03');
    
    dbEvaluationStudentsRef.on('value', snap => {
      while(table.hasChildNodes()) {
              table.removeChild(table.firstChild);
              
        }
  //var movie = snapshot.val();
  //      console.log(movie);
  
      var students = snap.val();
  //      console.log(students);
            var outputArray00 = [
                ['Grade', 'Formulários'],
                ['pesquisador01', 0],
                ['pesquisador02', 0],
                ['pesquisador03', 0],
                ['pesquisador04', 0]
            ];
            var outputArray01 = [
                ['Grade', 'Bairros'],
                ['PQ ALVORADA I, II / VILA OPERÁRIA / JD. SANTA MARIA / JD PAULISTA', 0 ],
                ['JD CRUZEIRO DO SUL', 0 ],
                ['CENTRO NORTE', 0 ],
                ['CENTRO SUL', 0 ],
                ['JD PRIMAVERA I, II / JD CONTINENTAL', 0 ],
                ['JD AMÉRICA / SÃO GABRIEL / BANDEIRANTES', 0 ],
                ['RESIDENCIAL PORTO SEGURO I, II / PORTAL DAS FLORES / VILA BOTELHO', 0 ],
                ['SÃO JOÃO / ITALIA / STA ANTONIETA / VILA AURORA / LOT GOUVEIA', 0 ],
                ['ITAPUÃ / BOA VISTA / PANORAMA / UBIRAJARA / COLINAS / SANTA ROSA', 0 ],
                ['SANTA CRUZ / VITORIA / BELA VISTA / AZOIA / SANTA CLARA', 0 ],
                ['JD PARANAGUA / KENNEDY / STA HELENA / COOHAB', 0 ],
                ['FIM', 0 ],
                ['8 - JARDIM BOTÂNICO / JARDIM PARAÍSO I', 0 ],
                ['6 - JARDIM SANTA MÔNICA / JARDIM IPIRANGA / RESIDENCIAL MARIPÁ / ADRIANO LEITÃO / JARDIM PAULISTA I, II / JARDIM IBIRAPUERA / PEQUENA LONDRES', 0 ],
                ['10 - JARDIM JACARANDÁS / HABITAR BRASIL / JARDIM CELESTE / JARDIM ITAÚBAS', 0 ],
                ['5 - RECANTO DOS BURITIS RESIDENCIAL / RESERVA CELESTE I, II, III / RESIDENCIAL SÃO FRANCISCO / RESIDENCIAL MORIA', 0 ],
                ['8 - SÃO CRISTOVÃO / MENINO JESUS I, II / IPORÃ / PÉROLA / LISBOA / UMUARAMA I / VILLA ITALIA', 0 ],
                ['10 - SEBASTIÃO DE MATOS I, II / UMUARAMA II / VILA MARIANA / VILA LOBOS / VILA SANTANA / VILA JULIANA / VILA AMÉRICA / BOA VISTA', 0 ],
                ['Outros']

            ];
  
            var outputArray03 = [
                ['Grade', 'Sexo'],
                ['Masculino', 0],
                ['Feminino', 0],
                ['Outro', 0]
            ];

  //pesquisador            
  var r0001 =0;
  var r0002 =0;
  var r0003 =0;
  var r0004 =0;

  //bairro
  var r0201 =0;
  var r0202 =0;
  var r0203 =0;
  var r0204 =0;
  var r0205 =0;
  var r0206 =0;
  var r0207 =0;
  var r0208 =0;
  var r0209 =0;
  var r0210 =0;
  var r0211 =0;
  var r0212 =0;
  var r0213 =0;
  var r0214 =0;
  var r0215 =0;
  var r0216 =0;
  var r0217 =0;
  var r0218 =0;
  var r0299 =0;
  

  //sexo
  var r0301 =0;
  var r0302 =0;
  var r0399 =0;


     var x = 0;
     var pesquisador = "";
     for(var i in students) {
        var row = table.insertRow(-1);
      //x = 0;
      //total =total+1;
        for(var j in students[i]) {
                  cell = row.insertCell(-1);
                  cell.innerHTML = students[i][j];
                  //cell.innerHTML = j;

		  //pesquisador  
                  if ((students[i][j] == '00')){ 
                      x = 1  ;
                  } 
  
                  if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador01')){ 
                      r0001++;		
                      x = 0;
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador02')){ 
                      x = 0;
                      r0002++;			    				
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador03')){ 
                      x = 0;
                      r0003++;			    				
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador04')){ 
                      x = 0;
                      r0004++;				
                  }


		  //bairro               
                  if (students[i][j] == 'R0201'){ 
                      r0201++;		
                  } else if (students[i][j] == 'R0202') { 
                      r0202++;				
                  } else if (students[i][j] == 'R0203') { 
                      r0203++;				
                  } else if (students[i][j] == 'R0204') { 
                      r0204++;				
                  } else if (students[i][j] == 'R0205') { 
                      r0205++;				
                  } else if (students[i][j] == 'R0206') { 
                      r0206++;				
                  } else if (students[i][j] == 'R0207') { 
                      r0207++;				
                  } else if (students[i][j] == 'R0208') { 
                      r0208++;				
                  } else if (students[i][j] == 'R0209') { 
                      r0209++;				
                  } else if (students[i][j] == 'R0210') { 
                      r0210++;				
                  } else if (students[i][j] == 'R0211') { 
                      r0211++;				
                  } else if (students[i][j] == 'R0212') { 
                      r0212++;				
                  } else if (students[i][j] == 'R0213') { 
                      r0213++;			
                  } else if (students[i][j] == 'R0214') { 
                      r0214++;				
                  } else if (students[i][j] == 'R0215') { 
                      r0215++;				
                  } else if (students[i][j] == 'R0216') { 
                      r0216++;				
                  } else if (students[i][j] == 'R0217') { 
                      r0217++;				
                  } else if (students[i][j] == 'R0218') { 
                      r0218++;				
                  } else if (students[i][j] == 'R0299') { 
                      r0299++;				
                  }


		  //sexo                    
                  if (students[i][j] == 'R0301'){ 
                      r0301++;		
                  } else if (students[i][j] == 'R0302') { 
                      r0302++;				
                  } else if (students[i][j] == 'R0399') { 
                      r0399++;				
                  }
  
          }
          }
  
  //pesquisador
  outputArray00[1][1]=r0001;
  outputArray00[2][1]=r0002;
  outputArray00[3][1]=r0003;
  outputArray00[4][1]=r0004;
  //sexo
  outputArray03[1][1]=r0301;
  outputArray03[2][1]=r0302;
  outputArray03[3][1]=r0399;
  //Bairro
  outputArray01[1][1]=r0201;
  outputArray01[2][1]=r0202;
  outputArray01[3][1]=r0203;
  outputArray01[4][1]=r0204;
  outputArray01[5][1]=r0205;
  outputArray01[6][1]=r0206;
  outputArray01[7][1]=r0207;
  outputArray01[8][1]=r0208;
  outputArray01[9][1]=r0209;
  outputArray01[10][1]=r0210;
  outputArray01[11][1]=r0211;
  outputArray01[12][1]=r0212;
  outputArray01[13][1]=r0213;
  outputArray01[14][1]=r0214;
  outputArray01[15][1]=r0215;
  outputArray01[16][1]=r0216;
  outputArray01[17][1]=r0217;
  outputArray01[18][1]=r0218;
  outputArray01[19][1]=r0218;
  
     //var total = 0;
     //for(var i in students) {
        //var row = table.insertRow(-1);
  
  
      //	}
  
            drawChart01(outputArray03);
            drawChart02(outputArray00);
            drawChart03(outputArray01);
  
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
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv03'));
          chart.draw(data, options);
  
  }
  
  
