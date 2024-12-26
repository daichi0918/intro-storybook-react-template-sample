export default function Task({
  task: { id, title, state },
  onPinTask,
  onArhiveTask,
}) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        className="checkbox"
        // aria-label={`archiveTask-${id}`}
      >
        <input
          type="checkbox"
          name="checked"
          id={`archiveTask-${id}`}
          // aria-label={`archiveTask-${id}`}
        />
        <span
          className="checkbox-custom"
          onClick={() => onArhiveTask(id)}
          aria-label={`archiveTask-${id}`}
        ></span>
      </label>
      <label htmlFor="title" className="title" aria-label={title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
          style={{ backgroundColor: 'red' }}
        />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className="pin-button"
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          onClick={() => onPinTask(id)}
        >
          <span className="icon-star"></span>
        </button>
      )}
    </div>
  );
}
