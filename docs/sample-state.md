```{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy"
    }
  },

  errors: {
    signUp: {errors: []},
    logIn: {errors: []},
    UploadSong: {errors: ["Can't Upload Song"]}
  },

  playQueue: {
    1: {
      id: 43,
      title: "Sample Song",
      asset_url: "http://something.aws.com/sample_asset_url",
      artist: {
        id: 14,
        name: "Mozart"
      },
      plays: 1093023,
      length: 4:14,
      img_url: "http://something.aws.com/sample_img_url"
      liked: false
    },
    2: {
      id: 87,
      title: "Sample Song 2",body can't be blank
      asset_url: "http://something.aws.com/sample_asset_url2",
      artist: {
        id: 45,
        name: "Brahms"
      },
      plays: 128734,
      length: 3:26,
      img_url: "http://something.aws.com/sample_img_url2"
      liked: true
    },
    //More songs in queue

  },

  songs: {
    43: {
      title: "Sample Song",
      asset_url: "http://something.aws.com/sample_asset_url",
      artist: {
        id: 14,
        name: "Mozart"
      },
      plays: 1093023,
      length: 4:14,
      img_url: "http://something.aws.com/sample_img_url"
      liked: false
    },
    87: {
      title: "Sample Song 2",body can't be blank
      asset_url: "http://something.aws.com/sample_asset_url2",
      artist: {
        id: 45,
        name: "Brahms"
      },
      plays: 128734,
      length: 3:26,
      img_url: "http://something.aws.com/sample_img_url2"
      liked: true
    },
    // More Songs
  },

  current_song: {
    id: 98    
  },

  trackShow: {
    id: 43,
    title: "Sample Song",
    asset_url: "http://something.aws.com/sample_asset_url",
    artist: {
      id: 14,
      name: "Mozart"
    },
    plays: 1093023,
    length: 4:14,
    img_url: "http://something.aws.com/sample_img_url"
    liked: false
    comments: {
      76: {
        user_id: 56,
        body: "this song is sick",
        created: 4-14-2017 17:56:09
        },
      77: {
        user_id: 78,
        body: "IK dude",
        created: 4-14-2017 17:58:09
        },
      78: {
        user_id: 56,
        body: "yee",
        created: 4-14-2017 18:12:09
      }
      // More Comments
    }
  }

  userShow: {
    id: 45,
    name: "Claude Debussy",
    img_url: "https://blah.aws.com/blah/blah"  
  }
}
```
