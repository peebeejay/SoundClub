# SoundClub

[Heroku link][heroku]

[Trello Link][trello]

[heroku]: http://soundclub.herokuapp.com/
[trello]: https://trello.com/b/GxWbUvef/soundclub

## Minimum Viable Product

SoundClub is a web application inspired by the audio distribution platform, SoundCloud. The application is built with a Ruby on Rails backend and a React/Redux front-end, and will contain the features described below in order to adequately replicate the primary features of SoundCloud. All features will, at minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and appropriate styling.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Song CRUD
- [ ] Playing songs with progress bar with continuous play
- [ ] Comments
- [ ] User pages
- [ ] Production README [sample](docs/production_readme.md)

*Bonus*
- [ ] Wave Forms *
- [ ] Playlists *
- [ ] Likes *


## Design Docs

1. [View Wireframes](wireframes/)
2. [Component Hierarchy](component-hierarchy.md)
3. [Sample State](sample-state.md)
4. [Database Schema](schema.md)
5. [API Endpoints](api-endpoints.md)

## Implementation Timeline

### Phase 1: Back-End Setup & Front-End Authentication (2 Days) ~ (Tuesday, Wednesday)
**Objective:** Functioning rails project with front-end Authentication

  - Setup Database tables
  - Create User Model/Controller, Session Controller
  - Create Root View
  - Create JSON endpoints for User & Session
  - Create Welcome Page
    - Create Banner
    - No trending / song-list yet
  - Create temporary song index page upon login
  - Create AWS Account & learn how to use the service to store audio and image files

### Phase 2: Create Song CRUD (3 days) ~ (Thursday, Friday, Weekend)
**Objective:** Songs can be uploaded, and additionally viewed on the stream, discover, and user pages. Songs additionally have their own show pages

  - Create Song Model/Controller
  - Create JSON views for song data
  - Seed DB with Songs
  - Create Follows Model/Controller
  - Create User Show Page
    - Shows first 10 songs uploaded by user
  - Create Song Show Page
    - No comments yet
  - Create Upload Page & Functionality
  - Create Song List Component
    - Create Stream & Discover pages
  - Create Song Image List component
    - Add to Welcome Page
    - Add to Discover Page

### Phase 3: Playing songs with progress bar with continuous play (1.5 days) ~ (Monday, Tuesday)
**Objective** Functioning Audio Player that plays continuously regardless of page navigation

  - Create player component
  - Create waveform component** time permitting
  - Create ability to cycle forward & back - ~ Likely use song list found in store.

### Phase 4: Comments (1 Day) ~ (Tuesday into Wednesday)
**Objective** Comments are shown on a song's show page. Current user can leave a comment

  - Integrate comments into song show page

### Phase 5: User Pages (1 Day) ~ (Wednesday into Thursday)
**Objective** Users have their own show pages accessible via a button in the nav bar, a user id, or clicking on the artist name of a song.

### Phase 6: Production README (.5 Day) ~ Rest of Thursday
**Objective** Create the Production README for SoundClub.

Bonus:  
-Waveforms  
-Playlists  
-Likes
