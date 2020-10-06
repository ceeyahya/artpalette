import useSWR from 'swr';

async function getPaintings() {
  const res = await fetch('/api/paintings');
  const data = await res.json();
  console.log(data);
  return data;
}

export default function gallery() {
  const { data, error } = useSWR('/api/paintings', getPaintings);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="grid gap-4 mx-auto mt-4 lg:max-w-none">
      {data.paintings.map((painting) => (
        <div className="flex flex-col mt-2 transition duration-150 ease-in-out rounded-sm shadow cursor-pointer lg:flex-row bg-ygreen-dark">
          <div className="flex-shrink-1">
            <img
              src={painting.paintingURL}
              className="object-center p-2"
              width="500"
              height="500"
            />
          </div>
          <div className="relative">
            <h1 className="p-2 mt-0 text-4xl font-bold text-beige-base">
              {painting.title}
            </h1>
            <p className="max-w-md pl-2 text-beige-base">{painting.artist}</p>
            <p className="max-w-md pl-2 text-beige-base">
              {painting.creationYear}
            </p>
            <div className="static py-4 pl-2 text-beige-base">COLORS</div>
          </div>
        </div>
      ))}
    </div>
  );
}
