Made with https://codewithmosh.com/

Animations: https://lottiefiles.com/

# web

expo-secure-store is not available for web yet. We use this for persisting auth between app restarts

# distribution

app icon should be png and 1024 x 1024 - no round corners and should follow guidelines:

Apple Icon Design Guideline:

https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/

Android Icon Design Guideline:

https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive

change in app.json

### Assets

Only include vital assets in the assets folder as those will be bundles with the app.

Compress all images in assets folder with sharp-cli:

- sudo npm install -g -unsafe-perm sharp-cli
- npx expo-optimize

### Publishing for testing

expo publish --release-channel staging (we use the the last argument in config/settings)

### Building and publishing prod

app.json -> version vs expo.{platform}.package/buildNumber: version is what users see

#### iOS

- Add bundle identifier to app.json -> expo.ios.bundleIdentifier -> "com.domain.appName" // Has to be unique in the app store and can not change in the future
- Add build number to app.json -> expo.ios.buildNumber -> "1.0.0" // Has to be increased for each build, if not app store will return an error
- expo build:ios -> archive -> apple id login -> Certificate (let expo handle this) -> notification key (let expo handle this) -> Provisioning profile (let expo handle this) -> Build in progress (monitor on expo.io, cancel in terminal will do nothing).
- Download build.ipa from expo.io (Large file, will not be so large, but around 50MB, expo is working on this ...)
- Go to appstoreconnect.apple.com -> my apps -> create new app -> select platform / name / language / bundleId (expo has created one in the dropdown) -> SKU (com.domain.appName) -> user access (full access) -> Create
- Install "Transporter" from Mac App Store -> Log in with apple ID -> Drag and drop bundle.ipa file to "Transporter" window -> Deliver
- Go back to appstoreconnect.apple.com -> Click on app -> Activity -> Processing takes around 30-40 min (if stuck, re-deliver with transporter)
- Go to "TestFlight" tab on same website -> if "Missing Compliance" -> click "Provide ...." (NO custom encryption)
- Invite external testers or other developers (They have to download testflight from app store)
- When we want to publish to app store -> Click "App Store" tab on same website -> Click "Prepare for submission" -> Add screenshots and div meta data -> Submit for review (Takes 1-2 days)
- Every time we release we have to increase the build number, create a build with expo and upload the build with transporter

#### Android

- Add to app.json -> expo.android.package -> "com.domain.appName"
- Add to app.json -> expo.android.versionCode -> 1
- expo build:android -> app-bundle -> KeyStore (let expo handle this) -> build queued in expo.io (cancel in terminal does nothing)
- Dowbnload build.apk (Big file, expo-team is working on this)
- expo fetch:android:keystore -> path (keep safe, you need it to update app in Play Store)
- ... rest here: https://docs.expo.io/distribution/uploading-apps/
