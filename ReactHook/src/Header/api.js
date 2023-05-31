export const getUser = () => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'xuan truong dev',
          age: 26,
          address: 'ba vi'
        },
        status: 200
      })
    }, 1500);
  })
}
