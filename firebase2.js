var pesquisaName = 'Juara_Mar2024';
var ultimaQuestao = '';
var outputArray = [];
var perguntas;
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
    var outputArrayz = [['Grade', 'Sexo']];
    //var outputArray03,outputArray04,outputArray05;
    const dbEvaluationperguntasRef = firebase.database().ref('Questionario/'+pesquisaName).orderByChild('numPergunta');//.endAt('05');
    
    dbEvaluationperguntasRef.on('value', snap => {
      while(table.hasChildNodes()) {
              table.removeChild(table.firstChild);              
        }

        var flag99 = false;
        var numPerguntaOld = '';
     perguntas = snap.val(); 	
     for(var i in perguntas) {


		var items = [perguntas[i]];
		//console.log(perguntas);
		var numPergunta = items.map(function(item) {
		  return item['numPergunta'];
		});

		var numResposta = items.map(function(item) {
		  return item['numResposta'];
		});


		    if ((numResposta > '00') && (numPergunta > '00')){
		    	/*if ((perguntas[i].numResposta == '01') || flag99 ){
		    
		          outputArray.push(outputArrayz);
		          outputArrayz= [['Grade','.']];
		          flag99 = false;
		          
		        } 
		        */ 	
		    	if ( numPergunta > numPerguntaOld ){
		    	  //console.log(numPergunta);
		          outputArray.push(outputArrayz);
		          outputArrayz= [['Grade','.']];
		          flag99 = false;
		          numPerguntaOld = numPergunta;
		          
		        }  	
			    //console.log(perguntas[i].texto);
			outputArrayz.push([perguntas[i].texto+'',0]);
			/*if ((numResposta == '99')){
				flag99 = true;
			}*/
			    

		    }

     }             

outputArray.push(outputArrayz);
//console.log(outputArray[12]);
outputArray03 = outputArray[3];
outputArray04 = outputArray[4];
outputArray05 = outputArray[5];
outputArray06 = outputArray[6];
outputArray07 = outputArray[7];
outputArray08 = outputArray[8];
outputArray09 = outputArray[9];
outputArray10 = outputArray[10];

outputArray11 = [];
outputArray12 = [];
outputArray13 = [];
outputArray14 = [];
outputArray15 = [];
outputArray16 = [];
outputArray17 = [];
outputArray18 = [];
outputArray19 = [];
outputArray20 = [];
outputArray21 = [];
outputArray22 = [];
outputArray23 = [];
outputArray24 = [];
outputArray25 = [];
outputArray26 = [];
outputArray27 = [];
outputArray28 = [];
outputArray29 = [];
outputArray30 = [];

if (numPergunta > '11') {outputArray11 = outputArray[11]};
if (numPergunta > '12') {outputArray12 = outputArray[12]};
if (numPergunta > '13') {outputArray13 = outputArray[13]};
if (numPergunta > '14') {outputArray14 = outputArray[14]};
if (numPergunta > '15') {outputArray15 = outputArray[15]};
if (numPergunta > '16') {outputArray16 = outputArray[16]};
if (numPergunta > '17') {outputArray17 = outputArray[17]};
if (numPergunta > '18') {outputArray18 = outputArray[18]};
if (numPergunta > '19') {outputArray19 = outputArray[19]};
if (numPergunta > '20') {outputArray20 = outputArray[20]};
if (numPergunta > '21') {outputArray21 = outputArray[21]};
if (numPergunta > '22') {outputArray22 = outputArray[22]};
if (numPergunta > '23') {outputArray23 = outputArray[23]};
if (numPergunta > '24') {outputArray24 = outputArray[24]};
if (numPergunta > '25') {outputArray25 = outputArray[25]};
if (numPergunta > '26') {outputArray26 = outputArray[26]};
if (numPergunta > '27') {outputArray27 = outputArray[27]};
if (numPergunta > '28') {outputArray28 = outputArray[28]};
if (numPergunta > '29') {outputArray29 = outputArray[29]};
if (numPergunta > '30') {outputArray30 = outputArray[30]};

ultimaQuestao = 'R'+numPergunta+'99';
console.log(ultimaQuestao);

    });    
        
    const dbEvaluationStudentsRef = firebase.database().ref('Formularios/'+pesquisaName).orderByChild('numPergunta');//.endAt('05');
    
    dbEvaluationStudentsRef.on('value', snap => {
      while(table.hasChildNodes()) {
              table.removeChild(table.firstChild);
              
        }

const date = new Date();
// Get year, month, and day part from the date
var year = date.toLocaleString("default", { year: "numeric" });
var month = date.toLocaleString("default", { month: "2-digit" });
var day = date.toLocaleString("default", { day: "2-digit" });

// Generate yyyy-mm-dd date string
var currentDate = year + "/" + month + "/" + day;

      var students = snap.val();
            var outputArray00 = [
                ['Pesquisador', 'Formulários'],
                ['pesq01', 0],
                ['pesq02', 0],
                ['pesq03', 0],
                ['pesq04', 0],
                ['pesq05', 0],
                ['pesq06', 0],
                ['pesq07', 0],
                ['pesq08', 0],
                ['pesq09', 0],
                ['pesq10', 0],
                ['pesq11', 0],
                ['pesq12', 0],
                ['Victor', 0]
            ];
            // pesquisador Hoje
            var outputArray98 = [ 
                ['Pesquisador', 'Formulários'],
                ['pesq01', 0],
                ['pesq02', 0],
                ['pesq03', 0],
                ['pesq04', 0],
                ['pesq05', 0],
                ['pesq06', 0],
                ['pesq07', 0],
                ['pesq08', 0],
                ['pesq09', 0],
                ['pesq10', 0],
                ['pesq11', 0],
                ['pesq12', 0],
                ['Victor', 0]
            ];

            
            var outputArray05m = [
                ['Grade', 'Idade'],
                ['16 a 24', 0],
                ['25 a 34', 0],
                ['35 a 44', 0],
                ['45 a 59', 0],
                ['60 acima', 0]
            ];

            var outputArray05f = [
                ['Grade', 'Idade'],
                ['16 a 24', 0],
                ['25 a 34', 0],
                ['35 a 44', 0],
                ['45 a 59', 0],
                ['60 acima', 0]
            ];
            
            
  //pesquisador 
  var R00 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];           
  //pesquisador ultima resposta            
  var R99 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  //pesquisador Hoje            
  var R98 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R00H = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];           


  //bairro 
  var R03 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //R10

  //sexo
  var R04 = [0,0,0,0,0]; //R04

  //idade
  var R05 = [0,0,0,0,0,0,0]; //R05
  var R05m = [0,0,0,0,0,0,0]; //idade masc
  var R05f = [0,0,0,0,0,0,0]; //idade fem

  //Instrução
  var R06 = [0,0,0,0,0,0,0]; //R06

  //Profissão
  var R07 = [0,0,0,0,0,0,0,0,0,0]; //R07

  //Religião
  var R08 = [0,0,0,0,0,0,0,0]; //Não usa

  //renda
  var R09 = [0,0,0,0,0,0]; //R09

  //Mídia
  var R10 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


  var R11 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R12 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R13 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R14 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R15 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R16 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R17 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R18 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R19 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R20 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R21 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R22 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R23 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R24 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R25 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R26 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R27 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R28 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R29 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R30 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


