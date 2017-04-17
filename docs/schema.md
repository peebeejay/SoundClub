# Schema Information

All tables will additionally contain timestamp columns

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
display_name    | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_pic_url | string    | not null, default: default_profile_pic_url
first_name      | string    |
last_name       | string    |
location        | string    |

*Potentially include profile_file_name, profile_content_type, profile_file_size, profile_updated_at*

## songs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, unique, indexed **
user_id         | integer   | not null, indexed**, foreign key
plays           | integer   | not null, default: 0
audio_url       | string    | not null, unique
img_url         | string    | not null, default: default_img_url
plays           | integer   | not null, default: 0
description     | text      |

*Potentially include img_file_name, img_content_type, img_file_size, img_updated_at*  
*Potentially include audio_file_name, audio_content_type, audio_file_size, audio_updated_at*

## follows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign_key, indexed
followee_id     | integer   | not null, foreign_key, indexed


## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed
song_id         | integer   | not null, foreign key, indexed
body            | text      | not null

# Bonus Features

## playlists
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign_key, indexed
title           | string    | not null

## playlistings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
playlist_id     | integer   | not null, foreign key, indexed
song_id         | integer   | not null, foreign key, indexed


## likes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed
song_id         | integer   | not null, foreign key, indexed
