app.controller('mySongs', function ($scope) {

    // array of songs
    $scope.songs = [
        {file:'1.mp3', title: 'First'},
        {file:'2.mp3', title: 'Second'},
        {file:'3.mp3', title: 'Third'},
    ];

    // on start player
    $scope.startAudio = function (index) {
        
        $scope.setSongs($scope.songs); // set songs to player
        $scope.startPlayer(index); // starting player

    }





})