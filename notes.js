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
5) Routing
    - Build out containers/App/AppContainer.js
    - Make app/index.js a SFC which renders <AppContainer />
    - Make SplashContainer/Splash
    - Make sure SplashContainer/Splash work by rendering SplashContainer in AppContainer
    - Create ReactModoroNavigator w/ renderScene and configureScene
    - In AppContainer render ReactModoroNavigator instead of SplashContainer
