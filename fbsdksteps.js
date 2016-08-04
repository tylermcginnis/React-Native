1) npm install --save react-native-fbsdk
2) react-native link
3) Create New iOS App (https://developers.facebook.com/apps)
4) Download the SDK and put in ~/Documents/FacebookSDK
5) Add the Facebook SDK to your Xcode Project (Follow next screen.)
    - Open up .xcodeproject
    - Create 'Frameworks' group
    - Drag  FBSDKCoreKit.Framework, FBSDKLoginKit.Framework, FBSDKShareKit.Framework from ~/Documents/FacebookSDK to Frameworks folder
6) Add ~/Documents/FacebookSDK to the projects "Framework Search Paths" in "Build Settings"
7) Open up ios/ProjectName/Info.plist
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
8) Get Bunde Identifier from Xcode/General and add it to FB
9) Add this below that first block in AppDelegate.m

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
ANDROID ADDITIONS
1) Inside of MainApplication.java in app/src/main/java/com/<project name>/
Import these
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

2) Add this to top of class
  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

3) Add this to class
@Override
public void onCreate() {
  super.onCreate();
  FacebookSdk.sdkInitialize(getApplicationContext());
}

4) Add this, new FBSDKPackage(mCallbackManager) to Arrays.<ReactPackage>asList()

5) In MainActivity.java in app/src/main/java/com/<project name>/
    import android.content.Intent;
    and add this to class
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }

6) Getting started guide for FBSDK (https://developers.facebook.com/docs/android/getting-started/)
    Open your strings.xml file. Example path: /app/src/main/res/values/strings.xml.
    Add a new string with the name facebook_app_id and value as your Facebook App ID
      <string name="facebook_app_id">YOUR_APP_ID</string>
    In AndroidManifest.xml
    Add a meta-data element to the application element (Right before close of </application>):
      <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
    Add this right above <meta ^
      <activity android:name="com.facebook.FacebookActivity"
        android:configChanges=
               "keyboard|keyboardHidden|screenLayout|screenSize|orientation"
        android:theme="@android:style/Theme.Translucent.NoTitleBar"
        android:label="@string/app_name" />




