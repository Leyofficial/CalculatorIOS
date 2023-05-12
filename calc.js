let a = ''; // First num
let b = ''; // Second num
let sign = '';  // + = / *
let finish = false;

const diget =['0' , '1', '2','3','4','5','6','7','8','9','.'];
const action =['-' , '+' , 'X' , '/']

const out = document.querySelector('.calc-screen p');

function clearAll(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
//Нажата кнопка ac
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //получаем нажатую кнопку
    const key = event.target.textContent;

    //если нажата 0-9 или .
    if (diget.includes(key)){
        if (b ==='' && sign ===''){
            a += key;

            out.textContent = a;
        }
        
        else if (a!== '' && b!== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } 
        else {
            b += key
            out.textContent = b;
        }
        console.log(a, b,sign)
        return;
    }

    //если клавиша нажата + = / *; 
    if (action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(a , b,sign)
        return;
    }

    //нажата =
    if (key === '=') {
        if (b === '') b = a;
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if ( b === '0'){
                    out.textContent = 'Ошибка!'
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a , b  ,sign);
    }
}