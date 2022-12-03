# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."
Movie.create([
  {
    title: "Paralell Mothers",
    category: "Drama",
    poster_url: "https://m.media-amazon.com/images/M/MV5BM2Y2MWIzY2YtZDJiYi00ODM3LWE5NGYtNjlkYWE5ZmMxNTdmXkEyXkFqcGdeQXVyOTgxNDIzMTY@._V1_.jpg",
    description: "The story of two mothers who bond in unexpected way after giving birth the same day.",
    year: 2021,
    length: 120

  },
  {
    title: "Cast Away",
    category: "Drama",
    poster_url: "https://upload.wikimedia.org/wikipedia/en/a/a7/Cast_away_film_poster.jpg",
    description: "Chuck Nolan, a top international manager for FedEx, and Kelly, a Ph.D. student, are in love and heading towards marriage. Then Chuck's plane to Malaysia crashes at sea during a terrible storm. He's the only survivor, and finds himself marooned on a desolate island. With no way to escape, Chuck must find ways to survive in his new home.",
    year: 2000,
    length: 143
  },
  {
    title: "Click",
    category: "Comedy",
    poster_url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Click_film.jpg/220px-Click_film.jpg",
    description: "A married workaholic, Michael Newman doesn't have time for his wife and children, not if he's to impress his ungrateful boss and earn a well-deserved promotion. So when he meets Morty, a loopy sales clerk, he gets the answer to his prayers: a magical remote that allows him to bypass life's little distractions with increasingly hysterical results.",
    year: 2006,
    length: 107

  },
  {
    title: "Top Gun: Maverick",
    category: "Action",
    poster_url: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    year: 2022,
    length: 131

  },
  {
    title: "The Notebook",
    category: "Romance",
    poster_url: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
    description: "The Notebook is a contemporary love story set in the pre- and post-World War II era. Noah and Allie spend a wonderful summer together, but her family and the socio-economic realities of the time prevent them from being together.",
    year: 2004,
    length: 124

  },
  {
    title: "WALL-E",
    category: "Family",
    poster_url: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
    description: "WALL•E (Waste Allocation Load Lifter Earth-Class) is the last robot left on Earth, programmed to clean up the planet, one trash cube at a time. However, after 700 years, he's developed one little glitch—a personality. He's extremely curious, highly inquisitive, and a little lonely.",
    year: 2008,
    length: 97

  },
  {
    title: "Office Space",
    category: "Comedy",
    poster_url: "https://m.media-amazon.com/images/M/MV5BOTA5MzQ3MzI1NV5BMl5BanBnXkFtZTgwNTcxNTYxMTE@._V1_FMjpg_UX1000_.jpg",
    description: " Three company workers who hate their jobs decide to rebel against their greedy boss. In the Initech office, the insecure Peter Gibbons hates his job and the obnoxious Division VP Bill Lumbergh who has just hired two efficiency consultants to downsize the company.",
    year: 1999,
    length: 89

  },
  {
    title: "",
    category: "",
    poster_url: "",
    description: "",
    year: 0,
    length: 0

  },
  {
    title: "",
    category: "",
    poster_url: "",
    description: "",
    year: 0,
    length: 0

  },
  {
    title: "",
    category: "",
    poster_url: "",
    description: "",
    year: 0,
    length: 0

  },
  {
    title: "",
    category: "",
    poster_url: "",
    description: "",
    year: 0,
    length: 0

  },
  {
    title: "",
    category: "",
    poster_url: "",
    description: "",
    year: 0,
    length: 0

  },
  {
    title: "",
    category: "",
    poster_url: "",
    description: "",
    year: 0,
    length: 0

  },
  {
    title: "",
    category: "",
    poster_url: "",
    description: "",
    year: 0,
    length: 0

  },
  {
    title: "",
    category: "",
    poster_url: "",
    description: "",
    year: 0,
    length: 0

  },
])

User.create([{
  username: "Omar",
  password_digest:"nfajernkjf1221343nrkwlmekas"

}])
puts "🌱 Done seeding!"