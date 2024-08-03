let expenses = [], totalAmount = 0;

const categorySelect = document.getElementById("category-select"),
    amountInput = document.getElementById("amout-input"),
    dateInput = document.getElementById("date-input"),
    addBtn = document.getElementById("add-btn"),
    expensesTableBody = document.getElementById("expenses-table-body"),
    totalAmountCell = document.getElementById("total-amount");



addBtn.addEventListener("click", () => {
    const category = categorySelect.value,
        amount = Number(amountInput.value),
        date = dateInput.value;
    if (category === "") {
        alert("Please selecy category")

    }
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount")
    }
    if (date === "") {
        alert("Please select a date")
    }
    expenses.push({ category, amount, date });
    totalAmount += amount

    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell(),
        amountCell = newRow.insertCell(),
        dateCell = newRow.insertCell(),
        deleteCell = newRow.insertCell(),
        deleteBtn = document.createElement("button");


    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        expenses.splice(expenses.indexOf(expense), 1)
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;
        expensesTableBody.removeChild(newRow);
    })
    const expense = expenses[expenses.length - 1]
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn)
})

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow()
    const categorySelect = document.getElementById("category-select"),
        amountInput = document.getElementById("amout-input"),
        dateInput = document.getElementById("date-input"),
        addBtn = document.getElementById("add-btn"),
        expensesTableBody = document.getElementById("expenses-table-body"),
        totalAmountCell = document.getElementById("total-amount");
        
        
        deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        expenses.splice(expenses.indexOf(expense), 1);
        
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn)
}