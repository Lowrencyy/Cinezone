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

function init() {
    switch(global.currentPage) {
        case '/':
            case '/index.html':
                console.log('Home');
                break;

        case '/shows.html':
            console.log('shows');
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
