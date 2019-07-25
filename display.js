function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var name = getUrlVars()["name"];
var ret_loc=getUrlVars()["loc"];
var selected_name = name.replace("%20", ""); 
console.log(selected_name);
console.log(ret_loc);
const url = 'https://restcountries.eu/rest/v2/alpha/';
var ul = document.getElementById('countries');

fetch(url+selected_name,{mode: 'cors'})
.then(res => res.json())
.then(function(data){

    countryData=data;
    console.log(countryData);
    updateData(countryData);
  

})
.catch(error => console.error(error));
function updateData(countryData)
{ 
    console.log(countryData);
document.querySelector("#flag-container img").src = countryData.flag;
document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
document.getElementById("capital").innerHTML = countryData.capital;
document.getElementById("dialing-code").innerHTML = `${countryData.callingCodes[0]}`;
document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
document.getElementById("region").innerHTML = countryData.region;
document.getElementById("subregion").innerHTML = countryData.subregion;
}
function back()
{
    var button=document.getElementById('return');
    
    window.location=ret_loc;
    append(button,a);

    
}