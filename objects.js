<<<<<<< HEAD
var playlist = { artistName: 'songTitle'}

function updatePlaylist(obj, artistName, songTitle){
  playlist[artistName] = songTitle
  
  return playlist
}

function removeFromPlaylist(obj, artistName){
  delete playlist[artistName];
  
  return playlist;
}
=======
var playlist = { artist: 'song titles'};
>>>>>>> 04a36543f75af436f5019e00e67297246fc92130
