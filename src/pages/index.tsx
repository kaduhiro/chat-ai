import { DefaultLayout } from '@/components/layouts';
import { Form, Header, Thread } from '@/components/parts';

export default function Chat() {
  return (
    <DefaultLayout title={'ChatAI'}>
      <div className='container'>
        <div className='hidden md:block'>
          <Header />
        </div>
        <div className='flex flex-wrap gap-10 md:flex-nowrap'>
          <Thread />
          <div className='fixed left-0 bottom-0 w-full md:relative'>
            <Form />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
