"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FichiersController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const fichiers_service_1 = require("./fichiers.service");
const multer_config_1 = require("../common/config/multer.config");
let FichiersController = class FichiersController {
    constructor(fichiersService) {
        this.fichiersService = fichiersService;
    }
    async uploadFichiers(files, moduleId) {
        return this.fichiersService.uploadFichiers(files, moduleId);
    }
};
exports.FichiersController = FichiersController;
__decorate([
    (0, common_1.Post)("upload/:moduleId"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("files", 10, multer_config_1.multerConfig)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)("moduleId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], FichiersController.prototype, "uploadFichiers", null);
exports.FichiersController = FichiersController = __decorate([
    (0, common_1.Controller)("fichiers"),
    __metadata("design:paramtypes", [fichiers_service_1.FichiersService])
], FichiersController);
//# sourceMappingURL=fichiers.controller.js.map