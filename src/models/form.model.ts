import mongoose, { Schema, Types, Document } from "mongoose";
import FormResponse from "./form-response.model";
import FormContent from "./form-content.model";

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

formSchema.post<IForm>("findOneAndDelete", async function (doc: IForm) {
  console.log("cascade deletion starting...");
  console.log(this._id);
  console.log(this.name);
  console.log(doc);

  try {
    if (doc) {
      const formResponses = await FormResponse.deleteMany({
        __formId: doc._id,
      });
      const formContents = await FormContent.deleteMany({ __formId: doc._id });
      console.log(formResponses);
      console.log(formContents);
    }
  } catch (error) {
    console.log(error);
  }
});

const Form = mongoose.model<IForm>("Form", formSchema);

export default Form;
