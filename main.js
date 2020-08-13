/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = (todo) => todo.text
const getPriority = (todo) => todo.priority
const isComplete = (todo) => todo.complete
const isHighPriority = (todo) => todo.priority === 2
const names = (todos) => todos.map((todo) => todo.text)
const priorities = (todos) => todos.map((todo) => todo.priority)
const namesAndPriorities = (todos) => todos.map((todo) => todo.text + ' - ' + [todo.priority === 2 ? 'High' : 'Low'])
const justNotComplete = (todos) => todos.filter(todo => todo.complete === false)
const justComplete = (todos) => todos.filter(todo => todo.complete === true)
const priority2Only = (todos) => todos.filter(todo => todo.priority === 2)
const priority1Only = (todos) => todos.filter(todo => todo.priority === 1)

// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
