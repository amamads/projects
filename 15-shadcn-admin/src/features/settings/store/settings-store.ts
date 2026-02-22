import { create } from 'zustand';
import settingPageName from '../helper/pageName';
import type { SettingsPageTitles } from '../types';
import { useNavigate } from 'react-router';

type SettingsStoreState = {
pageTitle:SettingsPageTitles;
setPageTitle:(value:SettingsPageTitles)=>void;
}


export const useSettingsStore = create<SettingsStoreState>((set)=>({
    pageTitle:settingPageName() ?? 'profile',
    setPageTitle:(value)=>set({pageTitle:value})
}))
useSettingsStore.subscribe((state,prevState)=>{
    if(state.pageTitle === prevState.pageTitle)return;
    const navigate = useNavigate();
    navigate(state.pageTitle);
    // console.log(state.pageTitle);

});
export const selectPageTitle = (s: SettingsStoreState) => s.pageTitle
export const selectSetPageTitle = (s: SettingsStoreState) => s.setPageTitle 