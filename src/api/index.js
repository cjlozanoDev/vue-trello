import { db } from "./firebase";

const boardRef = db.ref("/boards");
const listsRef = db.ref("/lists");
const tasksRef = db.ref("/tasks");

export default {
  postBoard(name) {},
  getListFromBoard(boardId) {},
  postList(board, name) {},
  getTasksFromList(listId) {},
  postTasks(list, title) {},
  deleteTask(taskId) {},
  completeTask(taskId) {},
};
