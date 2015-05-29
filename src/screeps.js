/*
 *************************
 * Result Code Constants *
 *************************
 */
var
    OK = 0,
    ERR_NOT_OWNER = -1,
    ERR_NO_PATH = -2,
    ERR_NAME_EXISTS = -3,
    ERR_BUSY = -4,
    ERR_NOT_FOUND = -5,
    ERR_NOT_ENOUGH_ENERGY = -6,
    ERR_INVALID_TARGET = -7,
    ERR_FULL = -8,
    ERR_NOT_IN_RANGE = -9,
    ERR_INVALID_ARGS = -10,
    ERR_TIRED = -11,
    ERR_NO_BODYPART = -12,
    ERR_NOT_ENOUGH_EXTENSIONS = -13,
    ERR_RCL_NOT_ENOUGH = -14,
    ERR_GCL_NOT_ENOUGH = -15
;

/*
 ***********************
 * Room.find Constants *
 ***********************
 */
var
    FIND_EXIT_TOP = 1,
    FIND_EXIT_RIGHT = 3,
    FIND_EXIT_BOTTOM = 5,
    FIND_EXIT_LEFT = 7,
    FIND_EXIT = 10,
    FIND_CREEPS = 101,
    FIND_MY_CREEPS = 102,
    FIND_HOSTILE_CREEPS = 103,
    FIND_SOURCES_ACTIVE = 104,
    FIND_SOURCES = 105,
    FIND_DROPPED_ENERGY = 106,
    FIND_STRUCTURES = 107,
    FIND_MY_STRUCTURES = 108,
    FIND_HOSTILE_STRUCTURES = 109,
    FIND_FLAGS = 110,
    FIND_CONSTRUCTION_SITES = 111,
    FIND_MY_SPAWNS = 112,
    FIND_HOSTILE_SPAWNS = 113
;

/*
 ***********************
 * Direction Constants *
 ***********************
 */
var
    TOP = 1,
    TOP_RIGHT = 2,
    RIGHT = 3,
    BOTTOM_RIGHT = 4,
    BOTTOM = 5,
    BOTTOM_LEFT = 6,
    LEFT = 7,
    TOP_LEFT = 8
;

/*
 ***********************
 * Body Part Constants *
 ***********************
 */
var
    MOVE = 'move',
    WORK = 'work',
    CARRY = 'carry',
    ATTACK = 'attack',
    RANGED_ATTACK = 'ranged_attack',
    TOUGH = 'tough',
    HEAL = 'heal'
;

/*
 ****************************
 * Structure Type Constants *
 ****************************
 */
var
    STRUCTURE_EXTENSION = 'extension',
    STRUCTURE_RAMPART = 'rampart',
    STRUCTURE_ROAD = 'road',
    STRUCTURE_SPAWN = 'spawn',
    STRUCTURE_WALL = 'constructedWall',
    STRUCTURE_KEEPER_LAIR = 'keeperLair',
    STRUCTURE_PORTAL = 'portal',
    STRUCTURE_CONTROLLER = 'controller',
    STRUCTURE_LINK = 'link'
;

/*
 *******************
 * Color Constants *
 *******************
 */
var
    COLOR_RED = 'red',
    COLOR_PURPLE = 'purple',
    COLOR_BLUE = 'blue',
    COLOR_CYAN = 'cyan',
    COLOR_GREEN = 'green',
    COLOR_YELLOW = 'yellow',
    COLOR_ORANGE = 'orange',
    COLOR_BROWN = 'brown',
    COLOR_GREY = 'grey',
    COLOR_WHITE = 'white'
;

/*
 ***********************
 * Room Mode Constants *
 ***********************
 */
var
    MODE_SIMULATION = 'simulation',
    MODE_SURVIVAL = 'survival',
    MODE_ARENA = 'arena',
    MODE_WORLD = 'world'
;
