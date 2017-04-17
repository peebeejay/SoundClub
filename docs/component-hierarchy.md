# Component Hierarchy

- App
  - AuthForm Container
  - Welcome Container
  - Stream Container
  - Discover Container
  - SongContainer
  - UserContainer
  - UploadContainer



- AuthFormContainer
  - Sign Up Form
    - Cancel Button
    - Sign Up Button
    - Image Upload Component
    - Fields Component
  - Login Form
    - Fields Component
    - Login Button
    - Cancel Button

- Welcome Container
  - Welcome Component
    - Banner
      - Demo Login Button
      - Signup Button
      - Login Button

- Trending Song List Component
  - Trending Song List Component
    - Song Image Component

- Navbar Container
  - Navbar Component
    - Home Button
    - Discover Button
    - Charts Button
    - Search Component
    - Upload Button
    - User Button
    - Signout Button

- Player Container
  - Player Component
    - Controls
    - Timeline
    - Volume Controls
    - Song Information
    - Like Button

- Song Container
  - Song Show Component
    - Like Button
    - Play Button
    - Waveform

- Song List Container
  - Song List Component
    - Song List Item
      - Song Image Component
      - Waveform
      - Like button (if not on user page)

- Comments List Container
  - Comment List Component
    - New Comment Component
    - Comment Component

- Upload Container
  - Upload Song Component
    - Select File Button
  - Upload Form
    - Upload Data Fields
    - Upload Button
    - Cancel Button

- User Container
  - Song List Component
  - Like Button

- Who to Follow List
  - Who to Follow List Item

  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/" | "WelcomeContainer" |
  | "/" | "StreamContainer" |
  | "/discover" | "DiscoverContainer" |
  | "/songs/:id" | "SongContainer" |
  | "/users/:id" | "UserContainer" |
  | "/upload" | "UploadContainer" |
