
```bash
npm install
npm run dev
# or
yarn
yarn dev

# to run Firebase locally for testing:
npm run serve

# to deploy it to the cloud with Firebase:
npm run deploy
```


## Good to know

- [`firebase.json`](firebase.json:#L7) outlines the catchall rewrite rule for our Cloud Function.
- The empty `public/.gitignore` file is to ensure `public/` dir exists as it is required for Firebase Hosting. It is [configured](firebase.json:#L4) (by [default](https://firebase.google.com/docs/hosting/full-config#ignore)) that dotfiles (`public/.*`) are ignored from bein publicly served.
- The Cloud Function is named `nextjsFunc` (changeable in [firebaseFunctions.js](firebaseFunctions.js#L16) and [firebase.json](firebase.json#L8)).
- `public/*` files are statically served through [Firebase hosting](https://firebase.google.com/docs/hosting/full-config#public), not through [NextJs server](https://nextjs.org/docs/basic-features/static-file-serving).
- Specifying [`"engines": {"node": "10"}`](package.json#L5-L7) in `package.json` is required and the [latest supported](https://firebase.google.com/docs/functions/manage-functions#set_nodejs_version) by firebase functions.

#### Customization

Next App is in `src/` directory.

The crucial files for the setup:

- `.firebaserc`
- `firebase.json`
- `firebaseFunctions.js`
- `src/next.config.js`
- In `package.json`: `firebase-*` packages and `engines` field

## Caveat

Because firebase functions require `"engines": {"node": "10"}` (or 8) to be specified (in `package.json`), if you are using `yarn` (instead of `npm`), you will need to add flag [`--ignore-engines`](https://classic.yarnpkg.com/en/docs/cli/install/#toc-yarn-install-ignore-engines).

## References

- [geovanisouza92/serverless-firebase](https://github.com/geovanisouza92/serverless-firebase) repo
- [jthegedus/firebase-functions-next-example](https://github.com/jthegedus/firebase-functions-next-example) repo
- [this medium article](https://medium.com/@jthegedus/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2)
- [Crash Course: Node.js apps on Firebase Hosting](https://youtu.be/LOeioOKUKI8)
- [Official documentation](https://firebase.google.com/docs/cli).
