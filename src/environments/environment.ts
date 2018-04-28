// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
  	 apiKey: "AIzaSyDR954N_mZOMphHP1BYjctYaagXpqGsR8E",
    authDomain: "agilehome-fe94b.firebaseapp.com",
    databaseURL: "https://agilehome-fe94b.firebaseio.com",
    projectId: "agilehome-fe94b",
    storageBucket: "agilehome-fe94b.appspot.com",
    messagingSenderId: "1038987055884"
  }
};
