

const movies = [
    { poster: "/posters/plane.jpg", name: "Airplane"},
    { poster: "/posters/img-2.jpg", name: "Family man"},
    { poster: "/posters/lab.jpg", name: "Laboratory"},
    { poster: "/posters/napoleon.jpg", name: "Napoleon"},
    { poster: "/posters/darkness.jpg", name: "Person in Darkness"},
    { poster: "/posters/scary.jpg", name: "Scary Building"},
    { poster: "/posters/stars.jpg", name: "Stars"},
]

const randomMoviesSet1 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5))


const randomMoviesSet2 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5)
