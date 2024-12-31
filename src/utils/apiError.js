export class ApiError extends Error {
  constructor(errors, status) {
    super();
    this.status = status;
    this.errors = errors;
  }
}
