//MainMenu
function menuToggle(){
    let menuBtn=document.getElementById('menuBtn')
    let header=document.getElementById('myHeader')
    header.classList.toggle('menuActive')
    menuBtn.classList.toggle('isActive')
}
function contactToggle(){
    let form=document.getElementById('contactWrap')
    form.classList.toggle('isActive')
}