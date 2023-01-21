// Write your solution in this file!
const employee = {
    name : "me",
    streetAddress : "Julian St",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    employee = {...employee};
    employee[key] = value;
    return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    employee = {...employee};

    delete employee[key];
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}