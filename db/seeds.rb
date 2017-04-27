# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Checklist:
# Create Users
# Add Songs
# Add Follows
# Add comments



# guest = User.find_by(username: "guest")
# chopin = User.find_by(username: "Chopin")
# mozart = User.find_by(username: "Mozart")
# debussy = User.find_by(username: "Debussy")
# vivaldi = User.find_by(username: "Vivaldi")
# beethoven = User.find_by(username: "Beethoven")
# joplin = User.find_by(username: "Joplin")
# bach = User.find_by(username: "Bach")
# handel = User.find_by(username: "Handel")
# liszt = User.find_by(username: "Liszt")
# schumann = User.find_by(username: "Schumann")
# brahms = User.find_by(username: "Brahms")
# rachmaninoff = User.find_by(username: "Rachmaninoff")
# haydn = User.find_by(username: "Haydn")
# tchaikovsky = User.find_by(username: "Tchaikovsky")
# wagner = User.find_by(username: "Wagner")
# gershwin = User.find_by(username: "Gershwin")
# dvorak = User.find_by(username: "Dvorak")
# yoyoma = User.find_by(username: "YoYoMa")
# weinberg = User.find_by(username: "Weinberg")

User.destroy_all
Song.destroy_all

# Seed Guest Account
guest = User.create!(username: "Guest", password: "YesWeCan", display_name: "Guest Account", img: open("https://www.poets.org/sites/default/files/styles/286x289/public/images/biographies/EdgarGuest_NewBioImage.jpg?itok=HQXa6PJW"))

# Seed Test Accounts ~ 19 Accounts
obama = User.create!(username: "BarackObama", password: "YesWeCan", display_name: "Barack Obama", location: "Hyde Park, Chicago", img: open("http://img.usmagazine.com/article-leads-vertical-300/1250529817_barack_obama_290x402.jpg"))
chopin = User.create!(username: "Chopin", password: "EtudeNocturne", display_name: "Frederick Chopin", location: "Paris", img: open("https://s-media-cache-ak0.pinimg.com/originals/87/e0/72/87e07208b391750225c37360277538e4.jpg"))
mozart = User.create!(username: "Mozart", password: "Sonata", display_name: "Wolfgang Amadeus Mozart", location: "Vienna", img: open("http://kidsmusiccorner.co.uk/wp-content/uploads/2010/01/Mozart.jpg"))
debussy = User.create!(username: "Debussy", password: "Arabesque", display_name: "Claude Debussy", location: "Paris", img: open("http://www.clearnote.net/assets/images/74610bc.jpg"))
vivaldi = User.create!(username: "Vivaldi", password: "Vivaldi", display_name: "Antonio Vivaldi", location: "Venice", img: open("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Vivaldi.jpg/220px-Vivaldi.jpg"))
beethoven = User.create!(username: "Beethoven", password: "Beethoven", display_name: "Ludwig van Beethoven", location: "Vienna", img: open("http://www.namespedia.com/image/Schimon_1.jpg"))
joplin = User.create!(username: "Joplin", password: "Ragtime", display_name: "Scott Joplin", location: "St. Louis", img: open("http://mediad.publicbroadcasting.net/p/wrti/files/styles/medium/public/201511/ScottJoplin.jpg"))
bach = User.create!(username: "Bach", password: "Bachhh", display_name: "J. S. Bach", location: "Leipzig", img: open("http://cps-static.rovicorp.com/3/JPG_400/MI0003/738/MI0003738578.jpg?partner=allrovi.com"))
handel = User.create!(username: "Handel", password: "Handel", display_name: "George Frideric Handel", location: "London", img: open("http://www.classical.net/music/images/composer/h/handel1.jpg"))
liszt = User.create!(username: "Liszt", password: "Lisztt", display_name: "Franz Liszt", location: "Budapest", img: open("https://upload.wikimedia.org/wikipedia/commons/6/69/Liszt-kaulbach.jpg"))
schumann = User.create!(username: "Schumann", password: "Schumann", display_name: "Robert Schumann", location: "Leipzig", img: open("https://i.ytimg.com/vi/DPNwBZYju7I/hqdefault.jpg"))
brahms = User.create!(username: "Brahms", password: "Brahms", display_name: "Johannes Brahms", location: "Vienna", img: open("http://d3i6fh83elv35t.cloudfront.net/newshour/wp-content/uploads/2016/05/Johannes_Brahms_1853.jpg"))
rachmaninoff = User.create!(username: "Rachmaninoff", password: "Rachmaninoff", display_name: "Sergei Rachmaninoff", location: "Moscow", img: open("http://img.haberler.com/haber/951/piyanistler-rahmaninov-anisina-yarisacak-4248951_5428_o.jpg"))
haydn = User.create!(username: "Haydn", password: "Haydnn", display_name: "Joseph Haydn", location: "Vienna", img: open("http://www.anu.edu.au/files/event_submission/haydn-original-2.jpg"))
tchaikovsky = User.create!(username: "Tchaikovsky", password: "Tchaikovsky", display_name: "Pyotr Ilyich Tchaikovsky", location: "St. Petersburg", img: open("https://www.operapulse.com/wp-content/uploads/2011/12/Tchaikovsky.jpg"))
wagner = User.create!(username: "Wagner", password: "Wagner", display_name: "Richard Wagner", location: "Munich", img: open("http://iopera.es/wp-content/uploads/2013/05/Richard-Wagner-iopera.jpg"))
gershwin = User.create!(username: "Gershwin", password: "Gershwin", display_name: "George Gershwin", location: "New York City", img: open("http://cps-static.rovicorp.com/3/JPG_400/MI0001/448/MI0001448044.jpg?partner=allrovi.com"))
dvorak = User.create!(username: "Dvorak", password: "Dvorak", display_name: "Antonin Dvorak", location: "Paris", img: open("http://ecstep.com/wp-content/uploads/2015/01/Dvorak-1.jpg"))
yoyoma = User.create!(username: "YoYoMa", password: "yoyoma", display_name: "Yo-Yo Ma", location: "Beijing", img: open("http://www.portland5.com/sites/default/files/events/Yo%20Yo%20Ma.jpeg"))
weinberg = User.create!(username: "Weinberg", password: "weinberg", display_name: "Mieczyslaw Weinberg", location: "Warsaw", img: open("https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mieczys%C5%82aw_Weinberg.jpg/220px-Mieczys%C5%82aw_Weinberg.jpg"))

