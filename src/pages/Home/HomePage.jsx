import React from 'react';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
import FeatureContents from '../../data/Features.json';
import stylesFeatures from '../../components/Features/Features.module.css';

export default function HomePage() {
  return (
    <div className="main">
      <Banner />
      <div className={stylesFeatures.features}>
        {FeatureContents.map((content) => (
          <Features
            key={content.id}
            icon={content.icon}
            title={content.title}
            content={content.content}
            alt={content.alt}
          />
        ))}
      </div>
    </div>
  );
}
