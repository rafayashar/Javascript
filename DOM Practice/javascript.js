const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Add paragraph
const para = document.createElement('p');
para.style.cssText = 'color: red';
para.textContent = 'Hey I\'m red!';

container.appendChild(para);


// Add H3
const heading = document.createElement('h3');
heading.style.color = 'blue';
heading.textContent = 'I\'m blue h3!';

container.appendChild(heading);


// Add DIV and Elements inside
const subContainer = document.createElement('div');
subContainer.style.borderColor = 'black';
subContainer.style.cssText = 'border-style: solid; border-width: 5px'
subContainer.style.backgroundColor = 'pink';

const headOne = document.createElement('h1');
headOne.textContent = 'I\'m in a Div';
subContainer.appendChild(headOne);

const paraDiv = document.createElement('p');
paraDiv.textContent = 'Me too!';
subContainer.appendChild(paraDiv);

container.appendChild(subContainer);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });