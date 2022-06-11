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
    const dbEvaluationStudentsRef = firebase.database().ref('Formularios/Quest_Juara').orderByChild('numPergunta').endAt('04');
    
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
                ['JD CALIFORNIA I, II / FLAMBOYANT / JOAO DE BARRO / JD FLORESTA / TOCAIA GRANDE / ELDORADO', 0 ],                
                ['JD AMÉRICA / SÃO GABRIEL / BANDEIRANTES', 0 ],
                ['RESIDENCIAL PORTO SEGURO I, II / PORTAL DAS FLORES / VILA BOTELHO', 0 ],
                ['SÃO JOÃO / ITALIA / STA ANTONIETA / VILA AURORA / LOT GOUVEIA', 0 ],
                ['ITAPUÃ / BOA VISTA / PANORAMA / UBIRAJARA / COLINAS / SANTA ROSA', 0 ],
                ['SANTA CRUZ / VITORIA / BELA VISTA / AZOIA / SANTA CLARA', 0 ],
                ['JD PARANAGUA / KENNEDY / STA HELENA / COOHAB', 0 ]

            ];
  
            var outputArray03 = [
                ['Grade', 'Sexo'],
                ['Masculino', 0],
                ['Feminino', 0],
                ['Nao respondeu', 0],
                ['Outros', 0]
            ];

  //pesquisador            
  var r0001 =0;
  var r0002 =0;
  var r0003 =0;
  var r0004 =0;

  //bairro
  var r0301 =0;
  var r0302 =0;
  var r0303 =0;
  var r0304 =0;
  var r0305 =0;
  var r0306 =0;
  var r0307 =0;
  var r0308 =0;
  var r0309 =0;
  var r0310 =0;
  var r0311 =0;
  var r0312 =0;
  

  //sexo
  var R0401 =0;
  var R0402 =0;
  var R0403 =0;
  var R0499 =0;


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
                  if (students[i][j] == 'R0301'){ 
                      r0301++;		
                  } else if (students[i][j] == 'R0302') { 
                      r0302++;				
                  } else if (students[i][j] == 'R0303') { 
                      r0303++;				
                  } else if (students[i][j] == 'R0304') { 
                      r0304++;				
                  } else if (students[i][j] == 'R0305') { 
                      r0305++;				
                  } else if (students[i][j] == 'R0306') { 
                      r0306++;				
                  } else if (students[i][j] == 'R0307') { 
                      r0307++;				
                  } else if (students[i][j] == 'R0308') { 
                      r0308++;				
                  } else if (students[i][j] == 'R0309') { 
                      r0309++;				
                  } else if (students[i][j] == 'R0310') { 
                      r0310++;				
                  } else if (students[i][j] == 'R0311') { 
                      r0311++;				
                  } else if (students[i][j] == 'R0312') { 
                      r0312++;				
                  }

		  //sexo                    
                  if (students[i][j] == 'R0401'){ 
                      R0401++;		
                  } else if (students[i][j] == 'R0402') { 
                      R0402++;				
                  } else if (students[i][j] == 'R0403') { 
                      R0403++;				
                  } else if (students[i][j] == 'R0499') { 
                      R0499++;				
                  }
  
          }
          }
  //pesquisador
  outputArray00[1][1]=r0001;
  outputArray00[2][1]=r0002;
  outputArray00[3][1]=r0003;
  outputArray00[4][1]=r0004;
  //sexo
  outputArray03[1][1]=R0401;
  outputArray03[2][1]=R0402;
  outputArray03[3][1]=R0403;
  outputArray03[4][1]=R0499;
  //Bairro
  outputArray01[1][1]=r0301;
  outputArray01[2][1]=r0302;
  outputArray01[3][1]=r0303;
  outputArray01[4][1]=r0304;
  outputArray01[5][1]=r0305;
  outputArray01[6][1]=r0306;
  outputArray01[7][1]=r0307;
  outputArray01[8][1]=r0308;
  outputArray01[9][1]=r0309;
  outputArray01[10][1]=r0310;
  outputArray01[11][1]=r0311;
  outputArray01[12][1]=r0312;
  
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
  
  
