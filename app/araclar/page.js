export const metadata = {
  title: 'araçlar'
};

export default function Tools() {
  return (
    <section>
      <h1 className="mb-4 font-serif text-3xl font-medium text-gray-900 dark:text-gray-0">
        Araçlar
      </h1>
      <div className="prose text-gray-600 dark:text-gray-200">
        <h4 className="font-medium">Bilgisayar / Ofis</h4>
        <ul className="list-inside list-disc leading-7">
          <li>13&quot; MacBook Pro - M2 Pro</li>
          <li>27&quot; LG 4K Monitor - 27UN880P</li>
          <li>Apple Magic Mouse 2</li>
          <li>Apple Magic Keyboard</li>
          <li>Apple AirPods Max</li>
        </ul>
        <h4 className="font-medium">Yazılım</h4>
        <ul className="list-inside list-disc leading-7">
          <li>Editor: WebStorm</li>
          <li>Theme: GitHub Dark</li>
          <li>Terminal: iTerm2</li>
          <li>Font: Monaspace Neon</li>
        </ul>
        <h4 className="font-medium">Uygulamalar</h4>
        <ul className="list-inside list-disc leading-7">
          <li>Spotify</li>
          <li>Fig</li>
          <li>Notion</li>
          <li>Raycast</li>
          <li>Obsidian</li>
          <li>Postman</li>
          <li>Discord</li>
          <li>RunJS</li>
        </ul>
        <h4 className="font-medium">Diğer</h4>
        <ul className="list-inside list-disc leading-7">
          <li>Apple Airpods Pro</li>
          <li>Apple Watch</li>
          <li>Apple iPhone</li>
          <li>Kindle</li>
          <li>Xbox Series S</li>
          <li>HomePod Mini</li>
        </ul>
      </div>
    </section>
  );
}
