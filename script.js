let input = document.querySelector('#inputText');

let buttons = document.querySelectorAll('button');

let arr = Array.from(buttons);


let string="";
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) =>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }

        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }

        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }

        else{
            string=string+e.target.innerHTML;
            input.value=string;
        }
    })
})