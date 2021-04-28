const { Router } = require('express');
const employeesCtrl = require('../controllers/employee.controller')



const router = Router();

//Routes goes here

//Manage employeers routes
router.get('/',employeesCtrl.getEmployees);
router.post('/',employeesCtrl.createEmployee);
router.get('/:id',employeesCtrl.getEmployee);
router.put('/:id',employeesCtrl.editEmployee);
router.delete('/:id',employeesCtrl.deleteEmployee);





module.exports = router

  

