var pesquisaName1 = '';
var pesquisaName2 = '';
var pesquisaName3 = '';
var pesquisaName4 = '';
var pesquisaName5 = '';
var x = 0;
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

    const dbEvaluationQuestRef = firebase.database().ref('Questionario');//.endAt('05');
    	
    	
    	dbEvaluationQuestRef.once("value")
	  .then(function(snapshot) {
	    snapshot.forEach(function(childSnapshot) {
	      switch (x) { 
	      	case 0: pesquisaName1 = childSnapshot.key;
	      	case 1: pesquisaName2 = childSnapshot.key;
	      	case 2: pesquisaName3 = childSnapshot.key;
	      	case 3: pesquisaName4 = childSnapshot.key;
	      	case 4: pesquisaName5 = childSnapshot.key;
	      	//case 6: return true;
	      }
	      x++;
	      // Cancel enumeration
	      //return true;
	  }
	  );
	  


    //});   



let greeting = document.querySelector('.greeting');
greeting.innerText =  '- Questionário de Pesquisa - '+pesquisaName.valueOf() ; //greeting.innerHTML;
  
let greeting1 = document.querySelector('.greeting1');
greeting1.innerText =  ' Pesquisa: '+pesquisaName1.valueOf() ; //greeting.innerHTML;

let greeting2 = document.querySelector('.greeting2');
greeting2.innerText =  ' Pesquisa: '+pesquisaName2.valueOf() ; //greeting.innerHTML;

let greeting3 = document.querySelector('.greeting3');
greeting3.innerText =  ' Pesquisa: '+pesquisaName3.valueOf() ; //greeting.innerHTML;

let greeting4 = document.querySelector('.greeting4');
greeting4.innerText =  ' Pesquisa: '+pesquisaName4.valueOf() ; //greeting.innerHTML;

let greeting5 = document.querySelector('.greeting5');
greeting5.innerText =  ' Pesquisa: '+pesquisaName5.valueOf() ; //greeting.innerHTML;


	}); // final do get quest name
	

  }()); // final da function

                    
// Get HTML content
// returns "<p>Hello world!</p>"
//greeting.innerText =  '- Questionário de Pesquisa - '+pesquisaName.valueOf() ; //greeting.innerHTML;

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
  
