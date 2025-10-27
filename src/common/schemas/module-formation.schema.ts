import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema()
class FichierSchema extends Document {
  @Prop({ required: true })
  nom: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  taille: number;
}

@Schema()
export class ModuleFormation extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "Formation",
    required: true,
  })
  formationId: string;

  @Prop({ required: true })
  titre: string;

  @Prop({ type: Object, required: true })
  horaire: {
    debut: string;
    fin: string;
  };

  @Prop({ required: true })
  date: Date;

  @Prop({ type: Object, required: true })
  formateur: {
    nom: string;
    contact: string;
  };

  @Prop({ enum: ["presentiel", "en_ligne"], required: true })
  type: string;

  @Prop({ required: true })
  lieu: string;

  @Prop({ type: [FichierSchema], default: [] })
  fichiers: FichierSchema[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ModuleFormationSchema =
  SchemaFactory.createForClass(ModuleFormation);
