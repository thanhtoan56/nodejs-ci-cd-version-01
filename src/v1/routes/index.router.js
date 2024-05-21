const express = require('express');
const router = express.Router();

router.get('/api/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/checklist', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata: [
            {
                name: "Toan",
                age: 28
            },
            {
                name: "My",
                age: 29
            },
        ]
    })
})

module.exports = router;