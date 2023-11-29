const prev_btn = document.querySelector('#prev');
const next_btn = document.querySelector('#next');
const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');

console.log(circles);
console.log(progress);
let curr_progress = 1;
next_btn.addEventListener('click', function(){
    curr_progress+=1;
    if(curr_progress>4){
        curr_progress=4;
    }
    if(curr_progress>1)prev_btn.disabled = false;
    else prev_btn.disabled = true;
    update();
});
prev_btn.addEventListener('click', function(){
    curr_progress--;
    if(curr_progress<1){
        curr_progress=1;
    }
    if(curr_progress<=1)prev_btn.disabled = true;
    else prev_btn.disabled = false;
    
    update();
})

function update(){
    circles.forEach((circle, index)=>{
        console.log(index);
        if(index<curr_progress){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
        const active = document.querySelectorAll('.active');
        progress.style.width = ((active.length-1)/(circles.length-1))*100 + '%';


    })

}



