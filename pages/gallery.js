import useSWR from 'swr';
import GalleryItem from '@/components/GalleryItem';
import { LoadingState, ErrorState } from '@/components/LoadingState';
import ReactFullpage from '@fullpage/react-fullpage';

async function getPaintings() {
  const res = await fetch('/api/paintings');
  const data = await res.json();
  return data;
}

export default function gallery() {
  const { data, error } = useSWR('/api/paintings', getPaintings);
  if (error)
    return (
      <div>
        <ErrorState />
      </div>
    );
  if (!data)
    return (
      <div>
        <LoadingState />
      </div>
    );

  return (
    <ReactFullpage
      licenseKey={process.env.FULLPAGE_LICENSE_KEY}
      scrollingSpeed={2000}
      render={(comp) =>
        console.log('render prop change') || (
          <ReactFullpage.Wrapper>
            {data.paintings.map((painting) => (
              <GalleryItem
                title={painting.title}
                artist={painting.artist}
                creationYear={painting.creationYear}
                paintingURL={painting.paintingURL}
              />
            ))}
          </ReactFullpage.Wrapper>
        )
      }
    />
  );
}
