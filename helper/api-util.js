export async function getAllEvents() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.posts.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.posts.find((event) => event.id === id);
}

// {
//     "posts": [
//       {
//         "id": "e1",
//         "title": "Programming for everyone",
//         "description": "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
//         "location": "Somestreet 25, 12345 San Somewhereo",
//         "date": "2021-05-12",
//         "image": "images/coding-event.jpg",
//         "isFeatured": false
//       },
//       {
//         "id": "e2",
//         "title": "Networking for introverts",
//         "description": "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
//         "location": "New Wall Street 5, 98765 New Work",
//         "date": "2021-05-30",
//         "image": "images/introvert-event.jpg",
//         "isFeatured": true
//       },
//       {
//         "id": "e3",
//         "title": "Networking for extroverts",
//         "description": "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
//         "location": "My Street 12, 10115 Broke City",
//         "date": "2022-04-10",
//         "image": "images/extrovert event.jpg",
//         "isFeatured": true
//       },
//       {
//         "id": "e4",
//         "title": "Networking for introverts",
//         "description": "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
//         "location": "New Wall Street 5, 98765 New Work",
//         "date": "2021-05-30",
//         "image": "images/introvert-event.jpg",
//         "isFeatured": true
//       },
//       {
//         "id": "e5",
//         "title": "Programming for everyone",
//         "description": "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
//         "location": "Somestreet 25, 12345 San Somewhereo",
//         "date": "2021-05-12",
//         "image": "images/coding-event.jpg",
//         "isFeatured": true
//       }
//     ]
//   }
