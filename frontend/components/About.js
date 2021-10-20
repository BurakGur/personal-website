function About() {
  return (
    <div className="flex items-center bg-gray-100 rounded-xl p-6">
      <img
        className="rounded-full mx-auto"
        src="/burak-gur.jpeg"
        alt=""
        width="96"
        height="96"
      />
      <div className="px-4">
        <p className="text-gray-600 leading-6">
          Merhaba, ben Burak. Şu anda Sigortam.net şirketinde Frontend Developer
          olarak çalışıyorum. Çalışırken dinlediğim müzikleri{' '}
          <a
            className="text-indigo-500 font-medium underline"
            href="https://open.spotify.com/playlist/706ygDjsS24R4wZj9rLe4o?si=aoVh6ooiTO6WBAfmLz2D8A"
          >
            Spotify
          </a>{' '}
          listemden görebilirsiniz. Ayrıca bu web sitesi de dahil tüm açık
          kaynak projelerimi{' '}
          <a
            className="text-indigo-500 font-medium underline"
            href="https://github.com/burakgur"
          >
            GitHub
          </a>{' '}
          üzerinden paylaşıyorum.
        </p>
      </div>
    </div>
  );
}

export default About;
