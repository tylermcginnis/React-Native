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
    - ((UPDATES FOR THIS STEP. CHECK FINAL SOLUTION))
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
    - Create LeaderboardContainer/Leaderboard.js both with Skeletons
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
    - ((((((THIS CODE HAS CHANGED. CHECK THE UPDATED VERSION))))))
    - Add leftButton to ReactModoroNavbar which uses React.cloneElement passing in style
    - Add rightButton which does the same as leftButton
    - Add a Gear right button to Home
        - Create an Icons folder
        - Create Gear.js
        - Import Gear into Home and add it as a rightButton. Show how it's showing but not aligned. Add styling
        - Click Gar. Show how it works. Talk about how now whenever we use ReactModoroNavbar we can easily add a left or right button.
14) Gear Route
    - Build out the skeleton for the Settings route so clicking on the gear does more than console.log (Also really show how routing works)
    - Settings.js file in components
    - SettingsContainer
    - Head to ReactModoroNavigator and render SettingsConatiner (before every else) to make sure it works.
    - Put SettingsContainer in else if (route.settings === true)
    - Head back to Home.js and change onPress of right buttn to props.onToSettings
    - Add handleToSettings in HomeContainer
    - Try to run this. Get 'Cannot read property defaultTransitionVelocity of undefined'. Click on 'Constructor' in error.
    - Show how error has to do with nextSceneConfig. Talk about sceneConfigs. Add default sceneconfig in ReactModoroNavigator
    - Doesn't feel like. Though that should be default, add in a check for settings then come up from bottom.
    - Show how to check for Platform changes. Add in Android default.
    - Add (default) Navbar to Settings. Run it. Notice there's no way to route back.
    - Build Close.js in Icons (THIS IS CANCEL IN THE CODE. CHANGE TO CLOSE!)
    - Add Close as leftButton in Settings.js
    - Now, notice how the popup is see through? Fix View on Settings.js to be white background.
15) Settings UI
    - npm installl --save react-native-slider
    - Add initialState to settingsContainer
    - Create handleTimeChange, handleRestChange, onRestComplete, onTimerComplete
    - Pass timerDuration, restDuration, onTimerChange, onRestChange, onRestComplete, and onTimerComplete down to Settings.
    - Build out UI for both sliders. (ADDED LATER. 1 Minutes shouldnt be a thing.)
    - Add Logout UI to Settings
    - Create handleLogout function in SettingsConatiner and pass it down. Just log logout for now.
16) Logout
    - Add logout to auth.js
    - Create handleUnauth in authentication.js
    - Create loggingOut and export the constant. Talk about how we want to clear the state on logout
    - import { LOGGING_OUT } from '~/redux/modules/authentication' in index.js
    - create appReducer and rootReducer
    - In createStore pass in rootReducer
    - update handleLogout in SettingsContainer to call authentication.handleUnauth
    - Logout. Profit.
17) Flash Notification
    - We need a way to give the user feedback for certain actions. One good way is with a Flash Notification.
    - Build out flashNotification redux module
    - Build the FlashNotification component
    - Add FlashNotification to root AppContainer and tie of flashNotification redux module to it.
    - To test it out add showFlashNotification to SettingsContainer and show it in handleTimerComplete
18) Save Settings (using Flash notification)
    - Need to persist settings to Firebase as well as locally with Redux
    - Talk about how were going to manage the main durations in Redux but have SettingsContainer have its own state to update the ondrag vals
    - Create settings.js. Move the initial state from SettingsContainer to settings.
    - Have state of SettingsContainer be vals from settings. Talk about usually an anti pattern but not in this case.
    - Create addSettingsRestDuration and addSettingsTimerDuration function in settings (constants and reducer too)
    - Import those into SettingsContainer and update Redux on one dragging. (Will move to thunks after this, comment out showFlashNotification for now)
    - Show it working by checking Redux Devtools. Local State + Redux working in harmony.
    - But now, we need to actually persist this info. Why not use some Thunks?
    - Create api/settings file and thenc reate setTimer and setRest
    - In settings.js create handleAndUpdateRest and handleAndUpdateTimer thunks
    - In SettingsContainer swap out updatesXs with handleAndUpdateXs
    - Show how firebase is being updated and Redux is being update as well.
    - BUT! Now we want to tie in the FlashNotification. Add .thens to handle functions. Dont forget to add catches as well
    - One last issue. If we reset our default redux state isnt whats in Firebase.
    - Our onAuthChange function is where our 'init' stuff is going.
    - Create fetchSettings in api/settings.js
    - Add fetchSettings to onAuthChange .then chain
    - Add another .then which just logs the settings to check it works. If everything is working, export addSettingsTimerDuration and addSettingsRestDuration. NOTE** ADDED Later. Move dispatch(isAuthed(uid)) to the END of the chain!!
    - Import them into authentication, then dispatch the updates.
    - Hit refresh, check redux dev tools for dispatches. Check settings view to make sure all is well.
    - Show off offline capabilites of Firebase. Turn off internet. Change settings. Turn on internet.
