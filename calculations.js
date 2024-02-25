/*function calculate() {
  // Get the selected values from the two select elements
  const num1 = parseInt(document.getElementById('cropdata').value);
  const num2 = parseInt(document.getElementById('soil').value);

  // Perform the addition
  const sum = num1 + num2;

  // Display the result
  document.getElementById('wateroutput').textContent = sum;
  //document.getElementById('timetaken').textContent = sum;
}
function calculate() {
  // Get the selected value from the select element
  const num1 = parseInt(document.getElementById('cropdata').value);

  // Get the entered value from the input field
  const num2 = parseInt(document.getElementById('area').value);

  const num3 = parseInt(document.getElementById('soil').value);

  // Perform the addition
  const sum = num1 + num2 + num3;

  // Set the result to the input value
  document.getElementById('wateroutput').value = sum;
  document.getElementById('timetaken').value = sum;
  document.getElementById('fert').value = sum;
  document.getElementById('seed').value = sum;
  document.getElementById('cost').value = sum;
}
function handleOption() {
  const selectedOption = document.getElementById('options').value;

  switch (selectedOption) {
    case 'option1':
      // Code to execute for Option 1
      console.log("Option 1 selected");
      break;
    case 'option2':
      // Code to execute for Option 2
      console.log("Option 2 selected");
      break;
    case 'option3':
      // Code to execute for Option 3
      console.log("Option 3 selected");
      break;
    default:
      console.log("Invalid option");
      break;
  }
}

function handleOption() {
  const selectedOption = document.getElementById('options').value;

  if (selectedOption === 'option1') {
    // Code to execute for Option 1
    console.log("Option 1 selected");
  } else if (selectedOption === 'option2') {
    // Code to execute for Option 2
    console.log("Option 2 selected");
  } else if (selectedOption === 'option3') {
    // Code to execute for Option 3
    console.log("Option 3 selected");
  } else {
    console.log("Invalid option");
  }
}
document.getElementById('wateroutput').value = num1 + "-" + sum;
  document.getElementById('timetaken').value = sum;
  document.getElementById('fert').value = sum;
  document.getElementById('seed').value = sum;
  document.getElementById('cost').value = sum;

*/function reset() {
  // Reset the selected value in the select element
  document.getElementById('wateroutput').selectedIndex = 0;

  document.getElementById('cropdata').selectedIndex = 0;

  document.getElementById('soil').selectedIndex = 0;

  // Clear the entered value in the input field
  document.getElementById('area').value = '';

   
  // Clear the displayed result
  document.getElementById('wateroutput').value = '';
  document.getElementById('timetaken').value = '';
  document.getElementById('fert').value = '';
  document.getElementById('seed').value = '';
  document.getElementById('cost').value = '';
}



