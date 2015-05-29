/**
 * @param {number} x
 * @param {number} y
 * @param {string} roomName
 * @constructor
 */
var RoomPosition = function (x, y, roomName) {};

RoomPosition.prototype = {
    /**
     * @type string
     */
    roomName: '',

    /**
     * @type number
     */
    x: 0,

    /**
     * @type number
     */
    y: 0,

    /**
     * @param {FIND_CREEPS|FIND_MY_CREEPS|FIND_HOSTILE_CREEPS|FIND_MY_SPAWNS|FIND_HOSTILE_SPAWNS|FIND_SOURCES|FIND_SOURCES_ACTIVE|FIND_DROPPED_ENERGY|FIND_STRUCTURES|FIND_MY_STRUCTURES|FIND_HOSTILE_STRUCTURES|FIND_FLAGS|FIND_CONSTRUCTION_SITES|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|FIND_EXIT} type
     * @param {object} opts
     * @return object
     */
    findClosest: function (type, opts) {},

    /**
     * @param {FIND_CREEPS|FIND_MY_CREEPS|FIND_HOSTILE_CREEPS|FIND_MY_SPAWNS|FIND_HOSTILE_SPAWNS|FIND_SOURCES|FIND_SOURCES_ACTIVE|FIND_DROPPED_ENERGY|FIND_STRUCTURES|FIND_MY_STRUCTURES|FIND_HOSTILE_STRUCTURES|FIND_FLAGS|FIND_CONSTRUCTION_SITES|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|FIND_EXIT} type
     * @param {number} range
     * @param {object} opts
     * @return Array
     */
    findInRange: function (type, range, opts) {},

    /**
     * @param {object|RoomPosition} target
     * @param {object} opts
     * @return Array
     */
    findPathTo: function (target, opts) {},

    /**
     * @param {object|RoomPosition} target
     * @return {TOP|TOP_RIGHT|RIGHT|BOTTOM_RIGHT|BOTTOM|BOTTOM_LEFT|LEFT|TOP_LEFT}
     */
    getDirectionTo: function (target) {},

    /**
     * @param {object|RoomPosition} target
     * @return number
     */
    getRangeTo: function (target) {},

    /**
     * @param {RoomPosition} toPos
     * @param {number} range
     * @return boolean
     */
    inRangeTo: function (toPos, range) {},

    /**
     * @param {object|RoomPosition} target
     * @return boolean
     */
    isEqualTo: function (target) {},

    /**
     * @param {object|RoomPosition} target
     * @return boolean
     */
    isNearTo: function (target) {}
};