19) Timer State
    - We need to think of the best way to manage the timer state. First thought is in Redux and dispatch an action every second. Not every efficient.
    - What if we manage the timer state in local component state then just dispatch actions every minute?
    - Create a timer and rest property on state and set them both pretty low to be able to test switching from timer to rest.
    - Also create activeCountdown on state and set it to timer and create countdownRunning on the state and set it to false
    - Create handleToggleCountdown and pass it to Home.js
    - Pass in timer, rest, activeCountdown, and countdownRunning to Home (COUNTDOWN RUNNING ADDED LATER, BUT ADD HERE NOW)
    - Create very basic UI to be able to see the countdown running and also be able to start/stop the countdown.
    - You should be able to start the countdown, and when it hits 0, it switches from timer to rest or rest to timer and repeats.
    - Create a handleReset function and pass it down to Home.
    - Create a button for reset and check it works.
    - Create a skip rest function and pass it down.
    - Create a button to test skip rest is working.
    - Talk about the pros and cons of having all this state be in a component rather than in Redux and the final decision to do it.
20) Connect Home to Redux
    - Now we need to stop playing around with dummy data and use the real stuff.
    - Connect HomeContainer to the settings reducer to get the real time values.
    - Adjust all the dummy vals (10s) in HomeContainer.
    - In Home.js create a secondsToHMS function
    - Use it to format the times
    - Show how everything is working and the times are now formatted.
    - Go to settings and change the times. Notice how they didn't update in Home. Talk about how getInitialState (or state) isn't going to be called again, but componentWilLReceiveProps will be
    - add componentWilLReceiveProps to HomeContainer
21) Home UI
    - THIS STEP HAS ONE VERY SMALL CHANGE. IN SCORE.JS USE MARGIN: 10 INSTEAD OF PADDING: 10. PADDING IS BORK on ANDROID FOR SOME REASON
    - Make home look pretty. Change UI based on activeCountdown
    - Add dynamic background color and container style to Home.js
    - Create Score, Countdown, ProgressBar, TimerButtons, and SkipRest skeletons
    - Invoke all of those in Home and pass props to all of those, then add PropTypes (Progress bar requires getProgress in HomeContainer) (As you're adding propTypes use props in the skeleton without good ui)
    - Show how it's working
    - Style all Components (Besides Progress Bar)
    - When you style TimerButtons, do this,
        Make the UI render
            <View style={styles.container}>
              {props.countdownRunning === true
                ? <Pause onPress={props.onToggle} />
                : <Play onPress={props.onToggle} />}
              <Reset onPress={props.onReset}/>
            </View>
        then point out that all of them are essentially the same thing just with different icon types and callback functions
        Refactor to
            <View style={styles.container}>
              {props.countdownRunning === true
                ? <PressableIcon name='ios-pause-outline' onPress={props.onToggle} />
                : <PressableIcon name='ios-play-outline' onPress={props.onToggle} />}
              <PressableIcon name='ios-refresh-outline' onPress={props.onReset} />
            </View>
        and create the PressableIcon HOC
    - Click Play, notice slight lag. That's because countdownRunning is waiting until 1 second to switch. Change that in handleToggleCountdown
    - At this point the UI for home should be done BESIDES the ProgressBar. All functionality works (besides score, obvi)
22) Progress Bar
    - Build out the ProgressBar component. Talk about the goal is to make it composable.
