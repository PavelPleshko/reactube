function handleErrors(response) {
    if (response.ok || response.statusCode == 200) {
         return response;
    }else{
         return response.json().then(err=>{
          throw new Error(     
            `Error ${err.status}: ${err.message}`
          )});
    }   
}

const getChannelsTopics = () => {
  return fetch('/api/channels/topic/all', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
  .then(handleErrors)
  .then(res=>res.json())
}

const getChannelMedia = (channelId) => {
  return fetch(`/api/channels/${channelId}/media`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
  .then(handleErrors)
  .then(res=>res.json())
}

const getChannelBySlug = (slug) => {
  return fetch(`/api/channels/${slug}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
  .then(handleErrors)
  .then(res=>res.json())
}

const getUserSubscriptions = () => {
  console.log('here')
  return fetch(`/api/channels/subscriptions`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      credentials:'include'
    })
  .then(handleErrors)
  .then(res=>res.json())
}

const createNewChannel = ({channelData,csrfToken}) => {
  return fetch('/api/channels/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'CSRF-Token': csrfToken
      },
      credentials:'include',
      body: JSON.stringify(channelData)
    })
  .then(handleErrors)
  .then(res=>res.json())
}

const updateChannel = ({channelPartial,channelId,csrfToken}) => {
  return fetch(`/api/channels/${channelId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'CSRF-Token': csrfToken
      },
      credentials:'include',
      body: channelPartial
    })
  .then(handleErrors)
  .then(res=>res.json())
}

const subscribeToChannel = ({channelId,csrfToken}) => {
  return fetch(`/api/channels/${channelId}/subscribe`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'CSRF-Token': csrfToken
      },
      credentials:'include'
    })
  .then(handleErrors)
  .then(res=>res.json())
}

const unsubscribeFromChannel = ({channelId,csrfToken}) => {
  return fetch(`/api/channels/${channelId}/unsubscribe`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'CSRF-Token': csrfToken
      },
      credentials:'include'
    })
  .then(handleErrors)
  .then(res=>res.json())
}





export {
	getChannelsTopics,
  getUserSubscriptions,
  getChannelBySlug,
  getChannelMedia,
  updateChannel,
  createNewChannel,
  subscribeToChannel,unsubscribeFromChannel
}