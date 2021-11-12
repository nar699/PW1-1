var taskList = [];
//localStorage.removeItem('localTaskList');
taskList = getTaskList();


  function newTask(timage,ttitle,tdeadline,tcategory,tdescription,tcompleted,terror){
    var newTask = {
      image : timage,
      title : ttitle,
      deadline : tdeadline,
      category : tcategory,
      description : tdescription,
      completed : tcompleted,
      error : terror
    };
    
    taskList.push(newTask)
    console.log(newTask);
    storeTasksJSON(taskList);

  }

  function getTaskList(){
    var storedTasksList= localStorage.getItem('localTaskList');
    if(storedTasksList == null){
       taskList = [];
    }
    else{
        taskList = JSON.parse(storedTasksList);
    }
    return taskList;
  }

  function storeTasksJSON(taskslist){
    localStorage.setItem('localTaskList', JSON.stringify(taskslist));
  }