23) Scores Module
    - In separate files model out the Firebase schema for scores and the reasoning for it (denormalized, duplicate data)
        - /scores is the minimum amount of information we need to render the Leaderboard view. Sure it's very similar to /users right now, but if our application starts adding features, odds are each user will start getting more properties put in their /user/uid endpoint.
    - In a separate file model out the Redux schema for scores (and now users) and the reasoning for it (normalized, don't duplicate data)
    - Create and finish the Users module.
    - Create Scores Module
        - Add initialState and talk about reasoning. leaderboardUids
        - Reasoning for scores.usersScores and scores.leaderboardUids, all users aren't on the leaderboard. What if the authed user isn't on the leaderboard? Without .leaderboardUids we would have to go through all the userseScores and sort them then slice them to get the leaderboard. Easier to just keep them separete.
        - Create fetchingScore() and fetchingScoreSuccess() action creators (with reducer and constant)
        - Create fetchAndHandleScore thunk
            - This will lead to creating fetchScore (which leads to scores.js in auth) and fetchUser (auth/users.js).
            - Finish up fetchAndHandleScore then in onAuthChange .then(() => dispatch(fetchAndHandleScore(uid))) BEFORE isAuthed
    - Load the app and make sure that FETCHING_SCORE_SUCCESS is called and the score is properly updated in Redux (will be 0)
    - In mapStateToProps of HomeContainer grab the users score and pass it down and replace the dummy date set in Home with the real score
    - (NEW NOT IN ORIGINAL COMMIT) Point out how we're duplicating the users data. If we do this we have to make sure we keep that data in sync. So when we call updateUser() onAuthChange, we also want to update (or add) that users info to scores. In auth.js, add ref.child(`scores/${user.uid}`).update(user) to updateUser() and return Promise.all
    - Head back to Scores module and create
        - updateLeaderboard, addScores, and addListener
        - Add constants and reducer for each of the three fns above
    - (UPDATED IN 24)Now create and finish fetchAndSetScoresListener (LEAVE OFF orderByValue() and limitToLast()) (SEE UPDATED VERSION WITH .filter at the end of leaderboardUIDS)
    - (UPDATED! use listenerSet NOT isFetching ALSO! need score in leaders array. See updated code for connect) Connect LeaderboardContainer and get listenerSet, leaders, and listenerSet from scores module.
    - Pass listenerSet and leaders to Leaderboard
    - onMount of LeaderboardContainer if listeners not set then fetchAndSetScoreListener
    - At this point nothing should have really happened since no scores. Go and add some scores (fake IDs and the real authedId and watch Redux)
    - Talk about how we don't want to show EVERYONE in the leaderboard, just top 15.
    - add orderByValue() and limitToLast(5) and see the result. Talk about how orderByValue() is for mixing with limittoLast but since objects don't have order so we still need to sort on the client.
    - Show how everything works.
24) Update Score as Timer Countsdown
    - Talk about how the point system will work
        +1 pt for every minute
        -5 pts on restart
        -5 pts for pausing
        +5 pts for finishing
    - Talk about how since we're listening to "Scores" we don't need to worry about updating the leaderboard in Redux, but we still need to worry about updating the local users score (since they may not be on the Leaderboard)
    - Create incrementScore and decrementScore inside of scores.js with constants and reducer.
    - Create incrementAndHandleScore. Talk about the tradeoff between passing in uid or getting it from getState. I chose getState because with our app the way it is, we'll never need to modify someone else's score, just the authed users. Other option would be connecting HomeContainer to authedId and passing the uid into incrementAndHandleScore
    - Have incrementAndHandleScore just dispatch(incrementScore(authedId, amount)) for now. Go and add it to HomeContainer where it should be (two places) and verify it's working by updating locally for now.
    - Do the same thing with decrementAndHandleScore (working locally only)
    - Now you should (locally only) lose 5 points for pausing and restarting. Gain 1 point for every minute. Gain 5 points for finishing. Verify this is working.
    - Talk about optimistic updates. We're updating locally assuming the firebase req will success. If it doesn't, readd back the time.
    - Create increaseScore and decreaseScore in api/scores.js and import those into modules/scores.js
    - Add increateScore to incrementAndHandleScore and add a .catch
    - Add decreaseScore to decrementAndHandleScore with a .catch as well
    - At this point the timer (and pause and refresh buttons) should be correctly updating the score. Leaderboard should be updating when score changes as well.
25) Leaderboard UI
    - Talk about lists in React Native using ListView. You could just map with a <ScrollView>, but ListView is more performant.
    - Create constructor in LeaderboardContainer and init dataSource
    - Create renderRow method which just renders rowData as Text (<Text>{JSON.stringify(rowData)}</Text>)
    - Pass renderRow and dataSource to Leaderboard and add those to propTypes of Leaderboard
    - Render ListView in Leaderboard.
    - Point out that becuase we don't set up the listener until we click on the Leaderboard tab, that data won't be immediately available.
    - Inside Leaderboard render ActivityIndicator with props.listenerSet. Remove this.props.dispatch(fetchAndSetScoreListener()) to see it working.
    - Now talk about how our Redux store is changing but our component doesn't know about that because when we created the List we didn't have the leaders. Add componentWilLReceiveProps.
    - At this point the activityindicator should show until the data is there which should puke objects to the view.
    - Create components/Leaderboard/Leader.js Skeleton
    - Import Leader into LeaderboardContainer and user that for RenderRow.
    - Pass in and add propTypes to Leader and show props to view
    - Style Leader.js
Fit In) Android Styling

X) Android
X) Notifications
X) App Store Prep
    - Splash Screen
    - Icons
    - Restrict Landscape
X) App Store
