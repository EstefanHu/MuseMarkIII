import React from 'react';

const Navigation = props => {
  return (
    <section className="left">
      {props.sectors.map(sector => (
        <span>{sector}</span>
      ))}
    </section>
  );
}

export default Navigation;