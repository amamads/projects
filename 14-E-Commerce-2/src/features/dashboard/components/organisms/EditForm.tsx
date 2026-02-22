import { ScrollArea } from "@/components/ui/scroll-area";
import UserForm from "@/components/UserForm";
import type { UserFormFieldes } from "@/components/UserForm/schema/schema";
import useGetUsers from "@/features/auth/hooks/use-get-users";
import useEditUser from "@/features/product/pages/hooks/use-edit-user";
import type User from "@/types/user";
import type { Dispatch, SetStateAction } from "react";

const EditForm = ({
  value,
  setOpen,
}: {
  value: User;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { id, birthDate, ...defaultValues2 } = value;

  const defaultValues = {
    ...defaultValues2,
    birthDate: new Date(String(birthDate)),
  };

  const { data: users } = useGetUsers();
  const { mutate: editUser } = useEditUser();

  const usernames = users
    ?.map((user) => user.username)
    .filter((user) => user !== defaultValues.username);

  async function formOnSubmit(data: UserFormFieldes) {
    console.log(data);
    await new Promise((res) => setTimeout(res, 1000));
    editUser({ id, data });
    setOpen(false);
  }

  return (
    <ScrollArea className="h-[75vh]">
      <UserForm
        onSubmit={formOnSubmit}
        buttonLabels={{ idle: "edit", loading: "editing..." }}
        defaultValues={defaultValues}
        usernames={usernames}
        title="Edit user form"
      />
    </ScrollArea>
  );
};
export default EditForm;
