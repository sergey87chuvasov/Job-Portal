import Job from "../models/Job.js"
import JobApplication from "../models/JobApplication.js"
import User from "../models/User.js"


// get user data
export const getUserData = async (req, res) => {

    const userId = req.auth.userId

    try {

        const user = await User.findById(userId)

        if (!user) {
            return res.json({ success: false, message: 'User not found'})
        }

        res.json({ success: true, user})
    }
    catch(error) {
        res.json({ success: false, message: error.message})
    }
}


// apply for a job
export const applyForJob = async (req, res) => {

    const { jobId } = req.body
    const userId = req.auth.userId

    try {

        const isAlreadyApplied = await JobApplication.find({jobId, userId})

        if (isAlreadyApplied.length > 0) {
            return res.json({success: false, message: 'Already Applied'})
        }

        const jobData = await Job.findById(jobId)

        if(!jobData) {
            return res.json({success: false, message: 'Job Not found'})
        }

        await JobApplication.create({
            companyId: jobData.companyId,
            userId,
            jobId,
            date: Date.now()
        })

        res.json({ success: true, message: 'Applied Successfully'})
    }
    catch(error) {

        res.json({ success: false, message: error.message})
    }
}


// get user applied applictations
export const getUserJobApplications = async (req, res) => {}

// update user profile
export const updateUserResume = async (req, res) => {}