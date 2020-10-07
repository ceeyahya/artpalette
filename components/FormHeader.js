import Link from 'next/link';

export default function FormHeader() {
  return (
    <div className="max-w-2xl mx-auto mt-8 text-center">
      <Link href="/gallery">
        <a className="underline text-beige-darkest">Back to the gallery</a>
      </Link>
      <h2 className="mt-4 font-serif text-3xl font-extrabold leading-9 tracking-tight text-ygreen-dark sm:text-4xl sm:leading-10">
        Suggest an addition to the gallery
      </h2>
      <p className="mt-4 text-lg leading-6 text-beige-darkest">
        Interested in suggesting a new addition to the gallery, maybe{' '}
        <b>your own painting</b>. Fill the form below and I'll gradually add
        them.
      </p>
    </div>
  );
}
