import GalleryLinks from '@/components/GalleryLinks';

export default function GalleryItem({
  title,
  artist,
  creationYear,
  paintingURL,
}) {
  return (
    <main class="lg:relative h-screen">
      <div class="mx-auto max-w-none w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <GalleryLinks />
          <h2 class="max-w-7xl mx-auto text-4xl mt-24 tracking-tight leading-10 font-extrabold text-ygreen-dark font-serif sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
            {title}
          </h2>
          <p class="mt-3 max-w-7xl mx-auto text-lg text-beige-darkest sm:text-xl md:mt-5">
            {artist}
          </p>
          <p class="mt-3 max-w-7xl mx-auto text-lg text-beige-darkest sm:text-xl md:mt-5">
            {creationYear}
          </p>
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          class="absolute inset-0 w-full h-full object-cover"
          src={paintingURL}
          alt={title}
        />
      </div>
    </main>
  );
}
