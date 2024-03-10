import theoImage from './assets/theo.jpg';
import paulImage from './assets/paul.png';
import picImage from './assets/pic.png';
import shrekImage from './assets/shrek.png';
import barneyImage from './assets/barney.png';

function Card({ student }) {

    const images = {
        1: theoImage,
        2: paulImage,
        3: picImage,
        4: barneyImage,
        5: shrekImage
      };
      // Check if the image exists for the student's ID
  const studentImage = images[student.id] || null;

  return (
    <div className="card">
 {studentImage && <img className="card-image" src={studentImage} alt="profilePicture" />}
      <h2>{student.name}</h2>
      <p>{student.email}</p>
    </div>
  );
}

export default Card;
