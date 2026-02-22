import { Tabs } from "@/components/atoms/tabs";
import ChatsTabs from "../components/organisms/ChatsTabs";
import {
  selectSelectTab,
  selectSetSelectTab,
  useChatsStore,
} from "../store/chats-store";
import ChatsContents from "../components/organisms/ChatsContents";
import ChatsContentsSM from "../components/organisms/ChatsContentsSM";

export const Chats = () => {
  const selectTab = useChatsStore(selectSelectTab);
  const setSelectTab = useChatsStore(selectSetSelectTab);
  return (
    <div className="flex mt-5 max-sm:mt-8">
      <Tabs
        className="w-full"
        defaultValue={selectTab}
        onValueChange={setSelectTab}
      >
        <div className="hidden max-sm:block">
          {selectTab === "default" ? <ChatsTabs /> : <ChatsContentsSM />}
        </div>
        <div className="max-sm:hidden grid grid-cols-[3fr_7fr] gap-5 ">
          <ChatsTabs />
          <ChatsContents />
        </div>
      </Tabs>
    </div>
  );
};
