import { useEffect, useRef, useState } from 'react';

import { useRecoilState } from 'recoil';

import { chatState } from '@/states/chat';

import { PostMessageQuery, usePostMessage } from '@/usecases/chat';

export const Form = () => {
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [chat, setChat] = useRecoilState(chatState);
  const [busy, setBusy] = useState<boolean>(false);
  const [query, setQuery] = useState<PostMessageQuery>({ prompt: '' });

  const sendMessage = () => {
    const prompt = messageRef.current?.value;
    if (busy || !prompt) {
      return;
    }

    if (chat.threads.find((v) => v.title == prompt)) {
      alert(`already talked about, ${prompt}`);
      return;
    }

    setChat({
      threads: chat.threads.concat({
        title: prompt,
        messages: [
          {
            text: prompt,
            createdAt: new Date(),
          },
        ],
      }),
    });

    setQuery({ prompt });
    setBusy(true);

    messageRef.current.value = '';

    window.scrollTo(0, 0);
  };

  const { data } = usePostMessage(query);

  useEffect(() => {
    if (data) {
      const threads = chat.threads.map((thread) => {
        return thread.title == data.thread.title ? data.thread : thread;
      });

      setChat({ threads });
      setBusy(false);
    }
  }, [data]);

  return (
    <div className='flex w-full flex-col rounded-lg bg-gray-100 p-6 dark:bg-gray-600 md:ml-auto md:py-8'>
      <h2 className='mb-1 text-3xl font-medium'>Hi, I am AI.</h2>
      <p className='mb-5 leading-relaxed'>Would you like to talk?</p>
      <div className='relative mb-4'>
        <textarea
          id='message'
          name='message'
          className='h-32 w-full resize-none rounded border py-1 px-3 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-800'
          ref={messageRef}
        ></textarea>
      </div>
      <button
        className='rounded border-0 bg-blue-600 py-2 px-6 text-lg capitalize text-white duration-200 hover:bg-blue-700 focus:outline-none'
        onClick={sendMessage}
      >
        {busy ? '...' : 'send'}
      </button>
      <p className='mt-3 text-sm'>
        <strong> `Explain quantum computing in simple terms` </strong>
        <strong> `Got any creative ideas for a 10 year old’s birthday?` </strong>
        <strong> `How do I make an HTTP request in JavaScript?` </strong>
        and so on.
      </p>
    </div>
  );
};
