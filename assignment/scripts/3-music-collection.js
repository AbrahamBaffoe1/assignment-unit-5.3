console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


// --------------------- SOLUTION USING ALGORITHMIC APPROACH ----------------------------- //
// Step 1
let myCollection = [

];

// Step 2
function addToCollection(collection, title, artist, yearPublished, tracks = []) {
  const album = {
      title: title,
      artist: artist,
      yearPublished: yearPublished,
      tracks: tracks // Optional array of tracks
  };
  
  // Step 3, We are Adding the album to the collection array and return the object
  collection.push(album); 
  return album; 
}

// Step 4
function showCollection(collection) {
  for (let album of collection) {
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}:`);
      
      // If tracks are present, display them
      if (album.tracks.length > 0) {
          album.tracks.forEach((track, index) => {
              console.log(`   ${index + 1}. ${track.name}: ${track.duration}`);
          });
      }
  }
}

// Step 5
function findByArtist(collection, artist) {
  const results = [];
  
  for (let album of collection) {
      if (album.artist === artist) {
          results.push(album);
      }
  }
  
  return results;
}
// Step 6, Returning output (2 albums) in console format to see empty array
console.log(findByArtist(myCollection, "Pink Floyd")); 
console.log(findByArtist(myCollection, "The Rolling Stones"));


// Step 7
function search(collection, searchCriteria = {}) {
  // If the search object is empty, return the whole collection
  if (Object.keys(searchCriteria).length === 0) {
      return collection;
  }
  
  const results = [];
    for (let album of collection) {
      let match = true;
      
      // Checking if artist matches the array of items
      if (searchCriteria.artist && album.artist !== searchCriteria.artist) {
          match = false;
      }
      // Check if yearPublished matches
      if (searchCriteria.yearPublished && album.yearPublished !== searchCriteria.yearPublished) {
          match = false;
      }
          // Check if trackName matches
      if (searchCriteria.trackName) {
          const trackMatch = album.tracks.some(track => track.name === searchCriteria.trackName);
          if (!trackMatch) {
              match = false;
          }
      }   
      if (match) {
          results.push(album);
      }
  }
  
  return results;
  
}

// Step 8. Consoling to see  the results and validate to check errors if output is achieved.
console.log(addToCollection(myCollection, "Abbey Road", "The Beatles", 1969));
console.log(addToCollection(myCollection, "Thriller", "Michael Jackson", 1982));
console.log(addToCollection(myCollection, "The Dark Side of the Moon", "Pink Floyd", 1973));
console.log(addToCollection(myCollection, "Back in Black", "AC/DC", 1980));
console.log(addToCollection(myCollection, "Rumours", "Fleetwood Mac", 1977));
console.log(addToCollection(myCollection, "The Wall", "Pink Floyd", 1979));

// Step9
addToCollection(myCollection, "The Wall", "Pink Floyd", 1979, [
  { name: "Another Brick in the Wall", duration: "3:59" },
  { name: "Comfortably Numb", duration: "6:23" }
]);

showCollection(myCollection); // Now shows tracks for albums with them


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}

