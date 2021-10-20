function About() {
  return (
    <div className="flex items-center bg-gray-100 rounded-xl p-6">
      <img
        className="rounded-full mx-auto"
        src="/burak-gur.jpeg"
        alt="Burak Gür"
        width="112"
        height="112"
      />
      <div className="px-4 text-gray-600 leading-6">
        <p className="font-bold">Merhaba, ben Burak.</p>
        <p>
          Frontend Developer olarak çalışıyorum. JavaScript, motivasyon ve
          kişisel gelişim ile ilgili blog yazılarımı buradan okuyabilirsiniz.
          Ayrıca bu web sitesi de dahil tüm açık kaynak projelerimi GitHub
          üzerinden paylaşıyorum.
        </p>
      </div>
    </div>
  );
}

export default About;
