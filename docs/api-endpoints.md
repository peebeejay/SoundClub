# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` ~create
- `PATCH /api/users/:id` ~update
- `GET /api/user/:id` ~show

### Session

- `POST /api/session`
- `DELETE /api/session`

### Songs

- `POST /api/songs` ~ create
- `GET /api/songs/:id` ~ show
- `GET /api/songs` ~ index
- `PATCH /api/songs/:id` ~update
- `DELETE /api/songs/:id` ~destroy

### Follows

- `POST /api/follows` ~create
- `DELETE /api/follows/:id` ~destroy

### Likes

- `POST /api/likes` ~ create
- `DELETE /api/likes/:id` ~ delete

### Comments

- `GET /api/songs/:id/comments` ~ all comments of song
- `POST /api/comments` ~ create
- `PATCH /api/comments` ~ update
- `DELETE /api/comments/:id` ~ destroy

*Bonus Features*

### Playlists

- `POST /api/playlists` ~ create a new playlist
- `GET /api/playlists/:id` ~ show all tracks in playlist & playlist details
- `DELETE /api/playlists/:id` ~ destroy a playlist

### Playlistings

- `POST /api/playlistings` ~ create a playlisting
- `DELETE /api/playlistings/:id` ~destroy a playlisting
