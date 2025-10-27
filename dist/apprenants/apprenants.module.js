"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprenantsModule = void 0;
const common_1 = require("@nestjs/common");
const apprenants_controller_1 = require("./apprenants.controller");
const apprenants_service_1 = require("./apprenants.service");
const mongoose_1 = require("@nestjs/mongoose");
const formation_schema_1 = require("../common/schemas/formation.schema");
const module_formation_schema_1 = require("../common/schemas/module-formation.schema");
let ApprenantsModule = class ApprenantsModule {
};
exports.ApprenantsModule = ApprenantsModule;
exports.ApprenantsModule = ApprenantsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: formation_schema_1.Formation.name, schema: formation_schema_1.FormationSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: module_formation_schema_1.ModuleFormation.name, schema: module_formation_schema_1.ModuleFormationSchema },
            ]),
        ],
        controllers: [apprenants_controller_1.ApprenantsController],
        providers: [apprenants_service_1.ApprenantsService],
    })
], ApprenantsModule);
//# sourceMappingURL=apprenants.module.js.map