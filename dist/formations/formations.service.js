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
exports.FormationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FormationsService = class FormationsService {
    constructor(formationModel) {
        this.formationModel = formationModel;
    }
    async create(createFormationDto) {
        const formation = new this.formationModel({
            ...createFormationDto,
            couleur: createFormationDto.couleur || this.generateRandomColor(),
            createdAt: new Date(),
        });
        return formation.save();
    }
    async findAll() {
        return this.formationModel.find().sort({ createdAt: -1 }).exec();
    }
    async findOne(id) {
        return this.formationModel.findById(id).exec();
    }
    async update(id, updateFormationDto) {
        return this.formationModel
            .findByIdAndUpdate(id, updateFormationDto, { new: true })
            .exec();
    }
    async remove(id) {
        return this.formationModel.findByIdAndDelete(id).exec();
    }
    generateRandomColor() {
        const colors = [
            "#FF6B6B",
            "#4ECDC4",
            "#45B7D1",
            "#96CEB4",
            "#FFEAA7",
            "#DDA0DD",
            "#98D8C8",
            "#F7DC6F",
            "#BB8FCE",
            "#85C1E9",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
};
exports.FormationsService = FormationsService;
exports.FormationsService = FormationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Formation")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FormationsService);
//# sourceMappingURL=formations.service.js.map