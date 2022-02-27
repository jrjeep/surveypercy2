(function() {
    const config = {
      //YOUR CONFIGS
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
    const dbEvaluationStudentsRef = firebase.database().ref('Questionarios').orderByChild('numPergunta').endAt('03');
    
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
                ['pesquisador03', 0],
                ['pesquisador00', 0],
                ['pesquisador03', 0],
                ['pesquisador04', 0]
            ];
            var outputArray03 = [
                ['Grade', 'Votos'],
                ['Masculino', 0],
                ['Feminino', 0]
            ];
            var outputArray01 = [
                ['Grade', 'Bairros'],
                ['7 - CONDOMÍNIOS - MONDRIAN / PORTAL DA MATA / CARPE DIEM', 0 ],
                ['5 - AQUARELA BRASIL / NOSSA SENHORA APARECIDA / JARDIM ITALIA / RESIDENCIAL FLORENÇA / AQUARELA DAS ARTES', 0 ],
                ['8 - DAURY RIVA / JARDIM VENEZA / JARDIM CALIFÓRNIA', 0 ],
                ['5 - SÃO PAULO I, II / MARIA VINDILINA I, II / RECANTO DOS PÁSSAROS', 0 ],
                ['10 - JARDIM BOA ESPERANÇA / JARDIM NOVO ESTADO / JARDIM DOS IPÊS', 0 ],
                ['5 - JARDIM EUROPA / RESIDENCIAL DELTA / RESIDENCIAL VITÓRIA RÉGIA', 0 ],
                ['11 - JARDIM DAS PALMEIRAS / JARDIM IMPERIAL', 0 ],
                ['15 - JARDIM JEQUITIBAS / JARDIM OLIVEIRAS / JARDIM AZALEIAS / JARDIM VIOLETAS', 0 ],
                ['4 - LOTEAMENTO FLORAIS DA AMAZÔNIA / RESIDENCIAL GENTE FELIZ I, II / JARDIM SAFIRA', 0 ],
                ['11 - JARIDM PRIMAVERAS / PARQUE DAS ARARAS / JARDIM DAS ORQUÍDEAS / RESIDENCIAL CANADA', 0 ],
                ['8 - RESIDENCIAL NORTE / SETOR COMERCIAL PARTE NORTE (AO NORTE DA JULIO CAMPOS)', 0 ],
                ['4 - JARDIM PARAÍSO II, III / JARDIM BELO HORIZONTE / RESIDENCIAL BELA SUIÇA', 0 ],
                ['8 - JARDIM BOTÂNICO / JARDIM PARAÍSO I', 0 ],
                ['6 - JARDIM SANTA MÔNICA / JARDIM IPIRANGA / RESIDENCIAL MARIPÁ / ADRIANO LEITÃO / JARDIM PAULISTA I, II / JARDIM IBIRAPUERA / PEQUENA LONDRES', 0 ],
                ['10 - JARDIM JACARANDÁS / HABITAR BRASIL / JARDIM CELESTE / JARDIM ITAÚBAS', 0 ],
                ['5 - RECANTO DOS BURITIS RESIDENCIAL / RESERVA CELESTE I, II, III / RESIDENCIAL SÃO FRANCISCO / RESIDENCIAL MORIA', 0 ],
                ['8 - SÃO CRISTOVÃO / MENINO JESUS I, II / IPORÃ / PÉROLA / LISBOA / UMUARAMA I / VILLA ITALIA', 0 ],
                ['10 - SEBASTIÃO DE MATOS I, II / UMUARAMA II / VILA MARIANA / VILA LOBOS / VILA SANTANA / VILA JULIANA / VILA AMÉRICA / BOA VISTA', 0 ]

            ];
  
  //pesquisador            
  var r0001 =0;
  var r0002 =0;
  var r0003 =0;
  var r0004 =0;

  //sexo
  var r0301 =0;
  var r0302 =0;

  //bairro
  var r0101 =0;
  var r0102 =0;

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
                  
                  if ((students[i][j] == '03')){ 
                      x = 1  ;
                  } 
                  //if ((students[i][j] == '03') ){ 
  
                  if ((students[i][j] == 'Masculino')){ 
                      r0301++;		
                      x = 0;
                  } else if ((x==1) && (students[i][j] == 'Feminino')) { 
                      x = 0;
                      r0302++;				}
                  //x = 0 ;
  
  
                  if ((students[i][j] == '00')){ 
                      x = 1  ;
                      //pesquisador = ;
                  } 
  
                  if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador03')){ 
                      r0001++;		
                      x = 0;
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador00')){ 
                      x = 0;
                      r0002++;			    				
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador03')){ 
                      x = 0;
                      r0003++;			    				
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador04')){ 
                      x = 0;
                      r0004++;				
                  } else if ((x==1) && (students[i][j] == '55 a 64')) { 
                      x = 0;
                      r0005++;
                  } else if ((x==1) && (students[i][j] == '65 ou mais')) { 
                      x = 0;
                      r0006++;
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
  //Bairro
  outputArray01[1][1]=r0101;
  outputArray01[2][1]=r0102;
  outputArray01[3][1]=r0103;
  outputArray01[4][1]=r0104;
  outputArray01[5][1]=r0105;
  outputArray01[6][1]=r0106;
  outputArray01[7][1]=r0107;
  outputArray01[8][1]=r0108;
  outputArray01[9][1]=r0109;
  outputArray01[10][1]=r0110;
  outputArray01[11][1]=r0111;
  outputArray01[12][1]=r0112;
  outputArray01[13][1]=r0113;
  outputArray01[14][1]=r0114;
  outputArray01[15][1]=r0115;
  outputArray01[16][1]=r0116;
  outputArray01[17][1]=r0117;
  outputArray01[18][1]=r0118;
  
     //var total = 0;
     //for(var i in students) {
        //var row = table.insertRow(-1);
  
  
      //	}
  
            drawChart01(outputArray03);
            drawChart02(outputArray00);
  
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
  
  
  
