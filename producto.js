const express = require('express');
const router = express.Router();

/* Get producto */
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET PRODUCTO'
    });
});

/* Nuevo producto */
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'CREATE PRODUCTO'
    });
});


router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id ==='special'){
        res.status(200).json({
            message : 'Es el  special ID'
        });
    }else {
        res.status(200).json({
            message: 'tiene un ID'
        })
    }
})


router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message:' Producto UPDATE'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message:' Producto DELETE'
    });
});
module.exports = router ; 