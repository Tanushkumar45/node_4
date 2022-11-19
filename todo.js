const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const dueLater = () => {
    return all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  return { all, add, markAsComplete, overdue, dueToday, dueLater };
  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };
  
  const overdue = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };
  
};
const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    var i;
    var displayList = []
    for (i=0;i<list.length;i++) {
      if (list[i].completed === false) {
        //`[ ] ${i.title} ${i.dueDate}`
        if (list[i].dueDate===today) {
          displayList.push(`[ ] ${list[i].title}`)
        }
        else {
          displayList.push(`[ ] ${list[i].title} ${list[i].dueDate}`)
        }
      }
      else {
        // `[x] ${i.title} ${i.dueDate}`
        if (list[i].dueDate===today) {
          displayList.push(`[x] ${list[i].title}`)
        }
        else {
          displayList.push(`[x] ${list[i].title} ${list[i].dueDate}`)
        }          
      }
    }
    
    return displayList.join("\n");
  }

module.exports = todoList;
