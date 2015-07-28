(function() {
    var mountNode = document.getElementById('photo-browser-wrapper');
    var collection = new PhotoCollection(photoData.photos.photo);

    React.render(React.createElement(FlickrBrowser, {photoData: collection.models}), mountNode);
}());
