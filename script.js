let string = "";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (s)=>{
        if(s.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(s.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{

            // console.log(s.target);
            string = string + s.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})