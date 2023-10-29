class AppointmentFactory {

    Build(simpleAppointment) {

        var day = simpleAppointment.date.getDate() + 1;
        var month = simpleAppointment.date.getMonth();
        var year = simpleAppointment.date.getFullYear();
        var hour = Number.parseInt(simpleAppointment.time.split(":")[0]);
        var minutes = Number.parseInt(simpleAppointment.time.split(":")[1]);

        var startDate = new Date(year, month, day, hour, minutes, 0, 0);
        startDate.setHours(startDate.getHours() - 3); // Regra para ajustar o horário setado pelo construtor Date() acima, tirado ele do padrão UTC.

        var appo = {
            id: simpleAppointment._id,
            tile: simpleAppointment.name + " - " + simpleAppointment.description,
            start: startDate,
            end: startDate
        }

        return appo;
    }
}


module.exports = new AppointmentFactory();