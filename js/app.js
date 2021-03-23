"use strict";

let animalArray = [];
let keywWords = [];

let hornsArray = [];
function Animal(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  keywWords.push(this.keyword);
  hornsArray.push(this.horns);
}

console.log(keywWords.length);

Animal.prototype.render = function () {
  $("#template").hide();
  let imageAlbum = $("#template").clone();

  $("main").append(imageAlbum);
  imageAlbum.find("h2").text(this.title);
  imageAlbum.find("img").attr("src", this.image_url);
  imageAlbum.show();

  imageAlbum.removeAttr("id");
};
//make an array for keyword
let unique = [];
function array() {
  for (let index = 0; index < keywWords.length; index++) {
    let x = keywWords[index];
    if (!unique.includes(x)) {
      unique.push(x);
    }
  }
}

//only push the unique ones

function select() {
  let select = $("select");

  unique.forEach((element) => {
    let option = `<option>${element}`;
    select.append(option);
  });
}

$("document").ready(getDogsData);

function getDogsData() {
  const ajaxSettings = {
    method: "get",
    dataType: "json",
  };

  $.ajax("data/page-1.json", ajaxSettings).then((data) => {
    data.forEach((element) => {
      let animalObj = new Animal(
        element.image_url,
        element.title,
        element.description,
        element.keyword,
        element.keyword
      );
      animalArray.push(animalObj);
      animalObj.render();
    });

    array();
    select();
  });
}

// Filtering Feature

$("select").on("change", function (event) {
  let option = $("select").find(":selected").text();

  if (event.target.value !== "default") {
    $("main").empty();

    addimageAlbum();

    for (let index = 0; index < animalArray.length; index++) {
      if (animalArray[index].keyword === option) {
        $("#template").hide();

        let imageAlbum = $("#template").clone();

        $("main").append(imageAlbum);
        imageAlbum.find("h2").text(animalArray[index].keyword);

        imageAlbum.find("img").attr("src", animalArray[index].image_url);

        imageAlbum.show();
      }
    }
  }
});

function addimageAlbum() {
  console.log("this is rendering image album");
  $("main").append(`
    <div id="template">
        <h2></h2>
        <img src="" alt="" />
    </div>`);
}

function check() {
  $("img").description;
}







/*


Feature 1: Pagination
Why are we implementing this feature?


As a user, I want to have the ability to view additional images so that my view does not become cluttered.
What are we going to implement?
Given that a user opens the application in the browser When the user clicks on a button or link to another page Then the other set of images should be dynamically displayed

How are we implementing it?
Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
Reset the filters, then repopulate them using only keywords from the images currently being displayed.


*/

























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