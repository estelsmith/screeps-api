var Creep = function () {};

Creep.prototype = {
    /**
     * @type Array<MOVE|WORK|CARRY|ATTACK|RANGED_ATTACK|HEAL|TOUGH>
     */
    body: null,

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
    fatigue: 0,

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
     * @type boolean
     */
    spawning: false,

    /**
     * @type number
     */
    ticksToLive: 0,

    /**
     * @param {Creep|Spawn|Structure} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    attack: function (target) {},

    /**
     * @param {ConstructionSite} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART|ERR_RCL_NOT_ENOUGH}
     */
    build: function (target) {},

    /**
     * @param {string} methodName
     * @return {OK|ERR_NOT_FOUND}
     */
    cancelOrder: function (methodName) {},

    /**
     * @param {Structure} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_GCL_NOT_ENOUGH}
     */
    claimController: function (target) {},

    /**
     * @param {number} amount
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY}
     */
    dropEnergy: function (amount) {},

    /**
     * @param {MOVE|WORK|CARRY|ATTACK|RANGED_ATTACK|HEAL|TOUGH} type
     * @return number
     */
    getActiveBodyParts: function (type) {},

    /**
     * @param {Source} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    harvest: function (target) {},

    /**
     * @param {Creep} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    heal: function (target) {},

    /**
     * @param {TOP|TOP_RIGHT|RIGHT|BOTTOM_RIGHT|BOTTOM|BOTTOM_LEFT|LEFT|TOP_LEFT} direction
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART}
     */
    move: function (direction) {},

    /**
     * @param {object} target
     * @param {object} options
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART|ERR_INVALID_TARGET|ERR_NO_PATH}
     */
    moveTo: function (target, options) {},

    /**
     * @param {boolean} enabled
     * @return {OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function (enabled) {},

    /**
     * @param {Energy} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    pickup: function (target) {},

    /**
     * @param {Creep|Spawn|Structure} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    rangedAttack: function (target) {},

    /**
     * @param {Creep} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    rangedHeal: function (target) {},

    /**
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NO_BODYPART}
     */
    rangedMassAttack: function () {},

    /**
     * @param {Spawn|Structure} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    repair: function (target) {},

    /**
     * @param {string} message
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    say: function (message) {},

    /**
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    suicide: function () {},

    /**
     * @param {Creep|Spawn|Structure} target
     * @param {number} amount
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transferEnergy: function (target, amount) {},

    /**
     * @param {Structure} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    unclaimController: function (target) {},

    /**
     * @param {Structure} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    upgradeController: function (target) {}
};
