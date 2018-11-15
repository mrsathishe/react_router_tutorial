class Profile extends React.Component {
    state = {
      user: null
    }
    componentDidMount () {
      const { handle } = this.props.match.params
  
      fetch(`https://api.twitter.com/user/${handle}`)
        .then((user) => {
          this.setState(() => ({ user }))
        })
    }
    render() {
      //...
    }
  }

  //link
  //send values to the state in the link
  <Link to={{
    pathname: '/tylermcginnis',
    state: {
      fromNotifications: true
    }
  }}>Tyler McGinnis</Link>

  //component
  //get the values from the link by its location props
  class Profile extends React.Component {
    state = {
      user: null
    }
    componentDidMount () {
      const { handle } = this.props.match.params
      const { fromNotifications } = this.props.location.state
  
      fetch(`https://api.twitter.com/user/${handle}`)
        .then((user) => {
          this.setState(() => ({ user }))
        })
    }
    render() {
      //...
    }
  }