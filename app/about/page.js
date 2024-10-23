export const metadata = {
  title: 'about'
};

export default function About() {
  return (
    <section>
      <h1 className="dark:text-gray-0 mb-4 font-serif text-3xl font-medium text-gray-900">
        About me.
      </h1>
      <div className="prose text-gray-600 dark:text-gray-200">
        <p>
          I'm Burak Gür, a software developer living in Turkey. Currently, I
          work as a Sr. Frontend Engineer at Hepsiburada. I primarily work with
          JavaScript and its ecosystem, and I enjoy exploring new technologies.
        </p>
        <p>
          In my spare time, I take pleasure in contributing to open-source
          software projects. These projects provide me with the opportunity to
          interact with the community and gain new perspectives by connecting
          with people from different disciplines.
        </p>
        <p>
          I also have a keen interest in design and branding. I enjoy exploring
          modern designs and discovering innovative and intriguing concepts for
          web and mobile development. Understanding brand stories and observing
          their creative work fascinates me, which is why I’m also drawn to
          marketing and advertising strategies.
        </p>
        <p>
          Beyond my interests in technology, design, and branding, I love
          traveling, hiking, and reading books. I’m constantly seeking new
          experiences to explore, learn, and further develop myself.
        </p>
      </div>
    </section>
  );
}
