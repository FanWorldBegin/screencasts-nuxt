
import {Message} from 'element-ui';

// Message.success({
//   message: '恭喜你，这是一条成功消息',
//   type: 'success'
// });


export default function ({ $axios, redirect }, inject) {

  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })
  inject('api', api)
  api.onRequest(config => {
    console.log('Making request to ' + config.url);
    if(process.client) {
      Message.success({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
