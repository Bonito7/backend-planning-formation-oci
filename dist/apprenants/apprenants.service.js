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
exports.ApprenantsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ApprenantsService = class ApprenantsService {
    constructor(formationModel, moduleModel) {
        this.formationModel = formationModel;
        this.moduleModel = moduleModel;
    }
    async getFormationsDisponibles() {
        const aujourdhui = new Date();
        return this.formationModel
            .find({ "periode.fin": { $gte: aujourdhui } })
            .sort({ createdAt: -1 })
            .exec();
    }
    async getPlanningParDate(date) {
        const dateRecherche = new Date(date);
        const modules = await this.moduleModel
            .find({ date: dateRecherche })
            .populate("formationId")
            .exec();
        return modules;
    }
    async getModulesDuJour() {
        const aujourdhui = new Date();
        aujourdhui.setHours(0, 0, 0, 0);
        const demain = new Date(aujourdhui);
        demain.setDate(demain.getDate() + 1);
        return this.moduleModel
            .find({
            date: {
                $gte: aujourdhui,
                $lt: demain,
            },
        })
            .populate("formationId")
            .exec();
    }
};
exports.ApprenantsService = ApprenantsService;
exports.ApprenantsService = ApprenantsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Formation")),
    __param(1, (0, mongoose_1.InjectModel)("ModuleFormation")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ApprenantsService);
//# sourceMappingURL=apprenants.service.js.map