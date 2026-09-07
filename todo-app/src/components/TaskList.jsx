import ListItem from './ListItem'

function TaskList({ tasks, onRemoveTask }) {
  const taskList = tasks
    .filter((ta) => !ta.done)
    .map((task) => (
      <ListItem 
        key={task.id}
        name={task.name}
        onRemoveTask={onRemoveTask}
        id={task.id}
      />
    ));

  return (
    <>
      <ul className="task-list">
        {taskList}
      </ul>
    </>
  );
}


export default TaskList
