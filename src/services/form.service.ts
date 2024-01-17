import Form from "../models/form.model";

export const getForms = async (userId: string) => {
  try {
    return await Form.find({ _userId: userId }).sort({ createdAt: -1 });
  } catch (error) {
    throw error;
  }
};

export const getForm = async (formId: string, userId: string) => {
  try {
    return await Form.findOne({ _id: formId, _userId: userId });
  } catch (error) {
    throw error;
  }
};

export const createForm = async (form: any) => {
  try {
    return await Form.create(form);
  } catch (error) {
    throw error;
  }
};

export const patchForm = async (
  id: string,
  formPatch: { [key: string]: any }
) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(
      id,
      { $set: formPatch },
      { new: true }
    );
    return updatedForm;
  } catch (error) {
    throw error;
  }
};

export const deleteForm = async (id: string) => {
  try {
    return await Form.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
