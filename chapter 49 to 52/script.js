// ==========================================
// 1. Signup Form aur Data Display Logic
// ==========================================
const signupForm = document.getElementById('signupForm');
const displayArea = document.getElementById('displayArea');

if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Page reload hone se rokta hai
        
        // Input values nikalna
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        
        // Screen par display karna
        displayArea.innerHTML = `
            <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;">
                <h3>User Registered!</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
            </div>
        `;
        
        signupForm.reset(); // Form khali karne ke liye
    });
}

// ==========================================
// 2. "Read More" Toggle Logic
// ==========================================
function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("moreText");
    const btnText = document.getElementById("readMoreBtn");

    // Agar text hidden hai to show karo, warna hide karo
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

// ==========================================
// 3. Student Table (Add, Edit, Delete) Logic
// ==========================================
let currentRow = null; // Edit karte waqt row ko track karne ke liye

// Naya Student add karne ka function
function addStudent() {
    const nameInput = document.getElementById('stdName');
    const ageInput = document.getElementById('stdAge');
    const tableBody = document.querySelector('#studentTable tbody');

    if (!nameInput.value || !ageInput.value) {
        alert("Please enter both Name and Age");
        return;
    }

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${nameInput.value}</td>
        <td>${ageInput.value}</td>
        <td>
            <button onclick="editRow(this)">Edit</button>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);

    // Inputs clear karna
    nameInput.value = '';
    ageInput.value = '';
}

// Row delete karne ka function
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

// Edit mode on karne ka function
function editRow(button) {
    currentRow = button.parentElement.parentElement;
    const editForm = document.getElementById('editFormContainer');
    
    // Purani values ko edit form ke inputs mein dalna
    document.getElementById('editName').value = currentRow.cells[0].innerText;
    document.getElementById('editAge').value = currentRow.cells[1].innerText;
    
    // Edit form dikhana
    editForm.style.display = 'block';
}

// Edit ki hui values save karne ka function
function saveEdit() {
    if (currentRow) {
        currentRow.cells[0].innerText = document.getElementById('editName').value;
        currentRow.cells[1].innerText = document.getElementById('editAge').value;
        hideEditForm();
    }
}

// Edit form wapis hide karne ka function
function hideEditForm() {
    document.getElementById('editFormContainer').style.display = 'none';
    currentRow = null;
}