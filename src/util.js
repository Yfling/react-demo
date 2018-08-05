// 功能类函数
//
// export function getRedirectPath(type, avatar) {
//   // 根据用户信息 返回跳转信息
//   // user.type/boss/genius
//   // user,avatar bossinfo/geniusinfo
//
//   // 源码直接判断type==='boss'， 但是貌似行不通
//   let url = (type.type === 'boss') ? '/boss': '/genius'
//   if (!avatar) {
//     url += 'info'
//   }
//   return url
// }
export function getRedirectPath(data) {
  // 根据用户信息 返回跳转信息
  // user.type/boss/genius
  // user,avatar bossinfo/geniusinfo

  // 源码直接判断type==='boss'， 但是貌似行不通
  let url = (data.type === 'boss') ? '/boss': '/genius'
  if (!data.avatar) {
    url += 'info'
  }
  return url
}
