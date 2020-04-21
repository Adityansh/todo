let ans = document.getElementById('input');
let a = document.getElementById('div');
let p1 = document.getElementById('val1');
let p2 = document.getElementById('val2');
let p3 = document.getElementById('val3');
let p4 = document.getElementById('val4');
let p5 = document.getElementById('val5');
let but = document.getElementById('btn');

btn.addEventListener('click',function submit(){

    if(p1.innerHTML == ''){
    p1.innerHTML = ans.value;
        }
    else if(p2.innerHTML == ''){
        p2.innerHTML = ans.value;
        }
    else if(p3.innerHTML == ''){
        p3.innerHTML = ans.value;
        }
    else if(p4.innerHTML == ''){
        p4.innerHTML = ans.value;
        }
    else if(p5.innerHTML == ''){
        p5.innerHTML = ans.value;
        }
    
    a.style.display = 'block';
    ans.value = "";
});
// ########################### page 1######################
ans.addEventListener('keyup',
function submit(){
    if(event.keyCode == 13){
    if(p1.innerHTML == ''){
    p1.innerHTML = ans.value;
    }
    else if(p2.innerHTML == ''){
        p2.innerHTML = ans.value;
        }
    else if(p3.innerHTML == ''){
        p3.innerHTML = ans.value;
        }
    else if(p4.innerHTML == ''){
        p4.innerHTML = ans.value;
        }
    else if(p5.innerHTML == ''){
        p5.innerHTML = ans.value;
        }
    a.style.display = 'block';
    ans.value = "";
    }
})
function remove1(){
    p1.innerHTML = ''    
}
function remove2(){
    p2.innerHTML = '';
}
function remove3(){
    p3.innerHTML = '';
}
function remove4(){
    p4.innerHTML = '';
}
function remove5(){
    p5.innerHTML = ''; 
}
function reset(){
    p1.innerHTML = '';
    p2.innerHTML = '' ;
    p3.innerHTML = '' ;
    p4.innerHTML = '' ;
    p5.innerHTML = '' ;
    a.style.display = 'none';
}