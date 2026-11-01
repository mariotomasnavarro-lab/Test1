# iOS native project

Capacitor iOS platform files are intentionally generated on macOS by `npm run ios:setup` (or the GitHub Actions workflow). This avoids shipping a hand-written, incomplete Xcode project. The setup command runs `npx cap add ios` once and `npx cap sync ios` on subsequent builds. Generated `ios/App/App.xcodeproj` is the project to open in Xcode.
