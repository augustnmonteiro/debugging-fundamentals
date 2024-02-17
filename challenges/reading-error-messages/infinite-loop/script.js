function calculateAverage() {
    const notesStr = document.getElementById("notes").value;
    
    if (!notesStr) {
      alert("Warning: Enter the notes!");
      return;
    }
    
    const notes = notesStr.split(",").map(Number);
    
    if (notes.some(isNaN)) {
      alert("Error: Notes should be numbers!");
      return;
    }
    
    let sum = 0;
    for (const note of notes) {
        while(true) {
            sum += note;
        }
    }
    
    const average = sum / notes.length;
    
    document.getElementById("result").innerHTML = `Average: ${average}`;
}

document.querySelector('#calculateAverage').addEventListener('click', calculateAverage)