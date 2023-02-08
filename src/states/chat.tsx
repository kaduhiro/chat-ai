import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { Thread } from '@/entities/chat';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : sessionStorage,
});

export type chatStateType = {
  threads: Thread[];
};

export const chatState = atom<chatStateType>({
  key: 'chat',
  default: {
    threads: [],
  },
  effects_UNSTABLE: [persistAtom],
});
