

const buttons=document.querySelectorAll('button');
const display=document.querySelector('.display');

buttons.forEach(function(button){
    // adding event listeners to each button
    button.addEventListener('click',calculate);
} );

function calculate(event){
   
    var clickedButtonValue=event.target.value;

    if(clickedButtonValue==="="){
        if(display.value!==" "){
            var pattern=display.value;
            // checks for only numbers and operators
            var exp=/([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/ .test(pattern);
            var modulo=pattern.includes('%');
            if(!exp&& !modulo){
                alert('Only numbers and operators are allowed');
                display.value='';
            }else{
                display.value=eval(display.value);
            }
           
        }
    }
    // clearing the calculator value
    else if (clickedButtonValue==="C"){
        display.value='';
    }
    // displaying the value
    else{
        display.value=display.value+clickedButtonValue;
    }
}