import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Formation extends Document {
  @Prop({ required: true })
  nom: string;

  @Prop({ required: true })
  vague: string;

  @Prop({ default: '#3B82F6' }) // Couleur par défaut
  couleur: string;

  @Prop({ type: Object })
  periode: {
    debut: Date;
    fin: Date;
  };

  @Prop({ type: Object })
  lieu: {
    nom: string;
    lienMaps: string;
  };

  @Prop({ type: Object })
  periodeTutorat: {
    debut: Date;
    fin: Date;
  };

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const FormationSchema = SchemaFactory.createForClass(Formation);