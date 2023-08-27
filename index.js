let body=document.querySelector('body')
//create navbar section
let navlinks=['Home', 'About' ,'Recipe', 'Contcat', 'Team'] //links of navbar
let navbar=document.createElement('div')
navbar.classList.add('navbar')//add class name to div 
body.appendChild(navbar)

//create logo in navbar
let logo=document.createElement('h3')
let spanOflogo=document.createElement('span')

logo.classList.add('logo')
spanOflogo.classList.add('span-logo')//add class name to sapn
spanOflogo.textContent='Fusion'
logo.textContent='Icy'
logo.appendChild(spanOflogo)
navbar.appendChild(logo)

//create links of navbar (ul-li)
let list=document.createElement('ul')
list.classList.add('unordered-list')
navlinks.map((item,index)=>{
            let itemOfList=document.createElement('li')
            itemOfList.classList.add('nav-link')
            let link=document.createElement('a')
            link.setAttribute('href',`#${item}`)
            link.textContent=item
            itemOfList.appendChild(link)
            list.appendChild(itemOfList)
})
navbar.appendChild(list)


//landing section
let landingDiv=document.createElement('div')
landingDiv.classList.add('landing-section')
landingDiv.setAttribute('id','Home')
body.appendChild(landingDiv)

//create text content of lending section
let textDiv=document.createElement('div')
textDiv.classList.add('text')

//create h3 tag
let header=document.createElement('h3')
header.textContent=`When life gives you lemons,
trade them for `
textDiv.appendChild(header)

//create span tag
let spanOfHeader=document.createElement('span')
spanOfHeader.textContent='iced coffee'
header.appendChild(spanOfHeader)

//create paragraph tag
let paragraph=document.createElement('p')
paragraph.textContent=`Overthinking. That’s my answer to everything. I overthink why I need
 an iced coffee to be cool in summer or a hot cup of tea in winter.
 Why not a nice glass of milk `
textDiv.appendChild(paragraph)

//create button tag
let buttonOflanding=document.createElement('button')
buttonOflanding.textContent='Show More!'
textDiv.appendChild(buttonOflanding)
landingDiv.appendChild(textDiv)

//create image 
let imageOfLanding=document.createElement('img')
imageOfLanding.setAttribute('src','./images/landing.png')
landingDiv.appendChild(imageOfLanding)



//
let cardsDiv=document.createElement('div')
cardsDiv.classList.add('cards-box')
body.appendChild(cardsDiv)

let imagesOfCards=['./images/card-img-1.png','./images/card-img-4.png',
'./images/card-img-2.png','./images/card-img-5.png','./images/card-img-3.png']

imagesOfCards.map((item,index)=>{
            let card=document.createElement('div')
            card.classList.add('card')
            //create image 
            let imageOfCard=document.createElement('img')
            imageOfCard.setAttribute('src',item)
            card.appendChild(imageOfCard)
            //create text content of card
            let textDiv=document.createElement('div')
            textDiv.classList.add('text-card')
            card.appendChild(textDiv)
            //create header of card
            headerOfCard=document.createElement('h5')
            headerOfCard.textContent='ice coffee'
            textDiv.appendChild(headerOfCard)
            //create paragraph of card
            paragraphOfCard=document.createElement('p')
            paragraphOfCard.textContent=`Lorem ipsum dolor 
            sit amet,consectetur .
            `
            textDiv.appendChild(paragraphOfCard)
            //create icon of card
            let divIcon=document.createElement('div')
            divIcon.classList.add('box-icons')
            textDiv.appendChild(divIcon)
            let listIcons=[] //append icons
            for(let i=0;i<5;i++){ //to repeat append icon 
            iconOfCard=document.createElement('i')
            iconOfCard.setAttribute('class','fa-solid fa-star')
            
            listIcons.push(iconOfCard)
            }
            //append icons in list and shown in card
            listIcons.map((item)=>{
                        divIcon.appendChild(item)
            })
            
            cardsDiv.appendChild(card)
})
//create about section
let aboutDiv=document.createElement('div')
aboutDiv.classList.add('about-setion')
aboutDiv.setAttribute('id','About')
body.appendChild(aboutDiv)

let descriptionImg=document.createElement('div')
descriptionImg.classList.add('about-image')
aboutDiv.appendChild(descriptionImg)

let imageOfdiv=document.createElement('img')
imageOfdiv.setAttribute('src','./images/about.png')
descriptionImg.appendChild(imageOfdiv)

