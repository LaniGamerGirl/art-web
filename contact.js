var form = document.getElementById("my-form");
var nameInput = document.querySelector('input[name=name]');


form.addEventListener('submit', function(event){
  console.log (nameInput.value);
  
  var formData = new FormData(form);
  var name = formData.get('name');
  var age = formData.get('age');
  var gender = formData.get('gender');
  var message = formData.get('message');
  var extraInfo = formData.get('extra-info');
  
   console.log(formData.get('name'));
   console.log(formData.get('age'));
   console.log(formData.get('gender'));
   console.log(formData.get('extra-info'));
   console.log(formData.get('message'));
  
  
  var result = document.getElementById('result') 
  result.innerText = ` Hello, ${name}. You are a ${age} years old ${gender} I have noticed. My favorite animal is also ${animal} and I also like the ${game} game genre. We have so much in common, but my favorite food isn't ${food}. Thanks for your input of extra information "${extraInfo}". With all this information I can steal your identity!`
  
  event.preventDefault();
})