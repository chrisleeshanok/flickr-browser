(function() {
    var mountNode = document.getElementById('photo-browser-wrapper');
    PhotoCollection.add(photoData.photos.photo);

    React.render(React.createElement(FlickrBrowser, {photoCollection: PhotoCollection}), mountNode);
}());
