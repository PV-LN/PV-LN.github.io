function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

window.onload = codeAddress;
const ul = document.getElementById('countries');
const url = 'https://restcountries.eu/rest/v2/all';
fetch(url,{mode: 'cors'})
.then(res => res.json())
.then(json => console.log(json))
.catch(error => console.error(error));
function clear_countries()
{
    document.getElementById('countries').innerHTML=" ";
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}



function codeAddress() {

    var name = getUrlVars()["search"];
    console.log(name);
    var search='?search='+name;
    console.log(search);
    currentLocation =window.location + search;
    var url = 'https://restcountries.eu/rest/v2/name/';
   var ul = document.getElementById('countries');
   fetch(url+name,{mode: 'cors'})
.then(res => res.json())
 .then(function(data) {
    let countries = data;
    console.log(countries);
    countries.forEach(country => { 
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
                br=createNode('br');
                a =createNode('a');
            img.src = country.flag;
            span.innerHTML = `${country.name} `;
            next= './detail.html?name=' + `${country.alpha3Code} `+'&loc='+ currentLocation;
            a.href= next;
            append(li, img);
            append(li,br);
            append(a, span);
            append(li,a);
            append(ul, li);
          
        
    });
   
  })
.catch(error => console.error(error));

            
        
}
       
        
function find_countries()
{
    val = document.getElementById("mySearch").value;
var url = 'https://restcountries.eu/rest/v2/name/';
var ul = document.getElementById('countries');

console.log(val);
var search='?search='+val;
console.log(search);
currentLocation =window.location + search;

fetch(url+val,{mode: 'cors'})
.then(res => res.json())
 .then(function(data) {
    let countries = data;
    console.log(countries);
    countries.forEach(country => { 
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
                br=createNode('br');
                a =createNode('a');
            img.src = country.flag;
            span.innerHTML = `${country.name} `;
            next= './detail.html?name=' + `${country.alpha3Code} `+'&loc='+ currentLocation;
            a.href= next;
            append(li, img);
            append(li,br);
            append(a, span);
            append(li,a);
            append(ul, li);
          
        
    });
   
  })
.catch(error => console.error(error));

}