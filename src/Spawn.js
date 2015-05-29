var Spawn = function () {};

Spawn.prototype = {
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
     * @type object
     */
    memory: {},

    /**
     * @type boolean
     */
    my: false,

    /**
     * @type string
     */
    name: '',

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
     * @type STRUCTURE_SPAWN
     */
    structureType: STRUCTURE_SPAWN,

    /**
     * @type object|null
     */
    spawning: null,

    /**
     * @param {Array<WORK|MOVE|CARRY|ATTACK|RANGED_ATTACK|HEAL|TOUGH>} body
     * @param {string} name
     * @return {OK|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS}
     */
    canCreateCreep: function (body, name) {},

    /**
     * @param {Array<WORK|MOVE|CARRY|ATTACK|RANGED_ATTACK|HEAL|TOUGH>} body
     * @param {string} name
     * @param {object} memory
     * @return {string|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS}
     */
    createCreep: function (body, name, memory) {},

    /**
     * @param {Creep} target
     * @param {number} amount
     * @return {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function (target, amount) {}
};
