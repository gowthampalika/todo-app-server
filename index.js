const express = require("express");
const app = express();
const PORT = 3000;

// Sample todo list
const todos = [
  { id: 1, title: "Go to Gym", description: "Workout for 1 hour" },
  { id: 2, title: "Read Book", description: "Read 20 pages of a novel" },
  { id: 3, title: "Study", description: "Learn about Node.js backend" },
  { id: 4, title: "Meditate", description: "Meditate for 15 minutes" },
  { id: 5, title: "Grocery Shopping", description: "Buy fruits and vegetables" },
  { id: 6, title: "Clean Room", description: "Organize desk and wardrobe" },
  { id: 7, title: "Cook Dinner", description: "Prepare a healthy meal" },
  { id: 8, title: "Laundry", description: "Wash and fold clothes" },
  { id: 9, title: "Walk Dog", description: "Take dog for a 30 min walk" },
  { id: 10, title: "Call Parents", description: "Catch up with family" },
  { id: 11, title: "Water Plants", description: "Water indoor and outdoor plants" },
  { id: 12, title: "Pay Bills", description: "Pay electricity and water bills" },
  { id: 13, title: "Yoga", description: "Practice yoga for 20 minutes" },
  { id: 14, title: "Plan Week", description: "Make a schedule for the week" },
  { id: 15, title: "Work on Project", description: "Finish module 2 of project" },
  { id: 16, title: "Write Journal", description: "Write down thoughts of the day" },
  { id: 17, title: "Learn Guitar", description: "Practice 3 chords" },
  { id: 18, title: "Watch Tutorial", description: "Watch JavaScript tutorial video" },
  { id: 19, title: "Go for a Run", description: "Run 3 kilometers in park" },
  { id: 20, title: "Clean Kitchen", description: "Wash dishes and wipe counters" },
  { id: 21, title: "Reply to Emails", description: "Clear inbox and reply to important mails" },
  { id: 22, title: "Backup Data", description: "Backup files to external hard drive" },
  { id: 23, title: "Learn Vocabulary", description: "Memorize 10 new words" },
  { id: 24, title: "Meal Prep", description: "Prepare meals for next 2 days" },
  { id: 25, title: "Go Cycling", description: "Cycle 5 km for fitness" },
  { id: 26, title: "Stretching", description: "Full-body stretches for 15 minutes" },
  { id: 27, title: "Organize Files", description: "Clean up desktop and folders" },
  { id: 28, title: "Practice Coding", description: "Solve 3 coding problems" },
  { id: 29, title: "Listen to Podcast", description: "Listen to a tech podcast" },
  { id: 30, title: "Take Vitamins", description: "Take daily supplements" },
  { id: 31, title: "Check Bank Balance", description: "Update monthly expenses" },
  { id: 32, title: "Read News", description: "Catch up on today’s news" },
  { id: 33, title: "Declutter Desk", description: "Remove unnecessary papers" },
  { id: 34, title: "Update Resume", description: "Add latest project experience" },
  { id: 35, title: "Practice Meditation", description: "Focus on breathing 10 min" },
  { id: 36, title: "Call Friend", description: "Talk with an old friend" },
  { id: 37, title: "Check Calendar", description: "Review upcoming events" },
  { id: 38, title: "Wash Car", description: "Clean interior and exterior" },
  { id: 39, title: "Donate Clothes", description: "Pack clothes for donation" },
  { id: 40, title: "Take Photos", description: "Capture nature shots" },
  { id: 41, title: "Research Investment", description: "Read about mutual funds" },
  { id: 42, title: "Practice Typing", description: "Do a 15 min typing test" },
  { id: 43, title: "Organize Bookshelf", description: "Arrange books alphabetically" },
  { id: 44, title: "Cook Breakfast", description: "Make eggs and toast" },
  { id: 45, title: "Exercise Arms", description: "Do pushups and dumbbells" },
  { id: 46, title: "Update Apps", description: "Update apps on phone" },
  { id: 47, title: "Skincare Routine", description: "Apply moisturizer and sunscreen" },
  { id: 48, title: "Check Weather", description: "Look at tomorrow’s forecast" },
  { id: 49, title: "Learn Drawing", description: "Sketch for 20 minutes" },
  { id: 50, title: "Sleep Early", description: "Go to bed by 10 PM" }
];

// API endpoint to return random todos wrapped in an object
app.get("/random-todo", (req, res) => {
  const maxCount = 15;
  const count = Math.floor(Math.random() * maxCount) + 1;

  const shuffled = [...todos].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  res.json({
    status: "OK",
    code: 200,
    locale: "en_US",
    total: selected.length,
    data: selected
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
