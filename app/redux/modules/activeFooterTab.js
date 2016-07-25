const SET_FOOTER_TAB = 'SET_FOOTER_TAB'

export function setFooterTab (tab) {
  return {
    type: SET_FOOTER_TAB,
    tab,
  }
}

const initialState = 'home'

export default function activeFooterTab (state = initialState, action) {
  switch (action.type) {
    case SET_FOOTER_TAB :
      return action.tab
    default :
      return state
  }
}
