import Card from './Card'; 

function List() {
  const students = [
    { id: 1, name: "Theo James", email: "theo@james.com"},
    { id: 2, name: "Paul Walker", email: "paul@walker.com"},
    { id: 3, name: "Jeneva Besin", email: "jen@besin.com"},
    { id: 4, name: "Barney", email: "barney@gmail.com"},
    { id: 5, name: "Shrek", email: "shrek@gmail.com"}
  ];

  return (
   <div className='list'>
     {students.slice(0, 4).map(student => (
        <Card key={student.id} student={student} />
      ))}

      <div className='lastcard'>
      {students.filter(student => student.id === 5).map(student => (
          <Card key={student.id} student={student} />
          ))}
      </div>
   </div>  
   
  );
}
export default List;