/*  
//Peixoto jun 23 
//18 - 09 - intenção de voto estimulada
  var R18 = [0,0,0,0,0,0,0,0,0,0];
//22 - 04 - disputa entre kaleb e paulistinha
  var R22 = [0,0,0,0,0];
//24 - 09 - rejeicao estimulada
  var R24 = [0,0,0,0,0,0,0,0,0,0];
//26 - 05 - avaliacao do pref mauricio
  var R26 = [0,0,0,0,0,0];
// fim Peixoto
*/

var sexo = 9

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
                        var R99 = [0,1,0,0,0,0,0,0,0,0,0,0,0,0];
                        outputArray00[1][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador02')){ 
                      x = 0;
                        var R99 = [0,0,1,0,0,0,0,0,0,0,0,0,0,0];
                        outputArray00[2][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador03')){ 
                      x = 0;
                        var R99 = [0,0,0,1,0,0,0,0,0,0,0,0,0,0];
                        outputArray00[3][1]= students[i][j].slice(0, 3); 
                  //} else if ((x==1) && ( students[i][j].slice(students[i][j].length-2, students[i][j].length) == 'jr')){ 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador04')){ 
                      x = 0;
                        var R99 = [0,0,0,0,1,0,0,0,0,0,0,0,0,0];
                        outputArray00[4][1]= students[i][j].slice(0, 3); 
		  //ultima pergunta            
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador05')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,1,0,0,0,0,0,0,0,0];
                        outputArray00[5][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador06')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,1,0,0,0,0,0,0,0];
                        outputArray00[6][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador07')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,0,1,0,0,0,0,0,0];
                        outputArray00[7][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador08')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,0,0,1,0,0,0,0,0];
                        outputArray00[8][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador09')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,0,0,0,1,0,0,0,0];
                        outputArray00[9][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador10')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,0,0,0,0,1,0,0,0];
                        outputArray00[10][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador11')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,0,0,0,0,0,1,0,0];
                        outputArray00[11][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador12')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,0,0,0,0,0,0,1,0];
                        outputArray00[12][1]= students[i][j].slice(0, 3); 

                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 

                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'victor_______')){ 
                  //} else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador06')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,0,0,0,0,0,0,0,1];
                        outputArray00[13][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } 

                  if (students[i][j] == ultimaQuestao){ 
                  	for(let i=1; i < R00.length; i++) {
                  	  R00[i] = R00[i] + R99[i];
                  	  R00H[i] = R00H[i] + R98[i];
                  	}
                  	
			  //Bairro
			  for (let i = 1; i < outputArray03.length; i++)  {
			  	outputArray03[i][1]=outputArray03[i][1]+R03[i];
			  }

                  	  //sexo
			  for (let i = 1; i < R04.length; i++)  {
			  	outputArray04[i][1]=outputArray04[i][1]+R04[i];
			  	if (R04[i] == 1) 
			  	sexo = i;
			  } 

			  //idade
			  for (let i = 1; i < R05.length-1; i++)  {
			  	outputArray05[i][1]=outputArray05[i][1]+R05[i];
			  	if (sexo == 1) {
			  	    outputArray05m[i][1]=outputArray05m[i][1]+R05[i];
			  	} 
			  	if (sexo == 2) {
			  	    outputArray05f[i][1]=outputArray05f[i][1]+R05[i];	
			  	}
			  	
			  }   
			  


			  //Instrução
			  for (let i = 1; i < R06.length-1; i++)  {
			  	outputArray06[i][1]=outputArray06[i][1]+R06[i];
			  }

			  //Profissão
			  for (let i = 1; i < R07.length; i++)  {
			  	outputArray07[i][1]=outputArray07[i][1]+R07[i];
			  }
                  	
			  //Religião
			  for (let i = 1; i < R08.length; i++)  {
			  	outputArray08[i][1]=outputArray08[i][1]+R08[i];
			  }

			  //Renda
			  for (let i = 1; i < R09.length; i++)  {
			  	outputArray09[i][1]=outputArray09[i][1]+R09[i];
			  }

			  //Mídia
			  for (let i = 1; i < outputArray10.length; i++)  {
			  	outputArray10[i][1]=outputArray10[i][1]+R10[i];
			  }

			  
			        for (let i = 1; i < outputArray11.length; i++)  {
			                 outputArray11[i][1]=outputArray11[i][1]+R11[i];
			                }
			        for (let i = 1; i < outputArray12.length; i++)  {
					 outputArray12[i][1]=outputArray12[i][1]+R12[i];
					}
				for (let i = 1; i < outputArray13.length; i++)  {
					 outputArray13[i][1]=outputArray13[i][1]+R13[i];
					}
				for (let i = 1; i < outputArray14.length; i++)  {
					 outputArray14[i][1]=outputArray14[i][1]+R14[i];
					}
				for (let i = 1; i < outputArray15.length; i++)  {
					 outputArray15[i][1]=outputArray15[i][1]+R15[i];
					}
				for (let i = 1; i < outputArray16.length; i++)  {
					 outputArray16[i][1]=outputArray16[i][1]+R16[i];
					}
				for (let i = 1; i < outputArray17.length; i++)  {
					 outputArray17[i][1]=outputArray17[i][1]+R17[i];
					}
				for (let i = 1; i < outputArray18.length; i++)  {
					 outputArray18[i][1]=outputArray18[i][1]+R18[i];
					}
				for (let i = 1; i < outputArray19.length; i++)  {
					 outputArray19[i][1]=outputArray19[i][1]+R19[i];
					}
				for (let i = 1; i < outputArray20.length; i++)  {
					 outputArray20[i][1]=outputArray20[i][1]+R20[i];
					}
				for (let i = 1; i < outputArray21.length; i++)  {
					 outputArray21[i][1]=outputArray21[i][1]+R21[i];
					}
				for (let i = 1; i < outputArray22.length; i++)  {
					 outputArray22[i][1]=outputArray22[i][1]+R22[i];
					}
				for (let i = 1; i < outputArray23.length; i++)  {
					 outputArray23[i][1]=outputArray23[i][1]+R23[i];
					}
				for (let i = 1; i < outputArray24.length; i++)  {
					 outputArray24[i][1]=outputArray24[i][1]+R24[i];
					}
				for (let i = 1; i < outputArray25.length; i++)  {
					 outputArray25[i][1]=outputArray25[i][1]+R25[i];
					}
				for (let i = 1; i < outputArray26.length; i++)  {
					 outputArray26[i][1]=outputArray26[i][1]+R26[i];
					}
				for (let i = 1; i < outputArray27.length; i++)  {
					 outputArray27[i][1]=outputArray27[i][1]+R27[i];
					}
				for (let i = 1; i < outputArray28.length; i++)  {
					 outputArray28[i][1]=outputArray28[i][1]+R28[i];
					}
				for (let i = 1; i < outputArray29.length; i++)  {
					 outputArray29[i][1]=outputArray29[i][1]+R29[i];
					}
				for (let i = 1; i < outputArray30.length; i++)  {
					 outputArray30[i][1]=outputArray30[i][1]+R30[i];
					}


			/*  
                  	//Peixoto jun 23 
                  	//18 - 09 - intenção de voto estimulada
			  for (let i = 1; i < R18.length; i++)  {
			  	outputArray18[i][1]=outputArray18[i][1]+R18[i];
			  }
                  	//22 - 04 - disputa entre kaleb e paulistinha
             		  for (let i = 1; i < R22.length; i++)  {
			  	outputArray22[i][1]=outputArray22[i][1]+R22[i];
			  }
                  	//24 - 09 - rejeicao estimulada
             		  for (let i = 1; i < R24.length; i++)  {
			  	outputArray24[i][1]=outputArray24[i][1]+R24[i];
			  }
                  	//26 - 05 - avaliacao do pref mauricio
             		  for (let i = 1; i < R26.length; i++)  {
			  	outputArray26[i][1]=outputArray26[i][1]+R26[i];
			  }
                  	// fim Peixoto
                  	
                  	
                  	//Peixoto jun 23 
                  	//18 - 09 - intenção de voto estimulada
                  	  var R18 = [0,0,0,0,0,0,0,0,0,0];
                  	//22 - 04 - disputa entre kaleb e paulistinha
                  	  var R22 = [0,0,0,0,0];
                  	//24 - 09 - rejeicao estimulada
                  	  var R24 = [0,0,0,0,0,0,0,0,0,0];
                  	//26 - 05 - avaliacao do pref mauricio
                  	  var R26 = [0,0,0,0,0,0];
                  	// fim Peixoto
                  	*/
                  	
		        //bairro
		        R03 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

		        //sexo
		        R04 = [0,0,0,0,0];

                  	//idade
		        R05 = [0,0,0,0,0,0,0];

		        //Instrução
		        R06 = [0,0,0,0,0,0,0];

			//Profissão
			R07 = [0,0,0,0,0,0,0,0,0,0];

		        //Religião
		        R08 = [0,0,0,0,0,0,0,0];

		        //Renda
		        R09 = [0,0,0,0,0,0];
			  
			//Mídia
			R10 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			        
                      R99 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      R98 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      
                          R11 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R12 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R13 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R14 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R15 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R16 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R17 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R18 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R19 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R20 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R21 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R22 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R23 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R24 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R25 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R26 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R27 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R28 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R29 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			  R30 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                  }  
                  
                  if (students[i][j].slice(0,5).toLowerCase() == 'teste'){ 
                      R99 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      R98 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		      teste = 1; // teste verdadeiro 
                  } 
                  
               if (teste == 0) {   
               //if (true) {

		  //bairro               
                  if (students[i][j].slice(0,3) == 'R03'){ 
                  	//R03 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice03 = parseInt(students[i][j].slice(3,5))
                      R03[indice03] = R03[indice03]+1;
                  }

		  //sexo                    
                  if (students[i][j].slice(0,3) == 'R04'){ 
                   	//R06 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 4};
                      R04[indice] = R04[indice]+1;
                  }
                  
                  //idade               
                  if (students[i][j].slice(0,3) == 'R05'){ 
                   	//R05 = [0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      R05[indice] = R05[indice]+1;
                  }

                  //Instrução               
                  if (students[i][j].slice(0,3) == 'R06'){ 
                   	//R06 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 11};
                      R06[indice] = R06[indice]+1;
                  }

                  //Profissão               
                  if (students[i][j].slice(0,3) == 'R07'){ 
                   	//R07 = [0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 11};
                      R07[indice] = R07[indice]+1;
                  }

                  //Religião               
                  if (students[i][j].slice(0,3) == 'R08'){ 
                   	//R08 = [0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 7};
                      R08[indice] = R08[indice]+1;
                  }

                  //Renda               
                  if (students[i][j].slice(0,3) == 'R09'){ 
                   	//R09 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      R09[indice] = R09[indice]+1;
                  }

                  //Mídia               
                  if (students[i][j].slice(0,3) == 'R10'){ 
                   	//R10 = [0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 10};
                      R10[indice] = R10[indice]+1;
                  }

                  
                  if (students[i][j].slice(0,3) == 'R11'){ 
                    //R11 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray11.length-1};
                      R11[indice] = R11[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R12'){ 
                    //R12 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray12.length-1};
                      R12[indice] = R12[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R13'){ 
                    //R13 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray13.length-1};
                      R13[indice] = R13[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R14'){ 
                    //R14 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray14.length-1};
                      R14[indice] = R14[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R15'){ 
                    //R15 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray15.length-1};
                      R15[indice] = R15[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R16'){ 
                    //R16 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray16.length-1};
                      R16[indice] = R16[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R17'){ 
                    //R17 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray17.length-1};
                      R17[indice] = R17[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R18'){ 
                    //R18 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray18.length-1};
                      R18[indice] = R18[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R19'){ 
                    //R19 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray19.length-1};
                      R19[indice] = R19[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R20'){ 
                    //R20 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray20.length-1};
                      R20[indice] = R20[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R21'){ 
                    //R21 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray21.length-1};
                      R21[indice] = R21[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R22'){ 
                    //R22 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray22.length-1};
                      R22[indice] = R22[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R23'){ 
                    //R23 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray23.length-1};
                      R23[indice] = R23[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R24'){ 
                    //R24 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray24.length-1};
                      R24[indice] = R24[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R25'){ 
                    //R25 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray25.length-1};
                      R25[indice] = R25[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R26'){ 
                    //R26 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray26.length-1};
                      R26[indice] = R26[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R27'){ 
                    //R27 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray27.length-1};
                      R27[indice] = R27[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R28'){ 
                    //R28 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray28.length-1};
                      R28[indice] = R28[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R29'){ 
                    //R29 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray29.length};
                      R29[indice] = R29[indice]+1;
                  }
                  if (students[i][j].slice(0,3) == 'R30'){ 
                    //R30 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = outputArray30.length};
                      R30[indice] = R30[indice]+1;
                  }

                  /*
                  	//Peixoto jun 23 
                  	//18 - 09 - intenção de voto estimulada
                  if (students[i][j].slice(0,3) == 'R18'){ 
                  	R018 = [0,0,0,0,0,0,0,0,0,0];
                      var indice18 = parseInt(students[i][j].slice(3,5))
                      R18[indice18] = R18[indice18]+1;
                  }
                  	//22 - 04 - disputa entre kaleb e paulistinha
                  if (students[i][j].slice(0,3) == 'R22'){ 
                  	R022 = [0,0,0,0,0,0];
                      var indice22 = parseInt(students[i][j].slice(3,5))
                      R22[indice22] = R22[indice22]+1;
                  }
                  	//24 - 09 - rejeicao estimulada
                  if (students[i][j].slice(0,3) == 'R24'){ 
                  	R024 = [0,0,0,0,0,0,0,0,0,0];
                      var indice24 = parseInt(students[i][j].slice(3,5))
                      R24[indice24] = R24[indice24]+1;
                  }
                  	//26 - 05 - avaliacao do pref mauricio
                  if (students[i][j].slice(0,3) == 'R26'){ 
                  	R026 = [0,0,0,0,0,0];
                      var indice26 = parseInt(students[i][j].slice(3,5))
                      R26[indice26] = R26[indice26]+1;
                  }
                  	// fim Peixoto
                  */
                  
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
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(outputArray00[i][j]));
        td.style.border = '1px  black';

    }
  }
  body.appendChild(tbl);
}

tableCreate();
//console.log(outputArray[4]);
  for (let i = 1; i < R00.length; i++)  {
  	outputArray00[i][1]=R00[i];
  	outputArray98[i][1]=R00H[i];
  }
  
            drawChart02(outputArray00);
            drawChart03(outputArray03);
            drawChart04(outputArray04);
            drawChart05(outputArray05);
            drawChart05m(outputArray05m);
            drawChart05f(outputArray05f);
            drawChart06(outputArray06);
            drawChart07(outputArray07);
            drawChart08(outputArray08);
            drawChart09(outputArray09);
            drawChart10(outputArray10);
            drawChart01h(outputArray98);

            drawChart11(outputArray11);
            drawChart12(outputArray12);
            drawChart13(outputArray13);
            drawChart14(outputArray14);
            drawChart15(outputArray15);
            drawChart16(outputArray16);
            drawChart17(outputArray17);
            drawChart18(outputArray18);
            drawChart19(outputArray19);
            drawChart20(outputArray20);
            drawChart21(outputArray21);
            drawChart22(outputArray22);
            drawChart23(outputArray23);
            drawChart24(outputArray24);
            drawChart25(outputArray25);
            drawChart26(outputArray26);
            drawChart27(outputArray27);
            drawChart28(outputArray28);
            drawChart29(outputArray29);
            drawChart30(outputArray30);

  
    });
  
  }());

let greeting = document.querySelector('.greeting');

                    
// Get HTML content
// returns "<p>Hello world!</p>"
greeting.innerText =  '- Questionário de Pesquisa - '+pesquisaName.valueOf() ; //greeting.innerHTML;

// Set HTML content
// This replaces what was in there already
//greeting.innerHTML = 'We can add this to the beginning. ' + textfield.value();
//greeting.innerHTML = '<p>'+pesquisaName+'</p>'; //'We can dynamically change the HTML. We can even include HTML elements like <a href="#">this link</a>.';
/*

// Add HTML to the end of an element's existing content
greeting.innerHTML += 'pesquisaName';

// Add HTML to the beginning of an element's existing content
greeting.innerHTML = 'We can add this to the beginning. ' + elem.innerHTML;

// You can inject entire elements into other ones, too
greeting.innerHTML += '<p>A new paragraph</p>';
*/
  
  var drawChart01h = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
   
          var options = {
            title: 'Pesquisadores Hoje',
            hAxis: {title: 'Pesquisadores Hoje',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0},
            colors: ['#004040']

          };
  
          var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv01h'));
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
            title: perguntas['P03'].texto,
            hAxis: {title: 'Bairro',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0},
            colors: ['#008000', '#c6693e', '#cc8f6e', '#f3b49f', '#f6c7b6'
                    ,'#008000', '#c6693e', '#cc8f6e', '#f3b49f', '#f6c7b6'
                    ,'#008000', '#c6693e', '#cc8f6e', '#f3b49f', '#f6c7b6'
                    ,'#008000', '#c6693e', '#cc8f6e', '#f3b49f', '#f6c7b6'
                    ,'#008000', '#c6693e', '#cc8f6e', '#f3b49f', '#f6c7b6'
                    ,'#008000', '#c6693e', '#cc8f6e', '#f3b49f', '#f6c7b6'
                    ,'#008000', '#c6693e', '#cc8f6e', '#f3b49f', '#f6c7b6'
                    ,'#008000', '#c6693e', '#cc8f6e', '#f3b49f', '#f6c7b6']
          };
  
          var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv03'));
          chart.draw(data, options);
  }
  
  var drawChart04 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);

          var options = {
            title: '04-'+perguntas['P04'].texto,
            hAxis: {title: 'Sexo',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv04'));
          chart.draw(data, options);
  }

    var drawChart05 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: '05-'+perguntas['P05'].texto,
            hAxis: {title: 'idade',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv05'));
          chart.draw(data, options);
  }

    var drawChart05m = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: 'Masculino - idade',
            hAxis: {title: 'idade',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv05m'));
          chart.draw(data, options);
  }

    var drawChart05f = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: 'Feminino - idade',
            hAxis: {title: 'idade',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv05f'));
          chart.draw(data, options);
  }

    var drawChart06 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData); 
  
          var options = {
            title: '06-'+perguntas['P06'].texto,
            hAxis: {title: 'Instrução',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv06'));
          chart.draw(data, options);
  }     
  
    var drawChart07 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
   
          var options = {
            title: '07-'+perguntas['P07'].texto,
            hAxis: {title: 'Profissão',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv07'));
          chart.draw(data, options);
  }   
  
    var drawChart08 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: '08-'+perguntas['P08'].texto,
            hAxis: {title: 'Religião',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv08'));
          chart.draw(data, options);
  } 
        
    var drawChart09 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: '09-'+perguntas['P09'].texto,
            hAxis: {title: 'Renda',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv09'));
          chart.draw(data, options);
  }   
  
    var drawChart10 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: '10-'+perguntas['P10'].texto,
            hAxis: {title: 'Mídia',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv10'));
          chart.draw(data, options);
  
  }         

    var drawChart11 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '11-'+perguntas['P11'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray11.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv11'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv11'));
          chart.draw(data, options);
  }         
    var drawChart12 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '12-'+perguntas['P12'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray12.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv12'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv12'));
          chart.draw(data, options);
  }         
    var drawChart13 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '13-'+perguntas['P13'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray13.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv13'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv13'));
          chart.draw(data, options);
  }         
    var drawChart14 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '14-'+perguntas['P14'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
           //if (outputArray14.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv14'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv14'));
         chart.draw(data, options);
  }         
    var drawChart15 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '15-'+perguntas['P15'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray15.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv15'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv15'));
          chart.draw(data, options);
  }         
    var drawChart16 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '16-'+perguntas['P16'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray16.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv16'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv16'));
          chart.draw(data, options);
  }         
    var drawChart17 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '17-'+perguntas['P17'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray17.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv17'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv17'));
          chart.draw(data, options);
  }         
    var drawChart18 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '18-'+perguntas['P18'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray18.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv18'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv18'));
          chart.draw(data, options);
  }         
    var drawChart19 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '19-'+perguntas['P19'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray19.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv19'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv19'));
          chart.draw(data, options);
  }         
    var drawChart20 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '20-'+perguntas['P20'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray20.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv20'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv20'));
          chart.draw(data, options);
  }         
    var drawChart21 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '21-'+perguntas['P21'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray21.length > 7) 
          //	var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv21'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv21'));
          chart.draw(data, options);
  }         
    var drawChart22 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '22-'+perguntas['P22'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray22.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv22'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv22'));
          chart.draw(data, options);
  }         
    var drawChart23 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '23-'+perguntas['P23'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray23.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv23'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv23'));
          chart.draw(data, options);
  }         
    var drawChart24 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '24-'+perguntas['P24'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray24.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv24'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv24'));
          chart.draw(data, options);
  }         
    var drawChart25 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '25-'+perguntas['P25'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray25.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv25'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv25'));
          chart.draw(data, options);
  }         
    var drawChart26 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '26-'+perguntas['P26'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray26.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv26'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv26'));
          chart.draw(data, options);
  }         
    var drawChart27 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '27-'+perguntas['P27'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray27.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv27'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv27'));
          chart.draw(data, options);
  }         
    var drawChart28 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '28-'+perguntas['P28'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray28.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv28'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv28'));
          chart.draw(data, options);
  }         
    var drawChart29 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '29-'+perguntas['P29'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray29.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv29'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv29'));
          chart.draw(data, options);
  }         
    var drawChart30 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
          var options = {
            title: '30-'+perguntas['P30'].texto,
            hAxis: {title: '.',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
          //if (outputArray30.length > 7) 
          //	var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv30'));
          //else
	  var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv30'));
          chart.draw(data, options);
  }
