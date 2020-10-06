import Link from 'next/link';

export default function GalleryLinks() {
  return (
    <div className="flex items-center justify-between font-bold underline text-beige-darkest">
      <Link href="/">
        <a className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
              fill="currentColor"
            />
          </svg>
          Back to the index
        </a>
      </Link>
      <Link href="/suggest">
        <a className="flex items-center">
          Suggest an Addition
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
              fill="currentColor"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}
