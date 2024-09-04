const root = document.getElementById('root');
const h1 = document.createElement('h1');
h1.textContent = 'Sign up';
const form = document.createElement('form');
form.classList.add('form');

const datasForm = [
    {type:'text', placeholder:'Name...', name:'fullName',title: ' Full name'},
    {type:'email', placeholder:'Email address...', name:'email',title:'Email'},
    {type:'text', placeholder:'Username...', name:'username',title:'Username'},
    {type:'password', placeholder:'*******', name:'password',title:'Password'},
    {type:'password', placeholder:'****', name:'repeatPassword',title:'Repeat Password'},
]



function createInput (data) {

const fullName = document.createElement('label')
const fullNameSpan = document.createElement('span');
fullNameSpan.textContent = data.title;
const fullNameInput = document.createElement('input');
fullNameInput.setAttribute('name',data.name);
fullNameInput.setAttribute('type', data.type);
fullNameInput.setAttribute('placeholder',data.placeholder);
fullName.append(fullNameSpan,fullNameInput);
return fullName;
}

const elementsForm = datasForm.map((data)=>createInput(data));
form.append(...elementsForm);
const labelCheckbox = document.createElement('label');
labelCheckbox.classList.add('checkbox');
const checkbox = document.createElement('input');
checkbox.setAttribute('name','agree');
checkbox.setAttribute('type','checkbox');
labelCheckbox.append(checkbox, ' I agree to the Terms of User');
checkbox.addEventListener('change', (event)=>{
    console.log(event.target.checked);
        if(event.target.checked){
event.target.parentElement.nextElementSibling.disabled = false;
    }else{
        event.target.parentElement.nextElementSibling.disabled = true;
    }
})


const button = document.createElement('button');
button.textContent = 'Sign up';
button.setAttribute('type','submit');
button.disabled = true;
form.append(...elementsForm,labelCheckbox,button);
root.append(h1,form);

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    for (let index = 0; index < 5 ; index++){
        const element = form.elements[index];
        if (element.value.trim() === '') {
            element.style.borderColor = red
        }
    }
    if (patternEmail.test(form.elements.email.value.trim())); {}
})