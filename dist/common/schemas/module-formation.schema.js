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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleFormationSchema = exports.ModuleFormation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FichierSchema = class FichierSchema extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FichierSchema.prototype, "nom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FichierSchema.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], FichierSchema.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], FichierSchema.prototype, "taille", void 0);
FichierSchema = __decorate([
    (0, mongoose_1.Schema)()
], FichierSchema);
let ModuleFormation = class ModuleFormation extends mongoose_2.Document {
};
exports.ModuleFormation = ModuleFormation;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "Formation",
        required: true,
    }),
    __metadata("design:type", String)
], ModuleFormation.prototype, "formationId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ModuleFormation.prototype, "titre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, required: true }),
    __metadata("design:type", Object)
], ModuleFormation.prototype, "horaire", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], ModuleFormation.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, required: true }),
    __metadata("design:type", Object)
], ModuleFormation.prototype, "formateur", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ["presentiel", "en_ligne"], required: true }),
    __metadata("design:type", String)
], ModuleFormation.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ModuleFormation.prototype, "lieu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [FichierSchema], default: [] }),
    __metadata("design:type", Array)
], ModuleFormation.prototype, "fichiers", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], ModuleFormation.prototype, "createdAt", void 0);
exports.ModuleFormation = ModuleFormation = __decorate([
    (0, mongoose_1.Schema)()
], ModuleFormation);
exports.ModuleFormationSchema = mongoose_1.SchemaFactory.createForClass(ModuleFormation);
//# sourceMappingURL=module-formation.schema.js.map