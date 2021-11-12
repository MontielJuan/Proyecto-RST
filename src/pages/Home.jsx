import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
        <div className="home">
        <section>
          <div>
            <section className="container text-center py-5">
              <div >
                <h1 className="display-4">Welcome</h1>
              </div>
              <div className="mt-4 ">
                <Link className="btn btn-primary px-5 mr-3" to = "/login">Login to your Account</Link>
              </div>
            </section>
          </div>
        </section>
    </div>
    )
  }
}