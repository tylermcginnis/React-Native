Launch Screen
  http://stackoverflow.com/questions/34027270/ios-launch-screen-in-react-native
  1) http://ticons.fokkezb.nl/
      - Choose File
      - Upload Square Image with content in center
      - Keep defaults same
      - "Generate"
      - "Download"
  2) Change the folder in "assets/iphone" to be named LaunchImage.launchimage
      - Remove every image that's not one of these (2 potraits and 2 landscapes)
          Default@2x.png (640x960)
          Default-568h@2x.png (640x1136)
          Default-667h@2x.png (750x1334)
          Default-Portrait-736h@3x.png (1242x2208)
          Default-Landscape-736h@3x.png (2208x1242)
  3) Move new LaunchImage.launchimage folder into "Image.xcassets" folder in Xcode
  4) In Sublime under ios/ReactModoro/Images.xcassets/LaunchImage/launchimage create a Contents.json file and paste in this gist
      https://gist.github.com/tylermcginnis/4d06a9d1d60198fba9348051d79a0a05
  5) Click on "ReactModoro" in xcode and go to the "General" Tab
      Click on "Use Asset Catalog" then click "Migrate"
      Click on "Launch Images Source" then select LaunchImage
      Delete anything that's in "Launch Screen File" it should be blank.
      Delete LaunchScreen.xib file located in ReactModoro/ReactModoro (or somewhere close to there)
      Xcode -> Product -> Clean
      Simulator -> Reset Contents and Settings
      Restart npm run start
      Restart react-native run-ios
      See new Launch Screen

Lock Orientation to Portrait
  1) Open Xcode and go to "General" Tab
  2) Under Deployment Info -> Device Orientation unselect Landscape Left and Landscape Right
  3)  Xcode -> Product -> Clean
        Simulator -> Reset Contents and Settings
        Restart npm run start
        Restart react-native run-ios
  4) Verify only Portrait works.

App Icon iOS
  1) http://makeappicon.com/
  2) Download from Email
  3) in Xcode/ReactModoro/ReactModoro/Image.xcassets delete AppIcon then drap the AppIcon/ios folder from the recently downloaded folder into Image.xcassets
  4) Clean
  5) Reset Contents and Settings
  6) Restart npm and react-native run-ios
  7) Simulator -> Hardware -> Home to see icon

Anroid Icon
  Assuming you still have the Downloaded folder from the iOS app icon step above,
  1) Open up android/app/src/main/res
  2) DONT drag and drop the whole android folder in there, instead,
      repalce each image one by one with the appropriate image for that folder from the downloaded folder.
  3) Close the simulator. Restart npm. Re-run react-native run-ios
  4) Hit the middle button then go to the app icons and see it.