import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';
import { RequiredError } from 'openai/dist/base';

import { Message } from '@/entities/chat';

import type { NextApiRequest, NextApiResponse } from 'next';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const handler = async (req: NextApiRequest, res: NextApiResponse<Message>) => {
  try {
    const { prompt } = req.body;

    if (prompt.match(/^[0-9a-z]+$/gi)) {
      await sleep(1000);

      return res.status(200).json({ text: `Do you mean "${prompt}"? Please enter a sentence.`, createdAt: new Date() });
    }

    const openai = new OpenAIApi(
      new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      })
    );

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.status(200).json({ text: completion.data.choices[0].text ?? '', createdAt: new Date() });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res
        .status(error.response?.status ?? 500)
        .json({ text: `Have you set up your API? (${error.message})`, createdAt: new Date() });
    } else if (error instanceof RequiredError) {
      res.status(403).json({ text: `Are you allowed to use the API? (${error.message})`, createdAt: new Date() });
    } else {
      res.status(500).json({ text: 'Unknown error.', createdAt: new Date() });
    }
  }
};

export default handler;
