const pageTurnBtn = document.querySelectorAll('nextprev-btn');

pageTurnBtn.forEach(el, index) => {
    el.onclick = () =>{
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        if(pageTurn.classList.contains('turn')){
            pageTurn.cls
        }
    }
}