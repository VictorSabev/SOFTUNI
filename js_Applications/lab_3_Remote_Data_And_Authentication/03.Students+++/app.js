async function solve() {
  const url = 'http://localhost:3030/jsonstore/collections/students';
  const table = document.querySelector('#results tbody');
  const response = await fetch(url);
  const data = await response.json();

  Object.values(data).forEach((student) => {
    const firstName = student.firstName;
    const lastName = student.lastName;
    const facultyNumber = student.facultyNumber;
    const grade = Number(student.grade);

    const tr = document.createElement('tr');

    // .insertCell() - biultin method
    const firstNameCell = tr.insertCell(0);
    firstNameCell.innerText = firstName;

    const lastNameCell = tr.insertCell(1);
    lastNameCell.innerText = lastName;

    const facultyNumberCell = tr.insertCell(2);
    facultyNumberCell.innerText = facultyNumber;

    const gradeCell = tr.insertCell(3);
    gradeCell.innerText = grade;

    table.appendChild(tr);
  });

  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', onclickSubmit);

  async function onclickSubmit(e) {
    e.preventDefault();

    const firstNameInput = document.getElementsByName('firstName')[0];
    const lastNameInput = document.getElementsByName('lastName')[0];
    const facultyNumberInput = document.getElementsByName('facultyNumber')[0];
    const gradeInput = document.getElementsByName('grade')[0];

    // Check if there are empty input fileds
    if (
      firstNameInput.value === '' ||
      !lastNameInput.value ||
      !facultyNumberInput.value ||
      !gradeInput.value
    ) {
      return alert('Fileds must not be empty!');
    }

    // Alternativly a REQUIRED attribut can be added to the input fileds HTML elements:

    // const inputsArray = Array.from(document.querySelectorAll('.inputes input'));
    // inputsArray.map((input) => {
    //   input.setAttribute('required', '');
    // });

    // IN THIS SCENARIO THE PREVENTDEFAULT METHOID MUST BE REMOVED FROM THE SUBMIT BUTTON!

    // Check if faculty number and grade are NaN
    if (isNaN(facultyNumberInput.value) || isNaN(gradeInput.value)) {
      return alert('Wrong input data!');
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        facultyNumber: Number(facultyNumberInput.value),
        grade: gradeInput.value,
      }),
    });

    const tr = document.createElement('tr');

    const firstNameCell = tr.insertCell(0);
    firstNameCell.innerText = firstNameInput.value;

    const lastNameCell = tr.insertCell(1);
    lastNameCell.innerText = lastNameInput.value;

    const facultyNumberCell = tr.insertCell(2);
    facultyNumberCell.innerText = facultyNumberInput.value;

    const gradeCell = tr.insertCell(3);
    gradeCell.innerText = gradeInput.value;

    table.appendChild(tr);

    // clearing the the input fileds after clicking submit button
    if (
      firstNameInput.value &&
      lastNameInput.value &&
      facultyNumberInput.value &&
      gradeInput.value
    ) {
      firstNameInput.value = '';
      lastNameInput.value = '';
      facultyNumberInput.value = '';
      gradeInput.value.value = '';
    }
  }
}

solve();
