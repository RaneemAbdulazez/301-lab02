"use strict";

let animalArray = [];
let keywWords = [];
let unique = [];
let hornsArray= [];
let titleArray=[];

function Animal(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  hornsArray.push(this.horns);
  keywWords.push(this.keyword);
  titleArray.push(this.title);

  // horns.push(this.horns);
}

$("document").ready(getDogsData(1));

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
        element.horns
      );
      animalArray.push(animalObj);
      // console.log(animalObj.title,animalObj.horns)


      $("#animals").append(animalObj.render());
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






//sort by horns

function sortTitles() {

titleArray.sort();
animalArray.forEach(element =>{
  element.render();
})

}










// //only push the unique ones

function select() {
  let select = $("#select");
  
 

  unique.forEach((element) => {
    let option = `<option>${element}`;
    select.append(option);
  });

  let select2 = $('#sort');
 

    let option1 = `<option> sort By titile`;
    select2.append(option1);
    let option2 = `<option> sort By horns`;
    select2.append(option2);

}

// Identify the mustache template.
// Why? The actual JS shouldn't have any 'knowledge' or 'insight' into the page structure at all.
// We call this "separation of concerns"

let templateId = "#template";

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
  return html;
};

// Filtering Feature

$("#select").on("change", function (event) {
  let option = $("#select").find(":selected").text();
  if (event.target.value !== "default") {
    $("main").empty();

    addimageAlbum();

    // console.log(animalArray, "this is animal array");

    for (let index = 0; index < animalArray.length; index++) {
      if (animalArray[index].keyword === option) {
        $("#animals").append(animalArray[index].render());

        // imageAlbum.show();
      }
    }
  }
});




$("#sort").on("change", function (event) {
  let sortOption = $("#sort").find(":selected").text();
  console.log(sortOption);

  if (sortOption ===' sort By horns') {
    modify();
    getDogsData(2);
    sortTitles();
    animalArray.forEach(element =>{
      element.render();
    })


    // $("main").empty();

    // addimageAlbum();


  }

  //   // console.log(animalArray, "this is animal array");

  //   for (let index = 0; index < animalArray.length; index++) {
  //     if (animalArray[index].keyword === option) {
  //       $("#animals").append(animalArray[index].render());

  //       // imageAlbum.show();
  //     }
  //   }
  // }
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

$("#1").click(function (event) {
  
  modify();
  getDogsData(1);

  animalArray.forEach((element) => {
    $("#animals").append(element.render());
  });
});

$("#2").click(function (event) {
modify();
  getDogsData(2);

  animalArray.forEach((element) => {
    // console.log('--------------------------------------------------')

    $("#animals").append(element.render());
  });
});

// Feature 4: Sort the images
// Why are we implementing this feature?
// As a user, I want to be able to sort the images so that there is an order to their rendering.
// What are we going to implement?
// Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

// How are we implementing it?
// Add the ability for the user to sort the images by either title or by number of horns.
// Sort the images by one of the properties on page load. This should also apply to the second page of images.

// sort by horns

//sort by




function modify(){

  animalArray = [];
  unique = [];
  keywWords = [];
  titleArray=[];

  $("main").empty();
  $("#select").empty();
  $("#sort").empty();


  addimageAlbum();
}