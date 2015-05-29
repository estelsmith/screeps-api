var ConstructionSite = function () {};

ConstructionSite.prototype = {
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
    owner: null,

    /**
     * @type RoomPosition
     */
    pos: null,

    /**
     * @type number
     */
    progress: 0,

    /**
     * @type number
     */
    progressTotal: 0,

    /**
     * @type Room
     */
    room: null,

    /**
     * @type {STRUCTURE_EXTENSION|STRUCTURE_RAMPART|STRUCTURE_ROAD|STRUCTURE_SPAWN|STRUCTURE_WALL|STRUCTURE_LINK}
     */
    structureType: null,

    /**
     * @return {OK|ERR_NOT_OWNER}
     */
    remove: function () {}
};
