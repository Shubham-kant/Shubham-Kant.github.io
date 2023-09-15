/*
//smooth scroll
var navMenuAnchorTags=document.querySelectorAll('.no-list-style  a');
var element;
var interval;
for(var i=0;i<navMenuAnchorTags.length;i++){
    
    navMenuAnchorTags[i].addEventListener('click',function(e){
        e.preventDefault();
        // var element=$(this).prop('href');
        var targetSection=this.textContent.trim().toLowerCase();
        element=document.getElementById(targetSection);
        //interval=setInterval(scrollVertically,30,targetSection);
        interval=setInterval(function() {
            scrollVertically(targetSection);

        }, 30);
    });
}
var scrollVertically=function(targetSection){
    var coordinates=element.getBoundingClientRect();
    coordinates_top=coordinates.top;
    if(coordinates_top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);

}
//auto fill skill bar demo

var progressBars=document.querySelectorAll('.skill-progress > div');
var skillsContainer=document.getElementById('skills-container');
console.log(progressBars);
document.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBar(bar){
    bar.setAttribute('data-visited','false');
    bar.style.width=0+'%';

}

for (var bar of progressBars) {
    initialiseBar(bar);
}
function fillBar(bar){
    var currentWidth=0;
    var targetWidth=bar.getAttribute('skill-value');
    var interval=setInterval(function(){
        if(currentWidth>=targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width=currentWidth+'%';
    },10);

    

}
function checkScroll(){
    for(let bar of progressBars){
        var barCoordinates=bar.getBoundingClientRect();
        if(( bar.getAttribute('data-visited')=='false') &&  (barCoordinates.top<=window.innerHeight)){
            bar.setAttribute('data-visited',true);
            fillBar(bar);
        }
        else if(barCoordinates.top>window.innerHeight){
            bar.setAttribute('data-visited',false);
            initialiseBar(bar);

        }
    }

}
var barClick=document.querySelector('.dropdown-menu > div');
barClick.setAttribute('data-visited','false');
$('.bars').on('click',function(){
    if( barClick.getAttribute('data-visited')=='false'){
        barClick.setAttribute('data-visited','true');
        $('.dropdown-list').css({
            display: "block",
            position:"absolute",
            right: "3.5%",
            backgroundColor:'#828470'

        });
        
    }
    else{
        barClick.setAttribute('data-visited','false');
        $('.dropdown-list').css({
            display: "none"

            
    
        });
        

    }
});

*/






// function initialiseBars(){
//     for(let bar of progressBars){
//         bar.style.width=0+'%';

//     }
// }
// initialiseBars();
// function fillBars(){
//     for(let bar of progressBars){
      
//         let targetWidth=bar.getAttribute('skill-value');
//         let currentWidth=0;
//         let interval=setInterval(function(){
//             if(currentWidth>targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width=currentWidth+'%';

//         },10);

        
//     }
    
// }

//  function checkScroll(){
//      // console.log('scroll');
//      var coordinates=skillsContainer.getBoundingClientRect();
//      if(!animationDone && coordinates.top<=window.innerHeight){
//          console.log('skill section visible');
//          animationDone=true;
//          fillBars();

//     }else if(coordinates.top>window.innerHeight){
//         animationDone=false;
//          initialiseBars();
//      }


// }
