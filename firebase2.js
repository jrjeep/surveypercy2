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
    const dbEvaluationStudentsRef = firebase.database().ref('Questionarios').orderByChild('numPergunta').endAt('02');
    
    dbEvaluationStudentsRef.on('value', snap => {
      while(table.hasChildNodes()) {
              table.removeChild(table.firstChild);
              
        }
  //var movie = snapshot.val();
  //      console.log(movie);
  
      var students = snap.val();
  //      console.log(students);
            var outputArray02 = [
                ['Grade', 'Votos'],
                ['16 a 24', 0 ],
                ['25 a 34', 0],
                ['35 a 44', 0 ],
                ['45 a 54', 0],
                ['55 a 64', 0 ],
                ['65 ou mais', 0]
            ];
            var outputArray01 = [
                ['Grade', 'Votos'],
                ['Masculino', 0 ],
                ['Feminino', 0]
            ];
  
  var r0101 =0;
  var r0102 =0;
            
  var r0201 =0;
  var r0202 =0;
  var r0203 =0;
  var r0204 =0;
  var r0205 =0;
  var r0206 =0;
     var x = 0;
     for(var i in students) {
        var row = table.insertRow(-1);
      //x = 0;
      total =total+1;
        for(var j in students[i]) {
                  cell = row.insertCell(-1);
                  cell.innerHTML = students[i][j];
                  //cell.innerHTML = j;
                  
                  if ((students[i][j] == '01')){ 
                      x = 1  ;
                  } 
                  //if ((students[i][j] == '01') ){ 
  
                  if ((students[i][j] == 'Masculino')){ 
                      r0101++;		
                      x = 0;
                  } else if ((x==1) && (students[i][j] == 'Feminino')) { 
                      x = 0;
                      r0102++;				}
                  //x = 0 ;
  
  
                  if ((students[i][j] == '02')){ 
                      x = 1  ;
                  } 
  
                  if ((x==1) && (students[i][j] == '16 a 24')){ 
                      r0201++;		
                      x = 0;
                  } else if ((x==1) && (students[i][j] == '25 a 34')) { 
                      x = 0;
                      r0202++;			    				
                  } else if ((x==1) && (students[i][j] == '35 a 44')) { 
                      x = 0;
                      r0203++;			    				
                  } else if ((x==1) && (students[i][j] == '45 a 54')) { 
                      x = 0;
                      r0204++;				
                  } else if ((x==1) && (students[i][j] == '55 a 64')) { 
                      x = 0;
                      r0205++;
                  } else if ((x==1) && (students[i][j] == '65 ou mais')) { 
                      x = 0;
                      r0206++;
                  }
          }
          }
  
  outputArray01[1][1]=r0101;
  outputArray01[2][1]=r0102;
  
  outputArray02[1][1]=r0201;
  outputArray02[2][1]=r0202;
  outputArray02[3][1]=r0203;
  outputArray02[4][1]=r0204;
  outputArray02[5][1]=r0205;
  outputArray02[6][1]=r0206;
  
     var total = 0;
     //for(var i in students) {
        //var row = table.insertRow(-1);
  
  
      //	}
  
            drawChart01(outputArray01);
            drawChart02(outputArray02);
  
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
            title: 'Idade',
            hAxis: {title: 'Idade',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv02'));
          chart.draw(data, options);
  
  }
  
  
  