var spotifyID = [];
$scope.spotifyImg = [];

musicService.getBillboard($scope.date).then(function(data){ //Response is top 10 songs for given date
        $scope.status = "";
        $scope.songlist = data;
        for (var i = 0; i < data.length; i++) {
            spotifyID[i] = data[i].spotify_id; //data[i].spotify_id returns the ID of the track, as given by the billboard API
        }
        $scope.getImages();
    });

$scope.getImages = function() {
    for (var i = 0; i < spotifyID.length; i++) {
        if(spotifyID[i] !== null) {
            musicService.getSpotify(spotifyID[i]).then(function(data){ 
                $scope.spotifyImg[i] = data.album.images[0].url; //returns the appropriate image from the Spotify Web API
        });
    }
    }
    console.log($scope.spotifyImg);
}