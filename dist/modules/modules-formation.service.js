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
exports.ModulesFormationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ModulesFormationService = class ModulesFormationService {
    constructor(moduleModel, formationModel) {
        this.moduleModel = moduleModel;
        this.formationModel = formationModel;
    }
    async create(createModuleDto) {
        const module = new this.moduleModel({
            ...createModuleDto,
            createdAt: new Date(),
        });
        return module.save();
    }
    async findAll() {
        return this.moduleModel
            .find()
            .populate("formationId")
            .sort({ date: 1, "horaire.debut": 1 })
            .exec();
    }
    async findOne(id) {
        const module = await this.moduleModel
            .findById(id)
            .populate("formationId")
            .exec();
        if (!module) {
            throw new common_1.NotFoundException("Module non trouvé");
        }
        return module;
    }
    async findByFormationId(formationId) {
        return this.moduleModel
            .find({ formationId })
            .populate("formationId")
            .sort({ date: 1, "horaire.debut": 1 })
            .exec();
    }
    async update(id, updateModuleDto) {
        const module = await this.moduleModel
            .findByIdAndUpdate(id, updateModuleDto, { new: true })
            .populate("formationId")
            .exec();
        if (!module) {
            throw new common_1.NotFoundException("Module non trouvé");
        }
        return module;
    }
    async remove(id) {
        const module = await this.moduleModel.findByIdAndDelete(id).exec();
        if (!module) {
            throw new common_1.NotFoundException("Module non trouvé");
        }
        return module;
    }
    async getModulesByDateRange(startDate, endDate) {
        return this.moduleModel
            .find({
            date: {
                $gte: startDate,
                $lte: endDate,
            },
        })
            .populate("formationId")
            .exec();
    }
};
exports.ModulesFormationService = ModulesFormationService;
exports.ModulesFormationService = ModulesFormationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("ModuleFormation")),
    __param(1, (0, mongoose_1.InjectModel)("Formation")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ModulesFormationService);
//# sourceMappingURL=modules-formation.service.js.map