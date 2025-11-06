// NAV MENU (MOBILE)
let solo_expanded = 0; // The solo dropdown will be closed by default

function expandSolo() { // When the dropdown for 'Solo Releases' is selected, the band member pages will drop down
    if (solo_expanded == 0) {
        document.getElementById('nav_solo_dropdown_content').style.display = 'flex';
        document.getElementById('nav_solo_dropdown').textContent = 'SOLO RELEASES ▼'
        solo_expanded = 1;
    } else {
        document.getElementById('nav_solo_dropdown_content').style.display = 'none';
        document.getElementById('nav_solo_dropdown').textContent = 'SOLO RELEASES ►'
        solo_expanded = 0;
    }
}

let side_expanded = 0; // The side dropdown will be closed by default

function expandSide() { // When the dropdown for 'Side Projects' is selected, the side project pages will drop down
    if (side_expanded == 0) {
        document.getElementById('nav_side_dropdown_content').style.display = 'flex';
        document.getElementById('nav_side_dropdown').textContent = 'SIDE PROJECTS ▼'
        side_expanded = 1;
    } else {
        document.getElementById('nav_side_dropdown_content').style.display = 'none';
        document.getElementById('nav_side_dropdown').textContent = 'SIDE PROJECTS ►'
        side_expanded = 0;
    }
}

function openNav() { // When the hamburger icon is selected on mobile devices, the Navigation menu will pop up
    document.getElementById('nav_menu').style.display = 'block';
    if (side_expanded == 1) { // if the 'Side Projects' dropdown is open when the Navigation menu is opened next time, this function will ensure the dropdown menu is closed
        expandSide()
    }
    if (solo_expanded == 1) { // the same applies here, but for the 'Solo Releases' dropdown
        expandSolo()
    }
}

function closeNav() { // When the exit icon is selected on mobile devices, the Navigation menu will disappear
    document.getElementById('nav_menu').style.display = 'none';
}

// END OF NAV

// ARROW BUTTON

document.addEventListener('DOMContentLoaded', (event) => { // an event listener is created
    let arrowButton = document.getElementById('arrow_button');

    function scrollFunction() {
        if (!arrowButton) return; // If the 'arrowButton' variable doesn't exist, stop the event listener to prevent any further errors

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { // if the page is a certain distance away from the top, show the button. Otherwise, don't
            arrowButton.style.display = 'block';
        } else {
            arrowButton.style.display = 'none';
        }
    }

    window.onscroll = scrollFunction; // any instance of the page scrolling will cause the scrollFunction() function to run
    
    scrollFunction(); 
});

function scrollToTop() { // when the arrow button is selected, scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
