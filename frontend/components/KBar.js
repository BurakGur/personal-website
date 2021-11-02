import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch
} from 'kbar';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

function Kbd({ className, children }) {
  return (
    <kbd className="px-1 py-0.5 inline-flex items-center justify-center select-none text-xs font-medium rounded text-gray-500 bg-gray-200 dark:text-gray-400 dark:bg-gray-700">
      {children}
    </kbd>
  );
}

function KbarItem({ action, handlers, state }) {
  const active = state.index === state.activeIndex;

  return (
    <div
      className="flex items-center rounded p-3 text-gray-600 cursor-pointer transition-all dark:text-gray-500"
      {...handlers}
    >
      {action.icon}
      <span className="ml-3">{action.name}</span>
      {action.shortcut?.length > 0 && (
        <span className="ml-auto space-x-1">
          {action.shortcut.map(sc => (
            <Kbd key={sc}>{sc}</Kbd>
          ))}
        </span>
      )}
      {active && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-auto opacity-30"
        >
          <polyline points="9 10 4 15 9 20" />
          <path d="M20 4v7a4 4 0 0 1-4 4H4" />
        </svg>
      )}
    </div>
  );
}

function KBar({ children }) {
  const history = useRouter();
  const { setTheme } = useTheme();

  return (
    <KBarProvider
      actions={[
        {
          id: 'home',
          name: 'Anasayfa',
          shortcut: [],
          keywords: '',
          perform: () => history.push('/'),
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          )
        },
        {
          id: 'rss',
          name: 'RSS',
          shortcut: [],
          keywords: '',
          perform: () => history.push('/'),
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          )
        },
        {
          id: 'email',
          name: 'Email',
          shortcut: [],
          keywords: 'eposta merhaba',
          section: 'Eposta Gönder',
          perform: () => window.open('mailto:gurbrk@gmail.com', '_blank')
        },
        {
          id: 'theme',
          name: 'Tema',
          shortcut: [],
          keywords: 'theme',
          // perform: () => setTheme('light'),
          children: ['theme-light', 'theme-dark'],
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )
        },
        {
          id: 'theme-light',
          name: 'Açık',
          shortcut: [],
          keywords: 'theme',
          perform: () => setTheme('light'),
          parent: 'theme'
        },
        {
          id: 'theme-dark',
          name: 'Koyu',
          shortcut: [],
          keywords: 'theme',
          perform: () => setTheme('dark'),
          parent: 'theme'
        }
      ]}
      options={{
        animations: {
          enterMs: 200,
          exitMs: 100
        }
      }}
    >
      <KBarPortal>
        <KBarPositioner className="bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70">
          <KBarAnimator className="container w-full">
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-900">
              <KBarSearch
                placeholder="Ne yapmak istiyorsun?"
                className="appearance-none rounded w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="flex mb-2 border-0 border-t px-4 py-2 border-solid border-gray-200">
                <div className="flex space-x-1 items-center">
                  <span className="text-gray-700 bg-gray-100 text-xs py-0.5 px-1.5 rounded">
                    <kbd className="font-medium">CMD + K</kbd>
                  </span>
                  <span className="text-xs text-gray-500">
                    ile menüyü açabilir,{' '}
                  </span>
                </div>
                <div className="flex space-x-2 items-center ml-2">
                  <span className="text-gray-700 bg-gray-100 text-sm py-0.5 px-1.5 rounded">
                    <kbd className="font-bold">&#8593; &#8595; </kbd>
                  </span>
                  <span className="text-xs text-gray-500">
                    ile menüde dolaşabilir ve
                  </span>
                </div>
                <div className="flex space-x-2 items-center ml-2">
                  <span className="text-gray-700 bg-gray-100 text-xs py-0.5 px-1.5 rounded">
                    <kbd className="font-sans">&#9166;</kbd>
                  </span>
                  <span className="text-xs text-gray-500">
                    ile aksiyon alabilirsin
                  </span>
                </div>
              </div>
              <KBarResults
                onRender={(action, handlers, state) => (
                  <KbarItem action={action} handlers={handlers} state={state} />
                )}
              />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

export default KBar;
