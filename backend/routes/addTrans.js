const router = require('express').Router();
let Transport = require('../models/TransportModel');

router.route('/').get((req, res) => {
    Transport.find()
        .then(users =>res.json(users))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req, res) => {
    const busno = req.body.busno;
    const busregd = req.body.busregd;
    const source = req.body.source;
    const dest = req.body.dest;
    const sourceTime = req.body.sourceTime;
    const destTime = req.body.destTime;
    const price = req.body.price;
    const transportType = req.body.transportType;
    const stopsOne = req.body.stopsOne;
    const stopsTwo = req.body.stopsTwo;
    const stopsThree = req.body.stopsThree;
    const stopsFour = req.body.stopsFour;
    const stopsFive = req.body.stopsFive;
    

    const newTrans = new Transport({
        busno,
        busregd,
        source,
        dest,
        sourceTime,
        destTime,
        price,
        transportType,
        stopsOne,
        stopsTwo,
        stopsThree,
        stopsFour,
        stopsFive
    });

    newTrans.save()
        .then(() => res.json('Transport Added'))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req, res)=>{
    Transport.findById(req.params.id)
        .then(tran =>res.json(tran))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/:id').delete((req, res)=>{
    Transport.findByIdAndDelete(req.params.id)
        .then(() =>res.json('Transport Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => {
    Transport.findById(req.params.id)
        .then(tran => {
            tran.busno=req.body.busno;
            tran.busregd=req.body.busregd;
            tran.source = req.body.source;
            tran.dest = req.body.dest;
            tran.sourceTime = req.body.sourceTime;  
            tran.destTime = req.body.destTime;
            tran.price = req.body.price;
            tran.transportType = req.body.transportType;
            tran.stopsOne = req.body.stopsOne;
            tran.stopsTwo = req.body.stopsTwo;
            tran.stopsThree = req.body.stopsThree;
            tran.stopsFour = req.body.stopsFour;
            tran.stopsFive = req.body.stopsFive;


            tran.save()    
                .then(()=>res.json('Transport Detials Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;