function calculate() {
  
  // Get the selected value from the select element
  const num1 = parseInt(document.getElementById('cropdata').value);

  // Get the entered value from the input field
  const num2 = parseFloat(document.getElementById('area').value);

  const num3 = parseInt(document.getElementById('soil').value);
 const hq=126;// used for converting area to heactor


  // Perform the addition
  //const sum = num1 + num2 + num3;
     //#1 Tomato
  if (num1 === 50) {
    const w1=500,w2=600,t1=3,s1=200,s2=300,sK=0.001,n1=1200,n2=1500,N=1.5,P=0.8,p1=600,p2=800,ar=500,arA=0.000247;
     
   if(num3== -2 || num3== -3 ||num3== -4 || num3== -7 ){
    const w1=400,w2=500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" liters per week";
    document.getElementById('timetaken').value = t1+"-4"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+(P*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value =  (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
   }else if(num3== -6){
    const w1=600,w2=800,s1=500,s2=600,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" liters per week";
    document.getElementById('timetaken').value = "4"+"-5"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+(P*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
   }else if(num3== -5 || num3== -8){
    const w1=300,w2=500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" liters per week";
    document.getElementById('timetaken').value = "4"+"-5"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+(P*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value =  (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";;
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
   }else if(num3== -1){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" liters per week";
    document.getElementById('timetaken').value = "4"+"-5"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+(P*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value =  (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
   }

    // Code to execute for Option 1
    //document.getElementById('wateroutput').value = num1 + "-" + sum;
  } if (num1 === 18) {  // POTATOS 
    const w1=250,w2=300,t1=4,s1=4,s2=5,sK=0.001,N=150,P=45,K=150,ar=33.73,arA=0.000247,ml_l=0.001;
    if(num3== -2 || num3==-3 ){ 

      const w1=350,w2=450,ar=40,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2)  +"liters)" +"per week";
      document.getElementById('timetaken').value = t1+"-5"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2)  +"N-"+(P*num2).toFixed(2)  +"P-"+ ( K*num2).toFixed(2)  +"K )kgs";
      document.getElementById('seed').value =  (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3)  +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2)  +"sq meters"+"("+(ar*arA*num2).toFixed(3)  +"acres)";

    }
    else if( num3== -7 || num3==-8 ){
      const w1=350,w2=500,ar=45,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
      document.getElementById('timetaken').value = t1+"-5"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+(P*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value =  (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

    }
    else if(num3==-4){
      const w1=400,w2=550,ar=45,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
      document.getElementById('timetaken').value = t1+"-5"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+(P*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value =  (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      
    }
    else if(num3==-6){
      const w1=800,w2=1200,s1=1000,s2=1200,sK=0.001,ar=48,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
      document.getElementById('timetaken').value = t1+"-5"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+(P*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3== -5 ){
      const w1=400,w2=600,t1=4,t2=5;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
      document.getElementById('timetaken').value = t1+"-4"+"-5"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+(P*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-1)
       //w1=400,w2=500,ar1=35,arA=0.0002470.00864869;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
      document.getElementById('timetaken').value = t1+"-8"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+(P*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
      

    // Code to execute for Option 2
    //document.alert("Option 2 selected");
       
    
       // ROSE
        
    if(num1=== 12){ 
      const w1=300,w2=400,N=10,K=10,P=10,t1=8,ar=20,arA=0.000247,ml_l=0.001;
      if(num3==-2 || num3==-3 || num3== -8){
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
      document.getElementById('timetaken').value = t1+"-12"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = "(Roses are usually grown from cuttings, so seeds may not be used)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

      }
      else if(num3==-1 || num3==-4){
        const w1=400,w2=500;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-12"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "(Roses are usually grown from cuttings, so seeds may not be used)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  
      }
      else if(num3== -5){
        const w1= 500 ,w2= 600;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-12"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "(Roses are usually grown from cuttings, so seeds may not be used)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  
      }
      else if(num3 == -6){
        const w1=800 ,w2=1000;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-12"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "(Roses are usually grown from cuttings, so seeds may not be used)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  
      } 
      else if(num3==-7){
        const w1=400,w2=500;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-12"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "(Roses are usually grown from cuttings, so seeds may not be used)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  
      }
    }
    // JASMINE
    if(num1=== 20){

      const w1=25,w2=30,N=20,P=20,K=20,t1=7,ar=200,arA=0.000247,s1=1,s2=1.5,sK=0.001,ml_l=0.001;
      if(num3==-2 || num3==-3){ // black and red soils
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-8"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3==-1 || num3==-8){
        //allivial and forest soil
         const w1=20,w2=25, s1=1,s2=1.2,t1=6,sK=0.001,ar=175,arA=0.000247;
         document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-7"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value =(s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3== -5 || num3== -4){
        // mountain and lateriate soil
        const w1=30,w2=35,s1=3,s2=4.5,sK=0.001,ar=150,arA=0.000247;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-8"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3== -6){ // desert soil
        const w1=40,w2=50,t1=8,s1=2,s2=3,ar=250,arA=0.000247,sK=0.001
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-9"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3== -7){
        const w1=35,w2=45,ar=175,arA=0.000247;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-8"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value =(s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
       
      }
      // MARIGOLD
      if(num1== 25){
        const w1=400,w2=500,t1=3,ar=6,arA=0.000247,s1=1,s2=1.5,sK=0.001,N=10,P=20,K=20,ml_l=0.001;
        if(num3== -3 || num3== -4)//red and laterite soil
        {
            const s1=0.6,s2=1,sK=0.001;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-4"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";


        } 
        else if(num3==-1 || num3==-8)  // forest and alluvial soil
         {
             const w1=350,w2=450,s1=0.5,s2=0.8,sK=0.001,ar=6,arA=0.000247,t1=4;
             document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
        document.getElementById('timetaken').value = t1+"-5"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value =(s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

        }
        else if(num3== -6){
          //desert soil
          const w1=800,w2=1000,s1=1,s2=1.5,t1=5,sK=0.001,ar=4,arA=0.000247;
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
          document.getElementById('timetaken').value = t1+"-6"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  
        }
       else if(num3==-5) //mountain soil
       {
        const w1=500,w2=600,s1=0.8,s2=1.2,sK=0.0012,ar=12,arA=0.000247;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
          document.getElementById('timetaken').value = t1+"-5"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
       }
       else if(num3==-2) //black soil
       {
          const w1=450,w2=550,s1=0.5,s2=1,sK=0.001,ar=8,arA=0.000247;
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2) +" milliliters " + "("+ (w2*num2*ml_l).toFixed(2) +"liters)" +"per week";
          document.getElementById('timetaken').value = t1+"-4"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
       }
      }
      //orchids
     if(num1==7){
       const w1=1000 ,w2=1500,N=20,P=20,K=20,ar=400,arA=0.000247;
       if(num3==-2 || num3==-8){
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters" +" per week";
        document.getElementById('timetaken').value = "3+ years";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value ="N/A(propogation and cutting )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

       }
        else if(num3==-1){
        const w1=800,w2=1200;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value = "3+ years";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A(propogation and cutting )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

       }
       else if(num3==-5){
        const w1=1200,w2=1800;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value = "3+ years";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A(propogation and cutting )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

       }
       else if(num3==-6){
        const w1=2000,w2=3000;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value = "3+ years";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A(propogation and cutting )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

       }
       else if(num3==-4 || num3==-7){
        const w1=1200,w2=1600;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value = "3+ years";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A(propogation and cutting )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

       }

       else (num3==-3)
       {
        const w1=1500,w2=2000;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value = "3+ years";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A(propogation and cutting )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

       }



     }
     //lily
     if(num1===10){
      const w1=30,w2=40,t1=3,N=20,P=40,K=40,ar=150,arA=0.000247;
      if(num3== -2 || num3==-3 || num3== -8){
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-6"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A(propogation and cutting )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3== -5 || num3==-4){
        const w1=40,w2=50;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-6"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A(propogation and cutting )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3==-6){
        const w1=50,w2=60;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-6"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A(propogation and cutting )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else{
        const w1=20,w2=30;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-6"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A(propogation and cutting )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
     }
     //Chrysanthemum

     if(num1==51){
        const w1=10,w2=15,N=10,P=10,K=10,s1=10,s2=20,sK=0.001,t1=3,ar=2,arA=0.000247;

        if(num3== -2 || num3==-3){
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-4"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value =  (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
        else if(num3==-1 || num3==-8){
          const w1=8,w2=12;
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-4"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
        else if(num3==-6){
          const w1=20,w2=25;
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-4"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value =  (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
        else if(num3==-5){
         const w1=15,w2=20;
         document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
         document.getElementById('timetaken').value =t1+"-4"+" months";
         document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
         document.getElementById('seed').value =  (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
         document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
        else {
          const w1=12,w2=18;
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-6"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value =  (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
      }

     //Hibiscus
     if(num1===69){
      const w1=20,w2=25,t1=6,N=5,P=10,K=5,s1=10,s2=150,sK=0.001,ar=35,arA=0.000247;
      if(num3==-2 || num3== -3){
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-8"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        
      }
      else if(num3== -1 || num3== -4){
        const w1=25,w2=30;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-8"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
      else if(num3== -5 || num3== -8){
        const w1=30,w2=35;
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-6"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
        else if(num3== -6){ 
          const w1=35,w2=40;
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-6"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
        else{
          const w1=25,w2=30;
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-6"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
      
     }
    //  gladiolus
     if(num1=== 56){
      const w1=25,w2=30,N=10,P=20,K=18,s1=60,s2=80,sK=0.001,t1=4,ar=50,arA=0.000247;
          if(num3==-2 || num3==-3 || num3== -4){
          const w1=20,w2=25;
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-5"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3== -1 || num3==-7){
          ar=45,arA=0.000247;
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-5"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

      }
      else if(num3==-5 || num3== -8){
        const w1=30,w2=35,ar=35,arA=0.000247;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-5"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else{
        const w1=15,w2=20,ar=60,arA=0.000247;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-5"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
    }
    //  TULIPS
    if(num1=== 30){
      const w1=100,w2=150,t1=3,s1=2,s2=3,sK=0.001;N=12,P=12,K=12,ar=10,arA=0.000247;
        if(num3== -2 || num3== -3 || num3==-4 || num3== -7){
         
          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-4"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

        }
       else if(num3== -1 || num3== -8){
        const w1=80,w2=120;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-4"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

       }
       else if(num3== -5){
         const w1=120,w2=180,ar=11,arA=0.000247;
         document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-4"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
       }

      else if(num3== -6){
        const w1=200,w2=300,ar=8,arA=0.000247;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-4"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }


     }

     // Daffodil
     if(num1=== 55){
      const w1=5,w2=10,N=8,P=15,K=18,t1=3,ar=6.67,arA=0.000247;
      if(num3== -2 || num3==-4 || num3== -6 || num3== - 7){
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-4"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A( No seeds are required we need bulbs(stem) )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3== -1 || num3== -3 || num3== -5 || num3== -8){
        const w1=10,w2=15;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-4"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = "N/A( No seeds are required we need bulbs(stem) )";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
    
      
     }
     //Iris 
     if(num1== 70 ){
      const w1=350,w2=400,N=2,P=3,K=3,s1=0.5 ,s2=1, sK=0.001,ar=35,arA=0.000247,t1=5;
      if(num3== -2){
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-6"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      } 
     else  if(num3== -1 ){
        const w1=300,w2=350;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-6"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

      }
      else if(num3== -3){
         const w1= 300,w2=350,N=3,P=3.5,K=4,s1=0.001,s2=0.002,sK=0.001,ar=38,arA=0.000247,t1=6;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-8"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3==-4 || num3== -7){
        const w1=350,w2=400,s1=0.5,s2=1,sK=1,t1=4;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-8"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";;
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3== -5){
        const w1=250,w2=300,N=3,P=3.5,K=4,t1=6;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-8"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";;
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
     else  if(num3==-6){
        const w1=400,w2=450,N=4,P=3.5,K=4,s1=2,s2=3,sk=0.001,t1=8,ar=45,arA=0.000247;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-10"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";;
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else {
        const w1=300,w2=350,N=2,P=3.5,K=3,s1=0.5,s2=1,ar=34,arA=0.000247,t1=4;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-6"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";;
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }


    }
    // Daisies

    if(num1=== 30){
      const w1=120,w2=160,N=10,P=11,K=15,s1=0.01,s2=0.01,t1=3,ar=8,arA=0.000247,sK=0.001;
      if(num3==-1 ){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

    }
     if(num3==-2 ){
      const w1=150,w2=200,N=10,P=11,K=15,ar=5,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    if(num3==-3){
      const w1=130,w2=170,N=10,P=15,K=10,s1=0.01,t1=3,ar=7,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    if(num3==-4){
      const w1=140,w2=180,N=10,P=15,K=10,s1=0.05,s2=0.02,ar=8,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    if(num3==-5){
     const w1=80,w2=120,N=8,P=12,K=10,s1=0.01,s2=0.05,ar=10,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    if(num3==-6){
      const w1=200,w2=250,N=15,P=20,K=12,s1=0.01,s2=0.05,ar=10,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    if(num3==-7)
    {
      const w1=140,w2=180,N=15,P=10,K=10,s1=0.01,s2=0.05,ar=6,arA=0.000247;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
   }
   else{
    const w1=100,w2=140,N=8,P=12,K=10,s1=0.01,s2=0.05,ar=10,arA=0.000247;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
   }

      
  }
  //Aster
  if(num1===31){
    const w1=700,w2=800,N=12,P=16,K=10,s1=0.02,sK=0.001,t1=4,ar=10,arA=0.000247;
    if(num3==-2 || num3==-4 || num3==-7){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-1 || num3==-8){
      const w1=600,w2=700,N=2.5,K=3.5,P=2.5,s1=0.03,sK=0.001,t1=3,ar=10,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
     else if(num3==-6){
      const w1=1000,w2=1200,N=5,P=5,K=6,t1=5,ar=18,arA=0.000247,s1=0.005,sK=0.001;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-6"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
     }
     else if(num3==-3){
      const w1=650,w2=750,N=3,P=4,K=3,t1=5,ar=11,arA=0.000247,s1=0.225,sK=0.001;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-6"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
     }
     else{
      const w1=800,w2=900,N=3,P=4,K=3,t1=5,ar=11,arA=0.000247,s1=0.04,sK=4;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-6"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
     }
  }
  //Zinnia
  if(num1===32){
    const w1=2000,w2=3000,N=20,P=20,K=20,t1=3,ar=0.01,arA=0.000247,s1=0.003,sK=0.001;
    if(num3==-2){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-1){
    const w1=2500,w2=4000,N=15,P=15,K=15,t1=3,ar=0.15,arA=0.000247,s1=0.015,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
 else if(num3==-3){
    const w1=2000,w2=3500,N=10,P=20,K=20,t1=3,ar=0.01,arA=0.000247,s1=0.004,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-4 || num3==-7){
    const w1=2500,w2=4000,N=14,P=28,K=14,t1=3,ar=0.01,arA=0.000247,s1=0.004,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-5){
    const w1=2000,w2=3500,N=10,P=20,K=20,t1=3,ar=0.01,arA=0.000247,s1=0.004,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
 else{
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }


}
//Pansy
if(num1===33){
  const w1=3,w2=5,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;
  if(num3==-1 || num3==-8){
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-2 || num3==-3){
    const w1=2,w2=4,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-6 || num3==-7){
    const w1=5,w2=8,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-4){
    const w1=4,w2=6,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else{
    const w1=3,w2=5,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

  }

}
//Petunia
if(num1===34){
  const w1=1000,w2=1000,N=100,P=150,K=100,t1=4,ar=0.1,arA=0.000247,s1=0.0150,sK=0.001;
  if(num3==-1){
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-2){
    const w1=3,w2=5,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;

    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
  else if(num3==-3){
    const w1=3,w2=5,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;

      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-5"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
  else if(num3==-4){
    const w1=3,w2=5,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;

        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-5"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
   else if(num3==-5){
    const w1=3,w2=5,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;

          document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
          document.getElementById('timetaken').value =t1+"-5"+" months";
          document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
          document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
          document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
          }
  else if(num3==-6){
    const w1=3,w2=5,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;

    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-7){
      const w1=3,w2=5,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;

      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-5"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
    else{
      const w1=3,w2=5,N=10,P=10,K=10,t1=4,ar=0.5,arA=0.000247,s1=0.0150,sK=0.001;

        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-5"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
        }
    }

     //Cosmos
   if(num1===35){
    const w1=800,w2=1000,N=2,P=3,K=2,t1=2,ar=0.12,arA=0.000247,s1=2,sK=0.001;
  if(num3==-2|| num3==-4 || num3==-7){
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-1 || num3==-3 || num3===-8 ){
    const w1=600,w2=800,N=2,P=2,K=3,t1=2,ar=0.12,arA=0.000247,s1=2.5,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-5){
    const w1=1000,w2=1200,N=4,P=5,K=3,t1=2,ar=0.08,arA=0.000247,s1=3,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";  
  }
  else{
    const w1=400,w2=600,N=4,P=4,K=3,t1=2,ar=0.08,arA=0.000247,s1=3,sK=0.001;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm" +"-"+"("+(s1*sK*num2).toFixed(3) +"kgs)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";  
  }

   }
  //Dahlia

  if(num1==36){
    const w1=15,w2=20,N=10,P=20,K=20,t1=3,ar=150,arA=0.000247;s1=1,sK=0.001;
    if(num3==-2 || num3==-3 || num3==-8){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }  
      else if(num3==-1 || num3==-4 || num3==-7){
        const w1=20,w2=25,N=10,P=20,K=20,t1=3,ar=150,arA=0.000247,s1=1,sK=0.001;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-4"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else if(num3==-6){
        const w1=25,w2=35;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-4"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
      else {
        const w1=10,w2=15;
        document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
        document.getElementById('timetaken').value =t1+"-4"+" months";
        document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
        document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
        document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      }
  }

  //Lily of the Valley

  if(num1==37){
    const w1=800,w2=1200,N=1,P=1,K=1.5,t1=5,ar=15,arA=0.000247,s1=5,sK=0.001;
    if(num3==-1 || num3==-4 || num3==-3 || num3==-7){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-6"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      } 
      else if(num3==-2 || num3==-8){
        const w1=750,w2=1000;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-6"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
      } 
      else if(num3==-5 ){
      const w1=750,w2=1000,t1=18,ar=18,arA=0.000247,s1=1,sK=0.001;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-24"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else{
      const w1=1500,w2=2000,N=2,P=2.5,K=1.5,t1=24,ar=18,arA=0.000247,s1=15,sK=0.001;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-30"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

    }
  }
  //Sweet Pea

  if(num1===38){
    const w1=20,w2=25,N=10,P=10,K=10,t1=2,ar=40,arA=0.000247,s1=2,sK=0.001;
    if(num3==-1 || num3==-3 || num3==-8){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-5 || num3==-4 || num3==-7){
      const w1=25,w2=30,ar=75,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-2){
      const w1=15,w2=20,ar=56,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"
    }
    else{
      const w1=10,w2=15,ar=20,arA=0.000247;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"
    }
    

  }
  //Hydrangea
  if(num1===39){
    const w1=3,w2=5,N=20,P=20,K=10,t1=2,ar=40,arA=0.000247;
    if(num3==-3 || num3==-2 || num3==-8){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = "Hydrangeas are typically grown from cuttings ";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-1 || num3==-4 || num3==-7){
      const w1=4,w2=6;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = "Hydrangeas are typically grown from cuttings ";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-5){
      const w1=2,w2=4;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = "Hydrangeas are typically grown from cuttings ";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else {
      const w1=6,w2=8;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = "Hydrangeas are typically grown from cuttings ";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }

  }
  //Bougainvillea
  if(num1==40){
    const w1=15,w2=20,N=10,P=10,K=10,t1=6,ar=1.75,arA=0.000247;
    if(num3==-2 || num3==-3 ){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+" months"+"-2"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = " Bougainvillea is typically propagated through cuttings  ";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-1 || num3==-8){
      const w1=20,w2=25;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+" months"+"-2"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = " Bougainvillea is typically propagated through cuttings  ";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-6){
      const w1=30,w2=40;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+" months"+"-2"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = " Bougainvillea is typically propagated through cuttings  ";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-4 || num3==-7){
      const w1=25,w2=30;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+" months"+"-2"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = " Bougainvillea is typically propagated through cuttings  ";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else{
      const w1=10,w2=15;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+" months"+"-2"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = " Bougainvillea is typically propagated through cuttings  ";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }


  }
   //Morning Glory
   if(num1===41){
    const w1=600,w2=800,N=10,P=10,K=10,t1=2,ar=20,arA=0.000247,s1=5,sK=0.001;
    if(num3==-2 || num3==-3  || num3==-4 ||  num3==-7){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-1 || num3==-8){
      const w1=500,w2=700,N=10,P=5,K=10,t1=3,ar=20,arA=0.000247,s1=5,sK=0.001;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-5){
      const w1=700,w2=900,N=10,P=5,K=10,t1=3,ar=20,arA=0.000247,s1=5,sK=0.001;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else{
      const w1=1000,w2=2000,N=10,P=5,K=10,t1=3,ar=20,arA=0.000247,s1=5,sK=0.001;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value =(s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
   }

   //Geranium
   if(num1==42){
    const w1=300,w2=400,N=100,P=55,K=100,t1=3,ar=7,arA=0.000247,s1=2,sK=0.001;
    if(num3==-2 || num3==-3){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-5 || num3==-4 || num3==-7){
      const w1=350,w2=450,N=110,P=100,K=150,t1=3,ar=7,arA=0.000247,s1=2.5,sK=0.001;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-1 || num3==-8){
      const w1=250,w2=350,N=90,P=50,K=110,t1=4,ar=7,arA=0.000247,s1=3.5,sK=0.001;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-5"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else {
      const w1=500,w2=600,N=130,P=110,K=130,t1=6,ar=8,arA=0.000247,s1=4,sK=0.001;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-7"+" months";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }    
   }
     //Lavender
  if(num1==43){
    const w1=20,w2=30,N=2,P=3,K=2,s1=0.02,sK=0.001,t1=1,ar=4,arA=0.000247;
    if(num3==-2 || num3==-3){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-2"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-1 || num3==-8){
      const w1=5,w2=35;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-2"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
   else if(num3==-5){
      const w1=15,w2=25;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-2"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
   else if(num3==-4 || num3==-7){
      const w1=30,w2=40;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-2"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else{
      const w1=40,w2=50;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-2"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    

  }
  //Bluebell

  if(num1===44){
    const w1=700,w2=800,N=100,P=110,K=150,s1=2,sK=0.001,t1=3,ar=0.10,arA=0.000247;
    if(num3==-3 || num3==-8){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-2 ){
      const w1=600,w2=700;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else  if(num3==-1){
      const w1=800,w2=900;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
   else if(num3==-5){
      const w1=500,w2=1500,N=100,P=110,K=200;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
   else if(num3==-4 || num3==-7){
      const w1=800,w2=900,N=100,P=110,K=200;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
   else {
      const w1=1500,w2=2000,N=200,P=180,K=250;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-7"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }

  }
  //Camellia
  if(num1===45){
    const w1=1500,w2=2000,N=10,P=10,K=10,s1=2,sK=0.001,t1=6,ar=0.05,arA=0.000247;
    if(num3==-1 || num3==-5 || num3==-8){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-12"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-2){
      const w1=2000,w2=3000;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-12"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else if(num3==-3 || num3==-4 || num3==-7 ){
      const w1=2500,w2=3500;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-12"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
    else{
      const w1=3000,w2=4000;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-12"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
    }
  }
  //Azalea
  if(num1===46){
    const w1=10,w2=15,N=3,P=1,K=2,s1=2,sK=0.001,t1=12,ar=0.05,arA=0.000247;
    if(num3==-2|| num3==-3 ){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-24"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-1 || num3==-8){
    const w1=8,w2=12;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-24"+" months";;
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-5){
    const w1=12,w2=18;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-24"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else if(num3==-4 || num3==-7){
    const w1=15,w2=21;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-24"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
  }
  else 
  {
    const w1=20,w2=30;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-24"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }

}
//apple
if(num1===47){
   const w1=3000,w2=4000,N=300/hq,P=120/hq,K=200/hq,s1=1.5,sK=0.001,t1=8,ar=100,arA=0.000247;
   if(num3== -2 || num3==-7){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   }
   else if(num3==-1 || num3==-3 || num3==-4){
    const w1=2500,w2=3500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 

   }
   else if(num3== -5 || num3== -8){
    const w1=2000,w2=3000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   }
   else{
    const w1=4000,w2=5000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   }
}
// apricot
if(num1===48){
  const w1=2000,w2=3000,N=300/hq,P=80/hq,K=120/hq,s1=100,sK=0.001,t1=2,ar=100,arA=0.000247;
 if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   
 }
 else if(num3==-2 || num3==-7){
  const w1=2500,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
 }
 else if(num3==-5 || num3==-8){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
 }
 else{
   const w1=3500,w2=4500;
   document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
   document.getElementById('timetaken').value =t1+"-4"+" years";
   document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
   document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
   document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  
 }
}
// AVACADO
if(num1===49){
  const w1=2000,w2=3000,N=200/hq,P=80/hq,K=120/hq,s1=100,sK=0.001,t1=3,ar=100,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
   document.getElementById('timetaken').value =t1+"-5"+" years";
   document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
   document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
   document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  
  }
  else if(num3==-2 || num3==-7){
    const w1=2500,w2=3500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
   document.getElementById('timetaken').value =t1+"-5"+" years";
   document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
   document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
   document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  
  }
  else if(num3==-5 || num3==-8){
    const w1=1500,w2=2500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
   document.getElementById('timetaken').value =t1+"-5"+" years";
   document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
   document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
   document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  
  }
  else{
    const w1=3500,w2=4500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
   document.getElementById('timetaken').value =t1+"-5"+ "years";
   document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
   document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
   document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  
  }

}
// banana
if(num1===5){
  const w1=3000,w2=4000,N=300/hq,P=120/hq,K=200/hq,t1=9,ar=15,arA=0.000247;
  if(num3==-2 || num3==-7){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-12"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = "N/A(saplings are required )";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
}
else if(num3==-1 || num3==-4 || num3==-3){
  const w1=2500,w2=3500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-12"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = "N/A(saplings are required )";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";

}
else if(num3==-6){
  const w1=4000,w2=5000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-12"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = "N/A(saplings are required )";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
}
else{
  const w1=2000,w2=3000;
   document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-12"+" months";;
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = "N/A(saplings are required )";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)";
}

}
//Berries
if(num1===52){
  const w1=1500,w2=2500,N=120/hq,P=80/hq,K=120/hq,s1=5,sK=0.001,t1=1,ar=2,arA=0.000247;
   if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-2"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   }
   if(num3==-2 || num3==-7){
    const w1=2000,w2=3000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-2"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   }
   if(num3==-5 || num3==-8){
    const w1=1000,w2=2000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-2"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   }
   else{
    const w1=3000,w2=4000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-2"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   }
  
}
// cashwe apple
if(num1===53){
  const w1=2000,w2=3000,N=200/hq,P=80/hq,K=120/hq,s1=25,sK=0.001,t1=3,ar=200,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else if(num3==-2 || num3==-7){
    const w1=2500,w2=3500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else if(num3==-5 || num3==-8){
    const w1=1500,w2=2500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else{
    const w1=3500,w2=4500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }

}
//CHERRY
if(num1===54){
  const w1=2000,w2=3000,N=200/hq,P=80/hq,K=120/hq,s1=50,sK=0.001,t1=3,ar=40,arA=0.000247;
  if(num3==-2 || num3==-7){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-7"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else if(num3==-1 || num3==-3 || num3==-4){
    const w1=1500,w2=2500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-7"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else if(num3==-5 || num3==-8){
    const w1=1000,w2=2000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-7"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else{
    const w1=3000,w2=4000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-7"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  }
  
  //CITRUS FRIUTS
  if(num1===56){
    const w1=2000,w2=3000,N=200/hq,P=80/hq,K=120/hq,s1=200,sK=0.001,t1=2,ar=20,arA=0.000247;
    if(num3==-1 || num3==-3 || num3==-4){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-7"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else if(num3==-2 || num3==-7){
    const w1=2500,w2=3500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-7"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else if(num3==-5 || num3==-8){
      const w1=1500,w2=2500;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-7"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else{
      const w1=3500,w2=4500;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-7"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }


  }
  //COCONUT
  if(num1===57){
    const w1=2500,w2=3500,N=400/hq,P=200/hq,K=600/hq,s1=200,sK=0.001,t1=5,ar=200,arA=0.000247;
   if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = "N/A(saplings are required )";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   }
   else if(num3==-5 || num3==-8){
    const w1=2000,w2=3000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = "N/A(saplings are required )";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   }
   else if(num3==-2 || num3==-7){
    const w1=3000,w2=4000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = "N/A(saplings are required )";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 

   }
   else{
    const w1=4000,w2=5000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = "N/A(saplings are required )";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
   }
  }
  
  //CUSTARD APPLE
  if(num1===58){
    const w1=2500,w2=3500,N=200/hq,P=80/hq,K=120/hq,s1=200,sK=0.001,t1=2,ar=30,arA=0.000247;
  if(num3==-2 || num3==-7){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-3"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else if(num3==-1 || num3==-4){
    const w1=2000,w2=3000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-3"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else if(num3==-5 || num3==-8){
    const w1=1500,w2=2500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-3"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else{
    const w1=3500,w2=4500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-3"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  }

  //DATES
  if(num1===59){
    const w1=2500,w2=3500,N=200/hq,P=80/hq,K=120/hq,s1=80,sK=0.001,t1=5,ar=100,arA=0.000247;
    if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else if(num3==-2 || num3==-7){
    const w1=3000,w2=4000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else if(num3==-5 || num3==-8){
    const w1=2000,w2=3000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else{
    const w1=4000,w2=5000;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-10"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }

  }
  //FIG
  if(num1===60){
    const w1=1500,w2=2500,N=200/hq,P=80/hq,K=120/hq,s1=150,sK=0.001,t1=1,ar=20,arA=0.000247;
    if(num3==-1 || num3==-3 || num3==-4){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else if(num3==-2 || num3==-7){
      const w1=2000,w2=3000;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else if(num3==-5 || num3==-8){
      const w1=1000,w2=2000;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else{
      const w1=3000,w2=4000;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-10"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }

  }
  //GRAPES
  if(num1===61){
    const w1=1000,w2=2000,N=120/hq,P=80/hq,K=120/hq,s1=20,sK=0.001,t1=2,ar=20,arA=0.000247;
    if(num3==-1 || num3==-3 || num3==-4){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else if(num3==-2 || num3==-7){
      const w1=1500,w2=2500;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else if(num3==-5 || num3==-8){
      const w1=800,w2=1500;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else{
      const w1=2000,w2=3000;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-3"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
  }
  //GUAVA
  if(num1===62){
    const w1=1000,w2=2000,N=120/hq,P=80/hq,K=120/hq,s1=200,sK=0.001,t1=2,ar=10,arA=0.000247;
    if(num3==-1 || num3==-3 || num3==-4){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else if(num3==-2 || num3==-7){
      const w1=1500,w2=2500;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else if(num3==-5 || num3==-8){
      const w1=800,w2=1500;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }
    else {
      const w1=2000,w2=3000;
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-4"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
    }

  }
 //JACKFRUIT
 if(num1===63){
  const w1=2000,w2=3000,N=120/hq,P=80/hq,K=120/hq,s1=200,sK=0.001,t1=3,ar=30,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
      document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
      document.getElementById('timetaken').value =t1+"-5"+" years";
      document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
      document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
      document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else if(num3==-2 || num3==-7){
    const w1=2500,w2=3500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else if(num3==-5 || num3==-8){
    const w1=1500,w2=2500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }
  else {
    const w1=3500,w2=4500;
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
  }

 }
 //JAVA PLUM
 if(num1===64){
  const w1=2000,w2=3000,N=120/hq,P=80/hq,K=120/hq,s1=200,sK=0.001,t1=4,ar=15,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-7"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-7"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-7"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-7"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}

//KIWI
if(num1===65){
  const w1=1500,w2=2500,N=150/hq,P=80/hq,K=150/hq,s1=200,sK=0.001,t1=3,ar=40,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value =  "N/A(saplings are required )";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value =  "N/A(saplings are required )";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=1000,w2=20000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value =  "N/A(saplings are required )";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2500,w2=3500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value =  "N/A(saplings are required )";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}

}

//Litchi
if(num1===66){
  const w1=1500,w2=2500,N=150/hq,P=80/hq,K=150/hq,s1=100,sK=0.001,t1=4,ar=30,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-7"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-7"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=1000,w2=2000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-7"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2500,w2=3500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-7"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
    
//Mango
if(num1===67){
  const w1=2000,w2=3000,N=150/hq,P=80/hq,K=150/hq,s1=300,sK=0.001,t1=3,ar=20,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-5"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=2500,w2=3500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=3500,w2=4500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-5"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}

//Mulberry

if(num1===68){
  const w1=1500,w2=2500,N=150/hq,P=80/hq,K=150/hq,s1=100,sK=0.001,t1=1,ar=15,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-2"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=1000,w2=2000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2 "+ "years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=3000,w2=4000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//Olive

if(num1===70){
  const w1=1000,w2=2000,N=120/hq,P=80/hq,K=120/hq,s1=50,sK=0.001,t1=2,ar=30,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4 "+ "years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//Papaya
if(num1===71){
  const w1=1500,w2=2500,N=120/hq,P=80/hq,K=120/hq,s1=200,sK=0.001,t1=6,ar=10,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-9"+"months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-9"+"months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=1000,w2=2000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-9"+"months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=3000,w2=4000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-9"+"months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//Passion Fruit
if(num1===72){
  const w1=1000,w2=2000,N=120/hq,P=80/hq,K=120/hq,s1=400,sK=0.001,t1=9,ar=30,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-12"+"months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-12"+"months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-12"+"months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-12"+"months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//Peach
if(num1===73){
  const w1=1000,w2=2000,N=120/hq,P=80/hq,K=120/hq,s1=60,sK=0.001,t1=2,ar=15,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}

//Persimmon
if(num1===74){
  const w1=1000,w2=2000,N=120/hq,P=80/hq,K=120/hq,s1=100,sK=0.001,t1=2,ar=15,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//Pineapple
if(num1===75){
  const w1=1000,w2=2500,N=120/hq,P=80/hq,K=120/hq,s1=2,sK=0.001,t1=1,ar=10,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-2"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=2500,w2=3500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=1000,w2=2000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=3000,w2=4000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2" +" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//Plum

if(num1===76){
  const w1=1000,w2=2500,N=120/hq,P=80/hq,K=120/hq,s1=100,sK=0.001,t1=2,ar=15,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"4"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2" +" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//Pomegranate

if(num1===77){
  const w1=1000,w2=2500,N=120/hq,P=80/hq,K=120/hq,s1=100,sK=0.001,t1=2,ar=15,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-3"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3" +" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//Rambutan
if(num1===78){
  const w1=1000,w2=2000,N=120/hq,P=80/hq,K=120/hq,s1=50,sK=0.001,t1=4,ar=15,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-6"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-6"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-6"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-6" +" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//Sapota
if(num1===79){
  const w1=1000,w2=2000,N=120/hq,P=80/hq,K=120/hq,s1=200,sK=0.001,t1=3,ar=15,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-6"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-6"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-6"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-6" +" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//Star fruit
if(num1===80){
  const w1=1000,w2=2000,N=120/hq,P=80/hq,K=120/hq,s1=100,sK=0.001,t1=2,ar=15,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-3"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3" +" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}

//Tamarind
if(num1===81){
  const w1=1000,w2=2000,N=120/hq,P=80/hq,K=120/hq,s1=500,sK=0.001,t1=5,ar=15,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-7"+" years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1500,w2=2500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-37"+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"7"+" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-7" +" years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}

//Watermelon
if(num1===82){
  const w1=800,w2=1500,N=80/hq,P=80/hq,K=120/hq,s1=1,sK=0.001,t1=2,ar=40,arA=0.000247;
  if(num3==-1 || num3==-3 || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-3"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-2 || num3==-7){
  const w1=1000,w2=2000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-8){
  const w1=800,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=2000,w2=3500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}

//Peper

if(num1===83){
  const w1=1000,w2=1200,N=10/hq,P=15/hq,K=10/hq,s1=6,sK=0.001,t1=3,ar=150,arA=0.000247;
  if(num3==-2 || num3==-3 || num3==-4 || num3==-8){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-4 "+ " years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-1){
  const w1=800,w2=1000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5){
  const w1=1200,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-7){
  const w1=1200,w2=1400;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=1500,w2=1800;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-4 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//CARDOMON

if(num1===84){
  const w1=1200,w2=1500,N=50/hq,P=100/hq,K=50/hq,s1=5,sK=0.001,t1=2,ar=200,arA=0.000247;
  if(num3==-2 || num3==-3  || num3==-8){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-3 "+ " years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-1){
  const w1=1000,w2=1200;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5){
  const w1=1500,w2=1800;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-7){
  const w1=1500,w2=1800;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=1800,w2=2000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//CINNAMON

if(num1===85){
  const w1=1200,w2=1500,N=50/hq,P=100/hq,K=50/hq,s1=5,sK=0.001,t1=2,ar=200,arA=0.000247;
  if(num3==-2 || num3==-3  || num3==-7){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-3 "+ " years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-1){
  const w1=1000,w2=1200;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5){
  const w1=1500,w2=1800;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-7){
  const w1=1500,w2=1800;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=1800,w2=2000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//CLOVES

if(num1===86){
  const w1=1200,w2=1500,N=50/hq,P=100/hq,K=50/hq,s1=5,sK=0.001,t1=2,ar=200,arA=0.000247;
  if(num3==-2 || num3==-3  || num3==-7){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-3 "+ " years";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-1){
  const w1=1000,w2=1200;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5){
  const w1=1500,w2=1800;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-7){
  const w1=1500,w2=1800;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=1800,w2=2000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-3 "+ " years";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}

//CORIANDER
if(num1===87){
  const w1=800,w2=1000,N=20/hq,P=30/hq,K=20/hq,s1=10,sK=0.001,t1=1,ar=200,arA=0.000247;
  if(num3==-2 || num3==-3  || num3==-8){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-2"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-1){
  const w1=600,w2=800;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-7){
  const w1=1000,w2=1200;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=1200,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}
//CUMIN
if(num1===88){
  const w1=800,w2=1000,N=40/hq,P=20/hq,K=40/hq,s1=8,sK=0.001,t1=3,ar=150,arA=0.000247;
  if(num3==-2 || num3==-3  || num3==-8  || num3==-4){
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
    document.getElementById('timetaken').value =t1+"-2"+" months";
    document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
    document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-1){
  const w1=800,w2=1000;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else if(num3==-5 || num3==-7){
  const w1=1200,w2=1500;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
else {
  const w1=1500,w2=1800;
  document.getElementById('wateroutput').value =(w1*num2).toFixed(2) +"-"+(w2*num2).toFixed(2)  + " liters " +" per week";
  document.getElementById('timetaken').value =t1+"-2"+" months";
  document.getElementById('fert').value = "("+(N*num2).toFixed(2) +"N-"+(P*num2).toFixed(2) +"P-"+ ( K*num2).toFixed(2) +"K )kgs";
  document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"+"-"+"("+(s1*sK*num2).toFixed(3) +"kg)";
  document.getElementById('cost').value = (ar*num2).toFixed(2) +"sq meters"+"("+(ar*arA*num2).toFixed(3) +"acres)"; 
}
}

//


    // Code to execute for Option 3
    
   else {
    let c=0; //just to check how many times the control went the else block!!
    c=c+1;
    console.log(c)
 }



/*
CODE 01===========================================================
function calculate() {
  // Get values from the document
  const num1 = parseInt(document.getElementById('cropdata').value);
  const num2 = parseInt(document.getElementById('area').value);
  const num3 = parseInt(document.getElementById('soil').value);
  
  let w1, w2, s1, s2, sK, t1,N,P;
  const  ar = 500, arA = 0.1235;
  
  if (num1 === 50) {
    t1 = 3;
    s1 = 200; 
    s2 = 300; 
    sK = 0.3;
    N = 1.5;
    P = 0.8;
    if (num3 == -2 || num3 == -3 || num3 == -4) {
      w1 = 400; w2 = 500;
    } else if (num3 == -6) {
      w1 = 600; w2 = 800; s1 = 500; s2 = 600; sK = 0.6;
      t1 = 4;
    } else if (num3 == -5) {
      w1 = 300; w2 = 500;
      t1 = 4;
    } else if (num3 == -1) {
      w1 = 500; w2 = 600;
      t1 = 4;
    }
    
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2)  + "-" + (w2*num2).toFixed(2)  + " liters per week";
    document.getElementById('timetaken').value = t1 + "-5 months";
    document.getElementById('fert').value = "(" + (N*num2).toFixed(2)  + "N-" + (P*num2).toFixed(2)  + "P-" + (P*num2).toFixed(2)  + "K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"  + "-" + s2*num2 + " grams (" + (s1*sK*num2).toFixed(3)  + "kgs)";
    document.getElementById('cost').value = (ar*num2).toFixed(2)  + "sq meters (" + (ar*arA*num2).toFixed(3)  + "acres)";
    
  } else if (num1 === 100) {
    alert("Option 2 selected");
  } else if (num1 === 45) {
    // Code for Option 3 (currently empty)
  } else {
    alert("Invalid option");
  }
}
CODE 02===========================================================
function calculate() {
  // Get values from the document
  const num1 = parseInt(document.getElementById('cropdata').value);
  const num2 = parseInt(document.getElementById('area').value);
  const num3 = parseInt(document.getElementById('soil').value);
  
  let w1, w2, s1, s2, sK, t1,N,P;
  const  ar = 500, arA = 0.1235;
  
  function displayResults(w1, w2, s1, s2, sK, t1, num2,P,N) {
    document.getElementById('wateroutput').value =(w1*num2).toFixed(2)  + "-" + (w2*num2).toFixed(2)  + " liters per week";
    document.getElementById('timetaken').value = t1 + "-5 months";
    document.getElementById('fert').value = "(" + (N*num2).toFixed(2)  + "N-" + (P*num2).toFixed(2)  + "P-" + (P*num2).toFixed(2)  + "K )kgs";
    document.getElementById('seed').value = (s1*num2).toFixed(2)+"gm"  + "-" + s2*num2 + " grams (" + (s1*sK*num2).toFixed(3)  + "kgs)";
    document.getElementById('cost').value = (ar*num2).toFixed(2)  + "sq meters (" + (ar*arA*num2).toFixed(3)  + "acres)";
  }
  
  if (num1 === 50) {
    t1 = 3;
    s1 = 200; 
    s2 = 300; 
    sK = 0.3;
    N = 1.5;
    P = 0.8;
    if (num3 == -2 || num3 == -3 || num3 == -4) {
      w1 = 400; w2 = 500;
    } else if (num3 == -6) {
      w1 = 600; w2 = 800; s1 = 500; s2 = 600; sK = 0.6;
      t1 = 4;
    } else if (num3 == -5) {
      w1 = 300; w2 = 500;
      t1 = 4;
    } else if (num3 == -1) {
      w1 = 500; w2 = 600;
      t1 = 4;
    }
    
    displayResults(w1, w2, s1, s2, sK, t1, num2,P,N);
    
  } else if (num1 === 100) {
    alert("Option 2 selected");
  } else if (num1 === 45) {
    // Code for Option 3 (currently empty)
  } else {
    alert("Invalid option");
  }
}*/



// w1 w2 water 
// sk seeds in kg
// s1 s2 seeds
// t1 time
//

}
