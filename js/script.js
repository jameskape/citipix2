$(document).ready(function() {

  /*************************
  USE ARRAYS
  **************************/
  function addCity(city){
  	$("#city-type").append("<option val='" + city + "'>" + city + "</option>");
  }
  //VS
  var cities = ["nyc",
                "sf",
                "la",
                "atx",
                "syd"];
  cities.forEach(addCity);  //For each we arecities, we are going to




// Functions
  function switchBackground(choice){
  //event.preventDefault(); //You only need to use this for html elements that have default action such as an 'a' tag if a user clicks this it navigats to the href (aka website)
    var choice = $("#city-type").val()

   if ((choice == "nyc")){
    $("body").attr('class', ''); // this resets your body to have no classes, it wont work if dont do this as it can't have more than one class
    $("body").addClass("nyc");
  }

   else if ((choice == "sf")){
     $("body").attr('class', '');
     $("body").addClass("sf");
   }

   else if ((choice == "la")){
     $("body").attr('class', '');
     $("body").addClass("la");
   }

   else if ((choice == "atx")){
     $("body").attr('class', '');
     $("body").addClass("austin");
   }

   else if ((choice == "syd")){
   $("body").attr('class', '');
   $("body").addClass("sydney");
   }


  // Clear entry for new city value
   $('#city-type').val('');
  }

//click drop down
$('#city-type').change(switchBackground);

//choose citytype

//change background to match citytype
});
