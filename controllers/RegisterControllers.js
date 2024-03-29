const Register = require("./../models/registro");

const insert = (req, res)=>{
    const student = new Register(req.body);
    student.save((error, document)=>{
        if (error)
            return res.status(500).json({
            msg: "hubo un error"
        });
        return res.status(201).json({
            msg:"creado",
            register:document
        })
    });
}
const getRegister = (req, ser)=>{
    Register.find({}, (error,documents)=>{
        if (error)
            return res.status(500).json({
            msg: "hubo un error"
        });
        return res.status(200).json({
            msg: "ok",
            registers: documents
        });
    });
};

const getOneRegister = (req, res)=>{
Register.findById(req.params.id,(error,documents)=>{
    if (error)
        return res.status(500).json({
        msg: "hubo un error"
    });
    return res.status(200).json({
        msg: "ok",
        registers: documents
    });
});
};

module.exports = {
    getRegister,
    getOneRegister,
    insert
}