import Task from './Task';
import PropType from 'prop-types';
import { useSelector } from 'react-redux';

export default function TaskList({ loading }) {
  const tasks = useSelector((state) => {
    console.log('state');
    console.log(state);
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((t) => t.state === 'TASK_PINNED'),
      ...state.taskbox.tasks.filter((t) => t.state !== 'TASK_PINNED'),
    ];
    const filterdTasks = tasksInOrder.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
    return filterdTasks;
  });
  const loadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox"></span>
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
      </div>
    );
  }

  if (tasks.length == 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

// TaskList.propTypes = {
//   loading: PropType.
// }

// TaskList.defaultProps = {
//   loading: false,
// };
