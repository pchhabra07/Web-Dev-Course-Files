let newMovie=document.createElement('li');
newMovie.innerText='SpiderMan Homecoming';
newMovie.classList.add('movie-name');

// newMovie.classList.remove('movie-name');

let movieList=document.querySelector('.movie-list');
movieList.append(newMovie);

let movieNames= document.querySelectorAll('.movie-name');
console.log(movieNames);