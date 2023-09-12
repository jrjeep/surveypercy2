var pesquisaName = 'RochaForte_ago_2023';
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
        google.charts.load('current', {'packages':['corechart']});
    
    var table = document.querySelector('#table1 tbody');
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

            var outputArray01 = [
                ['Grade', 'Bairros'],
                ['CAMPING CLUBE / LOTEAMENTO FLORAIS DA AMAZÔNIA / JARDIM SAFIRA / VILA RICA / JARDIM DO OURO / JARDIM DOS JESUÍTAS / ECO PARK RESIDENCE II / RESIDENCIAL GENTE FELIZ I, II / VILA VERDE / ITAPUÃ', 0 ],
                ['LIC NORTE / JARDIM IPORÃ / RESIDENCIAL BRASÍLIA / INDUSTRIAL NORTE (LESTE BR-163) / DISTRITO COMERCIAL E INDÚSTRIAL / CIDADE JARDIM I E II', 0 ],
                ['JARDIM DUBAI / SÃO LOURENÇO / TERRA RICA I, II / INDUSTRIAL SUL (LESTE BR-163) / JARDIM COPACABANA / VIVENDA DOS IPÊS / PORTO RICO', 0 ],
                ['RECANTO DOS BURITIS / SÃO FRANCISCO / RESIDENCIAL RESERVA CELESTE I, II, III / RESIDENCIAL MORIÁ / BOM JARDIM / COMUNIDADE VITÓRIA / RESIDENCIAL PANAMBY', 0 ],
                ['SÃO CRISTÓVÃO / MENINO JESUS I, II / IPORÃ / PÉROLA / LISBOA II, II / UMUARAMA III / VILLA ITÁLIA / CHÁCARAS DE LAZER SÃO CRISTÓVÃO / BONNE VIE', 0 ],
                ['BELA MORADA / JARDIM ATENAS / JARDIM UMUARAMA I / PARQUE TANGARÁ / RESIDENCIAL SANTA CATARINA', 0 ],
                ['SEBASTIÃO DE MATOS I, II / UMUARAMA II / VILA MARIANA / VILA LOBOS / VILA SANTANA / VILA JULIANA / VILA AMÉRICA / BOA VISTA / SABRINA I, II / NOVO JARDIM / JARDIM AURORA / ROMA', 0 ],
                ['ALTO DA GLÓRIA / CIDADE ALTA / JARDIM AMÉRICA / JARDIM VIENA / JARDIM ORIENTE / LIC SUL', 0 ],
                ['JARDIM SANTA MÔNICA / JARDIM IPIRANGA / RESIDENCIAL MARIPÁ / ADRIANO LEITÃO / JARDIM PAULISTA I, II / JARDIM IBIRAPUERA / PEQUENA LONDRES / JARAGUÁ / BOURBOM RESIDENCIAL / JARDIM NÁPOLES', 0 ],
                ['RESIDENCIAL BOUGANVILLE / JARDIM MILÃO I, II / PARQUE AMAZONAS / RESIDENCIAL MONTE CARLO / JARDIM PIENZA / RESIDENCIAL MORUMBI / MONTREAL / TULIPAS', 0 ],
                ['JARDIM ITAÚBAS / JARDIM CURITIBA I, II / JARDIM BELO HORIZONTE / RESIDENCIAL BELA SUÍÇA / QUINTA DA PAMPULHA / SANTA ROSA', 0 ],
                ['JARDIM JACARANDÁS / INDUSTRIAL SUL OESTE DA BR 163 / HABITAR BRASIL / JARDIM CELESTE / JARDIM BOTÂNICO / JARDIM PARAÍSO I, II E III"}', 0 ],
                ['JARDIM MARINGÁ I, II / SETOR RESIDENCIAL SUL / SETOR COMERCIAL PARTE SUL', 0 ],
                ['RESIDENCIAL NORTE / SETOR COMERCIAL PARTE NORTE (AO NORTE DA JULIO CAMPOS) / INDUSTRIAL (OESTE BR-163)', 0 ],
                ['JARDIM JEQUITIBÁS / JARDIM OLIVEIRAS I, II / JARDIM VIOLETAS / JARDIM DAS PALMEIRAS / JARDIM IMPERIAL', 0 ],
                ['JARDIM EUROPA / RESIDENCIAL DELTA / RESIDENCIAL VITÓRIA RÉGIA / JARDIM CONQUISTA / JARDIM BOA ESPERANÇA / JARDIM SANTA RITA / JARDIM NOVO ESTADO / JARDIM DOS IPÊS', 0 ],
                ['CARANDÁ BOSQUE / NOVO HORIZONTE / SÃO PAULO I, II', 0 ],
                ['MARIA VINDILINA I, II, III / RECANTO DOS PÁSSAROS / JARDIM TARUMÃS / JARDIM DAS ACÁCIAS / JARDIM ARAGUAIA / COMUNIDADE BETEL / CAMPO VERDE', 0 ],
                ['DAURY RIVA / JARDIM VENEZA / JARDIM CALIFÓRNIA / JARDIM IGUATEMI / JARDIM AZALÉIAS / JARDIM MARIA CAROLINA / JARDIM DOS CRAVOS', 0 ],
                ['JARDIM CARIBE / JARDIM DAS ROSAS / KAIABI RESIDENCIAL / RECANTO DA MATA / RESIDENCIAL PRIVILLEGE', 0 ],
                ['JARDIM ITÁLIA I, II, III / BARCELONA I, II / RESIDENCIAL FLORENÇA I, II, III, IV, V / RESIDENCIAL DEVILLE / SANTA CECÍLIA / IPANEMA', 0 ],
                ['RECANTO SUIÇO / AQUARELA BRASIL RESIDENCIAL / JARDIM DAS NAÇÕES / NOSSA SENHORA APARECIDA / JARDIM DE MONET', 0 ],
                ['RIVIERA SUÍÇA / PORTINARI I, II / SAN MARTINI', 0 ],
                ['RESIDENCIAL MONDRIAN / PORTAL DA MATA / CARPE DIEM RESIDENCIAL / ALAMEDA DAS CORES', 0 ],
                ['RESIDENCIAL PARIS / AQUARELA DAS ARTES', 0 ],
                ['JARDIM PRIMAVERAS / PARQUE DAS ARARAS I, II / JARDIM DAS ORQUÍDEAS / RESIDENCIAL CANADÁ / INDUSTRIAL NORTE', 0 ],
                ['BELVEDERE I, II E III / VILLA TOSCANA / CANARINHO', 0 ]
                //['Liberdade', 0 ],
                //['Nova Esperança', 0 ],
                //['Santa Isabel', 0 ],
                //['Bela Vista', 0 ],
                //['União do Norte (zona rural)', 0 ]

            ];
  
            var outputArray03 = [
                ['Grade', 'Sexo'],
                ['Masculino', 0],
                ['Femimino', 0],
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
                ['MENOS DE R$ 1.320,00', 0],
                ['R$ 1.321,00 A R$ 3.960,00 (1 A 3 S.M.)', 0],
                ['R$ 3.961,00 A R$ 6.600,00 (3 A 5 S.M.)', 0],
                ['R$ 6.601,00 A R$ 13.200,00 (5 A 10 S.M.)', 0],
                ['R$ 13.201,00 ACIMA (MAIS DE 10 S.M.)', 0]
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
                ['PRODUTOR(A) RURAL (AGRICULTOR(A), PECUARISTA)', 0]                
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
            
            //Proprietario
            var outputArray11 = [
                ['Grade', 'Proprietario/Construtor'],
                ['Proprietário(a)', 0],
                ['Pedreiro(a)', 0],
                ['Mestre de Obras', 0],
                ['Arquiteto(a)', 0],
                ['Engenheiro(a)', 0],
                ['Construtor(a)', 0]
            ];
            
//Peixoto jun 23 
//18 - 09 - intenção de voto estimulada
            var outputArray18 = [
                ['Grade', 'intenção'],
                ['CALEBE BORGES', 0 ],
                ['PAULINHO DO POSTO', 0 ],
                ['ZINHA', 0 ],
                ['SINVALDO', 0 ],
                ['PAULISTINHA', 0 ],
                ['GILMAR DO ESPORTE', 0 ],
                ['DONA LEDA', 0 ],
                ['BRANCO/NULO', 0 ],
                ['NS/NR', 0 ]
            ];
//22 - 04 - disputa entre kaleb e paulistinha
            var outputArray22 = [
                ['Grade', 'intenção'],
                ['CALEBE BORGES', 0 ],
                ['PAULISTINHA', 0 ],
                ['BRANCO/NULO', 0 ],
                ['NS/NR', 0 ]
            ];
//24 - 09 - rejeicao estimulada
            var outputArray24 = [
                ['Grade', 'intenção'],
                ['CALEBE BORGES', 0 ],
                ['PAULINHO DO POSTO', 0 ],
                ['ZINHA', 0 ],
                ['SINVALDO', 0 ],
                ['PAULISTINHA', 0 ],
                ['GILMAR DO ESPORTE', 0 ],
                ['DONA LEDA', 0 ],
                ['BRANCO/NULO', 0 ],
                ['NS/NR', 0 ]
            ];
//26 - 05 - avaliacao do pref mauricio
            var outputArray26 = [
                ['Grade', 'intenção'],
                ['Otimo', 0 ],
                ['Bom', 0 ],
                ['Regular', 0 ],
                ['Ruim', 0 ],
                ['Péssimo', 0 ]
            ];

// fim Peixoto
            
  //pesquisador 
  var R00 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];           
  //pesquisador ultima resposta            
  var R99 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  //pesquisador Hoje            
  var R98 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var R00H = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];           

  //idade
  var R06 = [0,0,0,0,0,0,0]; R06

  //bairro
  var R09 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //R09

  //sexo
  var R05 = [0,0,0,0,0]; //R05

  //renda
  var R08 = [0,0,0,0,0,0]; //R08

  //Profissão
  var R04 = [0,0,0,0,0,0,0,0,0,0]; //R04

  //Instrução
  var R07 = [0,0,0,0,0,0]; //R07

  //Religião
  var Z08 = [0,0,0,0,0,0,0,0]; //Não usa

  //Mídia
  var R13 = [0,0,0,0,0,0,0,0,0,0,0]; //R13

  //Proprietario
  var R03 = [0,0,0,0,0,0]; 
  
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

                  } else if ((x==1) && ( students[i][j].slice(students[i][j].length-6, students[i][j].length) == 'victor')){ 
                  //} else if ((x==1) && ( students[i][j].slice(students[i][j].length-13, students[i][j].length) == 'pesquisador06')){ 
                      x = 0;
                        var R99 = [0,0,0,0,0,0,0,0,0,0,0,0,0,1];
                        outputArray00[13][1]= students[i][j].slice(0, 3); 
                        if ( (students[i][j].slice(8, 18) == currentDate)){ 
                        	R98 = R99;
                        } 
                  } 
                  
                  /*if ((x==1) && (students[i][j].slice(8, 12) == '2023')){ 
                  	R98 = R99;
                  } else {
                  	R98 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 	
                  }
                  */
                  
                  if (students[i][j] == 'R2599'){ 
                  	for(let i=1; i < R00.length; i++) {
                  	  R00[i] = R00[i] + R99[i];
                  	  R00H[i] = R00H[i] + R98[i];
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
			  for (let i = 1; i < 27; i++)  {
			  	outputArray01[i][1]=outputArray01[i][1]+R09[i];
			  }

			  //Renda
			  for (let i = 1; i < R08.length; i++)  {
			  	outputArray09[i][1]=outputArray09[i][1]+R08[i];
			  }

			  //Profissão
			  for (let i = 1; i < R04.length; i++)  {
			  	outputArray07[i][1]=outputArray07[i][1]+R04[i];
			  }

			  //Instrução
			  for (let i = 1; i < R07.length; i++)  {
			  	outputArray06[i][1]=outputArray06[i][1]+R07[i];
			  }
                  	
			  //Religião
			  for (let i = 1; i < Z08.length; i++)  {
			  	outputArray08[i][1]=outputArray08[i][1]+Z08[i];
			  }

			  //Mídia
			  for (let i = 1; i < R13.length; i++)  {
			  	outputArray10[i][1]=outputArray10[i][1]+R13[i];
			  }
			  
			  //Proprietario
			  for (let i = 1; i < R03.length; i++)  {
			  	outputArray11[i][1]=outputArray11[i][1]+R03[i];
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
                  	
                  	//idade
		        R06 = [0,0,0,0,0,0,0];

		        //bairro
		        R09 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

		        //sexo
		        R05 = [0,0,0,0,0];

		        //Renda
		        R08 = [0,0,0,0,0,0];
			  
			//Profissão
			R04 = [0,0,0,0,0,0,0,0,0,0];

		        //Instrução
		        R07 = [0,0,0,0,0,0];

		        //Religião
		        Z08 = [0,0,0,0,0,0,0,0];

			//Mídia
			R13 = [0,0,0,0,0,0,0,0,0,0,0];	
			
			//Proprietario
			R03 = [0,0,0,0,0,0];	
			        
                      R99 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      R98 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                  }  
                  
                  if (students[i][j].slice(0,5).toLowerCase() == 'teste'){ 
                      R99 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      R98 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		      teste = 1; // teste verdadeiro 
                  } 
                  
               if (teste == 0) {   
               //if (true) {

		  //bairro               
                  if (students[i][j].slice(0,3) == 'R09'){ 
                  	R09 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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

                  //Renda               
                  if (students[i][j].slice(0,3) == 'R08'){ 
                   	R08 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      R08[indice] = R08[indice]+1;
                  }

                  //Profissão               
                  if (students[i][j].slice(0,3) == 'R04'){ 
                   	R04 = [0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 11};
                      R04[indice] = R04[indice]+1;
                  }

                  //Instrução               
                  if (students[i][j].slice(0,3) == 'R07'){ 
                   	R07 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 11};
                      R07[indice] = R07[indice]+1;
                  }

                  //Religião               
                  if (students[i][j].slice(0,3) == 'Z08'){ 
                   	Z08 = [0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 7};
                      Z08[indice] = Z08[indice]+1;
                  }

                  //Mídia               
                  if (students[i][j].slice(0,3) == 'R13'){ 
                   	R13 = [0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 10};
                      R13[indice] = R13[indice]+1;
                  }
                  
                  //Proprietario               
                  if (students[i][j].slice(0,3) == 'R03'){ 
                   	R03 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 10};
                      R03[indice] = R03[indice]+1;
                  }
                  
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
  	outputArray98[i][1]=R00H[i];
  }
  /* está fazendo acima, para filtrar formularios totalmente preenchidos
  //sexo
  for (let i = 1; i < R09.length; i++)  {
  	outputArray03[i][1]=R09[i];
  }  

  //idade
  for (let i = 1; i < R05.length; i++)  {
  	outputArray04[i][1]=R05[i];
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
            drawChart18(outputArray11);
            drawChart22(outputArray22);
            drawChart24(outputArray24);
            drawChart26(outputArray26);
            drawChart98(outputArray98);
  
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

  var drawChart98 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
  
          var options = {
            title: 'Pesquisadores Hoje',
            hAxis: {title: 'Pesquisadores',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0},
            colors: ['#004040']

          };
  
          var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv98'));
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

// Peixoto jun 2023  
    var drawChart18 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: 'Proprietario/Construtor',
            hAxis: {title: 'Proprietario/Construtor',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv18'));
          chart.draw(data, options);
  
  }
    var drawChart22 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: 'disputa entre Calebe e Paulistinha',
            hAxis: {title: 'Mídia',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv22'));
          chart.draw(data, options);
  
  }
    var drawChart24 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: 'rejeicao estimulada',
            hAxis: {title: 'Mídia',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.ColumnChart(document.getElementById('bellChartDiv24'));
          chart.draw(data, options);
  
  }
    var drawChart26 = function(withData) {
          var data = google.visualization.arrayToDataTable(withData);
  
          var options = {
            title: 'avaliacao do pref',
            hAxis: {title: 'Mídia',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('bellChartDiv26'));
          chart.draw(data, options);
  
  }    
