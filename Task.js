class Task{
    constructor(image,title,deadline,category,description,completed,error){
        this.image = image;
        this.title = title;
        this.deadline = deadline;
        this.category = category;
        this.description = description;
        this.completed = completed;
        this.error = error;
    }
}


class TaskManager {
    constructor(){
      this.tasks = []
    }
    newTask(image,title,deadline,category,description,completed,error){
      let p = new Task(image,title,deadline,category,description,completed,error)
      this.tasks.push(p)
      return p
    }
    get allTasks(){
      return this.tasks
    }

    get numberOfTasks(){
        return this.tasks.length
    }
    get tasknum(index){
        return this.tasks[index];
    }
  }