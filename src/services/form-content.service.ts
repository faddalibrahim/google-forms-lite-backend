import FormContent from "../models/form-content.model";

export const getFormContent = async (formId: string) => {
  try {
    return await FormContent.findOne({ __formId: formId });
  } catch (error) {
    throw error;
  }
};

export const updateFormContent = async (formId: string, formContent: any) => {
  try {
    return await FormContent.findOneAndUpdate(
      { __formId: formId },
      { $set: formContent },
      { new: true }
    );
  } catch (error) {
    throw error;
  }
};

// create formContent
export const createFormContent = async (formContent: any) => {
  try {
    return await FormContent.create(formContent);
  } catch (error) {
    throw error;
  }
};
