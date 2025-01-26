import { IconCircleCheck } from '@tabler/icons-react';
import books from 'readings';

export const metadata = {
  title: 'Reading'
};

export default function Reading() {
  return (
    <section>
      <h1 className="mb-4 font-serif text-3xl font-medium text-gray-900 dark:text-white">
        Currently reading.
      </h1>
      <div className="text-gray-600 dark:text-gray-400">
        <p className="mb-10">
          The biggest change I made while transforming my habits was increasing
          the time I spent reading, which I always felt I couldn’t find time
          for. To do this, I deleted all social media apps from my phone and set
          a goal to read one book each week starting from October 17, 2024. I
          plan to share my progress here week by week.
        </p>
        <ul className="flex flex-col gap-4">
          {books.map((book, index) => (
            <li
              key={`book-${index}`}
              className="rounded border p-4 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-600">
                  WEEK {book.weekTime.join(', ')}
                </div>
                <div>
                  {book.status === 'done' ? (
                    <IconCircleCheck width={16} height={16} />
                  ) : (
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75 dark:text-gray-500"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-gray-500 dark:text-gray-600"></span>
                    </span>
                  )}
                </div>
              </div>
              <div className="my-1 flex items-center gap-2 text-base text-gray-700 dark:text-gray-200">
                <div className="font-semibold">{book.title}</div>
                <div className="h-[1px] w-4 bg-gray-800 dark:bg-gray-200"></div>
                <div className="font-medium">{book.author}</div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-500">
                {book.status === 'done' ? book.notes : "I'm currently reading."}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
