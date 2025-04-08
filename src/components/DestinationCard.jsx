function DestinationCard({ destination }) {
    const { name, location, image, description, price } = destination;
  
    return (
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        width: '250px',
        padding: '16px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
        backgroundColor: '#fdfdfd'
      }}>
        <img src={image} alt={name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
        <h2>{name}</h2>
        <h4>{location}</h4>
        <p>{description}</p>
        <strong>{price}</strong>
      </div>
    );
  }
  
  export default DestinationCard;
  