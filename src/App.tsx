import { useEffect, useState } from "react";
import "./App.css";
let previousNumber = 0;
function App() {
  const [field, setField] = useState([...Array(25)].fill(null));
  // eslint-disable-next-line
  const [quantityBoxes, setQuantityBoxes] = useState(15);

  useEffect(() => {
    if (field.filter((e) => e !== null).length) {
      return;
    }
    const newField = [...field];
    let count = 1;

    while (count !== quantityBoxes) {
      const randomIndex = Math.floor(Math.random() * 25);
      if (!newField[randomIndex]) {
        newField[randomIndex] = count;
        count++;
        setField([...newField]);
      }
    }
    // eslint-disable-next-line
  }, []);
  function handleClick(i: number, boxNumber: number): void {
    if (previousNumber + 1 === boxNumber) {
      previousNumber = boxNumber;
      const newField = [...field];
      newField[i] = null;
      setField(newField);
    }
  }

  return (
    <div className="Field">
      {field.map((boxNumber, i) => (
        <div
          key={i}
          className={boxNumber ? "box" : "null"}
          onClick={() => handleClick(i, boxNumber)}
        >
          {boxNumber}
        </div>
      ))}
    </div>
  );
}

export default App;
