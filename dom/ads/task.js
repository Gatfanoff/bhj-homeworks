 const rotatorCase = document.querySelectorAll('.rotator__case');
let i = 0;

setInterval(() => {
    if(i !== 0) {
       rotatorCase[i - 1].classList.remove('rotator__case_active'); 
    }else {
        rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active');
    }

    rotatorCase[i].classList.add('rotator__case_active');

    i++;
        
    if(i === rotatorCase.length) {
        i = 0;
    }
    
}, 1000)