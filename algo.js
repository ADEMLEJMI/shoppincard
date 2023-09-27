var decrement =document.getElementsByClassName("decrement")
console.log(decrement)
var increment =document.getElementsByClassName("increment")
console.log(increment)
/*var like =document.getElementsByClassName("like")
console.log(like)
var del=document.getElementsByClassName("delete")
console.log (del)
var qunatity=document.getElementsByClassName("quantity")
console.log (qunatity)
var price=document.getElementsByClassName("price")
console.log(price)
var total=document.getElementById("total-price")
console.log(total)*/
function aa(){
    //console.log("Omar")
    
    // //var price=event.target.parentnode.getElementsByClassName('price')
    // var number=Number(h1.innerHTML)
    // console.log(number)
    // //var price=Number(price.innerHTML)
    // h1.innerHTML=number-1
    // if(number<=0){
    //     number=0
    //     h1.innerHTML=number
    
//}
//price.innerHTML=number*price
}


function decrements(event){
    var qunatity=event.target.parentNode.querySelector('h1')
    var price=event.target.parentNode.querySelector('.price')
    var total=event.target.parentNode.querySelector('.total')
console.log(price)
var number=Number(qunatity.innerHTML)
console.log(number)
 var prices=Number(price.innerHTML)
 console.log(price)
 qunatity.innerHTML=number-1
 var number=Number(qunatity.innerHTML)
     if(number<=0){
       number=0
        qunatity.innerHTML=number
       

 }
 total.innerHTML=number*prices
}
function increments(event){
    var qunatity=event.target.parentNode.querySelector('h1')
    var total=event.target.parentNode.querySelector('.total')
    var price=event.target.parentNode.querySelector('.price')
    var totals=document.getElementById('total-price')
    // var likes=event.target.parentNode.querySelector('.like')
    // console.log(likes)
    console.log(totals)
console.log(qunatity)
var number=Number(qunatity.innerHTML)
console.log(number)
 var prices=Number(price.innerHTML)
 console.log(prices)
 qunatity.innerHTML=number+1
 var number=Number(qunatity.innerHTML)
var sommei=0
 total.innerHTML=number*prices
 var totalss=document.getElementsByClassName("total")
 console.log (totalss)
 for(var i=0 ; i<totalss.length ; i++){
    var totalls=Number(totalss[i].innerHTML)
    console.log(totalls)
     sommei=totalls+sommei
    //  var likes=document.getElementsByClassName('like')
    //  console.log(likes)
    //  likes.style.color='white'
    //  increments.addEventListener('click',likes='white')


    
 }
totals.innerHTML=sommei



 }
// var btn=document.querySelector('button')
// btn.addEventListener('click',()=>{
//     console.log("....")
// })
function deletes(event){
    var del=event.target.parentNode.querySelector('.delete')
    var div=event.target.parentNode
    console.log(div)
    div.remove()
    
}
var boutonChangerCouleur = document.getElementById('changerCouleurBouton');
var likes=document.getElementsByClassName('like')
console.log(likes)



 function changecolor(event){
    var couleurAleatoire = '#' + Math.floor(Math.random()*16777215).toString(16)
    console.log(couleurAleatoire)
     var look =likes.textContent
    console.dir(likes)
    

    // console.log(likes)

//    look.style.color = couleurAleatoire;

  }


