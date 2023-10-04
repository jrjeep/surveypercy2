var pesquisaName = 'Machado_Set_2023';
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
    
//    const pesquisaName = 'Sinop_Midia_Abr_2023';
    // Load Charts and the corechart package.
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
                ['ALTO DA GLÓRIA I, II E III / CIDADE ALTA / JD VIENA / JD VILA BELLA / LIC SUL / JD ORIENTE / JD RIO PRETO / JD AMÉRICA', 0 ],
                ['JD AURORA / SEBASTIÃO DE MATOS I E II / JD UMUARAMA II E III / JD ROMA / BOA VISTA / RESID SABRINA I, II E III / NOVO JD / CHÁC DE LAZER MONALIZA', 0 ],
                ['VILLA REAL / BELA VILLE / PAINERAS / JD LIBERDADE / JD TROPICAL / BELA MORADA / MENINO JESUS I E II / VILLA ITÁLIA', 0 ],
                ['COSTA RICA / PORTO RICO / LUXEMBURGO / MÓRIA / PANAMBY I E II / BURITIS / SÃO FRANCISCO / RESERVA CELESTE', 0 ],
                ['BELVEDERE I E II / COND NICO BARACAT / JD MÁLAGA / VIDA NOVA / COND FLAMBOYANTS / BOM JD / CHÁC VITÓRIA / VILLA TOSCANA I E II / VILA TORINOS / BELVEDERE III / CANARINHO I E III / JAMARI', 0 ],
                ['JD UMUARAMA / PQ TANGARÁ / JD ATENAS / JD LISBOA I E II / RESID PÉROLA / BAIRRO SÃO CRISTOVÃO / RESID IPIRANGA / RESID MARIPÁ / UIRAPURU / PEQUENA LONDRES / BOURBON RESID / RESID JARAGUÁ / RESID BONNE VIE / RESID SANTA CATARINA / JD SANTA MÔNICA', 0 ],
                ['CIDADE NOVA / SONHALTO VIDEIRAS / VILLA VORATA / RAVENA / COMUNIDADE NOSSA SENHORA DE FÁTIMA / JD MILÃO I E II / QUATRO ESTAÇÕES BOULEVARD / MORUMBI', 0 ],
                ['MONTE CARLO / JD SANTA ROSA / RESID PIENZA / RESID MONTREAL PARK / CHÁC DE LAZER SÃO CRISTÓVÃO I E II / JD PAULISTA I E II / JD IBIRAPUERA / RESID ADRIANO LEITÃO / RESID LONDRINA / JD NAPOLES / JD TULIPAS', 0 ],
                ['JD ITAÚBAS (ZONA 07) / JD CURITIBA I E II / PLATINI URBAN PARK / RESID BOUNGAINVILLE / PQ AMAZONAS', 0 ],
                ['HABITAR BRASIL / JOÃO PAULO II 1 E 2 / MATO GROSSO I E II / RESID CELESTE / JD CELESTE / JD DOS JACARANDÁS / RESID ALLEGRO', 0 ],
                ['SETOR IND SUL / DISTRITO IND E COMERCIAL / SETOR IND / SETOR IND NORTE / RESID BRASÍLIA', 0 ],
                ['JD BOTÂNICO / SETOR RESID SUL', 0 ],
                ['TERRA RICA I E II / LEBLOM / JD COPACABANA', 0 ],
                ['SÃO LOURENÇO I E II / JD DUBAI / COND TUIM RESID / VIVENDA DOS IPÊS / CIDADE JARDIM I E II / PORTAL DO SERVIDOR', 0 ],
                ['RESID GOIABEIRAS / LIC NORTE / VILLA VERDE / COND RESID ECOVILLE / GENTE FELIZ I E II / JD IPORÃ', 0 ],
                ['SAFIRA / VILA RICA / JD ITAPUÃ / FLORAIS DA AMAZÔNIA / JD TOLEDO / JD DOS JESUÍTAS / JD DO OURO', 0 ],
                ['CAMPING CLUBE / JD PLANALTO / EIXO NORTE', 0 ],
                ['SETOR COMERCIAL', 0 ],
                ['JD PARAÍSO I, II E III / JD MARINGÁ I E II', 0 ],
                ['BELO HORIZONTE / QUINTA DA PAMPULHA / BELA SUIÇA I, II E III', 0 ],
                ['SETOR RESID NORTE / JD DAS PRIMAVERAS', 0 ],
                ['PQ DAS ARARAS I E II / RESID CANADÁ / JD GRAMADO / JD DAS ORQUÍDEAS', 0 ],
                ['JD DAS NAÇÕES I, II E III / NOSSA SENHORA APARECIDA I E II', 0 ],
                ['JD IMPERIAL / JD DAS PALMEIRAS', 0 ],
                ['RESID JEQUITIBÁS / JD DAS VIOLETAS', 0 ],
                ['JD DAS OLIVEIRAS / JD DAS AZALÉIAS / JD MARIA CAROLINA / JD DOS CRAVOS', 0 ],
                ['JD DAS ROSAS / KAIABI RESID / PRIVILLEGE RESID / RECANTO DA MATA / FLOR DO CARIBE RESID / JD CARIBE', 0 ],
                ['JD VENEZA / DAURY RIVA / JD CALIFÓRNIA', 0 ],
                ['MARIA VINDILINA I, II E III / COMUNIDADE BETEL / RECANTO DOS PÁSSAROS / JD TARUMÃS / JD DAS ACÁCIAS', 0 ],
                ['RESID IGUATEMI / MOINHO DOS VENTOS / RESID ARAGUAIA / CAMPO VERDE', 0 ],
                ['JD NOVO HORIZONTE / JD SÃO PAULO I E II / CARANDÁ BOSQUE / JD IPÊ / JD NOVO ESTADO / JD SANTA RITA', 0 ],
                ['JD BOA ESPERANÇA / JD CONQUISTA', 0 ],
                ['JD VITÓRIA RÉGIA / RESID DELTA / FIGUEIRAS RESID / JD EUROPA', 0 ],
                ['LOTEAMENTO VILLAGE / ITÁLIA I, II E III / BARCELONA I E II', 0 ],
                ['FLORENÇA / LIFE SINOP CLUB RESIDENCE / RESID SANTA CECÍLIA / RESID DEVILLE / ATIVA SAÚDE CENTER / IPANEMA', 0 ],
                ['JD DE MONET / RECANTO SUIÇO / AQUARELA BRASIL RESID', 0 ],
                ['COND MONDRIAN / COND PORTAL DA MATA / COND CARPE DIEM', 0 ],
                ['RESID PARIS / AQUARELA DAS ARTES / ALAMEDA DAS CORES / AQUARELA DOS POEMAS', 0 ],
                ['RESID PQ DO LAGO / RIVIERA SUÍÇA I E II / PORTINARI / SANTORINI RESIDENCE / SAN MARTINI / BAIRRO EUNICE / BAIRRO EUNICE - SÃO LUCAS', 0 ]

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
  var R07 = [0,0,0,0,0,0,0]; //R07

  //bairro 
  var R10 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //R10

  //sexo
  var R06 = [0,0,0,0,0]; //R06

  //renda
  var R09 = [0,0,0,0,0,0]; //R09

  //Profissão
  var R05 = [0,0,0,0,0,0,0,0,0,0]; //R05

  //Instrução
  var R08 = [0,0,0,0,0,0]; //R08

  //Religião
  var Z08 = [0,0,0,0,0,0,0,0]; //Não usa

  //Mídia
  var R11 = [0,0,0,0,0,0,0,0,0,0,0]; //R11

  //Proprietario
  var R04 = [0,0,0,0,0,0,0];  //R04
  
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
                  
                  if (students[i][j] == 'R3199'){ 
                  	for(let i=1; i < R00.length; i++) {
                  	  R00[i] = R00[i] + R99[i];
                  	  R00H[i] = R00H[i] + R98[i];
                  	}
                  	
                  	  //sexo
			  for (let i = 1; i < R06.length; i++)  {
			  	outputArray03[i][1]=outputArray03[i][1]+R06[i];
			  }  

			  //idade
			  for (let i = 1; i < R07.length-1; i++)  {
			  	outputArray04[i][1]=outputArray04[i][1]+R07[i];
			  }   
			  
			  //Bairro
			  for (let i = 1; i < 39; i++)  {
			  	outputArray01[i][1]=outputArray01[i][1]+R10[i];
			  }

			  //Renda
			  for (let i = 1; i < R09.length; i++)  {
			  	outputArray09[i][1]=outputArray09[i][1]+R09[i];
			  }

			  //Profissão
			  for (let i = 1; i < R05.length; i++)  {
			  	outputArray07[i][1]=outputArray07[i][1]+R05[i];
			  }

			  //Instrução
			  for (let i = 1; i < R08.length; i++)  {
			  	outputArray06[i][1]=outputArray06[i][1]+R08[i];
			  }
                  	
			  //Religião
			  for (let i = 1; i < Z08.length; i++)  {
			  	outputArray08[i][1]=outputArray08[i][1]+Z08[i];
			  }

			  //Mídia
			  for (let i = 1; i < R11.length; i++)  {
			  	outputArray10[i][1]=outputArray10[i][1]+R11[i];
			  }
			  
			  //Proprietario
			  for (let i = 1; i < R04.length; i++)  {
			  	outputArray11[i][1]=outputArray11[i][1]+R04[i];
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
		        R07 = [0,0,0,0,0,0,0];

		        //bairro
		        R10 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

		        //sexo
		        R06 = [0,0,0,0,0];

		        //Renda
		        R09 = [0,0,0,0,0,0];
			  
			//Profissão
			R05 = [0,0,0,0,0,0,0,0,0,0];

		        //Instrução
		        R08 = [0,0,0,0,0,0];

		        //Religião
		        Z08 = [0,0,0,0,0,0,0,0];

			//Mídia
			R11 = [0,0,0,0,0,0,0,0,0,0,0];	
			
			//Proprietario
			R04 = [0,0,0,0,0,0];	
			        
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
                  if (students[i][j].slice(0,3) == 'R10'){ 
                  	R10 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                      var indice03 = parseInt(students[i][j].slice(3,5))
                      R10[indice03] = R10[indice03]+1;
                  }

		  //sexo                    
                  if (students[i][j].slice(0,3) == 'R06'){ 
                  	R06 = [0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      //if indice = 99 {indice = 4}
                      R06[indice] = R06[indice]+1;
                  }
                  
                  //idade               
                  if (students[i][j].slice(0,3) == 'R07'){ 
                   	R07 = [0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      R07[indice] = R07[indice]+1;
                  }

                  //Renda               
                  if (students[i][j].slice(0,3) == 'R09'){ 
                   	R09 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      R09[indice] = R09[indice]+1;
                  }

                  //Profissão               
                  if (students[i][j].slice(0,3) == 'R05'){ 
                   	R05 = [0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 11};
                      R05[indice] = R05[indice]+1;
                  }

                  //Instrução               
                  if (students[i][j].slice(0,3) == 'R09'){ 
                   	R08 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 11};
                      R08[indice] = R08[indice]+1;
                  }

                  //Religião               
                  if (students[i][j].slice(0,3) == 'Z08'){ 
                   	Z08 = [0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 7};
                      Z08[indice] = Z08[indice]+1;
                  }

                  //Mídia               
                  if (students[i][j].slice(0,3) == 'R11'){ 
                   	R11 = [0,0,0,0,0,0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 10};
                      R11[indice] = R11[indice]+1;
                  }
                  
                  //Proprietario               
                  if (students[i][j].slice(0,3) == 'R04'){ 
                   	R04 = [0,0,0,0,0,0];
                      var indice = parseInt(students[i][j].slice(3,5))
                      if (indice == 99) { indice = 7};
                      R04[indice] = R04[indice]+1;
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
