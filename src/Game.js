var Game = function () {};

Game.prototype = {
    /**
     * @type number
     */
    cpuLimit: 0,

    /**
     * @type Creep[]
     */
    creeps: [],

    /**
     * @type Flag[]
     */
    flags: [],

    /**
     * @type Map
     */
    map: null,

    /**
     * @type Room[]
     */
    rooms: [],

    /**
     * @type Spawn[]
     */
    spawns: [],

    /**
     * @type Structure[]
     */
    structures: [],

    /**
     * @type number
     */
    time: 0,

    /**
     * @param {string} id
     * @return object|null
     */
    getObjectById: function (id) {},

    /**
     * @return number
     */
    getUsedCpu: function () {},

    /**
     * @param {string} message
     * @param {number} groupInterval
     */
    notify: function (message, groupInterval) {}
};
