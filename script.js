function catGenerator() {
    let image = document.createElement('img');
    let cat = document.getElementById('cat-image');

    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    cat.appendChild(image);
}