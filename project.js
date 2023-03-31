let adviceN=document.querySelector('#adviceN');
let adviceTxt=document.querySelector('#adviceTxt');
console.log(adviceN)
console.log(adviceTxt)


const dataForAdvice =async () => {
    const response =await fetch("https://api.adviceslip.com/advice");
    const data = await response.json()
    const {slip} =data
    adviceTxt.innerHTML=slip.advice
    adviceN.innerHTML=`# ${slip.id}`
}
dataForAdvice();
let dashCircle=document.querySelector('.dashCircle');
dashCircle.addEventListener('click', dataForAdvice)