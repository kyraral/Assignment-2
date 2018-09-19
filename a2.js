Handlebars.registerHelper('format',function(number){return number.toLocaleString()});
let titleTemplateString=document.getElementById('title-template').innerHTML;
let renderTitle= Handlebars.compile(titleTemplateString);
console.log(titleTemplateString);

$('#submit').on('click', function(event) {
  console.log("yes");
  let search=document.getElementById('search').value;

  event.preventDefault();

  $('#results').html('Loading...');


let url = `https://www.reddit.com/r/${search}.json`;

let promise = $.ajax({type:'GET',url:url});

promise.then(function(titleProfile){
  console.log(titleProfile);
  let renderedTitle = renderTitle({response: titleProfile});
    console.log(renderedTitle);
    $('#results').html(renderedTitle);
}, function(error){
  console.error(error)
    $('#results').html('Oops! Something went wrong!');

 }); });
