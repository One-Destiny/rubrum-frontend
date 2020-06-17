import React, {Component} from "react";
import {Button, Card, Icon, Radio} from "antd";

class Size extends Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({size: e.target.value});
  };

  render() {
    const size = this.state.size;
    return (
      <Card className="gx-card" title="Size">
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br/><br/>
        <Button type="primary" size={size}>Primary</Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>Dashed</Button>
        <Button type="danger" size={size}>Danger</Button>
        <br/>
        <Button type="primary" shape="circle" icon="download" size={size}/>
        <Button type="primary" icon="download" size={size}>Download</Button>
        <br/>
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left"/>Backward
          </Button>
          <Button type="primary">
            Forward<Icon type="right"/>
          </Button>
        </Button.Group>
      </Card>
    );
  }
}


export default Size;
