const PARTNERS = [
  { src: "/logos/auto1-logo.png", alt: "Auto1" },
  { src: "/logos/bca-logo.webp", alt: "BCA" },
  { src: "/logos/OPENLANE-Logo.webp", alt: "OpenLane" },
  { src: "/logos/ecarstrade-logo.webp", alt: "eCarsTrade" },
  { src: "/logos/carsonsale-logo.png", alt: "CarsOnSale" },
];

export default function MediaStrip() {
  return (
    <div className="media-strip">
      <div className="media-inner">
        <div className="media-label">
          <strong>Piețe verificate.</strong> Sursele noastre de mașini din toată
          Europa.
        </div>
        <div className="media-logos">
          {PARTNERS.map((p) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              className="partner-logo"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