p "Complete Seeding Users"
User.all.each { |user| p user.id, user.display_name }

#####################
#      SEED SONGS   #
####################

# Chopin
Song.create!(title: "Nocturne No. 1, Op. 9 in B-flat", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/01+-+Nocturne+No.+1%2C+Op.+9+in+B-flat.mp3"), img: open("http://e.snmc.io/lk/f/l/bd44ae8f49bc5fef0905a6d982851017/4040776.jpg"))
Song.create!(title: "Nocturne No. 2, Op. 9 in E-flat", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/02+-+Nocturne+No.+2%2C+Op.+9+in+E-flat.mp3"), img: open("http://e.snmc.io/lk/f/l/bd44ae8f49bc5fef0905a6d982851017/4040776.jpg"))
Song.create!(title: "Nocturne No. 3, Op. 9 in B", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/03+-+Nocturne+No.+3%2C+Op.+9+in+B.mp3"), img: open("http://e.snmc.io/lk/f/l/bd44ae8f49bc5fef0905a6d982851017/4040776.jpg"))
Song.create!(title: "Nocturne No. 1, Op. 15 in F", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/04+-+Nocturne+No.+1%2C+Op.+15+in+F.mp3"), img: open("http://e.snmc.io/lk/f/l/bd44ae8f49bc5fef0905a6d982851017/4040776.jpg"))
Song.create!(title: "Nocturne No. 2, Op. 15 in F-sharp", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/05+-+Nocturne+No.+2%2C+Op.+15+in+F-sharp.mp3"), img: open("http://e.snmc.io/lk/f/l/bd44ae8f49bc5fef0905a6d982851017/4040776.jpg"))
Song.create!(title: "Nocturne No. 3, Op. 15 in G", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/06+-+Nocturne+No.+3%2C+Op.+15+in+G.mp3"), img: open("http://e.snmc.io/lk/f/l/bd44ae8f49bc5fef0905a6d982851017/4040776.jpg"))
Song.create!(title: "Nocturne No. 1, Op. 27 in C-sharp", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/07+-+Nocturne+No.+1%2C+Op.+27+in+C-sharp.mp3"), img: open("http://e.snmc.io/lk/f/l/bd44ae8f49bc5fef0905a6d982851017/4040776.jpg"))
Song.create!(title: "Nocturne No. 2, Op. 27 in D-flat", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/08+-+Nocturne+No.+2%2C+Op.+27+in+D-flat.mp3"), img: open("http://e.snmc.io/lk/f/l/bd44ae8f49bc5fef0905a6d982851017/4040776.jpg"))
Song.create!(title: "Nocturne No. 1, Op. 32 in B", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/09+-+Nocturne+No.+1%2C+Op.+32+in+B.mp3"), img: open("http://e.snmc.io/lk/f/l/bd44ae8f49bc5fef0905a6d982851017/4040776.jpg"))
Song.create!(title: "Nocturne No. 2, Op. 32 in A-flat", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/10+-+Nocturne+No.+2%2C+Op.+32+in+A-flat.mp3"), img: open("http://e.snmc.io/lk/f/l/bd44ae8f49bc5fef0905a6d982851017/4040776.jpg"))
Song.create!(title: "Etudes Op. 10, No. 1 C-Major Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/01+Etudes+Op.+10%2C+No.+1+C-dur_+Alleg.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 2 A-Minor Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/02+Etudes+Op.+10%2C+No.+2+A-moll_+Alle.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 3 E-Minor Lento", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/03+Etudes+Op.+10%2C+No.+3+E-dur_+Lento.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 4 C-sharp Minor Presto", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/04+Etudes+Op.+10%2C+No.+4+Cis-moll_+Pr.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 5 G-flat Minor Vivace", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/05+Etudes+Op.+10%2C+No.+5+Ges-dur_+Viv.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 6 E-flat Minor Andante", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/06+Etudes+Op.+10%2C+No.+6+Es-moll_+And.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 7 C-Major Vivace", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/06+Etudes+Op.+10%2C+No.+6+Es-moll_+And.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 8 F-Major Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/08+Etudes+Op.+10%2C+No.+8+F-dur_+Alleg.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 9 F-Minor Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/09+Etudes+Op.+10%2C+No.+9+F-moll_+Alle.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 10 A-flat Major Vivace", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/10+Etudes+Op.+10%2C+No.+10+As-dur_+Viv.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 11 E-flat Major Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/11+Etudes+Op.+10%2C+No.+11+Es-dur_+All.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 10, No. 12 C-Minor Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/12+Etudes+Op.+10%2C+No.+12+C-moll_+All.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 1 A-flat Major Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/13+Etudes+Op.+25%2C+No.+1+As-dur_+Alle.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 2 F-Minor Presto", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/14+Etudes+Op.+25%2C+No.+2+F-moll_+Pres.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 3 F-Major Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/15+Etudes+Op.+25%2C+No.+3+F-dur_+Alleg.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 4 A-Minor Agitato", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/16+Etudes+Op.+25%2C+No.+4+A-moll_+Agit.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 5 E-Minor Vivace", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/17+Etudes+Op.+25%2C+No.+5+E-moll_+Viva.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 6 G-sharp Minor Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/18+Etudes+Op.+25%2C+No.+6+Gis-moll_+Al.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 7 C-sharp Minor Lento", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/19+Etudes+Op.+25%2C+No.+7+Cis-moll_+Le.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 8 D-flat Major Vivace", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/20+Etudes+Op.+25%2C+No.+8+Des-dur_+Viv.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 9 G-flat Major Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/21+Etudes+Op.+25%2C+No.+9+Ges-dur_+All.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 10 B Minor Allegro", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/22+Etudes+Op.+25%2C+No.+10+H-moll_+All.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 11 A-Minor Lento", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/23+Etudes+Op.+25%2C+No.+11+A-moll_+Len.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
Song.create!(title: "Etudes Op. 25, No. 12 C-Minor Molto", user_id: chopin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/24+Etudes+Op.+25%2C+No.+12+C-moll_+Mol.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/71ZmEgITP4L._SY355_.jpg"))
p "Complete Chopin"

# Mozart
Song.create!(title: "Requiem K. 626 - Lacrimosa", user_id: mozart.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/001.+Wolfgang+Amadeus+Mozart+-+Requiem+(K.+626)+-+Lacrimosa.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/736x/a0/34/cf/a034cf355bfef5038e6fd4a7dd7b9f27.jpg"))
Song.create!(title: "Klarinettenkonzert (K. 622) - Adagio", user_id: mozart.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/004.+Wolfgang+Amadeus+Mozart+-+Klarinettenkonzert+(K.+622)+-+Adagio.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/510xIqbIBmL.jpg"))
Song.create!(title: "Klarinettenkonzert (K. 622) - Rondo", user_id: mozart.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/092.+Wolfgang+Amadeus+Mozart+-+Klarinettenkonzert+(K.+622)+-+Rondo.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/510xIqbIBmL.jpg"))
Song.create!(title: "Eine Kleine Nachtmusik (K. 525)", user_id: mozart.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/034.+Wolfgang+Amadeus+Mozart+-+Eine+Kleine+Nachtmusik+(K.+525).mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/811ArVScu-L._SY355_.jpg"))
Song.create!(title: "Die Zauberflöte (K. 620) - Der Hölle Rache Kocht In Meinem Herzen", user_id: mozart.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/036.+Wolfgang+Amadeus+Mozart+-+Die+Zauberfl%C3%B6te+(K.+620)+-+Der+H%C3%B6lle+Rache+Kocht+In+Meinem+Herzen.mp3"), img: open("http://www.audiophileusa.com/covers400water/124155.jpg"))
Song.create!(title: "Die Zauberflöte (K. 620) - Overture", user_id: mozart.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/082.+Wolfgang+Amadeus+Mozart+-+Die+Zauberfl%E2%88%9A%E2%88%82te+(K.+620)+-+Overture.mp3"), img: open("http://www.audiophileusa.com/covers400water/124155.jpg"))
Song.create!(title: "Symphony No. 40 (K. 550) - Molto Allegro", user_id: mozart.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/054.+Wolfgang+Amadeus+Mozart+-+Symphony+No.+40+(K.+550)+-+Molto+Allegro.mp3"), img: open("http://mp3red.me/cover/1889743-460x460/mozart-symphony-no-40-in-g-minor-k-550.jpg"))
Song.create!(title: "Piano Concerto No. 21 (K. 467)", user_id: mozart.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/068.+Wolfgang+Amadeus+Mozart+-+Piano+Concerto+No.+21+(K.+467).MP3"), img: open("http://cps-static.rovicorp.com/3/JPG_500/MI0001/110/MI0001110003.jpg?partner=allrovi.com"))
Song.create!(title: "Klavierkonzert (K. 488) - Adagio", user_id: mozart.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/088.+Wolfgang+Amadeus+Mozart+-+23.+Klavierkonzert+(K.+488)+-+Adagio.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/51E7oqJDqLL._SX355_.jpg"))
p "Complete Mozart"

# Debussy
Song.create!(title: "Reverie", user_id: debussy.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Debussy+-+R%C3%83%C2%AAverie.mp3"), img: open("http://direct.rhapsody.com/imageserver/images/Alb.105089585/500x500.jpg"))
Song.create!(title: "Arabesque #1", user_id: debussy.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Debussy%2C+Arabesque+%231%2C+Piano+Solo+(animation+ver.+2).mp3"), img: open("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flickr_-_jemasmith_-_Umayyad_Mosque%2C_Damascus%2C_Detail..jpg/300px-Flickr_-_jemasmith_-_Umayyad_Mosque%2C_Damascus%2C_Detail..jpg"))
Song.create!(title: "Claire de Lune", user_id: debussy.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Debussy%2C+Clair+de+lune+(piano+music).mp3"), img: open("http://direct.rhapsody.com/imageserver/images/Alb.105089585/500x500.jpg"))
Song.create!(title: "La Fille aux Cheveux de Lin", user_id: debussy.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Lang+Lang+-+Claude+Debussy%2C+La+Fille+aux+cheveux+de+lin.mp3"), img: open("http://direct.rhapsody.com/imageserver/images/Alb.105089585/500x500.jpg"))
p "Complete Debussy"

# Vivaldi
Song.create!(title: "Le Quattro Stagioni (Op. 8, RV 269) - La Primavera", user_id: vivaldi.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/005.+Antonio+Lucio+Vivaldi+-+Le+Quattro+Stagioni+(Op.+8%2C+RV+269)+-+La+Primavera.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/3d/07/5f/3d075f127d641209455ec6f26bbc96dd.jpg"))
Song.create!(title: "Le Quattro Stagioni (Op. 8, RV 293) - l'Autunno", user_id: vivaldi.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/049.+Antonio+Lucio+Vivaldi+-+Le+Quattro+Stagioni+(Op.+8%2C+RV+293)+-+l'Autunno.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/3d/07/5f/3d075f127d641209455ec6f26bbc96dd.jpg"))
Song.create!(title: "Le Quattro Stagioni (Op. 8, RV 293) - l'Estate", user_id: vivaldi.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Antonio+Vivaldi-+Le+quattro+stagioni-+L'Estate.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/3d/07/5f/3d075f127d641209455ec6f26bbc96dd.jpg"))
Song.create!(title: "Le Quattro Stagioni (Op. 8, RV 293) - l'Inverno", user_id: vivaldi.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Antonio+Vivaldi-+Le+quattro+stagioni-+L'Inverno.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/3d/07/5f/3d075f127d641209455ec6f26bbc96dd.jpg"))
p "Complete Vivaldi"


# Beethoven
Song.create!(title: "Sonata Pathetique - 2nd Movement Adagio Cantabile", user_id: beethoven.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/(HD)+Beethoven+-Sonata+Path%C3%83%C2%A9tique--+2nd+mvt+Adagio+cantabile.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/736x/47/23/6f/47236f02812a65c80f5374900236ea41.jpg"))
Song.create!(title: "Piano Concerto No. 5 (Op. 73) - Adagio Un Poco Mosso", user_id: beethoven.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/003.+Ludwig+van+Beethoven+-+Piano+Concerto+No.+5+(Op.+73)+-+Adagio+Un+Poco+Mosso.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/51W9fF9XUcL.jpg"))
Song.create!(title: "Symphony No. 9 (Op. 125)", user_id: beethoven.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/016.+Ludwig+van+Beethoven+-+Symphony+No.+9+(Op.+125).mp3"), img: open("http://www.classicalarchives.com/images/coverart/3/2/1/4/710357614729_300.jpg"))
Song.create!(title: "Symphony No. 6 (Op. 68)", user_id: beethoven.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/042.+Ludwig+van+Beethoven+-+Symphony+No.+6+(Op.+68).mp3"), img: open("http://www.classicalarchives.com/images/coverart/3/2/1/4/710357614729_300.jpg"))
Song.create!(title: "Symphony No. 5 (Op. 67)", user_id: beethoven.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/050.+Ludwig+van+Beethoven+-+Symphony+No.+5+(Op.+67).mp3"), img: open("http://www.classicalarchives.com/images/coverart/3/2/1/4/710357614729_300.jpg"))
Song.create!(title: "Fur Elise WoO 59", user_id: beethoven.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/035.+Ludwig+van+Beethoven+-+F%C3%BCr+Elise+(WoO+59).mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/51PqPNn1kqL.jpg"))
Song.create!(title: "Concerto No. 5 (Op. 73) - Rondo", user_id: beethoven.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/048.+Ludwig+van+Beethoven+-+Piano+Concerto+No.+5+(Op.+73)+-+Rondo.mp3"), img: open("http://cdn-s3.allmusic.com/release-covers/500/0002/657/0002657671.jpg"))
Song.create!(title: "Mondscheinsonate (Op. 27)", user_id: beethoven.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/058.+Ludwig+van+Beethoven+-+Mondscheinsonate+(Op.+27).mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/51Y%2B8AlHcrL.jpg"))
p "Complete Beethoven"

# Joplin
Song.create!(title: "Original Rags", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/06.+Original+Rags.mp3"), img: open("https://upload.wikimedia.org/wikipedia/en/8/84/Original_Rag_front_cover.jpg"))
Song.create!(title: "Maple Leaf Rag", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/07.+Maple+Leaf+Rag.mp3"), img: open("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Maple_Leaf_Rag.PNG/170px-Maple_Leaf_Rag.PNG"))
Song.create!(title: "The Easy Winners", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/12.+The+Easy+Winners.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/61uO1G4enkL._SY355_.jpg"))
Song.create!(title: "The Strenuous Life", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/14.+The+Strenuous+Life.mp3"), img: open("https://static1.squarespace.com/static/53110366e4b0d43f6e0c3dcd/54ba9453e4b05e2e7fcab626/54c8584de4b0fab465d21c4f/1422416013459/Strenuous_Life.gif?format=500w"))
Song.create!(title: "The Fig Leaf Rag", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/02.+Fig+Leaf+Rag.mp3"), img: open("http://www.ragtimepiano.ca/images/figleaf.jpg"))
Song.create!(title: "Elite Syncopations", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/04.+Elite+Syncopations.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/61rAkzeFcIL.jpg"))
Song.create!(title: "The Pineapple Rag", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/04.+Pine+Apple+Rag.mp3"), img: open("http://www.weinerelementary.org/uploads/2/2/8/6/22867982/7b85fdbfb456ff2ec3f62eece2b16d29_orig.jpg"))
Song.create!(title: "The Wall Street Rag", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/05.+Wall+Street+Rag.mp3"), img: open("https://upload.wikimedia.org/wikipedia/en/8/83/Scott_Joplin_Piano_Rags.jpeg"))
Song.create!(title: "The Magnetic Rag", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/06.+Magnetic+Rag.mp3"), img: open("https://upload.wikimedia.org/wikipedia/commons/7/7b/Magnetic_Rag.jpg"))
Song.create!(title: "The Entertainer", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/06.+The+Entertainer.mp3"), img: open("https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/EntertainerJoplinCover.JPEG/220px-EntertainerJoplinCover.JPEG"))
Song.create!(title: "The Strenuous Life", user_id: joplin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/13.+The+Cascades.mp3"), img: open("http://www.ragtimepiano.ca/images/cascades.jpg"))
p "Complete Joplin"

# Bach
Song.create!(title: "Matthäus Passion (BWV 244) - Erbarme Dich", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/002.+Johann+Sebastian+Bach+-+Matth%C3%A4us+Passion+(BWV+244)+-+Erbarme+Dich.mp3"), img: open("https://www.music-bazaar.com/album-images/vol9/497/497521/2330727-big/Bach-Flute-Sonatas-cover.jpg"))
Song.create!(title: "Matthäus Passion (BWV 244) - Wir Setzen Uns Mit Tränen Nieder", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/007.+Johann+Sebastian+Bach+-+Matth%C3%A4us+Passion+(BWV+244)+-+Wir+Setzen+Uns+Mit+Tr%C3%A4nen+Nieder.mp3"), img: open("https://www.music-bazaar.com/album-images/vol9/497/497521/2330727-big/Bach-Flute-Sonatas-cover.jpg"))
Song.create!(title: "Matthäus Passion (BWV 244) - Kommt, Ihr Töchter", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/011.+Johann+Sebastian+Bach+-+Matth%C3%A4us+Passion+(BWV+244)+-+Kommt%2C+Ihr+T%C3%B6chter.mp3"), img: open("https://www.music-bazaar.com/album-images/vol9/497/497521/2330727-big/Bach-Flute-Sonatas-cover.jpg"))
Song.create!(title: "Jesus Bleibet Meine Freude (BWV 147)", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/017.+Johann+Sebastian+Bach+-+Jesus+Bleibet+Meine+Freude+(BWV+147).mp3"), img: open("https://img.discogs.com/_GWl_sBMhSOPnr87eWa2asgDycY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5551868-1396506221-1363.jpeg.jpg"))
Song.create!(title: "Jesu, Der Du Meine Seele (BWV 78) - Wir Eilen Mit Schwachen", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/056.+Johann+Sebastian+Bach+-+Jesu%2C+Der+Du+Meine+Seele+(BWV+78)+-+Wir+Eilen+Mit+Schwachen.mp3"), img: open("http://is4.mzstatic.com/image/thumb/Music/v4/85/51/30/8551300f-96a6-143f-08a0-dd476bdad557/source/600x600bb.jpg"))
Song.create!(title: "Orchestersuite Nr. 3 (BWV 1068) - Air", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/019.+Johann+Sebastian+Bach+-+Orchestersuite+Nr.+3+(BWV+1068)+-+Air.mp3"), img: open("https://img.discogs.com/_GWl_sBMhSOPnr87eWa2asgDycY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5551868-1396506221-1363.jpeg.jpg"))
Song.create!(title: "Weihnachtsoratorium (BWV 248) - Jauchzet, Frohlocket", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/026.+Johann+Sebastian+Bach+-+Weihnachtsoratorium+(BWV+248)+-+Jauchzet%2C+Frohlocket.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/511uqBAL8AL._SX355_.jpg"))
Song.create!(title: "Toccata E Fuga (BWV 565)", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/031.+Johann+Sebastian+Bach+-+Toccata+E+Fuga+(BWV+565).mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/511uqBAL8AL._SX355_.jpg"))
Song.create!(title: "Orchestersuite Nr. 2 (BWV 1067) - Badinerie", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/037.+Johann+Sebastian+Bach+-+Orchestersuite+Nr.+2+(BWV+1067)+-+Badinerie.mp3"), img: open("http://e.snmc.io/lk/f/l/750ac90aaf4f0223c32965b6c96c8a32/1850387.jpg"))
Song.create!(title: "Brandenburgisches Konzert Nr. 1 (BWV 1046) - Allegro", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/069.+Johann+Sebastian+Bach+-+Brandenburgisches+Konzert+Nr.+1+(BWV+1046)+-+Allegro.mp3"), img: open("https://img.discogs.com/QK29XUC5sBeTkIsqp3yvCTN-uGg=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4841420-1377179501-6455.jpeg.jpg"))
Song.create!(title: "Wachet Auf, Ruft Uns Die Stimme (BWV 140)", user_id: bach.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/083.+Johann+Sebastian+Bach+-+Wachet+Auf%2C+Ruft+Uns+Die+Stimme+(BWV+140).mp3"), img: open("https://img.discogs.com/_GWl_sBMhSOPnr87eWa2asgDycY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5551868-1396506221-1363.jpeg.jpg"))
p "Complete Bach"

# Handel
Song.create!(title: "Messiah (HWV 56) - Hallelujah", user_id: handel.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/012.+Georg+Friederich+H%C3%A4ndel+-+Messiah+(HWV+56)+-+Hallelujah.mp3"), img: open("http://www.audiophileusa.com/covers400water/68279.jpg"))
Song.create!(title: "Messiah (HWV 56) - For Unto Us A Child Is Born", user_id: handel.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/043.+Georg+Friederich+H%C3%A4ndel+-+Messiah+(HWV+56)+-+For+Unto+Us+A+Child+Is+Born.mp3"), img: open("http://www.audiophileusa.com/covers400water/68279.jpg"))
Song.create!(title: "Wassermusik (HWV 348-350)", user_id: handel.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/047.+Georg+Friederich+H%C3%A4ndel+-+Wassermusik+(HWV+348-350).mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/61H3n5k0zkL._SY300_.jpg"))
Song.create!(title: "Serse (HWV 40) - Ombra Mai Fu", user_id: handel.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/074.+Georg+Friederich+H%E2%88%9A%C2%A7ndel+-+Serse+(HWV+40)+-+Ombra+Mai+F%E2%88%9A%CF%80.mp3"), img: open("https://handelhendrix.org/wp-content/uploads/2015/10/hh-2.jpg"))
Song.create!(title: "Solomon (HWV 67) - The Arrival Of The Queen Of Sheba", user_id: handel.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/089.+Georg+Friederich+H%E2%88%9A%C2%A7ndel+-+Solomon+(HWV+67)+-+The+Arrival+Of+The+Queen+Of+Sheba.mp3"), img: open("http://images.genius.com/9d2ed67b67e772ae3477ff8085431976.500x500x1.jpg"))
p "Complete Handel"

# Liszt
Song.create!(title: "Hungarian Rhapsody No.2", user_id: liszt.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Franz+Liszt+-+Hungarian+Rhapsody+No.2+(Orchestra+version).mp3"), img: open("http://mp3red.me/cover/2238082-460x460/franz-liszt-hungarian-rhapsodies.jpg"))
Song.create!(title: "La Campanella", user_id: liszt.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Franz+Liszt+La+Campanella.mp3"), img: open("http://e.snmc.io/lk/f/l/e3bba91cba59d9eb5540d3ce4d463238/3941112.jpg"))
p "Complete Liszt"

# Schumann
Song.create!(title: "Fantasie in C major", user_id: schumann.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Schumann+Fantasie+in+C+major+(I).mp3"), img: open("https://www.music-bazaar.com/album-images/vol1010/813/813399/2667312-big/Schumann-String-Quartets-Chamber-Music-CD2-cover.jpg"))
Song.create!(title: "Schumann Humoresque, Op. 20 ", user_id: schumann.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Seong-Jin+Cho+-+Schumann+Humoresque%2C+Op.+20+(2011).mp3"), img: open("https://www.music-bazaar.com/album-images/vol1010/813/813399/2667312-big/Schumann-String-Quartets-Chamber-Music-CD2-cover.jpg"))
p "Complete Schumann"

# Brahms
Song.create!(title: "Piano Concerto No. 1 (Zimerman, Bernstein)", user_id: brahms.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Brahms+-+Piano+Concerto+No.+1+(Zimerman%2C+Bernstein).mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/81NyedFla8L._SY355_.jpg"))
p "Complete Brahms"

# Rachmaninoff
Song.create!(title: "Piano Concerto No. 2 (Op. 18) - Adagio Sostenuto", user_id: rachmaninoff.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/009.+Sergej+Vassiljevitsj+Rachmaninoff+-+Piano+Concerto+No.+2+(Op.+18)+-+Adagio+Sostenuto.mp3"), img: open("http://www.velvetglass.com/Etcetera/artofthealbum/art%20of%20the%20album%20Albums/art/DSC_9432.jpg"))
Song.create!(title: "Piano Concerto No. 2 (Op. 18) - Moderato", user_id: rachmaninoff.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/055.+Sergej+Vassiljevitsj+Rachmaninoff+-+Piano+Concerto+No.+2+(Op.+18)+-+Moderato.mp3"), img: open("http://www.velvetglass.com/Etcetera/artofthealbum/art%20of%20the%20album%20Albums/art/DSC_9432.jpg"))
p "Complete Rachmaninoff"

# Haydn
Song.create!(title: "Sonata Hob. XVI 35 - Gabriele", user_id: haydn.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/HAYDN+Sonata+Hob.+XVI+35+-+Gabriele+Tomasello%2C+pianoforte..mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/510rFfiD8TL.jpg"))
Song.create!(title: "Sonata in E-flat Major Hob. XVI 49", user_id: haydn.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Joseph+Haydn+Piano+Sonata+n%C3%82%C2%BA+59+in+E+flat%2C+Hob.+XVI-49.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/510rFfiD8TL.jpg"))
p "Copmlete Hadyn"

# Tchaikovsky
Song.create!(title: "01 Nutcracker - Miniature Overture", user_id: tchaikovsky.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/IMSLP91891-PMLP03607-dso20101212-004-tchaikovsky-nutcracker-suite-mvtI-miniature-overture.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/f4/47/92/f447922973e9d8dce307c5a86bbafa2f.jpg"))
Song.create!(title: "03 Nutcracker - March", user_id: tchaikovsky.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/IMSLP91892-PMLP03607-dso20101212-005-tchaikovsky-nutcracker-suite-mvtII-marche.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/f4/47/92/f447922973e9d8dce307c5a86bbafa2f.jpg"))
Song.create!(title: "22 Nutcracker - Dance of the Sugar-Plum Fairy", user_id: tchaikovsky.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/IMSLP91893-PMLP03607-dso20101212-006-tchaikovsky-nutcracker-suite-mvtIII-dance-sugarplum-fairy.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/f4/47/92/f447922973e9d8dce307c5a86bbafa2f.jpg"))
Song.create!(title: "16 Nutcracker - Trepak", user_id: tchaikovsky.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/IMSLP91894-PMLP03607-dso20101212-007-tchaikovsky-nutcracker-suite-mvtIV-trepak.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/f4/47/92/f447922973e9d8dce307c5a86bbafa2f.jpg"))
Song.create!(title: "14 Nutcracker - Arabian Dance", user_id: tchaikovsky.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/IMSLP91895-PMLP03607-dso20101212-008-tchaikovsky-nutcracker-suite-mvtV-arabian-dance.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/f4/47/92/f447922973e9d8dce307c5a86bbafa2f.jpg"))
Song.create!(title: "15 Nutcracker - Chinese Dance", user_id: tchaikovsky.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/IMSLP91896-PMLP03607-dso20101212-009-tchaikovsky-nutcracker-suite-mvtVI-chinese-dance.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/f4/47/92/f447922973e9d8dce307c5a86bbafa2f.jpg"))
Song.create!(title: "17 Nutcracker - Dance of the Reed Flutes", user_id: tchaikovsky.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/IMSLP91897-PMLP03607-dso20101212-010-tchaikovsky-nutcracker-suite-mvtVII-reed-flutes.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/f4/47/92/f447922973e9d8dce307c5a86bbafa2f.jpg"))
Song.create!(title: "19 Nutcracker - Waltz of the Flowers", user_id: tchaikovsky.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/IMSLP91898-PMLP03607-dso20101212-011-tchaikovsky-nutcracker-suite-mvtIX-waltz-of-the-flowers.mp3"), img: open("https://s-media-cache-ak0.pinimg.com/originals/f4/47/92/f447922973e9d8dce307c5a86bbafa2f.jpg"))
p "Complete Tchaikovsky"

# Wagner
Song.create!(title: "Fantasia for Piano in F sharp Minor, WWV 22", user_id: wagner.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Richard+Wagner+-+Fantasia+for+piano+in+F+sharp+minor%2C+WWV+22+(1%252F2).mp3"), img: open("http://cf-images.emusic.com/music/images/album/147/202/14720278/600x600.jpg"))
Song.create!(title: "Piano Sonata in A flat, WWV 85", user_id: wagner.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Richard+Wagner+-+Piano+Sonata+in+A+flat%2C+WWV+85.mp3"), img: open("http://cf-images.emusic.com/music/images/album/147/202/14720278/600x600.jpg"))
p "Complete Wagner"


# Gershwin
Song.create!(title: "Rhapsody in Blue", user_id: gershwin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/George+Gershwin+-+Rhapsody+in+Blue+-+Leonard+Bernstein%2C+New+York+Philharmonic+(1976).mp3"), img: open("https://blogsimages.adobe.com/creativecloud/files/2013/12/Albums-George-Gershwin.jpg"))
Song.create!(title: "Piano Concerto in F major", user_id: gershwin.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/George+Gershwin+Piano+Concerto+in+F+major+Wang+Yuja+-+HD.mp3"), img: open("http://www.soundfountain.org/rem/velde_cover_levant_400.jpg"))
p "Complete Gershwin"

# Dvorak
Song.create!(title: "New World Symphony (Op. 95) - Largo", user_id: dvorak.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/008.+Anton%C3%ADn+Dvo%C5%99%C3%A1k+-+New+World+Symphony+(Op.+95)+-+Largo.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/41FW4SSD7NL.jpg"))
Song.create!(title: "Romance in F Minor for Piano and Violin, Op.11", user_id: dvorak.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Dvorak+-+Romance+for+piano+and+violin%2C+Op.11.mp3"), img: open("https://www.baerenreiter.com/resource/public/products/BA9571/images/lrg.jpg"))
Song.create!(title: "Humoresque", user_id: dvorak.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Dvorak+Humoresque+Yo+Yo+Ma%2C+Itzhak+Perlman.mp3"), img: open("https://images-na.ssl-images-amazon.com/images/I/51TTWnAZmuL._SS500.jpg"))
p "Complete Dvorak"

# Yo-Yo Ma
Song.create!(title: "01 Enchantment- Mohini (Enchantment)", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/01+Enchantment-+Mohini+(Enchantment).mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "02 Enchantment- Oasis", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/02+Enchantment-+Oasis.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "03 Enchantment- Distant Green Valley", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/03+Enchantment-+Distant+Green+Valley.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "04 Enchantment- Distant Green Valley", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/04+Enchantment-+Akhalqalaqi+Dance.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "05 Enchantment- Echoes of a Lost City", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/05+Enchantment-+Echoes+of+a+Lost+City.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "05 Combination March", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/05.+Combination+March.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "06 Origins- Mountains Are Far Away", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/06+Origins-+Mountains+Are+Far+Away.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "07 Origins- Yanzi (Swallow Song)", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/07+Origins-+Yanzi+(Swallow+Song).mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "08 Origins- Battle Remembered", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/08+Origins-+Battle+Remembered.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "09 Origins- Summer in the High Grassland", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/09+Origins-+Summer+in+the+High+Grassland.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "10 New Beginnings- Kor Arab", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/10+New+Beginnings-+Kor+Arab.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "11 New Beginnings- Shikasta (Minstril's Song)", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/11+New+Beginnings-+Shikasta+(Minstril's+Song).mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "12 New Beginnings- Night at the Caravanserai", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/12+New+Beginnings-+Night+at+the+Caravanserai.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "13 New Beginnings- Gallop of a Thousand Horses", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/13+New+Beginnings-+Gallop+of+a+Thousand+Horses.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "14 New Beginnings- Tarang (Currents)", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/14+New+Beginnings-+Tarang+(Currents).mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
Song.create!(title: "15 New Beginnings- Sacred Cloud Music", user_id: yoyoma.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/15+New+Beginnings-+Sacred+Cloud+Music.mp3"), img: open("https://s3.amazonaws.com/soundclub-seeds/Silk+Road+Journeys+Beyond+the+Horizon+-+Yo-Yo+Ma.jpg"))
p "Complete Yo-Yo Ma"

# Weinberg
Song.create!(title: "Polish Melodies Op. 47, No. 2.", user_id: weinberg.id, audio: open("https://s3.amazonaws.com/soundclub-seeds/Mieczys-aw+Weinberg+-+Polish+Melodies+Op.+47%2C+No.+2.mp3"), img: open("https://d2duss065tgxcq.cloudfront.net/toccata/wp-content/uploads/20140707000000/TOCC0193-jc-cover.jpg"))
p "Complete Weinberg"




# Etudes
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
# AUDIO_URLS = {
#   1 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/001/original/01_Etudes.mp3?1492788883",
#   2 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/002/original/02_Etudes.mp3?1492788888",
#   3 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/003/original/03_Etudes.mp3?1492788889",
#   4 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/004/original/04_Etudes.mp3?1492788891",
#   5 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/005/original/05_Etudes.mp3?1492788892",
#   6 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/006/original/06_Etudes.mp3?1492788893",
#   7 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/007/original/07_Etudes.mp3?1492788895",
#   8 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/008/original/08_Etudes.mp3?1492788896",
#   9 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/009/original/09_Etudes.mp3?1492788897",
#   10 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/010/original/10_Etudes.mp3?1492788901",
#   11 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/011/original/11_Etudes.mp3?1492788906",
#   12 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/012/original/12_Etudes.mp3?1492788911",
#   13 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/013/original/13_Etudes.mp3?1492788918",
#   14 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/014/original/14_Etudes.mp3?1492788923",
#   15 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/015/original/15_Etudes.mp3?1492788926",
#   16 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/016/original/16_Etudes.mp3?1492788931",
#   17 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/017/original/17_Etudes.mp3?1492788935",
#   18 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/018/original/18_Etudes.mp3?1492788941",
#   19 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/019/original/19_Etudes.mp3?1492788946",
#   20 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/020/original/20_Etudes.mp3?1492788956",
#   21 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/021/original/21_Etudes.mp3?1492788959",
#   22 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/022/original/22_Etudes.mp3?1492788962",
#   23 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/023/original/23_Etudes.mp3?1492788971",
#   24 => "http://s3.amazonaws.com/soundclub-assets-dev/songs/audios/000/000/024/original/24_Etudes.mp3?1492788980"
# }
#
# ARTIST_ID = {
#   1 => u2.id,
#   2 => u5.id,
#   3 => u2.id,
#   4 => u5.id,
#   5 => u5.id,
#   6 => u5.id,
#   7 => u3.id,
#   8 => u5.id,
#   9 => u4.id,
#   10 => u4.id,
#   11 => u5.id,
#   12 => u5.id,
#   13 => u5.id,
#   14 => u1.id,
#   15 => u3.id,
#   16 => u2.id,
#   17 => u4.id,
#   18 => u5.id,
#   19 => u5.id,
#   20 => u5.id,
#   21 => u5.id,
#   22 => u1.id,
#   23 => u3.id,
#   24 => u4.id
# }
#
# IMAGE_URL = "http://s3.amazonaws.com/soundclub-assets-dev/songs/imgs/000/000/005/original/album.png?1492788892"
#
# SONGS = []
# p "Begin Seeding Songs..."
# (1..24).each do |num|
#   SONGS[num] = Song.create!(title: "Etude 0#{num}", user_id: ARTIST_ID[num], audio: open(AUDIO_URLS[num]), img: open(IMAGE_URL))
#   p "..Seed Song #{num}, user_id: #{ARTIST_ID[num]}"
# end
#
# SONGS[14].comments.create!(user_id: u5.id, body: "One of my finer compositions")
# SONGS[14].comments.create!(user_id: u3.id, body: "Exquisite")
# SONGS[14].comments.create!(user_id: u5.id, body: "Merci")
#
#
#
# Follow.create!(follower_id: u5.id, followee_id: u6.id)
# Follow.create!(follower_id: u5.id, followee_id: u7.id)
