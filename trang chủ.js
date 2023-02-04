import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const rightbtn = document.querySelector('.fa-caret-right')
const leftbtn = document.querySelector('.fa-caret-left')

rightbtn.addEventListener("click", function(){
    document.querySelector(".silder-conten-left-top").style.right ="100%"
})
leftbtn.addEventListener(".click",function(){
    document.querySelector(".slider-conten-left-top").style.right ="0%"
})


