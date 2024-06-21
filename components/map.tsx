const MapComponent = () => {
    return (
      <div className="flex justify-center  grow-1 flex-wrap">
        <iframe
          className="rounded-2xl flex"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.769029390597!2d-100.20234172460341!3d25.645790177424903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c1a1e0af8291%3A0xaed1b04fca0b4088!2sMacanazos!5e0!3m2!1sen!2sca!4v1718906921359!5m2!1sen!2sca"
          width="350"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default MapComponent;