var position = new AMap.LngLat(l_x,l_y);

var map = new AMap.Map("container", {resizeEnable: true,zoom: 17,center:position});

var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, 0)});

var markerContent = l_des

var marker = new AMap.Marker({
    position:position,
    map:map
})
marker.content = markerContent;
marker.on('click', markerClick);
marker.emit('click', {target: marker});


function markerClick(e) {
    infoWindow.setContent(e.target.content);
    infoWindow.open(map, e.target.getPosition());
}

map.setFitView();