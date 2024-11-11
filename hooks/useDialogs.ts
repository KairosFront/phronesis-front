import { create } from "zustand";

import { DialogHookProps, DialogNotes } from "@/index";
import { DialogInstrHookProps, DialogNotificationsProps } from "@/index";

export const useDialogItem = create<DialogHookProps>((set) => ({
  isOpen: false,
  setIsOpen: (newState: boolean) => set({ isOpen: newState }),
  mode: "none",
  setMode: (newMode: "add" | "edit" | "none") => set({ mode: newMode }),
}));

export const useDialogInstructions = create<DialogInstrHookProps>((set) => ({
  isOpenInstr: false,
  setIsOpenInstr: (newState: boolean) => set({ isOpenInstr: newState }),
  defaultTab: "first-part",
  setDefaultTab(tab) {
    set({ defaultTab: tab });
  },
}));

export const useDialogsNotes = create<DialogNotes>((set) => ({
  isOpenNote: false,
  setIsOpenNote: (newState: boolean) => set({ isOpenNote: newState }),
  idProject: 0,
  setIdProject(newProjectId) {
    set({ idProject: newProjectId });
  },
  initialValue: null,
  setInitialValue: (newInitialValue: null | string) =>
    set({ initialValue: newInitialValue }),
}));


export const useDialogNotifications = create<DialogNotificationsProps>((set) => ({
  numberOfAccess: 0,
  setNumberOfAccess: (newState: number) => set({ numberOfAccess: newState }),
  
}));