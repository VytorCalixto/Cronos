var package = require('./package.json');
var tracker = require('./lib/tracker.js');

var config = {
    version: package.version,
    online: null
};

var task = {
    name: null,
    timeExpent: 0,
    timeAdded: 0
};

var project = {
    name: null,
    tasks: [],
    timeExpent: 0,
    timeEditted: 0
};

var user = {
    name: null,
    timer: 0,
    projects: []
};

function trackTime() {
    if(tracker.getTime() === '00:00:00'){
        tracker.start(project, task);
        window.setInterval(function() {
            document.getElementById('time').innerHTML = tracker.getTime();
        }, 100);
        document.getElementById('trackBt').innerHTML = 'Pause';
    } else {
        if(tracker.isPaused()) {
            document.getElementById('trackBt').innerHTML = 'Pause';
            tracker.resume();
        } else {
            tracker.pause();
            document.getElementById('trackBt').innerHTML = 'Resume';
        }
    }
}

function stopTracker() {
    tracker.stop();
    document.getElementById('trackBt').innerHTML = 'Start Timer!';
}
