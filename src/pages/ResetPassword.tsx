import { resetPassword } from "aws-amplify/auth";

const output = await resetPassword({
  username: "hello@mycompany.com",
});

const { nextStep } = output;
switch (nextStep.resetPasswordStep) {
  case "CONFIRM_RESET_PASSWORD_WITH_CODE": {
    const codeDeliveryDetails = nextStep.codeDeliveryDetails;
    console.log(
      `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
    );
    // Collect the confirmation code from the user and pass to confirmResetPassword.
    break;
  }
  case "DONE":
    console.log("Successfully reset password.");
    break;
}
