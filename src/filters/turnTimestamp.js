export default function (time) {
  // 因為一般 timestamp 取得的是秒數，但要帶入的是毫秒，所以要乘 1000
  const date = new Date(time * 1000);
  return date.toLocaleDateString();
}