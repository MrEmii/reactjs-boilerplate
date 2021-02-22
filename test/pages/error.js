import React from 'react'
import Link from '../../src/router/link'

const AppError = () => <div>
  <h2>Sorry, but the page does not exist.</h2>
  <Link to="/"> {"<"} Back to home</Link>
</div>

export default AppError;