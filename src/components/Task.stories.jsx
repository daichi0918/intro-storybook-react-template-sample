import Task from './Task';
export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const ARCHIVED = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};

export const LongTitle = {
  args: {
    task: {
      ...Default.args.task,
      title: `15:43:36 [vite] hmr update /src/components/TaskList.jsx
      15:46:51 [vite] hmr update /src/components/TaskList.stories.jsx
      15:46:51 [vite] hmr invalidate /src/components/TaskList.stories.jsx Could not Fast Refresh. Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports
      15:46:51 [vite] page reload src/components/TaskList.stories.jsx
      15:46:56 [vite] hmr update /src/components/TaskList.stories.jsx
      15:46:56 [vite] hmr invalidate /src/components/TaskList.stories.jsx Could not Fast Refresh. Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports
      15:46:56 [vite] page reload src/components/TaskList.stories.jsx
      15:47:14 [vite] hmr update /src/components/TaskList.stories.jsx
      15:47:14 [vite] hmr invalidate /src/components/TaskList.stories.jsx Could not Fast Refresh. Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports`,
    },
  },
};
