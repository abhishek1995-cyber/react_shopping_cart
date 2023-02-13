export function selectOrder(data){
   return {
      type : 'SELECTED',
      payload: data
   }
  }

  export function close(data){
    return {
       type : 'CLOSE',
       payload: data
    }
   }
   export function open(data){
    return {
       type : 'OPEN',
       payload: data
    }
   }