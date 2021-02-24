import React from "react";
import "../stylesheets/App.css";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];

    /*//1-PINTAR NOMBRE Y EDAD DE CADA ALUMNA
    const result = students.map((student) => {
      return (
        <li>
          <h2>Nombre: {student.name} </h2>
          <p>Edad: {student.age}</p>
        </li>
      );
    });
    return <ul>{result}</ul>;
  }
}

export default App;*/

    //2- PINTAR FILTRO DE ALUMNAS QUE PERTENEZCAN A PROMO A
    const filteredStudents = students.filter(
      (student) => student.promo === "A"
    );

    const result = filteredStudents.map((student) => {
      return (
        <li>
          <h2>Nombre: {student.name} </h2>
          <p>Edad: {student.age}</p>
        </li>
      );
    });
    return <ul>{result}</ul>;
  }
}

export default App;
