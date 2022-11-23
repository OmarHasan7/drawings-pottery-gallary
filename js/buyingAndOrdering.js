async function style_change()
{
    let title = document.querySelectorAll('a');
    for(let i=0; i < title.length; i++)
    {
        title[i].classList.add('animate');
        await slp(100);
    }
}
function slp(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}


document.addEventListener('DOMContentLoaded', function(){

    let button = document.querySelector('.burger');
    let menu = document.querySelector('.menu');
    button.addEventListener('click', function(){
        let v = window.getComputedStyle(menu).getPropertyValue('visibility');
        if(v === 'hidden')
        {
            button.style.backgroundColor = '#222';
            document.querySelectorAll('.line')[1].style.visibility = 'hidden';
            document.querySelectorAll('.line')[0].style.transform = 'rotate(45deg)';
            document.querySelectorAll('.line')[2].style.transform = 'rotate(-45deg)';
            menu.style.visibility = 'visible';
            menu.style.right = '0';
         }
        else
        {
            document.querySelectorAll('.line')[1].style.visibility = 'visible';
            document.querySelectorAll('.line')[0].style.transform = 'rotate(0deg)';
            document.querySelectorAll('.line')[2].style.transform = 'rotate(0deg)';
            button.style.backgroundColor = '#333';
            menu.style.right ='-100vw';
            setTimeout(function(){menu.style.visibility = 'hidden';}, 300);
        }
        console.log(v);
    });
    //nav anchor style change on hover
    setTimeout(style_change, 1000);
});