
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll('section'); /* Globally get all section to work on more function*/
const ulHolder = document.getElementById('navbar__list');
let isScrolling;                                          /* Using Let instate of Const while the variable will reassign */

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/* Move to the top using topButton and other realted tasks*/
function toTopFunction(){
  document.documentElement.scrollTop = 0;                              /* scroll to the top when TopButton clicked */
  document.getElementsByClassName("topnav")[0].style.display="block"; /* Show Nav when scrolling to the top */
  let navLinks = document.querySelectorAll('a');
  navLinks.forEach(link => link.classList.remove('active'));          /* Clear the last active section while going to the top using TopButton */
};
/* Show and hide topButton while scrolling */
function toggleTopButton(){
  if(document.documentElement.scrollTop > 300){                       /* determine the which will the topButton will show when reached it */
    document.getElementById("topbutton").style.display="block";       /* show a topButton when reach the traget area */
  }else{
    document.getElementById("topbutton").style.display="none";        /* hide a topButton when leave the traget area */
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const docFragment = document.createDocumentFragment(); /* Create fragment to imporve the performance by avoiding reflow and repaint */
allSections.forEach(function(section){
  let linkData = section.getAttribute('data-nav');     /* get section data-nav to attach it on the nav link */
  let linkTxt = document.createTextNode(linkData);     /* create textNode to hold the link name equivalent to the section*/ 
  let linkElement = document.createElement('a');       /* create nav links*/

// Scroll to section on link click
  linkElement.addEventListener('click',function(){     /* add eventListener which will store in the browser and fire when the user clcik on the link */
    section.scrollIntoView({behavior:"smooth"})
  })

// Build menu 
  let liElement = document.createElement('li');        /* create li to hold the nav link */
  linkElement.appendChild(linkTxt);                    /* attach the link data to the link */
  liElement.appendChild(linkElement);                  /* attach the link to the Li */
  docFragment.appendChild(liElement);                  /* attach the li while looping to Document fragment to avoid reflow and repaint data */
});
ulHolder.appendChild(docFragment);                     /* attach the Document fragment to the Ul at one go */


// Add class 'active' to section when near top of viewport
function setActiveSection(){
  allSections.forEach(function(section){
    let getSecPos = section.getBoundingClientRect();    /* get the section position while looping */
    if (getSecPos.top>=0 && getSecPos.top <=100){        /* determine if the section in the view area by Comparing the section position and screen dimensions */
        section.classList.add('your-active-class');     /* add class active to the target section */
        setActiveNavLink(section);                      /* invoke a function to set the link is active*/
      }else{
        section.classList.remove('your-active-class')   /* remove active class from the section */
      }                                                                    
  })
  }

// Scroll to anchor ID using scrollTO event

window.addEventListener('scroll',function(){                            /* add eventListener to windows while scrolling to help the other function*/
  toggleTopButton()                                                     /* invoke the function which will show and hide the topButton */
  window.clearTimeout(isScrolling);                                     /* clear the time counter on scrolling*/
    isScrolling = setTimeout(function(){                                /* set timeOut 10 Sec while not scrollin */ 
    document.getElementsByClassName("topnav")[0].style.display="none"   /* hide the nav bar while not scrollin */
  },10000);
    document.getElementsByClassName("topnav")[0].style.display="block"; /* show the nav bar while scrollin */
setActiveSection();                                                     /* invoke the function which make the section and the link is active */
},false)


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Set sections as active
function setActiveNavLink(activeSection){ 
  let targetLinks = document.querySelectorAll('a');             /* get all the nav links*/ 
  let actSecDataNav = activeSection.getAttribute('data-nav')    /* get the data of the acive section */
  targetLinks.forEach(link =>{
    if (link.textContent !== actSecDataNav){                    /* determine which nav link equivalent to the active section  */
      link.classList.remove('active')                           /*  remove the class active */
      }else{
         link.classList.add('active');                          /* set the Cached link is active */
    }
  })
}  













/* Make sections collapsible. */

/*let getHover=document.querySelectorAll('.hover')
getHover.forEach(h=>{
  h.addEventListener('click',function(){
    console.log(h.nextElementSibling)
    h.nextElementSibling.style. ="none"
    if(h.nextElementSibling.style.display === "block"){
      console.log(kkk)}
  })
})*/
