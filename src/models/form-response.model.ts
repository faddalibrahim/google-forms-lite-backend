import mongoose, { Schema, Types, Document } from "mongoose";

interface IFormResponse extends Document {
  _formId: { type: typeof Types.ObjectId; required: boolean };
  sections: ISection[];
}

interface ISection {
  id: string;
  questions: IQuestion[];
}

interface IQuestion {
  id: string;
  question: string;
  type: string; // radio, checkbox, text, textarea, date etc
  options?: IOption[]; // only for radio and checkbox
}

interface IOption {
  id: string;
  option: string;
}

const formResponseSchema = new Schema<IFormResponse>({
  _formId: { type: Types.ObjectId, required: true },
  sections: { type: Schema.Types.Mixed, required: true },
});

const FormResponse = mongoose.model<IFormResponse>(
  "FormResponse",
  formResponseSchema
);

export default FormResponse;
