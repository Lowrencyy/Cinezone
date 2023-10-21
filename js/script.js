const global = {
    currentPage: window.location.pathname
}

function highlighActiveLink() {
const link = document.querySelectorAll('.nav-link')

link.forEach((link) => {
    const hrefValue = link.getAttribute('href')

    //movie-details

    if (global.currentPage.includes('movie-details.html') && hrefValue.includes('index.html')
    ) {
link.classList.add('active');}
})
}

function highlighActiveLink() {
    const links = document.querySelectorAll('.nav-link')

    link.forEach((link) => {
        const hrefValue = link.getAttribute('href')

        //movie detauls 

        if (global.currentPage.includes('movie-details.html') && hrefValue.includes('index.html')) 
        {
            link.classList.add ('active');
            return
        }

        //tv details 

        if (global.currentPage.includes('tv-details.html') && hrefValue.includes('shows.html')) 
        {
            link.classList.add ('active');
            return
        }

        if (global.currentPage.includes(hrefValue)&& hrefValue !==  '/') {
            link.classList.add('active');
        } 
    });
}

function showSpinner() {
    document.querySelector('.spinner').classList.add('show')
}

function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show')
}

//FETCH DATA FROM THE API 

async function fetchAPIData(endpoint) {
    const API_KEY = 'c85ea97ed7a635b180a1ebc57ba16ff3'
    const API_URL = 'https://api.themoviedb.org/3/'

    showSpinner()

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)

    const data = await response.json()

    hideSpinner()

    return data;

};


//display popular movie 
async function displayPopularMovies() {
    const {results} = await fetchAPIData ('movie/popular')
    
    results.forEach((movie) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        
        <a href="movie-details.html?id=${movie.id}">
        ${movie.poster_path ?
          `<img
          src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
          class="card-img-top"
          alt="${movie.title}"
        />`
         :
         
          `<img
            src="./images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
        }
        </a>
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
            <small class="text-muted">Release:${movie.release_date}</small>
          </p>
        </div>
    
      `;

      document.querySelector('#popular-movies').appendChild(div);
    })
}

//display popular tv shows 

async function displayPopularShows() {
    const {results} = await fetchAPIData ('tv/popular')
    
    results.forEach((show) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        
        <a href="tv-details.html?id=${show.id}">
        ${show.poster_path ?
          `<img
          src="https://image.tmdb.org/t/p/w500${show.poster_path}"
          class="card-img-top"
          alt="${show.name}"
        />`
         :
         
          `<img
            src="./images/no-image.jpg"
            class="card-img-top"
            alt="${show.name}"
          />`
        }
        </a>
        <div class="card-body">
          <h5 class="card-title">${show.name}</h5>
          <p class="card-text">
            <small class="text-muted">Aired:${show.first_air_date}</small>
          </p>
        </div>
    
      `;

      document.querySelector('#popular-shows').appendChild(div);
    })
}



function init() {
    switch(global.currentPage) {
        case '/':
            case '/index.html':
                displayPopularMovies();
                break;

        case '/shows.html':
            displayPopularShows();
            break;

        case '/movie-details.html':
            console.log('movie-details');
            break;
           
        case '/tv-details.html':
            console.log('tv-details');
            break;

        case '/search.html':
            console.log('search-details');
            break;

            highlighActiveLink();
           
    }
}

document.addEventListener('DOMContentLoaded',init);