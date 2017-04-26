# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
Song.destroy_all

# Seed Guest Account
u1 = User.create!(username: "Guest", password: "YesWeCan", display_name: "Guest Account", img: open("https://www.poets.org/sites/default/files/styles/286x289/public/images/biographies/EdgarGuest_NewBioImage.jpg?itok=HQXa6PJW"))

# Seed Test Accounts
u2 = User.create!(username: "GeorgeBush", password: "NeverBeFooledAgain", display_name: "George Bush", location: "Texas")
u3 = User.create!(username: "BarackObama", password: "YesWeCan", display_name: "Barack Obama", location: "Hyde Park, Chicago", img: open("http://img.usmagazine.com/article-leads-vertical-300/1250529817_barack_obama_290x402.jpg"))
u4 = User.create!(username: "DonaldTrump", password: "$$$$$$", display_name: "Donald Trump", location: "New York, NY")
u5 = User.create!(username: "FrederickChopin", password: "EtudeNocturne", display_name: "Frederick Chopin", location: "Paris", img: open("https://s-media-cache-ak0.pinimg.com/originals/87/e0/72/87e07208b391750225c37360277538e4.jpg"))

p "Complete Seeding Users"
p u1.id, u2.id, u3.id, u4.id, u5.id


# Etudes
AUDIO_URLS = {
  1 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/001/original/01_Etudes.mp3?1492788883",
  2 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/002/original/02_Etudes.mp3?1492788888",
  3 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/003/original/03_Etudes.mp3?1492788889",
  4 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/004/original/04_Etudes.mp3?1492788891",
  5 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/005/original/05_Etudes.mp3?1492788892",
  6 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/006/original/06_Etudes.mp3?1492788893",
  7 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/007/original/07_Etudes.mp3?1492788895",
  8 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/008/original/08_Etudes.mp3?1492788896",
  9 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/009/original/09_Etudes.mp3?1492788897",
  10 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/010/original/10_Etudes.mp3?1492788901",
  11 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/011/original/11_Etudes.mp3?1492788906",
  12 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/012/original/12_Etudes.mp3?1492788911",
  13 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/013/original/13_Etudes.mp3?1492788918",
  14 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/014/original/14_Etudes.mp3?1492788923",
  15 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/015/original/15_Etudes.mp3?1492788926",
  16 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/016/original/16_Etudes.mp3?1492788931",
  17 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/017/original/17_Etudes.mp3?1492788935",
  18 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/018/original/18_Etudes.mp3?1492788941",
  19 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/019/original/19_Etudes.mp3?1492788946",
  20 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/020/original/20_Etudes.mp3?1492788956",
  21 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/021/original/21_Etudes.mp3?1492788959",
  22 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/022/original/22_Etudes.mp3?1492788962",
  23 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/023/original/23_Etudes.mp3?1492788971",
  24 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/024/original/24_Etudes.mp3?1492788980"
}

ARTIST_ID = {
  1 => u2.id,
  2 => u5.id,
  3 => u2.id,
  4 => u5.id,
  5 => u5.id,
  6 => u5.id,
  7 => u3.id,
  8 => u5.id,
  9 => u4.id,
  10 => u4.id,
  11 => u5.id,
  12 => u5.id,
  13 => u5.id,
  14 => u1.id,
  15 => u3.id,
  16 => u2.id,
  17 => u4.id,
  18 => u5.id,
  19 => u5.id,
  20 => u5.id,
  21 => u5.id,
  22 => u1.id,
  23 => u3.id,
  24 => u4.id
}

IMAGE_URL = "http://s3.amazonaws.com/soundclub-assets-dev/songs/imgs/000/000/005/original/album.png?1492788892"

SONGS = []
p "Begin Seeding Songs..."
(1..24).each do |num|
  SONGS[num] = Song.create!(title: "Etude 0#{num}", user_id: ARTIST_ID[num], audio: open(AUDIO_URLS[num]), img: open(IMAGE_URL))
  p "..Seed Song #{num}, user_id: #{ARTIST_ID[num]}"
end
#
# Song.create!(title: 'Etude 02', user_id: 2, audio: File.open('app/assets/audio/02_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 03', user_id: 5, audio: File.open('app/assets/audio/03_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 04', user_id: 2, audio: File.open('app/assets/audio/04_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 05', user_id: 5, audio: File.open('app/assets/audio/05_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 06', user_id: 5, audio: File.open('app/assets/audio/06_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 07', user_id: 2, audio: File.open('app/assets/audio/07_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 08', user_id: 5, audio: File.open('app/assets/audio/08_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 09', user_id: 5, audio: File.open('app/assets/audio/09_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 10', user_id: 5, audio: File.open('app/assets/audio/10_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 11', user_id: 2, audio: File.open('app/assets/audio/11_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 12', user_id: 5, audio: File.open('app/assets/audio/12_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 13', user_id: 4, audio: File.open('app/assets/audio/13_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 14', user_id: 5, audio: File.open('app/assets/audio/14_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 15', user_id: 5, audio: File.open('app/assets/audio/15_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 16', user_id: 5, audio: File.open('app/assets/audio/16_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 17', user_id: 5, audio: File.open('app/assets/audio/17_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 18', user_id: 3, audio: File.open('app/assets/audio/18_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 19', user_id: 5, audio: File.open('app/assets/audio/19_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 20', user_id: 5, audio: File.open('app/assets/audio/20_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 21', user_id: 5, audio: File.open('app/assets/audio/21_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 22', user_id: 5, audio: File.open('app/assets/audio/22_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 23', user_id: 5, audio: File.open('app/assets/audio/23_Etudes.mp3'), img: File.open('app/assets/images/album.png'))
# Song.create!(title: 'Etude 24', user_id: 5, audio: File.open('app/assets/audio/24_Etudes.mp3'), img: File.open('app/assets/images/album.png'))

SONGS[14].comments.create!(user_id: u5.id, body: "One of my finer compositions")
SONGS[14].comments.create!(user_id: u3.id, body: "Exquisite")
SONGS[14].comments.create!(user_id: u5.id, body: "Merci")
