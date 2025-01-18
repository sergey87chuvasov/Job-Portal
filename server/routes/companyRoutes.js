import express from 'express'
import { changeJobApplicationsStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, 
    getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'


const router = express.Router()


// register company
router.post('/register', upload.single('image'), registerCompany)

// company login
router.post('/login', loginCompany)

// get company data
router.get('/company', getCompanyData)

// post a job
router.post('/post-job', postJob)

// get applicants data of company
router.get('/applicants', getCompanyJobApplicants)

// get company job list
router.get('/list-jobs', getCompanyPostedJobs)

// change applications status
router.post('/change-status', changeJobApplicationsStatus)

// change applications visibly
router.post('/change-visiblity', changeVisiblity)

export default router