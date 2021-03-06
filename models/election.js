const mongoose = require('mongoose');

const electionSchema = new mongoose.Schema({
    hasBegun: {type: Boolean, default: false},
    hasEnded: {type: Boolean, default: false},
    results: {
        type: Object, 
        default : {
            President: null,
            VicePresident: null,
            Secretary: null,
            Auditor: null,
            Treasurer: null,
            PIO: null,
            PO: null,
            G9Chairman: null,
            G10Chairman: null
        }
    },
});

const Election = mongoose.model('Election', electionSchema);

module.exports = Election;