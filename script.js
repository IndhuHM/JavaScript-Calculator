

const display = document.querySelector('#display');

document.querySelectorAll('[data-value]').forEach(el => {
	el.onclick = e => {

		if(display.innerText === "0") {
			display.innerText = el.dataset.value;
		} else  {
			display.innerText += el.dataset.value;
		}
			
	}
	
	
})





document.querySelector('#clear').onclick = () => {
	display.innerText = 0;
}

document.querySelector('#decimal').onclick = () => {
  if(!display
   .innerText
   .split(/[\/\+\*\-]/)
   .slice(-1)[0] 
   .includes('.')) display.textContent += '.'
}


document.querySelector('#equals').onclick = () => { 
  
   var equation = display.innerText.match(/(\+|\-|\*|\/)?(\.|\-)?\d+/g).join('');
  
    let result = eval(equation);
 
		display.innerText = result;
}






