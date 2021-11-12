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
import { HomeLight, RssLight, AtLight, SunLight, MoonLight } from '../icons';

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
      className="flex items-center rounded px-4 py-3 text-sm text-gray-500 cursor-pointer transition-all dark:text-gray-500"
      {...handlers}
    >
      {action.icon}
      <span className="ml-4">{action.name}</span>
      {action.shortcut?.length > 0 && (
        <span className="ml-auto space-x-2">
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
  const router = useRouter();
  const { setTheme } = useTheme();
  return (
    <KBarProvider
      actions={[
        {
          id: 'home',
          name: 'Anasayfa',
          shortcut: [],
          keywords: '',
          perform: () => router.push('/'),
          icon: <HomeLight width="22" height="22" />
        },
        {
          id: 'email',
          name: 'E-posta Gönder',
          shortcut: [],
          keywords: 'eposta merhaba',
          section: 'Eposta Gönder',
          perform: () => window.open('mailto:gurbrk@gmail.com', '_blank'),
          icon: <AtLight width="20" height="20" />
        },
        {
          id: 'rss',
          name: 'RSS',
          shortcut: [],
          keywords: '',
          perform: () => router.push('/rss.xml'),
          icon: <RssLight width="20" height="20" />
        },
        {
          id: 'theme',
          name: 'Tema Değiştir',
          shortcut: [],
          keywords: 'theme',
          children: ['theme-light', 'theme-dark'],
          icon: <SunLight width="20" height="20" />
        },
        {
          id: 'theme-light',
          name: 'Açık',
          shortcut: [],
          keywords: 'theme',
          perform: () => setTheme('light'),
          parent: 'theme',
          icon: <SunLight width="20" height="20" />
        },
        {
          id: 'theme-dark',
          name: 'Koyu',
          shortcut: [],
          keywords: 'theme',
          perform: () => setTheme('dark'),
          parent: 'theme',
          icon: <MoonLight width="20" height="20" />
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
        <KBarPositioner className="bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40">
          <KBarAnimator className="container w-full">
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-900 pb-2 border-2 border-solid border-gray-100">
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
              <div className="text-sm font-medium text-gray-600 px-4 py-2">
                Menü
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
