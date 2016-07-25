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
