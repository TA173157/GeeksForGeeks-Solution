const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: './uploads/', // Folder to store images
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload variable with a limit of 10 files
const upload = multer({
    storage: storage,
    limits: { files: 10 } // Enforce the 10-file limit on the server side
}).array('files'); // 'files' is the name attribute of your file input

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle custom order form submission
app.post('/submit-custom-order', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.send(`An error occurred: ${err.message}`);
        }

        // Files and form data are available here
        console.log('Form Body:', req.body); // Contains name, email, description
        console.log('Uploaded Files:', req.files); // An array of file info

        // Here, you would save the request details and file paths to your database
        
        res.send('<h1>Thank You!</h1><p>Your custom order request has been received. We will contact you shortly.</p>');
    });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
