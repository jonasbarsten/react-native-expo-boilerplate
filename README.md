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
