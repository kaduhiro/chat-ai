import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import { chatState } from '@/states/chat';

import { selectId, selectTime } from '@/entities/chat';

export const Thread = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => setIsClient(true), []);

  const [chat, setChat] = useRecoilState(chatState);

  return !isClient || !chat.threads.length ? (
    <></>
  ) : (
    <div className='flex w-full flex-col-reverse gap-4 overflow-hidden rounded-lg bg-gray-300 p-8 dark:bg-gray-700'>
      {chat.threads.map((thread, index) => {
        return (
          <section
            className={
              'rounded-lg bg-white p-6 text-base dark:bg-gray-900 ' +
              (thread.messages.length < 2 ? 'animate-bounce-top' : '')
            }
            key={selectId(thread.messages[0])}
          >
            <div className='ml-auto w-4/5'>
              <div className='mb-2 flex items-center justify-end'>
                <div className='flex items-center gap-1'>
                  <p className='text-sm'>
                    <time>{selectTime(thread.messages[0])}</time>
                  </p>
                  <p className='inline-flex items-center text-sm'>🤔</p>
                </div>
              </div>
              <p className='text-right text-gray-500 dark:text-gray-400'>{thread.messages[0].text}</p>
            </div>

            <div className='mr-auto w-4/5'>
              <div className='mb-2 flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <p className='inline-flex items-center text-sm'>🤖</p>
                  <p className='text-sm'>
                    <time>{thread.messages[1] ? selectTime(thread.messages[1]) : ''}</time>
                  </p>
                </div>
              </div>
              <p className='text-gray-500 dark:text-gray-400'>
                {thread.messages[1] ? (
                  thread.messages[1].text
                ) : (
                  <span className='animate-heartbeat rounded-xl bg-cyan-600 px-3 uppercase text-white'>...</span>
                )}
              </p>
            </div>

            <div className='mt-4 flex items-center justify-between space-x-4'>
              <button
                type='button'
                className='rounded-t-lg p-2 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                onClick={() => setChat({ threads: chat.threads.filter((_, k) => k != index) })}
              >
                🗑
              </button>
              <button
                id='dropdownComment1Button'
                data-dropdown-toggle='dropdownComment1'
                className='inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                type='button'
              >
                <svg
                  className='h-5 w-5'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
                </svg>
                <span className='sr-only'>Comment settings</span>
              </button>
              <div
                id='dropdownComment1'
                className='z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
              >
                <ul
                  className='py-1 text-sm text-gray-700 dark:text-gray-200'
                  aria-labelledby='dropdownMenuIconHorizontalButton'
                >
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
