import AsyncStorage from '@react-native-async-storage/async-storage';
import {create, StateCreator} from 'zustand';
import {persist, createJSONStorage, PersistOptions} from 'zustand/middleware';

export type LangState = {
  lang: string;
  setLang: (lang: string) => string;
};

type LangPersist = (
  config: StateCreator<LangState>,
  options: PersistOptions<LangState>,
) => StateCreator<LangState>;

const initialState: any = {
  lang: 'en',
};
export const langStore = create<LangState>(
  (persist as unknown as LangPersist)(
    set => ({
      ...initialState,
      setLang: (lang: string) => set({lang}),
    }),
    {
      name: 'lang-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default langStore;
