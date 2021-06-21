import * as types from "./mutations-types";
import api from "@/api";

export default {
  //fetch via Ajax de los paneles del usuario
  fetchBoards({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST);

    api
      .getBoardsByUser(user)
      .then((snap) =>
        commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() })
      )
      .catch((error) => commit(types.FETCH_BOARDS_FAILURE, { error }));
  },

  //fetch via Ajax de las listas asociadas a un panel
  fetchList({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST);

    api
      .getListsFromBoard(board)
      .then((snap) => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() }))
      .catch((error) => commit(types.FETCH_LISTS_FAILURE, { error }));
  },

  //fetch via Ajax de las tareas de una lista

  fetchTasks({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST);

    api
      .getTasksFromList(list)
      .then((snap) => commit(types.FETCH_TASKS_SUCCESS, { task: snap.val() }))
      .catch((error) => commit(types.FETCH_TASKS_FAILURE, { error }));
  },

  //Añadir un nuevo panel
  addBoard({ commit }, { name }) {
    api.postBoard(name).then((board) => commit(types.ADD_BOARD, { board }));
  },
  addColumn({ commit }, { board, name }) {
    api
      .postList(board, name)
      .then((column) => commit(types.ADD_COLUMN, { column }));
  },
  addTask({ commit }, { list, title }) {
    api.postTasks(list, title).then((task) => commit(types.ADD_TASK, { task }));
  },
  deleteTask({ commit }, { taskId }) {
    api.deleteTask(taskId).then(() => commit(types.DELETE_TASK), { taskId });
  },

  markAsCompleted({ commit }, { task }) {
    api
      .completedTask(task.id)
      .then(() => commit(types.MARK_AS_COMPLETED, { task }));
  },
};
