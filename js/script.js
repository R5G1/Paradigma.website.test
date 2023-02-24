// window.addEventListener('scroll', e => {
//     const scroll = document.querySelector(".header-navigation")

//     if (pageYOffset > 500) {
//         scroll.classList.add('activ')
//     } if (pageYOffset < 500) {
//         scroll.classList.remove('activ')
//     }
// })


function showMap () {
    YMaps.load(function() {
        let mapContainer = YMaps.jQuery("#YMapsID"),
            map = new YMaps.Map(mapContainer[0]);

        mapContainer.css("display", "");
        map.setCenter(new YMaps.GeoPoint(37.64, 55.76));
    });
}