import multer from 'multer'

const storage = multer.diskStorage({})

const upload = multer({storage})
// same opt const upload = multer({storage: storage})


export default upload