(function() {
    var mountNode = document.getElementById('photo-browser-wrapper');
    var photo1 = new PhotoModel();
    var collection = new PhotoCollection(photoData.photos.photo);

    console.log(collection.models);

    React.render(React.createElement(FlickrBrowser, {photoData: collection.models}), mountNode);
}());
