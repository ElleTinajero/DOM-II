// Your code goes here
//MOUSEOVER EVENT//
let firstEvent = document.querySelector("header .nav");
console.log(firstEvent);

firstEvent.addEventListener("mouseover", function(event){
    event.target.style.color = "orange";
    setTimeout(function () {
        event.target.style.color = "";
    },500);
}, false);

//FORM EVENT//

function logSubmit(event) {
    log.textContent = `Thanks for keeping us alive! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);

//button click count event//

const button = document.querySelector("#funButton");

button.addEventListener('click', event => {
  button.innerHTML = `Fun Times: ${event.detail}`;
});


//message event//

const messageEvent = document.getElementsByClassName('btn');
console.log(messageEvent);

function callback() {
  alert('You Signed Up! Congratulations!!!!');
}

messageEvent[0].addEventListener('click', callback);
messageEvent[1].addEventListener('click', callback);
messageEvent[2].addEventListener('click', callback);




//---------------------------------------------------------------------------------------------------//
//DRAG EVENT//
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

//----------------------------------------------------------------------

var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '10px dotted orange';
  enterEventCount++;
  addListItem('I Literally Cannot Contain This.');
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.border = '1px solid #333';
  leaveEventCount++;
  addListItem('I Literally Cannot Contain This.');
});

function addListItem(text) {
  // Create a new text node using the supplied text
  var newTextNode = document.createTextNode(text);

  // Create a new li element
  var newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  unorderedList.appendChild(newListItem);  
}