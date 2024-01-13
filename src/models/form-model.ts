import mongoose, { Schema, Types, Document } from "mongoose";
const { ObjectId } = Types;

interface IForm extends Document {
  _userId: { type: typeof ObjectId; required: boolean };
  isPublished: boolean;
  isLocked: boolean;
  createdAt: Date;
}

const formSchema = new Schema<IForm>({
  _userId: { type: ObjectId, required: true },
  isPublished: { type: Boolean, default: false },
  isLocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// const Form = model<IForm>("Form", formSchema);

// interface IPage {
//   id: string;
//   title: string;
//   subtitle: string;
//   questions: IQuestion[];
// }

// interface IQuestion {
//   id: string;
//   question: string;
//   type: string; // radio, checbox, text, textarea, date etc
//   required: boolean;
//   options?: IOption[]; // only for radio and checkbox
// }

// interface IOption {
//   id: string;
//   option: string;
// }

const Form = mongoose.model<IForm>("Form", formSchema);

export default Form;
