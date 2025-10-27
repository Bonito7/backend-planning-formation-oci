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
exports.ModulesFormationController = void 0;
const common_1 = require("@nestjs/common");
const modules_formation_service_1 = require("./modules-formation.service");
let ModulesFormationController = class ModulesFormationController {
    constructor(modulesService) {
        this.modulesService = modulesService;
    }
    async create(createModuleDto) {
        return this.modulesService.create(createModuleDto);
    }
    async findAll() {
        return this.modulesService.findAll();
    }
    async findByFormation(formationId) {
        return this.modulesService.findByFormationId(formationId);
    }
    async findOne(id) {
        return this.modulesService.findOne(id);
    }
    async update(id, updateModuleDto) {
        return this.modulesService.update(id, updateModuleDto);
    }
    async remove(id) {
        return this.modulesService.remove(id);
    }
};
exports.ModulesFormationController = ModulesFormationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModulesFormationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModulesFormationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("formation/:formationId"),
    __param(0, (0, common_1.Param)("formationId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulesFormationController.prototype, "findByFormation", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulesFormationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ModulesFormationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulesFormationController.prototype, "remove", null);
exports.ModulesFormationController = ModulesFormationController = __decorate([
    (0, common_1.Controller)("modules"),
    __metadata("design:paramtypes", [modules_formation_service_1.ModulesFormationService])
], ModulesFormationController);
//# sourceMappingURL=modules-formation.controller.js.map