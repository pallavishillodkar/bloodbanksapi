const express = require("express");
const router = express.Router();

const BagsController = require("../Controllers/BagsController");
router.post("/addbag", BagsController.addbag);
router.get("/allbags", BagsController.allbags);
router.delete("/deletebags", BagsController.deleteBags);
router.put("/updateBags", BagsController.updateBags);

const DoctorsController = require("../Controllers/DoctorsController");
router.post("/adddoctor", DoctorsController.addDoctor);
router.get("/alldoctors", DoctorsController.allDoctors);
router.delete("/deletedoctors", DoctorsController.deletedoctors);
router.put("/updatedoctors", DoctorsController.updatedoctors);

const DonorsController = require("../Controllers/DonorsController");
router.post("/adddonor", DonorsController.adddonor);
router.get("/alldonors", DonorsController.alldonors);
router.delete("/deletedonors", DonorsController.deletedonors);
router.put("/updatedonors", DonorsController.updatedonors);

const PatientController = require("../Controllers/PatientController");
router.post("/addpatient", PatientController.addPatient);
router.get("/allpatients", PatientController.allPatients);
router.delete("/deletepatients", PatientController.deletePatient);
router.put("/updatepatient", PatientController.updatePatient);

const UserController = require("../Controllers/UserController");
router.post("/adduser", UserController.addUser);
router.get("/allusers", UserController.allUsers);
router.delete("/deleteusers", UserController.deleteUser);
router.put("/updateuser", UserController.updateUser);
router.post("/dologin", UserController.doLogin);

const RequestController = require("../Controllers/RequestController");
router.post("/addrequest", RequestController.addrequest);
router.get("/allrequest", RequestController.allrequests);
router.delete("/deleterequest", RequestController.deleterequests);
router.post("/updatestatus", RequestController.updatestatus);

const ContactController = require("../Controllers/ContactController");
router.post("/addcontact", ContactController.addContact);
router.get("/allcontacts", ContactController.allContacts);
router.delete("/deletecontact", ContactController.deleteContact);

module.exports = router;
