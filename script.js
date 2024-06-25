let divImg = document.querySelector('.divImg');

divImg.addEventListener('mouseover', () => {
    let on = document.querySelector('.on');
    on.style.zIndex = '2'; 
    setTimeout(() => {
        on.style.zIndex = '0';
    }, 1000);
});





