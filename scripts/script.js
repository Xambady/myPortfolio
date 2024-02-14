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
  let whiteBackground = document.querySelector('.js-white')
  let blackBackground = document.querySelector('.js-black')
  let defaultBackground = document.querySelector('.default');
  let bodyElement = document.querySelector('body');
  let name = document.querySelector('.name')
  let introduction = document.querySelector('.introduction');
  let projectTitles = document.querySelectorAll('.project-title');
  let projectText = document.querySelectorAll('.project-divs');
  let description = document.querySelector('.description')

  whiteBackground.addEventListener('click', ()=>{
    bodyElement.classList.remove('black-background');
    bodyElement.classList.add('white-background');
    introduction.classList.remove('white-font');
    introduction.classList.add('black-font');
    name.classList.remove('white-font');
    name.classList.add('black-font');
    description.classList.add('black-font')
    projectTitles.forEach((title)=>{
      title.classList.remove('white-font')
     })
    projectTitles.forEach((title)=>{
    title.classList.add('black-font')
   });
   projectText.forEach((text)=>{
    text.classList.remove('white-font');
    text.classList.add('black-div-background')
 })
  })

  blackBackground.addEventListener('click', ()=>{
    bodyElement.classList.remove('white-background');
    bodyElement.classList.add('black-background');
    introduction.classList.remove('black-font');
    introduction.classList.add('white-font');
    name.classList.remove('black-font');
    name.classList.add('white-font');
    description.classList.remove('black-font');
    projectTitles.forEach((title)=>{
      title.classList.remove('black-font')
      })
    projectTitles.forEach((title)=>{
    title.classList.add('white-font')
    });

    projectText.forEach((text)=>{
    text.classList.add('white-font');
    text.classList.remove('black-div-background')
    })
  });

  defaultBackground.addEventListener('click', ()=>{
    bodyElement.classList.remove('white-background');
    bodyElement.classList.remove('black-background');
    introduction.classList.remove('black-font');
    introduction.classList.remove('white-font');
    name.classList.remove('black-font');
    name.classList.remove('white-font');
    description.classList.remove('black-font');
    projectTitles.forEach((title)=>{
      title.classList.remove('black-font')
     });
    projectTitles.forEach((title)=>{
    title.classList.remove('white-font')
   });
    projectText.forEach((text)=>{
    text.classList.remove('white-font');
    text.classList.remove('black-div-background')
 });
  })
}

changeBackground()