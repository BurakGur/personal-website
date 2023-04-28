'use client';

import useSWR from 'swr';
import { Spotify } from '../icons';
import fetchApi from '../lib/api';

export default function PlayingSong() {
  const { data } = useSWR('/api/spotify', fetchApi);
  return (
    <div className="mt-10 flex w-full flex-row-reverse items-center space-x-0 sm:flex-row sm:space-x-2">
      {data && (
        <>
          <Spotify width="24" height="24" />
          <div className="inline-flex w-full max-w-full flex-col truncate text-gray-400 dark:text-gray-200 sm:flex-row">
            {data.isPlaying ? (
              <>
                <a
                  className="capsize max-w-max truncate"
                  href={data.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.title}
                </a>
                <span className="mx-2 hidden sm:block">{' – '}</span>
                <p className=" max-w-max truncate">
                  {data?.artist || 'Spotify'}
                </p>
              </>
            ) : (
              <p className="text-gray-400 dark:text-gray-200">
                Şu anda şarkı dinlemiyorum.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
