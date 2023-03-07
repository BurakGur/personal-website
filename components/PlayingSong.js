'use client';

import useSWR from 'swr';
import { Spotify } from '../icons';
import fetchApi from '../lib/api';

export default function PlayingSong() {
  const { data } = useSWR('/api/spotify', fetchApi);
  return (
    <div className="flex flex-row-reverse items-center sm:flex-row mt-10 space-x-0 sm:space-x-2 w-full">
      {data && (
        <>
          <Spotify width="24" height="24" />
          <div className="inline-flex flex-col sm:flex-row w-full max-w-full truncate">
            {data.isPlaying ? (
              <>
                <a
                  className="capsize text-gray-600 dark:text-gray-200 max-w-max truncate"
                  href={data.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.title}
                </a>
                <span className="mx-2 text-gray-400 dark:text-gray-200 hidden sm:block">
                  {' – '}
                </span>
                <p className="text-gray-400 dark:text-gray-200 max-w-max truncate">
                  {data?.artist || 'Spotify'}
                </p>
              </>
            ) : (
              <p className="text-gray-600 dark:text-gray-200">
                Şu anda şarkı dinlemiyorum.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
