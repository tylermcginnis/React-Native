0) Intro to Course
1) Technology Overview
2) Hello World
    - Install watchmen
    - npm install -g react-native-cli
    - react-native init ReactModoro
    - Show project and skeleton file
3) Custom Babel Stuff
    - install babel-preset-react-native-stage-0 & babel-root-import
    - Set up custom .babelrc file
    - create /app folder
    - Create index.js in app folder and move index.ios.js file to it
    - registerComponent from index.ios.js file
4) Facebook SDK
    - Follow Steps in fbsdksteps.js file
    - Show LoginButton on app/index.js file
5) Routing (https://github.com/ReactjsProgram/React-Native/commit/166a9c13542829fe365305364ea4ff1f094ab3d8)
    - Build out containers/App/AppContainer.js
    - Make app/index.js a SFC which renders <AppContainer />
    - Make SplashContainer/Splash
    - Make sure SplashContainer/Splash work by rendering SplashContainer in AppContainer
    - Create ReactModoroNavigator w/ renderScene and configureScene
    - In AppContainer render ReactModoroNavigator instead of SplashContainer
6) PreSplash
    - Create PreSplash Component (Skeleton)
    - Render PreSplash or Navigator depending on props.isAuthenticating (which will be undefined)
    - Add defaultProps of isAuthenticating to show change in component
    - Build out UI for PreSplash
      - Center image first (SFC first)
      - Add animations (Switch to Class)
7) Splash UI
    - Remove isAuthenticating defaultProps from AppContainer
    - Build out UI for Splash.js
    - SplashContainer Changes
8) Add Redux
    - npm install --save redux react-redux redux-thunk
    - Create authentication module (talk about Ducks pattern)
    - Create index.js in /redux
    - Add Redux & friends to /app/index.js
    - Connect AppContainer and get isAuthenticating
    - Change initialState of authentication.isAuthenticating and see how the view changes
9) FooterTabs
    - Talk about how TabBarIOS works
    - We need a way to cache what current tab were on.
    - Create footerTabs redux module
    - Create FooterTabsContainer
    - Create HomeContainer/Home.js both with Skeletons
    - Create LeaderboardConatiner/Leaderboard.js both with Skeletons
    - Create FooterTabs
        - npm install --save react-native-vector-icons
        - react-native link
        - Restart npm run start and re-run react-native run-ios
        - The rest
    - In ReactModoroNavigator render FooterTabsContainer instead of SplashContainer
    - Toggle between tabs. Walk through whole flow again.
10) Remote Redux DevTools
    - npm install --save-dev remote-redux-devtools
    - Add devTools() to app/index.js
    - If dont have, download redux-devtools-extension https://github.com/zalmoxisus/redux-devtools-extension
    - Show how Remote Redux Devtools works (CMD + CTRL + Up)
11) Autentication
    - Add this.props.isAuthed === false to ReactModoroNavigator for SplashContainer (Reason this works is we know if the Navigator renders then isAuthenticating is already false)
    - Add propTypes for ^
    - Add isAuthed to AppContainer and pass it to ReactModoroNavigator
    - Change isAuthenticating in initialState from true to false. Should render Splash. Change it back to true.
    - Now we're at the point where we need to check if we're authed onMount of AppContainer, and switch our state appropriately.
    - npm install --save firebase
    - Create /constants/config.js file and import firebase
    - firebase.google.com and create a new project
    - "Auth" in sidebar -> "Sign In Method" -> Facebook. Copy over App ID and App Secret.
    - Copy OAuth URL and head over to Facebook Developers Console.
    - "Add Product" -> "Facebook Login" -> Paste in OAuth URL.
    - "App Review" -> Make ReactModoro public? -> Yes or else auth won't work.
    - Back in Firebase console get the Config object. ("Add Firebase to your Website")
    - Back in constants.js initialize Firebase and export ref, firebaesAuth, and facebookProvider
    - Create /api/auth.js and create getAccessToken, authWithToken. DONT CREATE UPDATEUSER EVEN THOUGH ITS IN SOLUTION.
    - In redux/modules/authentication create authenticating function (with constant and reducer)
    - Create notAuthed function with constant and reducer (This has more code in it than in the solution. Also isAuthed: false & authedId: '')
    - Create isAuthed function with constants and reducer
    - Create handleAuthWithFirebase. (Talk about how LoginButton abstracts the Facebook auth stuff for us. So once we're authed with Facebook we need to tell Firebase about it)
    - Add this.props.dispatch(handleAuthWithFirebase()) in handleLoginFinished in SplashContainer. Don't forget to connect SplashContainer. This is the way of "telling Firebase about it"
    - Talk about Firebase auth needs to listen for changes. Little weird but what we're given. The function its going to call when it hears a change is...
    - Create onAuthChange skeleton right now (if user null, else)
    - Now tie onAuthChange to the firebase listener by adding firebaseAuth.onAuthStateChange in AppConatiner
    - At this point walk throught the flow. LoginButton (Facebook auth) -> handleLoginFinished -> handleAuthWithFirebase -> authWithToken->  onAuthChange
    - Fill out onAuthChange
    - At this point show the Redux flow in ReduxDevTools. App loads, default state is correct with authentication.isAuthenticating to true, NOT_AUTHED happens and then authentication.isAuthenticating goes to false.
    - Authenticate. Should be redireced to Home. Hit refresh, should get ShakeyLogo -> Home. Nice.
12) Save User
    - Explain how firebase auths for you but doesnt save the user for you. So whenever we auth we want to save that user.
    - Create updateUser in auth.js
    - import updateUser into authentication
    - Call updateUser in onAuthChange then dispatch isAuthed. (Show this working by having firebase console open)
13) Navbar
    - Create a ReactModoroNavbar folder and file
    - npm install --save react-native-navbar
    - Talk about Higher Order Components. We will wrap react-native-navbar to make it more consumable for our needs
    - Just have ReactModoroNavbar render a tabbar with a title and show it working on Home.js (first with just title={{title: 'Hello!'}}) then add in tintColor, then add in title through props
    - Now add Navbar to Leaderboard tab.
    - Now talk about how we want a more dynamic Navbar with forward and back buttons.
    - Add leftButton to ReactModoroNavbar which uses React.cloneElement passing in style
    - Add rightButton which does the same as leftButton
    - Add a Gear right button to Home
        - Create an Icons folder
        - Create Gear.js
        - Import Gear into Home and add it as a rightButton. Show how it's showing but not aligned. Add styling
        - Click Gar. Show how it works. Talk about how now whenever we use ReactModoroNavbar we can easily add a left or right button.
