"use strict";

let animalArray = [];
let keywWords = [];
let unique = [];

function Animal(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  keywWords.push(this.keyword);
}



// $("document").ready(getDogsData);




function getDogsData(num) {
  const ajaxSettings = {
    method: "get",
    dataType: "json",
  };
  
  $.ajax(`data/page-${num}.json`, ajaxSettings).then((data) => {
    data.forEach((element) => {
      let animalObj = new Animal(
        element.image_url,
        element.title,
        element.description,
        element.keyword,
        element.keyword
        );
        animalArray.push(animalObj);
        
        $('#animals').append(animalObj.render());
      });
      array();
    });
  }



  
  
  
  // //make an array for keyword
 
  
  function array() {
 
  for (let index = 0; index < keywWords.length; index++) {
    let x = keywWords[index];
    if (!unique.includes(x)) {
      unique.push(x);
    }
  }
        select();

}



// //only push the unique ones

function select() {
  let select = $("select");
  console.log(unique,'-----------hoooooooooooooooooopa------------------------');
  
  unique.forEach((element) => {
    let option = `<option>${element}`;
    select.append(option);
  });


}


// Identify the mustache template.
// Why? The actual JS shouldn't have any 'knowledge' or 'insight' into the page structure at all.
// We call this "separation of concerns"



let templateId = '#template';

// let neighborhoods = [];

// Demo Mustache
Animal.prototype.render = function () {
  // console.log(this);
  // 1. Get the template from the HTML document
  let template = $(templateId).html();
  // console.log(template);
  // 2. Use Mustache to "render" new html by merging the template with the data
  let html = Mustache.render(template, this);
  // 3. Do not forget to return the HTML from this method
  return html
};





// Filtering Feature

$("select").on("change", function (event) {



  let option = $("select").find(":selected").text();



  if (event.target.value !== "default") {
    $("main").empty();

    addimageAlbum();

     console.log(animalArray,'this is animal array')

    for (let index = 0; index < animalArray.length; index++) {
      if (animalArray[index].keyword === option) {



          $('#animals').append(animalArray[index].render());
          

        imageAlbum.show();
      }
    }
  }
});

function addimageAlbum() {
  // console.log("this is rendering image album");
  $("main").append(`
  <section id="animals">
  <template id="template" type="text/x-tmpl-mustache">
      <div id="{{title}}" class="{{title}}">
        <h2>{{title}}</h2>
        <img src="{{image_url}}" >
      </img>
    
      </div>
    </template>`);
}






$('#1').click(function(event){
 animalArray=[];
 unique=[];
 keywWords=[];

  $("main").empty();
$('select').empty();
  addimageAlbum();
getDogsData(1);

  
  animalArray.forEach(element =>{

$('#animals').append(element.render());

  })




}


)






















$('#2').click(function(event){
  animalArray=[];
  unique=[];
  keywWords=[];

  $("main").empty();
  $('select').empty();

  addimageAlbum();
getDogsData(2);

  
  animalArray.forEach(element =>{
// console.log('--------------------------------------------------')

$('#animals').append(element.render());

  })



}
)
























/*

Feature 2: Templating
Why are we implementing this feature?
As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.
What are we going to implement?
Given that a user opens the application in the browser When the images are displayed on the screen Then each image should be rendered according to a template

How are we implementing it?
Create the appropriate Mustache template in your HTML with the same <h2>, <img>, and <p> elements as the jQuery template from the prior lab.
Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.

*/






/*

Feature 3: Styling with Flexbox
Why are we implementing this feature?
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in columns, as screen width allows

How are we implementing it?
Refactor your CSS to use Flexbox instead of floats. You are welcome to use a combination of floats and Flexbox, as you see fit.

*/



/*






*/