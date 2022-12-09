import { defineNuxtPlugin } from "#app";
import { Amplify, Storage, Auth } from "aws-amplify";
import awsExports from "../src/aws-exports";

export default defineNuxtPlugin((nuxtApp) => {
  Amplify.configure(awsExports);
  Storage.configure(awsExports);
  Auth.configure(awsExports);

  return {
    provide: {
      $amplify: Amplify,
      $storage: Storage,
      $auth: Auth,
    },
  };
});
