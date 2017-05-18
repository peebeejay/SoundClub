# SoundClub

**Website URL:** http://soundclub.io  

**Description:**  
SoundClub is a music streaming and distribution platform that allows users to upload, play, and browse different songs. Users can additionally follow other artists that have uploaded music, or like songs that they enjoy.

The application was built using a Ruby on Rails backend, a React.js / Redux frontend that utilizes webpack to bundle modules, and a PostgreSQL database.


**Challenges:**  
During the process of building the application, a large amount of challenges were encountered that are discussed below:  
1. Creation of the Audio Player:  
The audio player was built as a react component that wraps a HTML audio tag. The audio player uses native JavaScript methods to pause and play music. The main challenges in creating the player were writing code to pause, play, and skip tracks.  

2. Syncing song play state:  
In order to sync all play buttons to the correct pause/play state, a nowPlaying slice of state was created that updates based on an action named RECEIVE_NOW_PLAYING. Any component, including the modular play button, that is hooked up to the nowPlaying slice will re-render based on the presence of new props. This is how the play state is set.  
