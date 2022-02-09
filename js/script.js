let search_popup = document.querySelector('.search-popup')
let search_btn = document.querySelector('.search-btn')
    // let location_map_popup = document.querySelector('.location-map-popup')
    // let location_minimap = document.querySelector('.location-minimap ')
    // let location_map_exit = document.querySelector('.location-map-exit')

search_btn.addEventListener("click", () => {
    if (search_popup.style.display === "none") {
        search_popup.style.display = "flex";
    } else {
        search_popup.style.display = "none";
    }
})


// location_minimap.addEventListener("click", () => {
//     location_map_popup.style.display = "block"
// })

// location_map_exit.addEventListener("click", () => {
//     location_map_popup.style.display = "none"
// })



function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

$("#slider-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 30000,
    values: [0, 30000],
    step: 100,

    slide: function(event, ui) {
        if (ui.values[0] == ui.values[1]) {
            return false;
        }

        $("#min_price").val(ui.values[0]);
        $("#max_price").val(ui.values[1]);
    }
});

$('#pagination-container').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, ...195],
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        $('#data-container').html(html);
    }
})

$('#example').paginate({

    // how many items per page
    perPage: 2,

    // boolean: scroll to top of the container if a user clicks on a pagination link        
    autoScroll: true,

    // which elements to target
    scope: '',

    // defines where the pagination will be displayed    
    paginatePosition: ['bottom'],

    // Pagination selectors
    containerTag: 'div',
    paginationTag: 'ul',
    itemTag: 'li',
    linkTag: 'a',

    // Determines whether or not the plugin makes use of hash locations
    useHashLocation: true,

    // Triggered when a pagination link is clicked
    onPageClick: function() {}

});