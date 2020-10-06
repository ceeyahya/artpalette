import Link from 'next/link';
import AppLayout from '@/components/AppLayout';

export default function suggest() {
  return (
    <AppLayout>
      <div className="px-4 mt-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <Link href="/gallery">
              <a className="underline text-beige-darkest">
                Back to the gallery
              </a>
            </Link>
            <h2 className="mt-4 font-serif text-3xl font-extrabold leading-9 tracking-tight text-gray-900 text-ygreen-dark sm:text-4xl sm:leading-10">
              Suggest an addition to the gallery
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500 text-beige-darkest">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div className="mt-10">
            <form
              action="https://kwes.io/api/foreign/forms/hZC3DMU2O4rpLl33EJz5"
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 kwes-form"
            >
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  First name
                </label>
                <div className="relative mt-1">
                  <input
                    id="first_name"
                    placeholder="John"
                    className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-input"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Last name
                </label>
                <div className="relative mt-1">
                  <input
                    id="last_name"
                    placeholder="Constantine"
                    className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-input"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email
                </label>
                <div className="relative mt-1">
                  <input
                    id="email"
                    placeholder="john@constantine.com"
                    type="email"
                    className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-input"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="learn_about_us"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  How did you learn about us ?
                </label>
                <div className="relative mt-1">
                  <input
                    id="learn_about_us"
                    placeholder="Social Media"
                    className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-input"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="suggestion"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Your Suggestion
                </label>
                <div className="relative mt-1">
                  <input
                    id="suggestion"
                    placeholder="Mona Lisa"
                    className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-input"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <span className="inline-flex w-full">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium leading-6 transition duration-150 ease-in-out border border-transparent text-beige-base bg-ygreen-dark hover:bg-ygreen-light focus:outline-none focus:border-ygreen-light active:bg-ygreen-light"
                  >
                    Send Suggestion
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
