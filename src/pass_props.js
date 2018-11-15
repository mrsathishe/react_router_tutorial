//old method - it will also works
<Route
  path='/dashboard'
  component={() => <Dashboard isAuthed={true} />}
/>

//use this correct method
<Route
  path='/dashboard'
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/>