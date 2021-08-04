Landing Page Project
Table of Contents

    Over View   Programming languages   Architecture    Additional Resource     Building codes

Over View
Landing project is a simple project to browse multi section ,fell free to add any new section it will dynamicly attached to navigation Bar and to attached to all other function .you can select you section from the navigation bar or by scrolling down ,the navigation Bar will indicate you to the current section.the navigation Bar will hide due to 10 second in case of not scrolling to fell free of reading the section, move the scroll down to show the navigation Bar, or switch to the topButton to move the top.

Programming languages 
HTML , CSS , ES6

Architecture
css
- styles.css
index.html
js
- app.js
README.md

Additional Resource 
W3school :https://www.w3schools.com/
Support tools for more styling the navigation Bar and TopButton

Building codes
A-dynamicly add new section to the navigation Bar
    1-Get all the current section and get its data
    2-Loop over the section to create an a link attached to Li list 
    3-Add an eventListener which will store in the browser  and fire when the user click the section
B-switch between sections using scroll down
    1-Add an eventListener to windows to fire while scrolling the page which change the section and the Navigation link to the active stste depend on the current active section by Determine if the section in the viewing are or not using getBoundingClientRect Function
C-Hide the navigation Bar if not scrolling for 10 second
    1-Add SetTimeOut function to windows event to fire after 10 second to hide the navigation Bar 
D-Using topButton to move to the top, which shown in the page after reaching a 300 pxl from the top and
    hide when less than this value. this button also reset all active section to the default state.
