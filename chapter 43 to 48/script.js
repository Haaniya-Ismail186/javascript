// Task 1: Link par click karne ka alert
document.getElementById("myLink").onclick = function() {
    alert("Aapne link par click kiya!");
};

// Task 2: Mobile images par click karne ka alert
function showMobile(modelName) {
    alert("Thanks for purchasing " + modelName + " from us!");
}

// Function jo row ko delete karega
function deleteRow(button) {
    // 1. 'button' par click hua
    // 2. 'parentNode' (<td>) tak pohanche
    // 3. Doosra 'parentNode' (<tr>) yaani puri row hai
    var row = button.parentNode.parentNode;
    
    // 4. Row ko table se remove kar dena
    row.parentNode.removeChild(row);
}

/**
 * Function: deleteRow
 * Maqsad: Table ki specific row ko delete karna
 * Parameter: 'btn' (wo button jis par click hua)
 */
function deleteRow(btn) {
    // 1. 'btn.parentNode' se hum TD (cell) tak pohanchte hain
    // 2. Doosre '.parentNode' se hum TR (puri row) tak pohanchte hain
    var row = btn.parentNode.parentNode;

    // 3. Row ko table se permanent delete karna
    row.parentNode.removeChild(row);
    
    // Optional: Agar aap console mein check karna chahein
    console.log("Row deleted successfully!");
}