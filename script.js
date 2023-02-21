let companies = [
    {
        name: 'sheroz_io',
        budget: 75000,
        tax: 12,
        expensesPerYear: [5000,3000,25000]
    },
    {
        name: 'shavkat_mnogogovority',
        budget: 125000,
        tax: 14,
        expensesPerYear: [10000,4500,60000]
    },
    {
        name: 'kamoliddin_posuda',
        budget: 150000,
        tax: 12,
        expensesPerYear: [70000,2000,15000]
    },
    {
        name: 'azamat_niche',
        budget: 90000,
        tax: 7,
        expensesPerYear: [21000,1000,6000]
    },
    {
        name: 'muhammad',
        budget: 80000,
        tax: 14,
        expensesPerYear: [10000,500,1680]
    },
    {
        name: 'firuz_nosbiznes',
        budget: 195000,
        tax: 21,
        expensesPerYear: [7000,15000,5000]
    },
    {
        name: 'azim_trans_mchj',
        budget: 200000,
        tax: 12,
        expensesPerYear: [70000,12000,5000]
    },
    {
        name: 'malika_beaty_salon',
        budget: 150000,
        tax: 12,
        expensesPerYear: [40000,5000,7000]
    },
]



// найти расходы за месяц (включая налог)
// найти расходы за месяц
// найти бьюджет за месяц
// найти соотношение бьюджета и расходов показать

companies.forEach(company => {
    let expensesPer = (company.expensesPerYear.reduce((a, b) => a + b, 0) * (1 + company.tax / 100)) / 12;
    console.log(`${company.name}: ${expensesPer.toFixed()} (с налогом)`);
});

companies.forEach(company =>{
    let expensesMonth = (company.expensesPerYear.reduce((a,b) => a + b, 0) /12);
    console.log(`${company.name} : ${expensesMonth.toFixed()} (без налога)`);
})

companies.forEach(company => {
    let budget = company.budget /12
    console.log(`${company.name} : ${budget.toFixed()} ('бьюджет за месяц/)`);
}) 

companies.forEach(company => {
    let budgetexpens = (company.expensesPerYear.reduce((a,b) => a + b, 0)) /12
    company.expensesPerYear / company.budget
    console.log(`${company.name} : ${budgetexpens.toFixed()} (соотношение бьюджета и расходов)`);
})