import React from 'react';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-10 py-10 bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">About Kalavedika</h1>
      
      <p className="max-w-3xl text-lg text-center mb-10">
        Kalavedika is a vibrant platform dedicated to promoting cultural events,
        artistic talents, and community engagements. We aim to bring together
        individuals passionate about music, dance, literature, and art, fostering
        a creative and inclusive environment.
      </p>

      {/* New Culture Section */}
      <section className="max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Celebrating Culture</h2>
        <p className="text-lg mb-6">
          Culture is the soul of a community, reflected through traditions, languages,
          arts, festivals, and everyday practices. At Kalavedika, we cherish and showcase
          these beautiful elements to keep our rich heritage alive and inspire future generations.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Our Cultural Activities</h2>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl text-lg mb-6">
          <li>Traditional and folk dance performances</li>
          <li>Music concerts blending classical and contemporary styles</li>
          <li>Art exhibitions featuring local and national artists</li>
          <li>Workshops on storytelling, handicrafts, and theatre</li>
          <li>Celebrations of regional festivals and rituals</li>
        </ul>

        <p className="text-lg">
          Through our events and initiatives, we aim to create a platform where creativity,
          tradition, and innovation meet — celebrating the diversity and richness of our culture.
        </p>
      </section>
    </main>
  );
}
