import { HttpException as Exception } from '@nestjs/common';
import { ValidationError } from 'class-validator';

// capitalize first letter of the string
const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const reduceErrors = (errors: ValidationError[]): Object => {
  return errors?.reduce((obj, item) => {
    if (item.children?.length > 0) {
      obj[item.property] = reduceErrors(item.children);
    } else {
      obj[item.property] = capitalizeFirstLetter(
        Array.isArray(Object.values(item.constraints))
          ? Object.values(item.constraints)[0]
          : Object.values(item.constraints).toString(),
      );
    }
    return obj;
  }, {});
};

export { reduceErrors as reduceErrors };

export class BaseException extends Exception {
  constructor(
    private readonly errors: ValidationError[],
    message: string = 'Validation failed',
    statusCode: number = 400,
  ) {
    const errorsMessages = reduceErrors(errors);
    const responseDto: any = {
      statusCode,
      timestamp: new Date().toISOString(),
      message: message,
      errors: errorsMessages,
      data: {},
    };
    super(responseDto, statusCode);
  }
}
