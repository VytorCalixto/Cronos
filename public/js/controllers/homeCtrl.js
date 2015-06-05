cronos.controller('HomeCtrl', ['$scope', 'Tracker', '$interval', function($scope, Tracker, $interval) {
    var tick = function() {
        var num = parseInt(Tracker.getTime(), 10);
        var hours = Math.floor(num / 3600);
        var minutes = Math.floor((num - (hours * 3600)) / 60);
        var seconds = num - (hours * 3600) - (minutes * 60);

        if(hours < 10) {hours = '0'+hours;}
        if(minutes < 10) {minutes = '0'+minutes;}
        if(seconds < 10) {seconds = '0'+seconds;}
        console.log(hours + ':' + minutes + ':' + seconds);
        $scope.clock = hours + ':' + minutes + ':' + seconds;
    };

    $scope.trackerState = (Tracker.isPaused()) ? ((Tracker.getTime()) ? 'Resume' : 'Start Tracker!') : 'Pause';

    var interval;
    tick();

    // This means that the tracker is running
    if (!Tracker.isPaused() && Tracker.getTime){
        interval = $interval(tick, 500);
    }

    $scope.trackTime = function() {
        if(Tracker.isPaused()) {
            if(Tracker.getTime()) {
                Tracker.resume();
                interval = $interval(tick, 500);
                $scope.trackerState = 'Pause';
            } else {
                Tracker.start({
                    name: 'test',
                    tasks: [{timeExpent: 0}]},
                    0);
                interval = $interval(tick, 500);
                $scope.trackerState = 'Pause';
            }
        } else {
            Tracker.pause();
            clearInterval(interval);
            $interval.cancel(interval);
            interval = undefined;
            $scope.trackerState = 'Resume';
        }
    };

    $scope.stopTracker = function() {
        Tracker.stop();
        tick();
        $interval.cancel(interval);
        interval = undefined;
        $scope.trackerState = 'Start Tracker!';
    };

    // If the state changes we don't need to maintain the interval
    $scope.$on('$stateChangeStart', function () {
        $interval.cancel(interval);
        interval = undefined;
    });

}]);
