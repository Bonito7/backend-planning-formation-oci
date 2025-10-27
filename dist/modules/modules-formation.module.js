"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesFormationModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const modules_formation_controller_1 = require("./modules-formation.controller");
const modules_formation_service_1 = require("./modules-formation.service");
const module_formation_schema_1 = require("../common/schemas/module-formation.schema");
const formation_schema_1 = require("../common/schemas/formation.schema");
const formations_module_1 = require("../formations/formations.module");
let ModulesFormationModule = class ModulesFormationModule {
};
exports.ModulesFormationModule = ModulesFormationModule;
exports.ModulesFormationModule = ModulesFormationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: module_formation_schema_1.ModuleFormation.name, schema: module_formation_schema_1.ModuleFormationSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: formation_schema_1.Formation.name, schema: formation_schema_1.FormationSchema },
            ]),
            formations_module_1.FormationsModule,
        ],
        controllers: [modules_formation_controller_1.ModulesFormationController],
        providers: [modules_formation_service_1.ModulesFormationService],
        exports: [modules_formation_service_1.ModulesFormationService],
    })
], ModulesFormationModule);
//# sourceMappingURL=modules-formation.module.js.map