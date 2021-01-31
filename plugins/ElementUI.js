import Vue from 'vue';
import { Button, Card, Message} from 'element-ui';
Vue.component(Button.name, Button); // This will register Button component globally
Vue.component(Card.name, Card); // This will register Card component globally
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;
