document.addEventListener('DOMContentLoaded', () => {
    const ul = document.querySelector('ul');
    ul.innerHtml = ''; //clear list
    const hash = location.hash;
    const tags = (hash.replace('#tags=', '')).split(',');
    tags.forEach((tag) => {
        const li = document.createElement('li');
        li.innerText = tag;
        ul.appendChild(li);
    });
});

//#tags=red,blue,purple