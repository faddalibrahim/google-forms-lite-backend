import mongoose, { Schema, Types, Document } from "mongoose";

interface IFormContent extends Document {
  __formId: { type: typeof Types.ObjectId; required: boolean };
  title: string;
  description: string;
  sections: ISection[];
}

interface ISection {
  id: string;
  title: string;
  subtitle: string;
  questions: IQuestion[];
}

interface IQuestion {
  id: string;
  question: string;
  type: string; // radio, checkbox, text, textarea, date etc
  required: boolean;
  options?: IOption[]; // only for radio and checkbox
}

interface IOption {
  id: string;
  option: string;
}

const formContentSchema = new Schema<IFormContent>({
  __formId: { type: Types.ObjectId, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  sections: { type: Schema.Types.Mixed, required: true },
});

const FormContent = mongoose.model<IFormContent>(
  "FormContent",
  formContentSchema
);

export default FormContent;
