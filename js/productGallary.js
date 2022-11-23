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
            button.style.backgroundColor = '#444';
            menu.style.right ='-100vw';
            setTimeout(function(){menu.style.visibility = 'hidden';}, 300);
        }
    });
    //nav anchor style change on hover
    setTimeout(style_change, 1000);

    let buttons = document.querySelectorAll('div.bu');
    console.log(buttons);
    buttons.forEach(function(btn){
        btn.addEventListener('click', function(){
            for(let i=0; i < buttons.length; i++)
            {
                buttons[i].classList.remove('abutton');
            }
            btn.classList.add('abutton');
        });
    });
    buttons[0].addEventListener('click', function(){
        let imgs =document.querySelectorAll('.grid-item');
        for(let i =0; i < imgs.length; i++)
        {
            imgs[i].style.display = 'block';
        }
    });
    buttons[1].addEventListener('click', function(){
        let imgs =document.querySelectorAll('.grid-item');
        for(let i=0; i < imgs.length; i++)
        {
            if([7,9,11,13,33,34,35,36,39].includes(i) === false)
            {
                continue;
            }
            imgs[i].style.display = 'none';
        }
        if(imgs[0].style.display === 'none')
        {
            for(let i=0; i < imgs.length; i++)
            {
                if([7,9,11,13,33,34,35,36,39].includes(i) === true)
                {
                    continue;
                }
                imgs[i].style.display = 'block';
            }
        }
    });
    buttons[2].addEventListener('click', function(){
        let imgs =document.querySelectorAll('.grid-item');
        if(imgs[7].style.display === 'none')
        {
            for(let i=0; i < imgs.length; i++)
            {
                if([7,9,11,13,33,34,35,36,39].includes(i) === false)
                {
                    continue;
                }
                imgs[i].style.display = 'block';
            }
        }
        for(let i=0; i < imgs.length; i++)
        {
            if([7,9,11,13,33,34,35,36,39].includes(i) === true)
            {
                continue;
            }
            imgs[i].style.display = 'none';
        }
    });
    buttons[3].addEventListener('click', function(){
        let imgs =document.querySelectorAll('.grid-item');
        for(let i =0; i < imgs.length; i++)
        {
            imgs[i].style.display = 'block';
        }
    });
    buttons[4].addEventListener('click', function(){
        let imgs =document.querySelectorAll('.grid-item');
        for(let i=0; i < imgs.length; i++)
        {
            if([7,9,11,13,33,34,35,36,39].includes(i) === false)
            {
                continue;
            }
            imgs[i].style.display = 'none';
        }
        if(imgs[0].style.display === 'none')
        {
            for(let i=0; i < imgs.length; i++)
            {
                if([7,9,11,13,33,34,35,36,39].includes(i) === true)
                {
                    continue;
                }
                imgs[i].style.display = 'block';
            }
        }
    });
    buttons[5].addEventListener('click', function(){
        let imgs =document.querySelectorAll('.grid-item');
        if(imgs[7].style.display === 'none')
        {
            for(let i=0; i < imgs.length; i++)
            {
                if([7,9,11,13,33,34,35,36,39].includes(i) === false)
                {
                    continue;
                }
                imgs[i].style.display = 'block';
            }
        }
        for(let i=0; i < imgs.length; i++)
        {
            if([7,9,11,13,33,34,35,36,39].includes(i) === true)
            {
                continue;
            }
            imgs[i].style.display = 'none';
        }
    });
    let images = document.querySelectorAll('.grid-item');
    let pop = document.querySelector('.pop-up');
    images.forEach(function(img){
        img.addEventListener('click', function(){
            pop.style.display = 'block';
            setTimeout(function(){pop.style.opacity = '1';}, 300);
            pop.style.backgroundImage = img.style.backgroundImage;
        });
    });
    let x = document.querySelector('.x');
    x.addEventListener('click', function(){
        pop.style.opacity = '0';
        setTimeout(function(){pop.style.display = 'none';}, 300);
    });
});
