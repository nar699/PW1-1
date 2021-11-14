/*Classe que contindra la informacio de les tasques*/ 
//autors: marc, gerard, narcis

export class Task {
  constructor(taskId, titleValue,DeadlieValue,imageValue,CategoryValue,DescriptionValue,Completed){
      this.taskId = taskId;
      this.titleValue = titleValue;
      this.DeadlieValue = DeadlieValue;
      this.imageValue = imageValue;
      this.DescriptionValue = DescriptionValue;
      this.CategoryValue = CategoryValue;
      this.Completed = Completed;
  }
}