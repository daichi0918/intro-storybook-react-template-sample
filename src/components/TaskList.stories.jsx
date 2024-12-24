import TaskList from './TaskList';
import * as TaskStories from './Task.stories';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { TasksSlice } from '../lib/store';

export default {
  component: TaskList,
  title: 'TaskList',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem' }}>
        {/* <Story /> */}
        {Story()}
      </div>
    ),
  ],
};

const MockStore = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: TasksSlice.reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export const Default = {
  decorators: [(Story) => <MockStore>{Story()}</MockStore>],
  // args: {
  //   tasks: [
  //     {
  //       ...TaskStories.Default.args.task,
  //       id: '1',
  //       title: 'Task 1',
  //     },
  //     {
  //       ...TaskStories.Default.args.task,
  //       id: '2',
  //       title: 'Task 2',
  //     },
  //     {
  //       ...TaskStories.Default.args.task,
  //       id: '3',
  //       title: 'Task 3',
  //     },
  //     {
  //       ...TaskStories.Default.args.task,
  //       id: '4',
  //       title: 'Task 4',
  //     },
  //     {
  //       ...TaskStories.Default.args.task,
  //       id: '5',
  //       title: 'Task 5',
  //     },
  //     {
  //       ...TaskStories.Default.args.task,
  //       id: '6',
  //       title: 'Task 6',
  //     },
  //   ],
  // },
};

export const WithPinnedTasks = {
  // args: {
  //   tasks: [
  //     ...Default.args.tasks.slice(0, 5),
  //     {
  //       id: '6',
  //       title: 'Task 6 (pinned)',
  //       state: 'TASK_PINNED',
  //     },
  //   ],
  // },
};

export const Loading = {
  // args: {
  //   tasks: [],
  //   loading: true,
  // },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
