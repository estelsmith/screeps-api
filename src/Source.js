var Source = function () {};

Source.prototype = {
    /**
     * @type number
     */
    energy: 0,

    /**
     * @type number
     */
    energyCapacity: 0,

    /**
     * @type string
     */
    id: '',

    /**
     * @type RoomPosition
     */
    pos: null,

    /**
     * @type Room
     */
    room: null,

    /**
     * @type number
     */
    ticksToRegeneration: 0
};
