const appointment = require("../models/Appointment");
const mongoose = require("mongoose");

const Appo = mongoose.model("Appointment", appointment);

class AppointmentService {
    async Create(name, email, description, cpf, date, time){
        var newAppo = new Appo({
            name: name,
            email: email,   
            description: description,
            cpf: cpf,
            date: date,
            time: time,
            finished: false
        });

        try {
            await newAppo.save();
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

module.exports = new AppointmentService();
