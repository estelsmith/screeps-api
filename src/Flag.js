var Flag = function () {};

Flag.prototype = {
    /**
     * @type string
     */
    id: '',

    /**
     * @type {COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN}
     */
    color: null,

    /**
     * @type string
     */
    name: '',

    /**
     * @type RoomPosition
     */
    pos: null,

    /**
     * @type Room
     */
    room: null,

    /**
     * @type string
     */
    roomName: '',

    /**
     * @return {OK}
     */
    remove: function () {}
};
