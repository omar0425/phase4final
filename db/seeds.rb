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
puts "🌱 Done seeding!"