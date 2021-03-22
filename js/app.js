// Use AJAX, specifically $.ajax(), to read the provided JSON file.
// Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
// Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.


// "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
// "title": "UniWhal",
// "description": "A unicorn and a narwhal nuzzling their horns",
// "keyword": "narwhal",
// "horns": 1


'use strict';
//constructor also a method that render your object -> bulid anew elements let obj = `<div><h2>${this.title}</h2></div>` then append to main

function Animal(image_url,title,description,keyword,horns){
    
 this.image_url=image_url;
 this.title=title;
 this.description=description;
 this.keyword=keyword;
 this.horns=horns;
}



Animal.prototype.render=function(){
    let  imageAlbum=$('#template').clone();
$('main').append(imageAlbum);
imageAlbum.find('h2').text(this.title);
imageAlbum.find('img').attr('src',this.image_url);


}

Animal.prototype.select=function(){
    let select=$('select');
    let option=`<option>${this.keyword}`;
    select.append(option);
    // $('option').


    $( ".target" ).change(function() {
        alert( "Handler for .change() called." );
      });
    


   
  
}







$('document').ready(getDogsData);

function getDogsData() {
            
                const ajaxSettings = {
                        method: 'get',
                        dataType: 'json'
                    }
                    console.log("I will use the ajax ..");

                    // get data from backend file data.json from server
                    $.ajax('data/page-1.json', ajaxSettings).then(data=> {
                           
                            data.forEach(element=> {
                                    let animalObj = new Animal(element.image_url, element.title,element.description,element.keyword,element.keyword);
                                    animalObj.select();
                                    animalObj.render();

                                });

                    
                            })
                        }
                        
                        
                        
                        



                        
                        
                        
