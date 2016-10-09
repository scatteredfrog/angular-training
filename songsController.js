songsApp.controller('songsController', ['genreProvider', function songCtrlInit (genreProvider) {
    this.test = "flirzelkwerp";
    this.genreList = genreProvider;
    this.songs = [
        {title: "Baba O'Riley", composer: "Pete Townshend"},
        {title: "Bargain", composer: "Pete Townshend"}, 
        {title: "Love Ain't For Keeping", composer: "Pete Townshend"},
        {title: "My Wife", composer: "John Entwistle"}, 
        {title: "The Song Is Over", composer: "Pete Townshend"},
        {title: "Getting In Tune", composer: "Pete Townshend"},
        {title: "Goin' Mobile", composer: "Pete Townshend"}, 
        {title: "Behind Blue Eyes", composer: "Pete Townshend"},
        {title: "Won't Get Fooled Again", composer: "Pete Townshend"}
    ];
    
    this.startNewSong = function startNewSong() {
        this.newSong = {};
    };

    this.finishNewSong = function finishNewSong() {
        this.songs.push(this.newSong);
        delete this.newSong;
    };

}]);