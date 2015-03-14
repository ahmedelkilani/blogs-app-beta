(function($) {
    "use strict";

    $(document).ready(function() {

         $("#map").each(function() {
                    var lem = $(this),
                        lat = lem.attr("data-lat"),
                        lng = lem.attr("data-lng"),
                        style = [{
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            }, {
                                "lightness": 17
                            }]
                        }, {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            }, {
                                "lightness": 20
                            }]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#000000"
                            }, {
                                "lightness": 17
                            }]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                "color": "#000000"
                            }, {
                                "lightness": 29
                            }, {
                                "weight": 0.2
                            }]
                        }, {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            }, {
                                "lightness": 18
                            }]
                        }, {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            }, {
                                "lightness": 16
                            }]
                        }, {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            }, {
                                "lightness": 21
                            }]
                        }, {
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "visibility": "on"
                            }, {
                                "color": "#000000"
                            }, {
                                "lightness": 16
                            }]
                        }, {
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "saturation": 36
                            }, {
                                "color": "#000000"
                            }, {
                                "lightness": 40
                            }]
                        }, {
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        }, {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            }, {
                                "lightness": 19
                            }]
                        }, {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#000000"
                            }, {
                                "lightness": 20
                            }]
                        }, {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                "color": "#000000"
                            }, {
                                "lightness": 17
                            }, {
                                "weight": 1.2
                            }]
                        }]

                    lem.css({
                        height: 450
                    }).gmap3({
                        map: {
                            options: {
                                center: [lat, lng],
                                zoom: 17,
                                styles: style,
                                panControl: false,
                                zoomControl: false,
                                streetViewControl: false,
                                rotateControl: false,
                                mapTypeControl: false,
                                scaleControl: false,
                                scrollwheel: false,
                                disableDoubleClickZoom: true,
                                draggable: true,
                            }
                        },
                        marker: {
                            latLng: [lat, lng],
                            options: {
                                icon: "images/icon-map.png"
                            }
                        }
                    })
                });

        $("#map1").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                height: 350
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 17,
                        panControl: false,
                        zoomControl: false,
                        streetViewControl: false,
                        rotateControl: false,
                        mapTypeControl: false,
                        scaleControl: false,
                        scrollwheel: false,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
                marker: {
                    latLng: [lat, lng],
                    options: {
                        icon: "images/icon-map.png"
                    }
                }
            })
        });

        $("#map2").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                height: 350
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 17,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
                marker: {
                    latLng: [lat, lng],
                    options: {
                        icon: "images/icon-map.png"
                    }
                }
            })
        });

        $("#map3").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                width: 170,
                height: 170
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 17,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
            })
        });

        $("#map4").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                width: 170,
                height: 170
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 12,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
            })
        });

        $("#map5").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                width: 170,
                height: 170
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 15,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
            })
        });

        $("#map6").each(function() {
            var lem = $(this),
                lat = lem.attr("data-lat"),
                lng = lem.attr("data-lng")

            lem.css({
                width: 170,
                height: 170
            }).gmap3({
                map: {
                    options: {
                        center: [lat, lng],
                        zoom: 17,
                        disableDoubleClickZoom: true,
                        draggable: true,
                    }
                },
            })
        });




    });
}($));
