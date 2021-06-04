
const multer = require('multer')
const storage = muler.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './storage/imgs')
    },
    filename: function (req, __file, cb) {

        cb(null, `${file.fieldname}  -${Date.now()}`)
    }
})

const upload = multer({ storage: storage })

module.exports = upload