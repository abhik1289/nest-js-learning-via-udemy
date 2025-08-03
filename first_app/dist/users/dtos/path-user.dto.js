"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
class PathUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.PathUserDto = PathUserDto;
//# sourceMappingURL=path-user.dto.js.map