const express = require("express");
const Joi = require("joi");

const app = express();

// adding middleware for parsing json
app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Oh Hi Mark!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("Requested course was not found");
  } else {
    res.send(course);
  }
});

app.post("/api/courses", (req, res) => {
  // Validation using Joi
  const { error } = validateRequest(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("Requested course was not found");
  }

  const { error } = validateRequest(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("Requested course was not found");
  }
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

function validateRequest(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

// app.get("/api/courses/:id1/:id2/:id3", (req, res) => {
//   res.send(req.query);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});

// About const in js
// const means immutable
// but for arrays/objects, keys are not protected

// const MY_OBJECT = {'key': 'value'};

// Attempting to overwrite the object throws an error
// Uncaught TypeError: Assignment to constant variable.
// MY_OBJECT = {'OTHER_KEY': 'value'};

// However, object keys are not protected,
// so the following statement is executed without problem
// MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable

// The same applies to arrays
// const MY_ARRAY = [];
// It's possible to push items into the array
// MY_ARRAY.push('A'); // ["A"]
// However, assigning a new array to the variable throws an error
// Uncaught TypeError: Assignment to constant variable.
// MY_ARRAY = ['B'];
