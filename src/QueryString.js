import queryString from 'query-string'


componentDidMount() {
  const values = queryString.parse(this.props.location.search)
  console.log(values.filter) // "top"
  console.log(values.origin) // "im"
}