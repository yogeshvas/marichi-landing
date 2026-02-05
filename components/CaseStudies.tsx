import React from 'react';

const caseStudies = [
  {
    category: 'Digital Transformation',
    title: 'Transforming Varun Beverages',
    description: 'How Marichi Solutions streamlined operations and boosted efficiency for Varun Beverages through cutting-edge digital integration.',
    image: '/images/varun-beverages.jpeg'
  },
  {
    category: 'Scaling',
    title: 'Scaling X Business Global Operations',
    description: 'Partnering with X Business to scale their delivery network across 3 continents using our AI-driven fleet management.',
    image: '/images/scaling-business.png'
  },
  {
    category: 'Innovation',
    title: 'Revolutionizing Retail for Metro Corp',
    description: 'Implementing smart tracking systems for Metro Corp to reduce inventory shrinkage and improve customer experience.',
    image: '/images/metro-corp.png'
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 lg:py-40 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Case Studies</h2>
          <button className="hidden lg:block px-6 py-2 bg-neutral-100 rounded-full text-sm font-semibold hover:bg-neutral-200 transition">View More</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <article key={study.title} className="group cursor-pointer">
              <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden mb-6 relative">
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-white rounded-full text-[10px] font-bold uppercase shadow-sm">
                  {study.category}
                </div>
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:underline">{study.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                {study.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
