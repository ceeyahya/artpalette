export function LoadingState() {
  return (
    <div>
      <div className="flex justify-center mt-32 lg:mt-64">
        <img
          src="/ColorCompendiumLogo.svg"
          alt="Color Compendium Logo"
          className="w-64 h-64 animate-bounce"
        />
      </div>
      <h1 className="mt-4 font-serif text-4xl font-bold text-center text-ygreen-dark">
        Loading Data ...
      </h1>
    </div>
  );
}

export function ErrorState() {
  return (
    <div className="flex justify-center mt-32 lg:mt-64">
      <h1 className="mt-4 font-serif text-4xl font-bold text-center text-ygreen-dark">
        Failed to load data please try again later.
      </h1>
    </div>
  );
}
