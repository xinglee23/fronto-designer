// import all used components in whole projects

import {
  Avatar,
  Button,
  Spin,
  Modal,
  Drawer,
  Card,
  Tag,
  Layout,
  Tabs,
  Menu,
  Row,
  Col,
  Form,
  Dropdown,
  Input,
  InputNumber,
  Slider,
  Radio,
  Select,
} from 'ant-design-vue';

import {App} from 'vue';
const components = [
  Avatar,
  Button,
  Spin,
  Modal,
  Drawer,
  Card,
  Card.Meta,
  Tag,
  Layout,
  Layout.Header,
  Layout.Footer,
  Layout.Sider,
  Layout.Content,
  Tabs,
  Tabs.TabPane,
  Menu,
  Menu.Item,
  Row,
  Col,
  Form,
  Form.Item,
  Dropdown,
  Dropdown.Button,
  Input,
  InputNumber,
  Input.TextArea,
  Slider,
  Radio.Group,
  Radio.Button,
  Select,
  Select.Option,
];
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export default {
  install,
};
