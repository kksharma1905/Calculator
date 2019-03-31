var buttons = document.getElementsByClassName("button");
var display = document.getElementById('display');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for( var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(event){
        var input = display.textContent.trim();
        var btnValue = this.getAttribute('data-value');

        if(btnValue == 'ac'){
            display.textContent = "";
            decimalAdded = false;
        }else if (btnValue == '='){
            var equation = input;
            var lastValue = equation[equation.length-1];
            if(isOperator(lastChar) || lastChar == '.'){
                equation.replace(/.$/,'');
            }
            if(equation){
                display.textContent = eval(equation);
            }
            decimalAdded = false;
            
        }else if(isOperator(btnValue)){


            var lastChar = input[input.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(input != '' && !isOperator(lastChar)) 
				display.textContent += btnValue;
			
			// Allow minus if the string is empty
			else if(input == '' && btnValue == '-') 
				display.textContent += btnValue;

			if(isOperator(lastChar) && input.length > 1) {
            	display.textContent = input.replace(/.$/, btnValue);
			}
			
			decimalAdded =false;
        }
        else if(btnValue=="."){
            console.log('decimal key!')
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        }else if(btnValue == 'sign' || btnValue == '%'){
            
        }
        else {
            if(input == '0'){
                display.textContent = '';
            }
            display.textContent += btnValue;
        }

// prevent page jumps
        event.preventDefault();

    });
}

function isOperator(value){
    return value == "+" || value == "/" || value == "*" || value == "-"
}