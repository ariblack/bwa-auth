import { TaskType } from "@/db/schema";

const TaskItem = ({ id, title, description, status }: TaskType) => {
  return (
    <li key={id} className="border p-4 rounded">
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="text-xs mt-1 text-right italic">Status: {status}</p>
    </li>
  );
};

export default TaskItem;
