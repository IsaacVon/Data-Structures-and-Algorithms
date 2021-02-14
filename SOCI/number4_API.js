let api = [
  {
    page: 1,
    totalPages: 5,
    data: [
      {
        title: "Movie 1",
        rating: 4.7,
      },
      {
        title: "Movie 2",
        rating: 7.8,
      },
    ],
  },
  {
    page: 2,
    totalPages: 5,
    data: [
      {
        title: "Movie 3",
        rating: 5.1,
      },
      {
        title: "Movie 2",
        rating: 2.4,
      },
    ],
  },
];


const getRatingSummary = () => {
  let ratingArray = [];

  for (let i = 0; i < api.length; i++) {
    for (let j = 0; j < api[i].data.length; j++) {
      let currentRating = api[i].data[j].rating;
      ratingArray.push(currentRating);
    }
  }

  let maxRating = Math.max(...ratingArray);
  let avgRating = ratingArray.reduce((a, b) => a + b) / ratingArray.length;

  return { maxRating, avgRating };
};

console.log(getRatingSummary());
