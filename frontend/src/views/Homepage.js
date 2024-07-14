import React from 'react';

function Homepage() {
  const navbarStyl = {
    backgroundColor: '#BDCDEA',
    padding: '20px 0',
  };

  const jumbotronStyl = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  };

  const jumbotronContainerStyl = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const headingStyl = {
    fontSize: '50px',
    fontWeight: 'bold',
    color: '#333',
  };

  const buttonStyl = {
    backgroundColor: '#22489E',
    borderColor: '#2980b9',
    color: '#fff',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
  };

  const columnStyl = {
    marginBottom: '20px',
  };

  const footerStyl = {
    backgroundColor: 'white',
    padding: '20px 0',
    textAlign: 'center',
  };

  return (
    <div style={navbarStyl}>
      <main role="main" style={{ marginTop: 50 }}>
        {/* Main jumbotron for a primary marketing message or call to action */}
        <div style={jumbotronStyl}>
          <div style={jumbotronContainerStyl}>
            <h1 style={headingStyl}>Hello, world!</h1>
            <p>
              This is a template for a simple marketing or informational website.
              It includes a large callout called a jumbotron and three supporting
              pieces of content. Use it as a starting point to create something more
              unique.
            </p>
            <p>
              <a style={buttonStyl} href="#" role="button">
                Learn more »
              </a>
            </p>
          </div>
        </div>
        <div className="container">
          {/* Example row of columns */}
          <div className="row">
            <div className="col-md-4" style={columnStyl}>
              <h2 style={headingStyl}>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <p>
                <a style={buttonStyl} href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-md-4" style={columnStyl}>
              <h2 style={headingStyl}>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <p>
                <a style={buttonStyl} href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-md-4" style={columnStyl}>
              <h2 style={headingStyl}>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod semper.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p>
                <a style={buttonStyl} href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
          </div>
          <hr />
        </div>{" "}
        {/* /container */}
      </main>
      <footer className="container" style={footerStyl}>
        <p>© Company 2017-2018</p>
      </footer>
    </div>
  );
}

export default Homepage;
