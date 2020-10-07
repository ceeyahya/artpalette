import GalleryLinks from '@/components/GalleryLinks';
import { usePalette } from 'react-palette';

export default function GalleryItem({
  title,
  artist,
  creationYear,
  paintingURL,
}) {
  const { data, loading, error } = usePalette(paintingURL);

  return (
    <main class="lg:relative h-screen section">
      <div class="mx-auto max-w-none w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <GalleryLinks />
          <h2 class="max-w-7xl mx-auto text-4xl mt-24 tracking-tight leading-10 font-extrabold text-ygreen-dark font-serif sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
            {title}
          </h2>
          <p class=" text-beige-darkest mx-auto text-lg max-w-7xl md:mt-5">
            {artist} ({creationYear})
          </p>
          <div className="mt-8 md:mt-24 lg:mt-64">
            <h1 className="font-serif text-xl font-bold lg:text-2xl text-ygreen-dark">
              Color Palette
            </h1>
            <ul class="mt-4 grid grid-cols-6 h-12">
              <li
                class="col-span-1 flex rounded-l-sm"
                style={{ backgroundColor: data.vibrant }}
              >
                <span className="sr-only">vibrant color</span>
              </li>
              <li
                class="col-span-1 flex"
                style={{ backgroundColor: data.darkVibrant }}
              >
                <span className="sr-only">dark vibrant color</span>
              </li>
              <li
                class="col-span-1 flex"
                style={{ backgroundColor: data.lightVibrant }}
              >
                <span className="sr-only">light vibrant color</span>
              </li>
              <li
                class="col-span-1 flex"
                style={{ backgroundColor: data.muted }}
              >
                <span className="sr-only">muted color</span>
              </li>
              <li
                class="col-span-1 flex"
                style={{ backgroundColor: data.darkMuted }}
              >
                <span className="sr-only">dark muted color</span>
              </li>

              <li
                class="col-span-1 flex rounded-r-sm"
                style={{ backgroundColor: data.lightMuted }}
              >
                <span className="sr-only">light muted color</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          class="absolute inset-0 w-full h-full object-cover pb-8 lg:pb-0"
          src={paintingURL}
          alt={title}
        />
      </div>
    </main>
  );
}
