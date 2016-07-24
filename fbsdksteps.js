1) npm install --save react-native-fbsdk
2) react-native link
3) Create New iOS App (https://developers.facebook.com/apps)
4) Download the DSK and put in ~/Documents/FacebookSDK
5) Add the Facebook SDK to your Xcode Project (Follow next screen.)
    - Open up .xcodeproject
    - Create 'Frameworks' group
    - Drag  FBSDKCoreKit.Framework, FBSDKLoginKit.Framework, FBSDKShareKit.Framework from ~/Documents/FacebookSDK to Frameworks folder
6) Add ~/Documents/FacebookSDK to the projects "Framework Search Paths" in "Build Settings"
6) Open up ios/ProjectName/Info.plist
    - Add this
      <key>CFBundleURLTypes</key>
      <array>
        <dict>
        <key>CFBundleURLSchemes</key>
        <array>
          <string>fb1573889739583887</string>
        </array>
        </dict>
      </array>
      <key>FacebookAppID</key>
      <string>1573889739583887</string>
      <key>FacebookDisplayName</key>
      <string>ReactModoro</string>
    - Then add this
      <key>LSApplicationQueriesSchemes</key>
      <array>
        <string>fbapi</string>
        <string>fb-messenger-api</string>
        <string>fbauth2</string>
        <string>fbshareextension</string>
      </array>
7) Get Bunde Identifier from Xcode/General and add it to FB
8) Add this below that first block in AppDelegate.m

- (void)applicationDidBecomeActive:(UIApplication *)application {
  [FBSDKAppEvents activateApp];
}

- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
  return [[FBSDKApplicationDelegate sharedInstance] application:application
                                                         openURL:url
                                               sourceApplication:sourceApplication
                                                      annotation:annotation];
}

