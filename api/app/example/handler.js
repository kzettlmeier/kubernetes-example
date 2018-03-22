function handler() {
    function test(req, res) {
        console.log('Sending text for test on container with unique id of ' + global.UNIQUE + '.');
        res.send('This is a test endpoint on container with unique id of ' + global.UNIQUE + '.');
    }

    function bringdown(req, res) {
        console.log('reverting global.DOWN to ' + global.DOWN);
        global.DOWN = !global.DOWN;
        res.sendStatus(200);
    }

    function restart(req, res) {
        console.log('forcing restart from kubernetes.');
        global.RESTART = true;
        res.sendStatus(200);
    }

    return {
        test: test,
        bringdown: bringdown,
        restart: restart
    };
}

module.exports = handler();