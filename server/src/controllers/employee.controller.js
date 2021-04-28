const employeeCtrl = {}


const employeeModel = require('../models/empoyeer.model')


employeeCtrl.getEmployees = async (req, res) => {
    const employees = await employeeModel.find()
    res.json(employees)
   
}

employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee =  new employeeModel(req.body);
    await newEmployee.save();
}

employeeCtrl.getEmployee = async (req, res) => {
     const employee = await  employeeModel.findById(req.params.id);
     res.send(employee);
}

employeeCtrl.editEmployee = async (req, res) => {
    await employeeModel.findByIdAndUpdate(req.params.id, req.body)
}

employeeCtrl.deleteEmployee = async (req, res) => {
    await employeeModel.findByIdAndDelete(req.params.id)
}
 
module.exports = employeeCtrl;