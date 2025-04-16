import * as React from 'react'

export const HeroImage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img
        src="/images/hero.svg"
        alt="Hero"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '12px',
        }}
      />
    </div>
  );
};