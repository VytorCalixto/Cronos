var tracker = {
    start: 0,
    time: 0.0,
    paused: false,
    project: null,
    task: null
};

function start(project, task) {
    tracker.start = new Date().getTime();
    tracker.paused = false;
    tracker.project = project;
    tracker.task = task;
    window.setInterval(update, 100);
    console.log(tracker);
}

function update(){
    if (!tracker.paused) {
        var time = new Date().getTime() - tracker.start;
        tracker.start = new Date().getTime();
        tracker.time += Math.floor(time / 100) / 10;
    }
}

function pause() {
    tracker.paused = true;
    tracker.task.timeExpent = tracker.time;
}

function resume() {
    tracker.start = new Date().getTime();
    tracker.paused = false;
}

function stop() {
    tracker.start = 0;
    tracker.paused = true;
    tracker.task.timeExpent = tracker.time;
    tracker.time = 0;
}

function getTime() {
    var num = parseInt(tracker.time, 10);
    var hours = Math.floor(num / 3600);
    var minutes = Math.floor((num - (hours * 3600)) / 60);
    var seconds = num - (hours * 3600) - (minutes * 60);
    var miliseconds = ((tracker.time % 1).toFixed(3)).split('.')[1];

    if(hours < 10) {hours = '0'+hours;}
    if(minutes < 10) {minutes = '0'+minutes;}
    if(seconds < 10) {seconds = '0'+seconds;}
    console.log('Got Time');
    return hours + ':' + minutes + ':' + seconds + '.' + miliseconds;
}

function isPaused() {
    return tracker.paused;
}

module.exports = {
    start: function(project, task) {
        return start(project, task);
    },

    pause: function() {
        return pause();
    },

    resume: function() {
        return resume();
    },

    stop: function() {
        return stop();
    },

    getTime: function() {
        return getTime();
    },

    isPaused: function() {
        return isPaused();
    }
};
