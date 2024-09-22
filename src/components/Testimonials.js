import "./Testimonials.css";

const Card = () => {
  return (
    <article className="card">
      <div className="card-content">Card Content</div>
    </article>
  );
};

const CardGrid = () => {
  const cardData = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <section className="card-grid">
      {cardData.map((card) => (
        <Card key={card.id} />
      ))}
    </section>
  );
};

const Testimonials = () => {
  return (
    <div className="div">
      <div className="testimonial-title">Testimonials</div>
      <div className="testimonial-subtitle">Hear from our trusted clients!</div>
      <CardGrid />
    </div>
  );
};

export default Testimonials;
