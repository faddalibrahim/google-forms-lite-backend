import mongoose, { Schema, Types, Document } from "mongoose";

interface IForm extends Document {
  _userId: { type: typeof Types.ObjectId; required: boolean };
  name: string;
  isPublished: boolean;
  isLocked: boolean;
  createdAt: Date;
}

const formSchema = new Schema<IForm>({
  _userId: { type: Types.ObjectId, required: true },
  name: { type: String, default: "Untitled Form" },
  isPublished: { type: Boolean, default: false },
  isLocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Form = mongoose.model<IForm>("Form", formSchema);

export default Form;
