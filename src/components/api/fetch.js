
import axios from 'axios';

export const fetchFootballAPI = async (apilink, logData = '') => {
  try {
    const res1 = await axios.get(apilink)
    const res2 = await res1.data
    if (logData !== '' && logData !== 'logresult') console.log(logData)
    if (logData === 'logresult') await console.log(res2)
    return res2
  } catch (err) {
    console.error(err)
  }
}
