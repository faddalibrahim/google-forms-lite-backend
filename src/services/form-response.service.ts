import FormResponse from "../models/form-response.model";

export const createFormResponse = async (formResponse: any) => {
  try {
    return await FormResponse.create(formResponse);
  } catch (error) {
    throw error;
  }
};

export const getFormResponses = async (formId: string) => {
  try {
    return await FormResponse.find({ __formId: formId });
  } catch (error) {
    throw error;
  }
};

export const getFormResponse = async (formId: string) => {
  try {
    return await FormResponse.findOne({ __formId: formId });
  } catch (error) {
    throw error;
  }
};
