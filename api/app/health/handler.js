function handler() {
    var liveness = function(req, res) {
        if (global.RESTART) {
            console.log('Sending 500 for restart.');
            res.sendStatus(500);
        } else {
            console.log('Sending 200 for liveness.')
            res.sendStatus(200);
            return;
        }
    };
    
    var readiness = function(req, res) {
        if (global.DOWN) {
            console.log('Sending 500 for readiness.')
            res.sendStatus(500);
            return;
        }
        else {
            console.log('Sending 200 for readiness.');
            res.sendStatus(200);
            return;
        }
    };

    return {
        liveness: liveness,
        readiness: readiness
    };
}

module.exports = handler();