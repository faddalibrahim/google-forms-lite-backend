/**
 * Returns an array of missing fields from the provided data object.
 *
 * @param data - The data object to check for missing fields.
 * @param expectedFields - An array of expected field names.
 * @returns An array of missing fields.
 *
 * !NOTE: This function assumes that all values in the data object are strings.
 * !NOTE: And hence may not work for nested objects and booleans
 */
export const getMissingFields = (
  data: { [key: string]: unknown },
  expectedFields: string[]
) => {
  // Filter the expected fields for those that are not present in the data object or have falsy values.
  return expectedFields.filter((field) => !(field in data) || !data[field]);
};

export const emailInvalid = (email: string) => {
  const regex = new RegExp(`^[^\s@]+@[^\s@]+\.[^\s@]+$`);
  return !regex.test(email);
};

export const passwordInvalid = (password: string, minLength: number) => {
  const regex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{${minLength},}$`
  );
  return !regex.test(password);
};

export const passwordsDontMatch = (
  password: string,
  repeatPassword: string
) => {
  return password !== repeatPassword;
};

export const parseMongooseValidationErrors = (error: any) => {
  if (error.code === 11000) {
    // Extract the key 'username' from keyPattern and store it as a string variable
    const errorKey = Object.keys(error.keyPattern)[0];
    return {
      [errorKey]: `${errorKey} already exists`,
    };
  }

  let allErrors = Object.entries(error?.errors ?? {}).map(
    ([error, value]: any) => ({
      [error]: value?.message,
    })
  );

  return allErrors;
};
