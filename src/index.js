console.log('%c HI', 'color: firebrick')

let breeds = [];

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => {
            //add image
            addImage(image)
        });
    })
}

function loadDogBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl) 
    .then(res => res.json())
    .then(results => {
        breeds = Object.keys(results.message)
        // add to page 
        updateBreedList(breeds)
    })
}

function addImage(dogPicUrl) {
    const container = document.getElementById("dog-image-container")
    const newImage = document.createElement("img")
    newImage.src = dogPicUrl
    container.appendChild(newImage)

}

function updateColor(event) {
    event.target.style.color = "red"
}

function addBreed(breed) {
    const ul = document.getElementById('dog-breeds')
    let li = document.createElement('li')
    li.textContent = breed
    li.style.cursor ='pointer'
    ul.appendChild(li)
    li.addEventListener('click', updateColor)

}

function removeChildren(element) {
    const child = element.lastElementChild;
    while(child) {
        element.removeChild(child)
        child = element.lastElementChild
    }
    
}

function updateBreedList(breeds) {
    const ul = document.querySelector('#dog-breeds')
    removeChildren(ul)
    breeds.forEach(breed => addBreed(breed))

}

function addBreedSelectListener(){
    const breedDropDown = document.getElementById('breed-dropdown')
    breedDropDown.addEventListener('change', function(e) {
        updateBreedList(breeds.filter(breed => breed.startsWith(e.target.value)))
    })
}


document.addEventListener('DOMContentLoaded', function() {
    //load images
    loadImages();
    //load all the dog breeds
    
})