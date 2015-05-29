var Structure = function () {};

Structure.prototype = {
    /**
     * @type number
     */
    hits: 0,

    /**
     * @type number
     */
    hitsMax: 0,

    /**
     * @type string
     */
    id: '',

    /**
     * @type boolean
     */
    my: false,

    /**
     * @type object
     */
    owner: {},

    /**
     * @type RoomPosition
     */
    pos: null,

    /**
     * @type Room
     */
    room: null,

    /**
     * @type {STRUCTURE_EXTENSION|STRUCTURE_RAMPART|STRUCTURE_ROAD|STRUCTURE_WALL|STRUCTURE_KEEPER_LAIR|STRUCTURE_PORTAL|STRUCTURE_CONTROLLER|STRUCTURE_LINK}
     */
    structureType: null,

    /**
     * @type number
     */
    energy: 0,

    /**
     * @type number
     */
    energyCapacity: 0,

    /**
     * @type number
     */
    cooldown: 0,

    /**
     * @type number
     */
    ticksToSpawn: 0,

    /**
     * @type number
     */
    level: 0,

    /**
     * @type number
     */
    progress: 0,

    /**
     * @type number
     */
    progressTotal: 0,

    /**
     * @type number
     */
    ticksToLive: 0,

    /**
     * @param {Creep|Structure} target
     * @param {number} amount
     * @return {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED}
     */
    transferEnergy: function (target, amount) {}
};
