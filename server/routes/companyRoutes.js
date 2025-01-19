import express from 'express'
import { changeJobApplicationsStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, 
    getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middlewares/authMiddleware.js'


const router = express.Router()


// register company
router.post('/register', upload.single('image'), registerCompany)

// company login
router.post('/login', loginCompany)

// get company data
router.get('/company', protectCompany, getCompanyData)

// post a job
router.post('/post-job', protectCompany, postJob)

// get applicants data of company
router.get('/applicants', protectCompany, getCompanyJobApplicants)

// get company job list
router.get('/list-jobs', protectCompany, getCompanyPostedJobs)

// change applications status
router.post('/change-status', protectCompany, changeJobApplicationsStatus)

// change applications visibly
router.post('/change-visiblity', protectCompany, changeVisiblity)

export default router