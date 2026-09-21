import express from 'express'
import dotenv from 'dotenv' //external
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import multer from 'multer' //external module
import { randomBytes } from 'node:crypto'//safe for asynchronous usages
dotenv.config({
    override: true,
    silent: true,
    quiet: true
})
const app = express();
//Custom middleware
app.use((req, res, next) => {
    console.log(req.method, " ", req.url)
    next();
})
//Built-in parsing middlewares
// app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        randomBytes(16, (err, raw) => {
            if (err) return cb(err)
            const ext = path.extname(file.originalname)
            cb(null, file.fieldname + '-' + raw.toString('hex')+ext)
        })
    }
})
const upload = multer({ storage })
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//Set template engine
app.set('view engine', 'ejs')
//Serve static Directory
app.use(express.static(path.join(__dirname, 'public')))//theres no prefix to strip 
app.set("views", path.join(__dirname, './views'))//or use .resolve(__dirname,'views')

//Routes
app.get('/', (req, res) => {
    return res.render('index')
})
app.post('/upload', upload.single("profileImage"), (req, res) => {
    console.log(req.body)
    console.log(req.file)

    return res.redirect('/')
})
export default app