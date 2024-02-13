function showColorPallte(){
let checkPallete = false;
  let backgroundColors = document.querySelector('.js-background-colors');
  backgroundColors.addEventListener('click', ()=>{
    let colorPallete = document.querySelector('.js-color-pallete');
    if (!checkPallete){
      colorPallete.classList.add('show-color-pallete');
      checkPallete = true;} else{
        colorPallete.classList.remove('show-color-pallete');
        checkPallete = false
      } })
}
showColorPallte()



function changeBackground(){
  let bodyElement = document.querySelector('body');
  let projectDivs = document.querySelectorAll('.project-divs')
  let introduction = document.querySelector('.introduction')
  let whiteBackground = document.querySelector('.js-white')
  let blackBackground = document.querySelector('.js-black')
  let defaultBackground = document.querySelector('.default')

  whiteBackground.addEventListener('click', ()=>{
    bodyElement.classList.remove('black');
    introduction.classList.remove('white-font')
    bodyElement.classList.add('white');
    introduction.classList.add('black-font');
    projectDivs.classList.add('div-background')
  })

  blackBackground.addEventListener('click', ()=>{
    bodyElement.classList.remove('white');
    introduction.classList.remove('black-font');
    introduction.classList.add('white-font')
    bodyElement.classList.add('black')
  });

  defaultBackground.addEventListener('click', ()=>{
    bodyElement.classList.remove('black');
    bodyElement.classList.remove('white');
    introduction.classList.remove('black-font');
    introduction.classList.remove('white-font')
  })
}

changeBackground()