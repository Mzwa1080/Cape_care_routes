
var selector = document.querySelector('.selectIt')

var mymap = L.map('mapid').setView([ -34.13199997, 18.38059997], 9.5);
function loadMap(){
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibGFuaWJ1aGxlIiwiYSI6ImNqaWxvaXk2NDBpNXMza3VuYW5jeXlncG4ifQ.AOCYAk7fmUipKye3OcMQdw'
  }).addTo(mymap);
}

function removeMap(){
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibGFuaWJ1aGxlIiwiYSI6ImNqaWxvaXk2NDBpNXMza3VuYW5jeXlncG4ifQ.AOCYAk7fmUipKye3OcMQdw'
  }).remove(mymap);
//  mymap.remove()
}

function community(){
  //loadMap()
  //Bicycle Empowerment Network (BEN)

    var marker = L.marker([-34.13199997, 18.38059997]).addTo(mymap);

    marker.bindPopup("This is the Bicycle Empowerment Network (BEN).").openPopup();

    //Cape Flats Dev Association (CAFDA)
    var marker2 = L.marker([-34.05959996, 18.48989996]).addTo(mymap);

    marker2.bindPopup("This is the Cape Flats Development Initiative.").openPopup();

    //Learn to Earn Training Centre

     var marker7 = L.marker([-34.05029996, 18.66870004]).addTo(mymap);


     marker7.bindPopup("This is the Learn to Earn Training Centre.").openPopup();

    //Montebello Design Centre

    var marker11 = L.marker([-33.97020003, 18.45750002]).addTo(mymap);

    marker11.bindPopup("This is the Montebello Design Centre.").openPopup();

     //Philani Nutrition and Development Centre

     var marker13 = L.marker([-34.01509999, 18.65140004]).addTo(mymap);

     marker13.bindPopup("This is the Philani Nutrition and Development Centre.").openPopup();

    //Victoria Mxenge

    var marker15 = L.marker([-33.85841071, 18.62899531]).addTo(mymap);


    marker15.bindPopup("This is Victoria Mxenge.").openPopup();

    //SANCOB

    var marker16 = L.marker([-33.83019996, 18.48840004]).addTo(mymap);


    marker16.bindPopup("This is SANCOB.").openPopup();

    //Selfhelp Manenburg

    var marker17 = L.marker([-33.98969997, 18.55629999]).addTo(mymap);

    marker17.bindPopup("This is Selfhelp Manenburg.").openPopup();

    //Sibanye Economic Empowerment

    var marker18 = L.marker([-34.03899996,18.67040001]).addTo(mymap);

    marker18.bindPopup("This is the Sibanye Economic Empowerment.").openPopup();

    //Siyazama Garden Ass (SCAGA)

    var marker19 = L.marker([-34.05290002,18.69229998]).addTo(mymap);

    marker19.bindPopup("This is the Siyazama Garden Ass (SCAGA).").openPopup();

    //Tsoga Environmental Resource Center

    var marker20 = L.marker([-33.94430004,18.52809999]).addTo(mymap);

    marker20.bindPopup("This is the Tsoga Environmental Resource Center.").openPopup();

    //West Coast Environmental Centre

    var marker21 = L.marker([-33.68099104,18.522062]).addTo(mymap);

    marker21.bindPopup("This is the West Coast Environmental Centre").openPopup();

    //Zanokhanyo Training Centre

    var marker22 = L.marker([-34.0614,18.67809997]).addTo(mymap);

    marker22.bindPopup("This is the Zanokhanyo Training Centre").openPopup();

    //Zezamele Enterprise

    var marker23 = L.marker([-33.92750001,18.42650001]).addTo(mymap);


    marker23.bindPopup("This is the ZZezamele Enterprise").openPopup();

}
function nature(){
  //loadMap()
  //Edith Stevens Wetland Park

  var marker3 = L.marker([-34.00269998, 18.55279998]).addTo(mymap);

  marker3.bindPopup("This is the Edith Stevens Wetland Park.").openPopup();


  //Footprints Environmental Centre
  var marker5 = L.marker([-34.0053, 18.46040003]).addTo(mymap);

  marker5.bindPopup("This is the Footprints Environmental Centre.").openPopup();

        //Look Out Hill

  var marker8 = L.marker([-34.04539996, 18.65679996]).addTo(mymap);

  marker8.bindPopup("This is Look Out Hill.").openPopup();
     //

  //Manyanani Peace Park

  var marker10 = L.marker([-34.04179998, 18.65729999]).addTo(mymap);


  marker10.bindPopup("This is the Manyanani Peace Park.").openPopup();


      //Oude Molen Eco Village

  var marker12 = L.marker([-33.93960001, 18.48390004]).addTo(mymap);

  marker12.bindPopup("This is the Oude Molen Eco Village.").openPopup();

   //Imvubu at Rondevlei

   var marker14 = L.marker([-34.06260001, 18.49720002]).addTo(mymap);

   marker14.bindPopup("This is Imvubu at Rondevlei.").openPopup();

}
function museum(){
  //Lwandle Migrant Labour Museum

  var marker9 = L.marker([-34.11880001, 18.86500004]).addTo(mymap);


  marker9.bindPopup("This is the Lwandle Migrant Labour Museum.").openPopup();

  //District Six Museum

  var marker24 = L.marker([-33.9277,18.4237]).addTo(mymap);

  marker24.bindPopup("This is the District Six Museum").openPopup();

        // L.Routing.control({
        //   waypoints: [
        //     L.latLng(-33.92750001, 18.42650001),
        //     L.latLng(-34.0614, 18.67809997)
        //     // L.LatLng(-33.68099104,18.522062)
        //   ]
        // }).addTo(mymap);

}

// function urban(){
//
//   //Golden Flowers
//
//   var marker6 = L.marker([-34.03920003, 18.7102]).addTo(mymap);
//
//
//   marker6.bindPopup("<b>Hello world!</b><br>This is the Golden Flowers.").openPopup();
//
//      var popup6 = L.popup()
//          .setLatLng([-34.03920003, 18.7102])
//          .setContent(" Golden Flowers.")
//          .openOn(mymap);
// }

window.addEventListener('load', function(){
loadMap()
})

selector.addEventListener('change', function(){
  console.log(selector.value)
  //removeMap()
//  map.off();
//  mymap.remove();

  loadMap()
  if(selector.value == 'community'){
    community()
  }

  else if(selector.value == 'nature'){
    nature()
  }

  else if(selector.value == 'museum'){
    museum()
  }
  //loadMap()

})
