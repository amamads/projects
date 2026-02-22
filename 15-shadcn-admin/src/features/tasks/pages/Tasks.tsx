import CreateTaskSheet from "../components/molecules/CreateTaskSheet";
import ImportDialog from "../components/molecules/ImportDialog";
import TasksTable from "../components/organisms/TasksTable";

export const Tasks = () => {
  return (
    <div className="my-5 w-full">
      <div className="flex flex-wrap items-end gap-2 sm:flex-row justify-between">
        <div>
          <h3 className="font-bold">Tasks</h3>
          <p className="text-muted-foreground">
            Here's a list of your tasks for this month!
          </p>
        </div>
        <div className="flex gap-2">
          <ImportDialog/>
          <CreateTaskSheet/>
        </div>
      </div>
      <TasksTable />
    </div>
  );
};
