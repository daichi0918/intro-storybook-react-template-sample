import TaskList from './TaskList';
import * as TaskStories from './Task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
};

export const Default = {
  args: {
    tasks: [
      {
        ...TaskStories.Default.args.task,
        id: '1',
        title: 'Task 1',
      },
      {
        ...TaskStories.Default.args.task,
        id: '2',
        title: 'Task 2',
      },
      {
        ...TaskStories.Default.args.task,
        id: '3',
        title: 'Task 3',
      },
      {
        ...TaskStories.Default.args.task,
        id: '4',
        title: 'Task 4',
      },
      {
        ...TaskStories.Default.args.task,
        id: '5',
        title: 'Task 5',
      },
      {
        ...TaskStories.Default.args.task,
        id: '6',
        title: 'Task 6',
      },
    ],
  },
};
