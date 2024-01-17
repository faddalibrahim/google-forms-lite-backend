import Form from "../models/form.model";

export const getForms = async () => {
  try {
    const forms = await Form.find();
    return forms;
  } catch (error) {
    throw error;
  }
};

export const getFormById = async (id: string) => {
  try {
    const form = await Form.findById(id);
    return form;
  } catch (error) {
    throw error;
  }
};

export const createForm = async (form: any) => {
  try {
    const newForm = new Form(form);
    await newForm.save();
    return newForm;
  } catch (error) {
    throw error;
  }
};

export const patchForm = async (id: string, patch: { [key: string]: any }) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(
      id,
      { $set: patch },
      { new: true }
    );
    return updatedForm;
  } catch (error) {
    throw error;
  }
};

export const deleteForm = async (id: string) => {
  try {
    const deletedForm = await Form.findByIdAndDelete(id);
    return deletedForm;
  } catch (error) {
    throw error;
  }
};
