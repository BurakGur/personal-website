export default function About() {
  return (
    <section>
      <p className="text-2xl font-bold">About</p>
      <p className="mt-4 text-gray-600 dark:text-gray-200">
        Merhaba, ben Burak Gür. Yazılım geliştiricisiyim. Bu blogda yazılım ile
        ilgili yazılar paylaşıyorum. sahibinden.com şirketinde Frontend
        Developer olarak çalışıyorum.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-200">
        Boş zamanlarımda da yazılım ile ilgili projeler geliştiriyorum. Bu
        projeleri de bu blogda paylaşacağım.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-200">
        Bu blog Next.js ve Contentlayer ile oluşturulmuştur. Blog içeriği
        Markdown formatında yazılmıştır. Blog içeriğini oluşturmak için
        Contentlayer kullanılmıştır. Contentlayer ile blog içeriğini oluşturmak
        için birçok farklı kaynaktan veri çekilebilir. Bu blog içeriğini Strapi
        ile oluşturulmuş bir API'den çekmektedir.
      </p>
    </section>
  );
}
