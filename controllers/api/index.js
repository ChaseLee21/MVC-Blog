const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ message: 'Connected!' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;