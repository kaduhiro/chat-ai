import { Theme } from '../elements';

export const Header = () => {
  return (
    <>
      <header className='w-full'>
        <div className='container mx-auto flex flex-col flex-wrap items-center justify-between p-5 md:flex-row'>
          <a className='mb-4 flex items-center font-medium md:mb-0'>
            <h1 className='text-4xl'>ChatAI</h1>
          </a>
          <Theme />
        </div>
      </header>
    </>
  );
};
