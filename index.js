// Get cat pic src
var catpicture = require('cat-picture');
var src = catpicture.src;
catpicture.remove();

// Get annotation
var image = require('lightning-image-poly');
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

// Save pdf
var fs = require('fs');
var remote = require('electron').remote;

function save () {

    remote.getCurrentWebContents().printToPDF({portrait: true})
        .then( data => {
            fs.writeFile('annotation.pdf', data, function (err) {
                if (err) {
                    alert('error generating pdf! ' + err.message);
                } else {
                    alert('pdf saved!');
                }
            })
        })
        .catch (err => {
            console.log('test');
        })
}

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 80) save()
})
