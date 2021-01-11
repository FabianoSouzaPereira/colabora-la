const INITIAL_STATE = {
  homedata: [
    {
      homemsg: 'HOME_MESSAGE',
    },
  ],
};

export default function homereducer(
  state = INITIAL_STATE,
  action: { type: string; homedata: any }
) {
  console.log(action);

  if (action.type === 'HOMEACTION') {
    return {
      ...state,
      homedata: action.homedata,
    };
  }
  return state;
}