let content=[
            {name:"Our Atmosphere",image:'./images/about-1.jpg',description:"Step into our café, and you'll be greeted by an ambiance that's both inviting and inspiring. From the warm and cozy seating areas to the soothing background music, every detail has been carefully designed to create a space where you can unwind, connect, or simply enjoy a moment of solitude."},
            {name:"Community Hub",image:'./images/about-2.jpg',description:"We're not just a café we're a community hub where locals and visitors come together to share stories, ideas, and laughter. Our communal tables and cozy corners provide the perfect setting for both quiet moments of reflection and lively discussions."},
            {name:"Events & Workshops",image:'./images/about-3.jpg',description:"Join us for a variety of events and workshops that celebrate culture, creativity, and community. From live music nights to art exhibitions and educational sessions"},
            {name:"Creative Spaces",image:'./images/about-4.jpg',description:"Our café provides flexible spaces that can accommodate individuals, groups, or even brainstorming sessions. Whether you're working remotely, collaborating with colleagues, or seeking inspiration for your next project, our café offers an environment that encourages productivity and innovation."},
            {name: `Exceptional Coffee & 
            Culinary Delights`,image:'./images/about-5.jpg',description:"we believe that good food and drinks are at the heart of any memorable café experience. Our skilled baristas take pride in crafting the perfect cup of coffee, made from carefully selected beans roasted to perfection"},
]
content.map((item,index)=>{
            let boxAroundDiv=document.createElement('div')
            boxAroundDiv.classList.add(`box`)
            descriptionImg.appendChild(boxAroundDiv)
            //create header of each box 
            let headerOfBox=document.createElement('h6')
            headerOfBox.textContent=item.name
            boxAroundDiv.appendChild(headerOfBox)

            //create circle of box
            let circleOfbox=document.createElement('div')
            circleOfbox.classList.add(`circle`)
            //create ditales of each point
            let descriptionDiv=document.createElement('div')
                       descriptionDiv.classList.add('description')
                       //create text div 
                       let textDiv=document.createElement('div')
                       textDiv.classList.add('text')
                       descriptionDiv.appendChild(textDiv)
                       //create header 
                       let header=document.createElement('h5')
                       header.textContent=item.name
                       textDiv.appendChild(header)
                       //create paragraph 
                       let paragraph=document.createElement('p')
                       paragraph.textContent=item.description
                       textDiv.appendChild(paragraph)

                       //ceate image
                       let img=document.createElement('img')
                       img.setAttribute('src',item.image)
                       descriptionDiv.appendChild(img)
                       aboutDiv.appendChild(descriptionDiv)
            
            boxAroundDiv.appendChild(circleOfbox)
            

})

//display description div 
const clickableDivs = document.querySelectorAll('.circle');
const detailsDivs = document.querySelectorAll('.description');

clickableDivs.forEach((div, index) => {
  div.addEventListener('click', () => {
    // Toggle visibility of the corresponding details div
    if (detailsDivs[index].style.display === 'flex') {
      detailsDivs[index].style.display = 'none';
      clickableDivs[index].classList.remove('active');
    } else {
      // Hide all details divs and remove 'active' class from all circles
      detailsDivs.forEach((detailsDiv, i) => {
        detailsDiv.style.display = 'none';
        clickableDivs[i].classList.remove('active');
      });
      
      // Show the clicked details div and add 'active' class to the clicked circle
      detailsDivs[index].style.display = 'flex';
      clickableDivs[index].classList.add('active');
    }
  });
});




//recipe section
let contentBox=document.createElement('div')
contentBox.classList.add('recipe-section')
contentBox.setAttribute('id','Recipe')
body.appendChild(contentBox)

