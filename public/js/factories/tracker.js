cronos.factory('Tracker', [function() {
    var tracker = {
        start: 0,
        time: 0.0,
        paused: true,
        project: null,
        taskId: null
    };

    function start(project, taskId) {
        tracker.start = new Date().getTime();
        tracker.paused = false;
        tracker.project = project;
        tracker.taskId = taskId;
        window.setInterval(update, 100);
    }

    function update(){
        if (!tracker.paused) {
            var time = new Date().getTime() - tracker.start;
            tracker.start = new Date().getTime();
            tracker.time += ((time / 100) / 10);
        }
    }

    function pause() {
        tracker.paused = true;
        tracker.project.tasks[tracker.taskId].timeExpent = tracker.time;
    }

    function resume() {
        tracker.start = new Date().getTime();
        tracker.paused = false;
    }

    function stop() {
        tracker.start = 0;
        tracker.paused = true;
        tracker.project.tasks[tracker.taskId].timeExpent = tracker.time;
        tracker.time = 0;
    }

    function getTime() {
        return tracker.time;
    }

    function isPaused() {
        return tracker.paused;
    }

    return {
        start: function(project, taskId) {
            return start(project, taskId);
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
}]);
