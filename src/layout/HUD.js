import React, { Component } from 'react';

class HUD extends Component {
  constructor(props) {
    super(props);

    this.state = {display: props.children[0].props.label};
  }

  onClick = (display) => {
    this.setState({display});
  }

  render() {
    const {
      props: {children},
      state: {display},
      onClick,
    } = this;
    const menuItems = children.map(({props: {display}}) => display);
    const styles = {
      root: {
        display: 'flex',
        alignItems: 'stretch',
        height: '100%'
      },
      menu: {
        width: '10%',
        backgroundColor: 'blue'
      },
      screen: {
        width: '90%',
        backgroundColor: 'red'
      },
      ul: {
        listStyleType: 'none',
      },
    };

    return (
      <div style={styles.root}>
        <div style={styles.menu}>
          <ul style={styles.ul}>
            {menuItems.map((item) => (
              <li key={item} onClick={() => onClick(item)}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={styles.screen}>
          {children.map((child) => child.props.display === display ? child : undefined)}
        </div>
      </div>
    );
  }
}

export default HUD;