let boxOfbuttons=document.createElement('div')
boxOfbuttons.classList.add('box-buttons')
contentBox.appendChild(boxOfbuttons)
const buttons = [
            { name: 'All', class: 'all', images: ['./images/drink.jpg', './images/food-4.jpg', './images/food-2.jpg', './images/food-3.jpg', './images/food-1.jpg'] },
            { name: 'Desserts', class: 'desserts', images: ['./images/cake.jpg', './images/cake-2.jpg', './images/cake-3.jpg', './images/cake-5.jpg', './images/food-1.jpg'] },
            { name: 'Salads', class: 'salads', images: ['./images/salads-1.jpg', './images/salads-2.jpg', './images/salads-3.jpg', './images/salads-4.jpg', './images/food-4.jpg'] },
            { name: 'Drinks', class: 'drinks', images: ['./images/drink.jpg', './images/drink-2.jpg', './images/drink-3.jpg', './images/drink-4.jpg', './images/drink-5.jpg'] }
 ];
          
          // Create images divs
          let gridImages = document.createElement('div');
          gridImages.classList.add('grid-img');
          contentBox.appendChild(gridImages);
          
          // Create and show images for "All" button by default
          buttons[0].images.forEach(imageSrc => {
            let div = document.createElement('div');
            div.classList.add('img');
            let img = document.createElement('img');
            img.setAttribute('src', imageSrc);
            div.appendChild(img);
            gridImages.appendChild(div);
          });
          
          buttons.forEach(item => {
            // Create button 
            let button = document.createElement('button');
            button.classList.add(item.class);
            button.textContent = item.name;
            boxOfbuttons.appendChild(button);
          
            // Add click event listener
            button.addEventListener('click', () => {
              // Clear existing images
              gridImages.innerHTML = '';
          
              // Show images for the clicked button
              item.images.forEach(imageSrc => {
                let div = document.createElement('div');
                div.classList.add('img');
                let img = document.createElement('img');
                img.setAttribute('src', imageSrc);
                div.appendChild(img);
                gridImages.appendChild(div);
              });
            });
          });

//display description div 
const buttonDivs = document.querySelectorAll('.box-buttons button');

buttonDivs.forEach((div, index) => {
  div.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    buttonDivs.forEach(buttonDiv => {
      buttonDiv.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    div.classList.add('active');
  });
});

//create contcat section

let contcatSection=document.createElement('div')
contcatSection.classList.add('contcat-section')
contcatSection.setAttribute('id','Contcat')
body.appendChild(contcatSection)
let headerOfContcat=document.createElement('p')
headerOfContcat.textContent='Contcat Us'
contcatSection.appendChild(headerOfContcat)

//create form of contcat
let form=document.createElement('form')
form.classList.add('form')
contcatSection.appendChild(form)
//create input ,label,button of form
let valuesOfinputs=[
            {tag:'input',type:'text',label:'Name'},
            {tag:'input',type:'email',label:'Email'},
            {tag:'textarea',label:'Message'},
            {tag:'button',type:'submit'},
]
valuesOfinputs.map(item=>{
            let controlGroup=document.createElement('div')
            controlGroup.classList.add('cotrol-group')
           form.appendChild(controlGroup)

           if(item.type==='submit'){
            let button=document.createElement('button')
            button.textContent=item.type
            form.appendChild(button)
           }
           else if(item.tag==='textarea'){
            let textArea=document.createElement('textarea')
            let labelForm=document.createElement('label')
            labelForm.setAttribute('for',item.label.toLowerCase())
            labelForm.textContent=item.label
            controlGroup.appendChild(labelForm)
            form.appendChild(textArea)
           }
           else{
           let inputFrom=document.createElement('input')
           inputFrom.setAttribute('type',item.type)
           inputFrom.setAttribute('name',item.label.toLowerCase())
           let labelForm=document.createElement('label')
           labelForm.setAttribute('for',item.label.toLowerCase())
           labelForm.textContent=item.label
           controlGroup.appendChild(labelForm)
           controlGroup.appendChild(inputFrom)
           }
})
//create image of section
let imageOfContcat=document.createElement('img')
imageOfContcat.setAttribute('src','./images/contcat.png')
contcatSection.appendChild(imageOfContcat)

//create team section
let teamSection=document.createElement('div')
teamSection.classList.add('team-section')
teamSection.setAttribute('id','Team')
body.appendChild(teamSection)

//create header of team section
let headerOfTeam=document.createElement('p')
headerOfTeam.textContent='Our Team'
teamSection.appendChild(headerOfTeam)
let spanOfHeaderTeam=document.createElement('span')
spanOfHeaderTeam.textContent='let us know you our best people'
teamSection.appendChild(spanOfHeaderTeam)

let teamMembers=['./images/team-1.jpg','./images/team-2.jpg','./images/team-3.jpg']
teamMembers.map(item=>{
            let memberCard=document.createElement('div')
            memberCard.classList.add('member-card')
            teamSection.appendChild(memberCard)
            let imageOfMember=document.createElement('img')
            imageOfMember.setAttribute('src',item)
            memberCard.appendChild(imageOfMember)
})
