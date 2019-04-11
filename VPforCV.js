document.addEventListener('DOMContentLoaded', () => {
    const ul = document.querySelector('ul');
    let hash = location.hash;
    ul.innerHtml = ''; //clear list
    const tags = (hash.replace('#tags=', '')).split(',');
    tags.forEach((tag) => {
        const li = document.createElement('li');
        li.innerText = tag;
        ul.appendChild(li);
    });
});


// Once the button 'allTags' is clicked the text of the input element is added as a new tag into the URL hash (#tags=red,blue,purple,mytag)
const button = document.getElementById('myButton');
button.onclick = function () {
    const links = document.querySelector('a');
    const myTag = document.getElementById('textInput').value;
    links.href += ',' + myTag;
};

