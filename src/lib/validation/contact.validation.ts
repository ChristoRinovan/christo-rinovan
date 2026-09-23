/*
 * Validation functions for the contact form.
 * Kept here so ContactSection stays focused on layout and submission.
 */

export function validateName(value: string): string | null {
  if (value.trim().length < 2) {
    return "Please enter at least 2 characters.";
  }
  return null;
}

export function validateEmail(value: string): string | null {
  const emailPattern = /^\S+@\S+\.\S+$/;
  if (!emailPattern.test(value)) {
    return "Please enter a valid email address.";
  }
  return null;
}

export function validateMessage(value: string): string | null {
  if (value.trim().length < 20) {
    return "Tell me a little more — at least 20 characters.";
  }
  return null;
}
