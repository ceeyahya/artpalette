import Link from 'next/link';
import AppLayout from '@/components/AppLayout';

export default function Home() {
  return (
    <AppLayout>
      <main className="max-w-screen-xl px-4 py-32 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
          <h2 className="font-serif text-4xl italic font-extrabold text-ygreen-dark sm:text-5xl md:text-6xl">
            Explore colors used in famous paintings
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-beige-darker sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="max-w-xl mx-auto mt-5 md:mt-8 ">
            <div className="flex flex-col mt-10 lg:flex-row sm:ml-3 item-center">
              <Link href="/gallery">
                <a className="flex items-center justify-center px-8 py-3 text-lg font-bold leading-6 transition duration-150 ease-in-out border border-transparent text-beige-base bg-ygreen-dark hover:bg-ygreen-light focus:outline-none focus:bg-ygreen-light focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">
                  Explore the Gallery
                  <svg
                    className="ml-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="/suggest">
                <a className="justify-center px-8 py-3 text-lg font-bold leading-6 underline transition duration-150 ease-in-out text-ygreen-light hover:text-ygreen-dark focus:outline-none focus:text-ygreen-light md:py-4 md:text-lg md:px-10">
                  Suggest an addition
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
