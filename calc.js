let input= document.querySelector('.screen')
let buttons=document.querySelectorAll('button')
let arr=Array.from(buttons)
let str=""
//input.value=str
arr.forEach(button => {
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML=='='){
            
            str=eval(str)
            input.innerHTML=str
        }else if (e.target.innerHTML=='AC') {
            str='0'
            input.innerHTML=str
        }else{
            str +=e.target.innerHTML
            input.innerHTML=str
        }
        
    })
    
});