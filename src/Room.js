var Room = function () {};

Room.prototype = {
    /**
     * @type Structure
     */
    controller: null,

    /**
     * @type object
     */
    memory: {},

    /**
     * @type {MODE_SIMULATION|MODE_SURVIVAL|MODE_WORLD|MODE_ARENA}
     */
    mode: null,

    /**
     * @type string
     */
    name: '',

    /**
     * @type object
     */
    survivalInfo: null,

    /**
     * @param {object|RoomPosition} pos
     * @param {STRUCTURE_EXTENSION|STRUCTURE_RAMPART|STRUCTURE_ROAD|STRUCTURE_SPAWN|STRUCTURE_WALL} structureType
     * @return {OK|ERR_INVALID_TARGET|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createConstructionSite: function (pos, structureType) {},

    /**
     * @param {object|RoomPosition} pos
     * @param {string} name
     * @param {COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN} color
     */
    createFlag: function (pos, name, color) {},

    /**
     * @param {FIND_CREEPS|FIND_MY_CREEPS|FIND_HOSTILE_CREEPS|FIND_MY_SPAWNS|FIND_HOSTILE_SPAWNS|FIND_SOURCES|FIND_SOURCES_ACTIVE|FIND_DROPPED_ENERGY|FIND_STRUCTURES|FIND_MY_STRUCTURES|FIND_HOSTILE_STRUCTURES|FIND_FLAGS|FIND_CONSTRUCTION_SITES|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|FIND_EXIT} type
     * @param {object} opts
     * @return Array
     */
    find: function (type, opts) {},

    /**
     * @param {string|Room} room
     * @return {FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|ERR_NO_PATH|ERR_INVALID_ARGS}
     */
    findExitTo: function (room) {},

    /**
     * @param {RoomPosition} fromPos
     * @param {RoomPosition} toPos
     * @param {object} opts
     * @return Array
     */
    findPath: function (fromPos, toPos, opts) {},

    /**
     * @param {number} x
     * @param {number} y
     * @return RoomPosition
     */
    getPositionAt: function (x, y) {},

    /**
     * @param {object|RoomPosition} target
     * @return Array
     */
    lookAt: function (target) {},

    /**
     * @param {number} top
     * @param {number} left
     * @param {number} bottom
     * @param {number} right
     * @return Array
     */
    lookAtArea: function (top, left, bottom, right) {},

    /**
     * @param {string} type
     * @param {object|RoomPosition} target
     * @return object
     */
    lookForAt: function (type, target) {},

    /**
     * @param {string} type
     * @param {number} top
     * @param {number} left
     * @param {number} bottom
     * @param {number} right
     * @return Array
     */
    lookForAtArea: function (type, top, left, bottom, right) {},

    /**
     * @param {string} description
     */
    makeSnapshot: function (description) {}
};
